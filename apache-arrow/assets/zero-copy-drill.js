// Zero-copy classifier drill: given an operation name, the learner classifies it
// as ZERO-COPY or COPIES (with interleaving of topics from lessons 1-3).
// Reusable: include from any lesson, then <div data-zerocopy-drill></div>.
(function () {
  const ITEMS = [
    { op: "arr.slice(2, 5)", copy: false, why: "Same buffers; array-level offset becomes 2, length 3. Zero bytes moved." },
    { op: "array[1:4] (Python slicing)", copy: false, why: "pyarrow slicing is Slice() — same buffers, shifted offset." },
    { op: "arr.cast(pa.int32())", copy: true, why: "int64→int32 re-widens every value into a new buffer. Conversion always allocates." },
    { op: "table.combine_chunks()", copy: true, why: "Multiple chunks can't share one buffer — concatenation copies into a fresh one." },
    { op: "chunked.slice(1, 2)", copy: false, why: "ChunkedArray slicing just narrows the list of zero-copy chunk views." },
    { op: "string_arr[:3]", copy: false, why: "Slicing stops at the offsets buffer; the data soup isn't touched (it may overhang)." },
    { op: "pa.concat_arrays([a, b])", copy: true, why: "Two backing buffers can't become one — every element is copied." },
    { op: "np.asarray(int64_arr)", copy: false, why: "Primitive, no nulls → numpy wraps the same Buffer. Zero-copy bridge (only for fixed-width, numpy has no validity concept)." },
    { op: "np.asarray(int64_arr, dtype=int32)", copy: true, why: "dtype change = conversion → new buffer." },
    { op: "list_arr.values", copy: false, why: "The child array view over the same buffers — .values never copies (.flatten() does, it skips nulls)." },
    { op: "arr.take([0, 5, 9])", copy: true, why: "Gather produces a new compact buffer — only the selected rows." },
    { op: "table.select(['b','a'])", copy: false, why: "Column selection/reordering is metadata: new field list, same column objects." },
    { op: "arr.filter(mask)", copy: true, why: "Result has different length & shifted values — must be materialized." },
  ];
  function setup(root) {
    let streak = 0, best = 0, pool = [...ITEMS];
    const q = document.createElement("div");
    q.style.fontFamily = "var(--sans, sans-serif)";
    root.appendChild(q);
    function round() {
      if (!pool.length) pool = [...ITEMS];
      const i = Math.floor(Math.random() * pool.length);
      const item = pool.splice(i, 1)[0];
      q.innerHTML = "";
      const head = document.createElement("p");
      head.innerHTML = 'Does <span style="font-family:monospace"><strong>' + item.op +
        '</strong></span> move bytes or share buffers?';
      q.appendChild(head);
      const fb = document.createElement("p"); fb.style.margin = "0.6rem 0 0";
      [false, true].forEach(copy => {
        const b = document.createElement("button");
        b.textContent = copy ? "COPIES" : "ZERO-COPY";
        b.style.cssText = "padding:.45rem 1rem;margin-right:.6rem;border:1px solid #0f6b8a;border-radius:5px;background:#fff;color:#0f6b8a;font-weight:700;cursor:pointer";
        b.onclick = () => {
          [...q.querySelectorAll("button")].forEach(x => { x.disabled = true; x.style.cursor = "default"; x.style.opacity = .6; });
          const ok = copy === item.copy;
          streak = ok ? streak + 1 : 0; best = Math.max(best, streak);
          b.style.opacity = 1; b.style.background = ok ? "#c9e3d3" : "#ffb3b3";
          fb.textContent = (ok ? "✓ " : "✗ it's " + (item.copy ? "COPIES. " : "ZERO-COPY. ")) +
            item.why + " — streak: " + streak + " · best: " + best;
          const next = document.createElement("button");
          next.textContent = "Next →"; next.style.cssText = "padding:.45rem 1rem;border:1px solid #0f6b8a;border-radius:5px;background:#0f6b8a;color:#fff;cursor:pointer;opacity:1";
          next.onclick = round; q.appendChild(next);
        };
        q.appendChild(b);
      });
      q.appendChild(fb);
    }
    round();
  }
  document.querySelectorAll("[data-zerocopy-drill]").forEach(setup);
})();
