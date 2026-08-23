// Dictionary-decode drill: given a dictionary payload and an indices buffer,
// name the value at a requested slot (or "null"). Immediate feedback + streak.
// Reusable: <div data-dict-decode-drill></div>.
(function () {
  const DICTS = [
    ["al", "paris", "hi", "ok"],
    ["red", "green", "blue"],
    ["GET", "POST", "PUT", "DELETE", "PATCH"],
    ["error", "warn", "info", "debug"],
  ];
  function setup(root) {
    let streak = 0, best = 0;
    const q = document.createElement("div");
    q.style.fontFamily = "var(--sans, sans-serif)";
    root.appendChild(q);
    function round() {
      const dict = DICTS[Math.floor(Math.random() * DICTS.length)];
      const n = 4 + Math.floor(Math.random() * 3);
      const idx = [...Array(n)].map(() => Math.floor(Math.random() * dict.length));
      const nullSlot = Math.floor(Math.random() * n);
      const target = Math.floor(Math.random() * n);
      q.innerHTML = "";
      const head = document.createElement("p");
      head.innerHTML =
        "dictionary = <span style=\"font-family:monospace\"><strong>[" + dict.map(d => '"' + d + '"').join(", ") + "]</strong></span><br>" +
        'indices (int8) = <span style="font-family:monospace"><strong>[' + idx.join(", ") +
        ']</strong></span> · bitmap says slot ' + nullSlot + ' is null<br><br>' +
        'Value at slot <strong>' + target + '</strong>? (type it, or "null")';
      q.appendChild(head);
      const input = document.createElement("input");
      input.placeholder = "value or null";
      input.style.cssText = "font-family:monospace;padding:.3rem .5rem;border:1px solid #999;border-radius:5px";
      const check = document.createElement("button");
      check.textContent = "Check";
      check.style.cssText = "padding:.35rem .9rem;border:1px solid #0f6b8a;border-radius:5px;background:#0f6b8a;color:#fff;cursor:pointer";
      const fb = document.createElement("p"); fb.style.margin = "0.5rem 0 0";
      q.appendChild(input); q.appendChild(check); q.appendChild(fb);
      input.focus();
      function grade() {
        const expect = target === nullSlot ? "null" : dict[idx[target]];
        const got = input.value.trim().toLowerCase().replace(/^"|"$/g, "");
        const ok = got === expect;
        streak = ok ? streak + 1 : 0; best = Math.max(best, streak);
        fb.textContent = (ok ? "✓ " : "✗ expected \"" + expect + "\" (indices[" + target + "] = " + idx[target] +
          (target === nullSlot ? ", but bitmap bit is 0)" : ")") +
          " — streak: " + streak + " · best: " + best;
        if (ok) setTimeout(round, 900);
        else { const nx = document.createElement("button"); nx.textContent = "Next →";
          nx.style.cssText = check.style.cssText; nx.onclick = round; q.appendChild(nx); }
      }
      check.onclick = grade;
      input.onkeydown = e => { if (e.key === "Enter") grade(); };
    }
    round();
  }
  document.querySelectorAll("[data-dict-decode-drill]").forEach(setup);
})();
