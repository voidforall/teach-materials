// Builder growth simulator: append elements to (a) a doubling-preallocation
// builder vs (b) a chunked builder, and watch capacity, waste, and copy count.
// Reusable: <div data-growth-sim></div>.
(function () {
  function setup(root) {
    root.style.fontFamily = "var(--sans, sans-serif)";
    root.innerHTML =
      '<p>Two builders, same appends. <b>Doubling</b> grows one buffer geometrically (like <span style="font-family:monospace">ArrayBuilder</span>); <b>chunked</b> finishes a fixed-size chunk and starts fresh (like <span style="font-family:monospace">ChunkedArrayBuilder</span>).</p>' +
      '<div style="display:flex;gap:.6rem;flex-wrap:wrap;margin:.6rem 0">' +
      '  <button data-n="1" style="padding:.4rem .8rem;border:1px solid #0f6b8a;border-radius:5px;background:#fff;color:#0f6b8a;cursor:pointer">append ×1</button>' +
      '  <button data-n="100" style="padding:.4rem .8rem;border:1px solid #0f6b8a;border-radius:5px;background:#fff;color:#0f6b8a;cursor:pointer">append ×100</button>' +
      '  <button data-n="10000" style="padding:.4rem .8rem;border:1px solid #0f6b8a;border-radius:5px;background:#fff;color:#0f6b8a;cursor:pointer">append ×10k</button>' +
      '  <button data-reset style="padding:.4rem .8rem;border:1px solid #999;border-radius:5px;background:#fff;color:#555;cursor:pointer">reset</button>' +
      '</div>' +
      '<table style="border-collapse:collapse;font-family:monospace;font-size:.85rem">' +
      '<tr style="color:#667080;font-family:sans-serif;font-size:.75rem"><th style="text-align:left;padding:.2rem .7rem"></th><th style="padding:.2rem .7rem">elements</th><th style="padding:.2rem .7rem">capacity</th><th style="padding:.2rem .7rem">wasted slots</th><th style="padding:.2rem .7rem">slots copied</th></tr>' +
      '<tr><td style="padding:.2rem .7rem;font-family:sans-serif;font-weight:700;color:#0f6b8a">doubling</td><td data-d="len" style="padding:.2rem .7rem;text-align:center">0</td><td data-d="cap" style="padding:.2rem .7rem;text-align:center">0</td><td data-d="waste" style="padding:.2rem .7rem;text-align:center">0</td><td data-d="copy" style="padding:.2rem .7rem;text-align:center">0</td></tr>' +
      '<tr><td style="padding:.2rem .7rem;font-family:sans-serif;font-weight:700;color:#0f6b8a">chunked (1k)</td><td data-c="len" style="padding:.2rem .7rem;text-align:center">0</td><td data-c="cap" style="padding:.2rem .7rem;text-align:center">0</td><td data-c="waste" style="padding:.2rem .7rem;text-align:center">0</td><td data-c="copy" style="padding:.2rem .7rem;text-align:center">0</td></tr>' +
      '</table>' +
      '<p style="font-size:.85rem;color:#667080;margin-top:.5rem">Amortized copy cost per element converges to ~2 for doubling — but the last doubling momentarily holds 2× your data in memory. Chunked never holds more than one chunk of slack, at the price of chunk bookkeeping.</p>';
    const st = { d: { len: 0, cap: 0, copy: 0 }, c: { len: 0, cap: 0, copy: 0 } };
    const CH = 1024;
    const cell = (k, f) => root.querySelector('[data-' + k + '="' + f + '"]');
    function render() {
      ["d", "c"].forEach(k => {
        const s = st[k];
        cell(k, "len").textContent = s.len;
        cell(k, "cap").textContent = s.cap;
        cell(k, "waste").textContent = s.cap - s.len;
        cell(k, "copy").textContent = s.copy;
      });
    }
    function append1() {
      st.d.len++;
      if (st.d.len > st.d.cap) { const old = st.d.cap; st.d.cap = Math.max(32, st.d.cap * 2); st.d.copy += old; }
      st.c.len++;
      if (st.c.len > st.c.cap) { st.c.copy += st.c.cap; st.c.cap += CH; }
    }
    root.querySelectorAll("button[data-n]").forEach(b => {
      b.onclick = () => { for (let i = 0; i < +b.dataset.n; i++) append1(); render(); };
    });
    root.querySelector("button[data-reset]").onclick = () => {
      st.d = { len: 0, cap: 0, copy: 0 }; st.c = { len: 0, cap: 0, copy: 0 }; render();
    };
    render();
  }
  document.querySelectorAll("[data-growth-sim]").forEach(setup);
})();
