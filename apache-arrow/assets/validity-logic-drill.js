// Validity-propagation drill: given two input bitmaps (a, b) and a kernel's
// null-combination rule, the learner marks which output slots are null.
// Immediate feedback + streak. Reusable: <div data-validity-logic-drill></div>.
(function () {
  const NAMES = ["ana", "bo", "cyd", "di", "eve", "fay", "gus", "hal"];
  const MODES = [
    { name: "a + b  (elementwise: null if EITHER input is null)", out: (a, b) => a && b },
    { name: "coalesce(a, b)  (null only if BOTH are null)", out: (a, b) => a || b },
  ];
  function setup(root) {
    let streak = 0, best = 0;
    const q = document.createElement("div");
    q.style.fontFamily = "var(--sans, sans-serif)";
    root.appendChild(q);
    function round() {
      const mode = MODES[Math.floor(Math.random() * MODES.length)];
      const A = 1 + Math.floor(Math.random() * 254), B = 1 + Math.floor(Math.random() * 254);
      const a = [...Array(8)].map((_, i) => (A >> i) & 1);
      const b = [...Array(8)].map((_, i) => (B >> i) & 1);
      q.innerHTML = "";
      const head = document.createElement("p");
      head.innerHTML = "kernel: <strong>" + mode.name + "</strong><br>" +
        'a validity = <span style="font-family:monospace">0b' + A.toString(2).padStart(8, "0") + "</span> · " +
        'b validity = <span style="font-family:monospace">0b' + B.toString(2).padStart(8, "0") +
        "</span><br>Click every slot that is <strong>null in the output</strong>:";
      q.appendChild(head);
      let clicks = new Set();
      const row = document.createElement("div");
      row.style.cssText = "display:flex;gap:.4rem;flex-wrap:wrap;margin:.6rem 0";
      NAMES.forEach((n, i) => {
        const cell = document.createElement("div");
        cell.style.cssText = "border:1px solid #999;border-radius:5px;padding:.3rem .5rem;cursor:pointer;background:#fff;font-family:monospace;font-size:.85rem";
        cell.textContent = i + "  a:" + a[i] + " b:" + b[i];
        cell.onclick = () => {
          if (clicks.has(i)) { clicks.delete(i); cell.style.background = "#fff"; }
          else { clicks.add(i); cell.style.background = "#ffd9d9"; }
        };
        row.appendChild(cell);
      });
      q.appendChild(row);
      const check = document.createElement("button");
      check.textContent = "Check";
      check.style.cssText = "padding:.35rem .9rem;border:1px solid #0f6b8a;border-radius:5px;background:#0f6b8a;color:#fff;cursor:pointer";
      const next = document.createElement("button");
      next.textContent = "Next →"; next.style.cssText = check.style.cssText + ";display:none";
      const fb = document.createElement("p"); fb.style.margin = "0.5rem 0 0";
      q.appendChild(check); q.appendChild(next); q.appendChild(fb);
      check.onclick = () => {
        const nulls = new Set(a.map((va, i) => [va, b[i], i]).filter(([va, vb]) => !mode.out(va, vb)).map(([, , i]) => i));
        let ok = nulls.size === clicks.size && [...nulls].every(i => clicks.has(i));
        [...row.children].forEach((c, i) => {
          const isN = nulls.has(i), marked = clicks.has(i);
          c.onclick = null;
          if (isN && marked) c.style.background = "#b7e4c7";
          else if (isN) { c.style.background = "#ffe08a"; ok = false; }
          else if (marked) { c.style.background = "#ffb3b3"; ok = false; }
          else c.style.background = "#fff";
        });
        streak = ok ? streak + 1 : 0; best = Math.max(best, streak);
        fb.textContent = (ok ? "✓ " : "✗ yellow = missed null, red = not null. ") + "streak: " + streak + " · best: " + best;
        check.style.display = "none"; next.style.display = "inline-block";
      };
      next.onclick = round;
    }
    round();
  }
  document.querySelectorAll("[data-validity-logic-drill]").forEach(setup);
})();
