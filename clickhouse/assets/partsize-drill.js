// Granule & compression drill: mental math for MergeTree storage arithmetic.
// Question types: (a) number of granules for N rows, (b) primary-key marks,
// (c) bytes saved at a given compression ratio, (d) granularity setting math.
// Reusable: <script src="../assets/partsize-drill.js"></script><div data-partsize-drill></div>
(function () {
  const DEFAULT_GRAN = 8192;
  const fmt = (n) => n.toLocaleString("en-US");
  function setup(root) {
    let streak = 0, best = 0;
    const q = document.createElement("div");
    q.style.fontFamily = "var(--sans, sans-serif)";
    root.appendChild(q);
    function round() {
      const kind = ["granules", "marks", "saved", "custom"][Math.floor(Math.random() * 4)];
      let question, answer, unit;
      const rows = [1e6, 5e6, 2.5e7, 1e8, 4e8][Math.floor(Math.random() * 5)];
      if (kind === "granules") {
        question = "A MergeTree part holds <strong>" + fmt(rows) + "</strong> rows. With the default granularity (8192), how many granules (rounded up)?";
        answer = Math.ceil(rows / DEFAULT_GRAN); unit = "granules";
      } else if (kind === "marks") {
        const g = [4096, 8192, 16384][Math.floor(Math.random() * 3)];
        question = "The primary key index stores one mark per granule. For <strong>" + fmt(rows) + "</strong> rows with granularity <strong>" + g + "</strong>, how many marks (rounded up)?";
        answer = Math.ceil(rows / g); unit = "marks";
      } else if (kind === "saved") {
        const ratio = [5, 8, 10, 12][Math.floor(Math.random() * 4)];
        const gb = [100, 250, 500, 1000][Math.floor(Math.random() * 4)];
        question = "A column compresses <strong>" + ratio + "×</strong>. Uncompressed it is <strong>" + gb + " GB</strong>. How many GB on disk (integer)?";
        answer = Math.round(gb / ratio); unit = "GB";
      } else {
        const g = 8192;
        const target = 4e6;
        const per = [16, 64, 128][Math.floor(Math.random() * 3)];
        question = "You want at most <strong>" + fmt(target) + "</strong> granules in a part of " + fmt(target * g) + " rows. Rows per granule must average at least...? Actually simpler: a table has <strong>" + fmt(rows) + "</strong> rows averaging <strong>" + per + " bytes</strong> uncompressed. Uncompressed size in GB (rounded)?";
        answer = Math.round((rows * per) / 1e9); unit = "GB";
      }
      q.innerHTML = "";
      const head = document.createElement("p");
      head.innerHTML = question + "<br><br><strong>Your answer:</strong>";
      q.appendChild(head);
      const input = document.createElement("input");
      input.placeholder = "number";
      input.inputMode = "numeric";
      input.style.cssText = "font-family:monospace;padding:.3rem .5rem;border:1px solid #999;border-radius:5px;width:10rem";
      const check = document.createElement("button");
      check.textContent = "Check";
      check.style.cssText = "padding:.35rem .9rem;border:1px solid #b8860b;border-radius:5px;background:#b8860b;color:#fff;cursor:pointer;margin-left:.4rem";
      const fb = document.createElement("p");
      fb.style.margin = "0.5rem 0 0";
      q.appendChild(input); q.appendChild(check); q.appendChild(fb);
      input.focus();
      function grade() {
        const v = parseInt(input.value.replace(/[, ]/g, ""), 10);
        if (isNaN(v)) { fb.textContent = "Enter a number."; return; }
        const ok = Math.abs(v - answer) <= Math.max(1, Math.round(answer * 0.02));
        if (ok) {
          streak++; best = Math.max(best, streak);
          fb.innerHTML = "<strong style='color:#1f7a4d'>✓ Correct</strong> — " + fmt(answer) + " " + unit + ". Streak: " + streak + " (best " + best + ")";
        } else {
          streak = 0;
          fb.innerHTML = "<strong style='color:#a12d2d'>✗ Not quite</strong> — answer ≈ " + fmt(answer) + " " + unit + ".";
        }
        const again = document.createElement("button");
        again.textContent = "Next";
        again.style.cssText = check.style.cssText;
        again.onclick = round;
        fb.appendChild(again);
        input.disabled = true; check.disabled = true;
      }
      check.onclick = grade;
      input.addEventListener("keydown", (e) => { if (e.key === "Enter") grade(); });
    }
    round();
  }
  document.querySelectorAll("[data-partsize-drill]").forEach(setup);
})();
