# 0007 — Lesson taught: Arrow Flight; format arc complete

**Date:** 2026-08-23

Lesson 0007 closed the format/transport arc: Flight as the Lesson 4 IPC stream inside gRPC protobuf fields (data_header manifest + data_body verbatim), advertise-by-descriptor / fetch-by-ticket / stream-as-IPC model, the seven verbs, dictionaries as stream protocol state, and honest framing of "zero-copy": no representation conversion, but gRPC memcpys both ends; 4 MB default message cap ⇒ chunking via max_chunksize.

**Emphasized (likely-new, non-obvious):**
- Ticket opacity is a protocol feature — Flight never parses intent.
- DoExchange as Flight SQL's substrate.
- Dictionary replace/delta messages make readers stateful.

**Practice artifacts:** `assets/flight-verbs-drill.js` (scenario→verb, all 7 verbs). pyarrow task: a complete list_flights→do_get server+client in ~20 lines, plus read_chunk message-type inspection.

**Next arc (Lesson 8+):** build-on-Arrow C++: ArrayBuilders (preallocation, chunking), memory pools & allocation, then guided libarrow source reading. This is the mission-closest material; user's ZPD should now handle builder internals since all layouts are known.
