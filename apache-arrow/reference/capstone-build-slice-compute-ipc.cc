// Apache Arrow capstone: build → slice → compute → IPC, with no framework
// between you and the buffers. Each section is annotated with the lesson that
// taught it. Build against libarrow (CMake snippet in the lesson).
//
//   mkdir build && cd build && cmake .. && make && ./capstone out.arrow

#include <arrow/api.h>
#include <arrow/compute/api.h>
#include <arrow/io/api.h>
#include <arrow/ipc/api.h>
#include <iostream>

using arrow::Status;

Status Run(const std::string& path) {
  // ── Lesson 8: builders are mutable scratch over the exact layouts ──────────
  arrow::MemoryPool* pool = arrow::default_memory_pool();
  std::cout << "pool before: " << pool->bytes_allocated() << " bytes\n";

  arrow::Int64Builder n_bld(pool);
  arrow::StringBuilder s_bld(pool);
  const char* rows[] = {"al", "paris", nullptr, "hi"};   // slot 2 is null
  for (int64_t v = 10, i = 0; i < 4; v += 10, ++i) {
    if (rows[i]) {                                        // Lesson 1: Append
      ARROW_RETURN_NOT_OK(n_bld.Append(v));               //   sets bit + value
      ARROW_RETURN_NOT_OK(s_bld.Append(rows[i]));         // Lesson 2: fencepost
    } else {                                              //   + soup bytes
      ARROW_RETURN_NOT_OK(n_bld.AppendNull());            // Lesson 1: clear bit,
      ARROW_RETURN_NOT_OK(s_bld.AppendNull());            //   value slot garbage
    }
  }

  std::shared_ptr<arrow::Array> n_arr, s_arr;
  ARROW_RETURN_NOT_OK(n_bld.Finish(&n_arr));              // Lesson 8: scratch is
  ARROW_RETURN_NOT_OK(s_bld.Finish(&s_arr));              //   trimmed & transferred
  std::cout << "pool after build: " << pool->bytes_allocated() << " bytes\n";

  auto schema = arrow::schema({arrow::field("n", arrow::int64()),
                               arrow::field("name", arrow::utf8())});
  auto batch = arrow::RecordBatch::Make(schema, 4, {n_arr, s_arr});

  // ── Lesson 1: read the layout back with your own eyes ─────────────────────
  auto data = n_arr->data();                              // the ArrayData struct
  auto validity = data->GetBuffer(0);                     // Lesson 9: six fields
  auto values  = data->GetBuffer(1);
  std::cout << "validity: "
            << (validity ? "present, " + std::to_string(validity->size()) + "B"
                         : "omitted (all valid)")
            << " · null_count=" << data->null_count
            << " · offset=" << data->offset << "\n";

  // ── Lesson 3: a slice owns nothing ─────────────────────────────────────────
  auto window = n_arr->Slice(1, 2);                       // [20, null]: same
  std::cout << "slice shares values buffer: "              //   buffer, shifted
            << (window->data()->GetBuffer(1) == values) << "\n";   //   offset+len

  // ── Lesson 5: compute is buffer-in / buffer-out ────────────────────────────
  arrow::Datum result;
  ARROW_ASSIGN_OR_RAISE(result,
      arrow::compute::CallFunction("add",
          {n_arr, arrow::Datum(int64_t(5))}));
  auto plus5 = result.array();                            // fresh buffers; the
  std::cout << "add(n,5) validity = AND of inputs: "        //   bitmap you could
            << plus5->GetBuffer(0)->size() << "B\n";        //   have predicted

  // ── Lesson 4: IPC = manifest + buffers verbatim ────────────────────────────
  ARROW_ASSIGN_OR_RAISE(auto out_stream,
      arrow::io::FileOutputStream::Open(path));
  ARROW_ASSIGN_OR_RAISE(auto writer,
      arrow::ipc::MakeFileWriter(out_stream, schema));
  ARROW_RETURN_NOT_OK(writer->WriteRecordBatch(*batch));
  ARROW_RETURN_NOT_OK(writer->Close());

  // ── Round trip: mmap it back and demand zero-copy ─────────────────────────
  ARROW_ASSIGN_OR_RAISE(auto in_stream,
      arrow::io::MemoryMappedFile::Open(path, arrow::io::FileMode::READ));
  ARROW_ASSIGN_OR_RAISE(auto reader, arrow::ipc::OpenFile(in_stream));
  ARROW_ASSIGN_OR_RAISE(auto roundtrip, reader->GetRecordBatch(0));
  auto rt_buf = roundtrip->column(0)->data()->GetBuffer(1);
  std::cout << "mmap'd read-only buffer: "
            << !rt_buf->is_mutable()                       // views over page
            << " · schema batches: " << reader->num_record_batches() << "\n";
  return in_stream->Close();
}

int main(int argc, char** argv) {
  auto st = Run(argc > 1 ? argv[1] : "capstone.arrow");
  if (!st.ok()) { std::cerr << st << "\n"; return 1; }
  std::cout << "wrote capstone.arrow — inspect with: xxd capstone.arrow | head\n";
  return 0;
}
