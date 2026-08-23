// Validity-bitmap decoding drill. Given a bitmap byte (and a null slot style),
// the learner picks which values are null. Immediate feedback, streak scoring.
// Reusable: include from any lesson, then <div class="drill" data-drill></div>.
(function () {
  const NAMES = ["ana", "bo", "cyd", "di", "eve", "fay", "gus", "hal"];
  function setup(root) {
    let streak = 0, best = 0;
    const q = document.createElement("div");
    q.style.fontFamily = "var(--mono, monospace)";
    root.appendChild(q);
    function round() {
      const byte = 1 + Math.floor(Math.random() * 254); // never trivial
      const bits = [...Array(8)].map((_, i) => (byte >> i) & 1);
      q.innerHTML = "";
      const head = document.createElement("p");
      head.innerHTML =
        "validity bitmap byte = <strong>0b" + byte.toString(2).padStart(8, "0") +
        "</strong> &nbsp;(bit 0 = slot 0, LSB first). Click every <strong>null</strong> slot:";
      q.appendChild(head);
      let clicks = new Set();
      const row = document.createElement("div");
      row.style.cssText = "display:flex;gap:.4rem;flex-wrap:wrap;margin:.6rem 0";
      const fb = document.createElement("p");
      NAMES.forEach((n, i) => {
        const b = document.createElement("button");
        b.textContent = i + ":" + n;
        b.style.cssText =
          "font-family:monospace;font-size:.9rem;padding:.35rem .6rem;border:1px solid #999;border-radius:5px;background:#fff;cursor:pointer";
        b.onclick = () => {
          if (clicks.has(i)) { clicks.delete(i); b.style.background = "#fff"; }
          else { clicks.add(i); b.style.background = "#ffd9d9"; }
        };
        row.appendChild(b);
      });
      q.appendChild(row);
      const check = document.createElement("button");
      check.textContent = "Check";
      check.style.cssText = "font-family:sans-serif;padding:.35rem .9rem;border:1px solid #0f6b8a;border-radius:5px;background:#0f6b8a;color:#fff;cursor:pointer";
      const next = document.createElement("button");
      next.textContent = "Next byte →";
      next.style.cssText = check.style.cssText + ";display:none";
      fb.style.fontFamily = "sans-serif";
      q.appendChild(check); q.appendChild(next); q.appendChild(fb);
      check.onclick = () => {
        const nulls = new Set(bits.map((b, i) => [b, i]).filter(([b]) => b === 0).map(([, i]) => i));
        let ok = nulls.size === clicks.size && [...nulls].every(i => clicks.has(i));
        // per-button colouring
        [...row.children].forEach((b, i) => {
          b.disabled = true; b.style.cursor = "default";
          const isNull = nulls.has(i), marked = clicks.has(i);
          if (isNull && marked) b.style.background = "#b7e4c7";
          else if (isNull) { b.style.background = "#ffe08a"; ok = false; }
          else if (marked) { b.style.background = "#ffb3b3"; ok = false; }
          else b.style.background = "#fff";
        });
        streak = ok ? streak + 1 : 0; best = Math.max(best, streak);
        fb.textContent = (ok ? "✓ correct. " : "✗ missed some — yellow = null you didn't mark, red = not null. ") +
          "streak: " + streak + " · best: " + best;
        check.style.display = "none"; next.style.display = "inline-block";
      };
      next.onclick = round;
    }
    round();
  }
  document.querySelectorAll("[data-drill]").forEach(setup);
})();
