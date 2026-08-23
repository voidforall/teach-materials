// Flight verb drill: given a scenario, pick the right Flight method.
// Immediate feedback + streak. Reusable: <div data-flight-verbs-drill></div>.
(function () {
  const SCENARIOS = [
    { s: "A dashboard pulls a precomputed result table from your service", a: "DoGet", why: "Server→client single stream: GetFlightInfo returns endpoints with tickets; DoGet streams the record batches." },
    { s: "A client uploads a batch of rows for ingestion", a: "DoPut", why: "Client→server stream of FlightData; server replies per-stream with an ack (often the finalized schema/append result)." },
    { s: "An interactive query protocol: client sends a query, then receives results on the same call", a: "DoExchange", why: "Bidirectional stream — both directions open at once; this is what Flight SQL builds on." },
    { s: "A client wants to plan a query: partitions, schema, estimated bytes — before reading anything", a: "GetFlightInfo", why: "Returns FlightInfo: schema, endpoints (tickets), total_records/bytes. Metadata for planning, no data moves." },
    { s: "A client checks whether the server's schema for a descriptor has changed", a: "GetSchema", why: "Schema-only variant of GetFlightInfo — cheap change detection before committing to a read." },
    { s: "Listing what datasets this endpoint serves", a: "ListFlights", why: "Catalog operation: streams FlightInfo for descriptors matching a criteria expression." },
    { s: "Negotiating a token after TLS/TLS-agnostic handshake", a: "Handshake", why: "Optional auth preamble that swaps bytes/tokens before data calls." },
  ];
  function setup(root) {
    let streak = 0, best = 0, pool = [...SCENARIOS];
    const q = document.createElement("div");
    q.style.fontFamily = "var(--sans, sans-serif)";
    root.appendChild(q);
    function round() {
      if (!pool.length) pool = [...SCENARIOS];
      const item = pool.pop();
      const verbs = ["DoGet", "DoPut", "DoExchange", "GetFlightInfo", "GetSchema", "ListFlights", "Handshake"];
      q.innerHTML = "";
      const head = document.createElement("p");
      head.innerHTML = "<strong>" + item.s + "</strong> — which Flight method?";
      q.appendChild(head);
      const fb = document.createElement("p"); fb.style.margin = "0.6rem 0 0";
      verbs.slice().sort(() => Math.random() - 0.5).forEach(v => {
        const b = document.createElement("button");
        b.textContent = v;
        b.style.cssText = "padding:.4rem .8rem;margin:0 .4rem .4rem 0;border:1px solid #0f6b8a;border-radius:5px;background:#fff;color:#0f6b8a;font-weight:600;cursor:pointer";
        b.onclick = () => {
          [...q.querySelectorAll("button")].forEach(x => { x.disabled = true; x.style.cursor = "default"; x.style.opacity = .6; });
          const ok = v === item.a;
          streak = ok ? streak + 1 : 0; best = Math.max(best, streak);
          b.style.opacity = 1; b.style.background = ok ? "#c9e3d3" : "#ffb3b3";
          fb.textContent = (ok ? "✓ " : "✗ it's " + item.a + ". ") + item.why +
            " — streak: " + streak + " · best: " + best;
          const nx = document.createElement("button");
          nx.textContent = "Next →"; nx.style.cssText = "padding:.4rem .8rem;border:1px solid #0f6b8a;border-radius:5px;background:#0f6b8a;color:#fff;cursor:pointer;opacity:1";
          nx.onclick = round; q.appendChild(nx);
        };
        q.appendChild(b);
      });
      q.appendChild(fb);
    }
    round();
  }
  document.querySelectorAll("[data-flight-verbs-drill]").forEach(setup);
})();
