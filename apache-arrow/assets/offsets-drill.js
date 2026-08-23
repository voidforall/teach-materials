// Offsets drill: given an offsets buffer + data bytes, the learner extracts the
// string at a requested slot (or identifies it as null). Immediate feedback + streak.
// Reusable: include from any lesson, then <div data-offsets-drill></div>.
(function () {
  const WORDS = ["al", "paris", "hi", "ok", "delta", "io", "arrow", "z", "kayak", "ten"];
  function setup(root) {
    let streak = 0, best = 0;
    const q = document.createElement("div");
    q.style.fontFamily = "var(--sans, sans-serif)";
    root.appendChild(q);
    function round() {
      // pick 3-4 words, inject one null
      const n = 3 + Math.floor(Math.random() * 2);
      const picks = [...WORDS].sort(() => Math.random() - 0.5).slice(0, n);
      const nullSlot = Math.floor(Math.random() * n);
      const data = picks.join("");
      const offsets = [0];
      picks.forEach(w => offsets.push(offsets[offsets.length - 1] + w.length));
      const target = Math.floor(Math.random() * n);

      q.innerHTML = "";
      const head = document.createElement("p");
      head.innerHTML =
        'offsets (int32) = <span style="font-family:monospace"><strong>[' +
        offsets.join(", ") + ']</strong></span><br>' +
        'data = <span style="font-family:monospace"><strong>"' + data + '"</strong></span> ' +
        '(bitmap says slot ' + nullSlot + ' is null)<br><br>' +
        'What is the value at slot <strong>' + target + '</strong>? (type it, or type "null")';
      q.appendChild(head);
      const input = document.createElement("input");
      input.placeholder = "value or null";
      input.style.cssText = "font-family:monospace;padding:.3rem .5rem;border:1px solid #999;border-radius:5px";
      const check = document.createElement("button");
      check.textContent = "Check";
      check.style.cssText = "padding:.35rem .9rem;border:1px solid #0f6b8a;border-radius:5px;background:#0f6b8a;color:#fff;cursor:pointer";
      const fb = document.createElement("p");
      fb.style.margin = "0.5rem 0 0";
      q.appendChild(input); q.appendChild(check); q.appendChild(fb);
      input.focus();
      function grade() {
        const expect = target === nullSlot ? "null" : picks[target];
        const got = input.value.trim().toLowerCase().replace(/^"|"$/g, "");
        const ok = got === expect;
        streak = ok ? streak + 1 : 0; best = Math.max(best, streak);
        fb.textContent = (ok ? "✓ " : "✗ expected \"" + expect + "\" (offsets[" + target + "]:" +
          offsets[target] + " → offsets[" + (target + 1) + "]:" + offsets[target + 1] +
          (target === nullSlot ? ", but bitmap bit is 0)" : ")") +
          " — streak: " + streak + " · best: " + best;
        if (ok) setTimeout(round, 900);
        else { const next = document.createElement("button"); next.textContent = "Next →";
          next.style.cssText = check.style.cssText; next.onclick = round; q.appendChild(next); }
      }
      check.onclick = grade;
      input.onkeydown = e => { if (e.key === "Enter") grade(); };
    }
    round();
  }
  document.querySelectorAll("[data-offsets-drill]").forEach(setup);
})();
