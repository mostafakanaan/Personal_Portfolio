// Lightweight, code-drawn project thumbnails (no image downloads).
// Swap a case for a real screenshot once one exists.

function PhoneVisual() {
  return (
    <div className="pv pvPhone" aria-hidden="true">
      <div className="pvPhoneDevice">
        <div className="pvLabel">Balance</div>
        <div className="pvAmount">CHF 4,218</div>
        <div className="pvBar"><i style={{ width: "72%" }} /></div>
        <div className="pvBar"><i className="pvBarAccent" style={{ width: "40%" }} /></div>
        <div className="pvBar"><i style={{ width: "58%" }} /></div>
      </div>
      <div className="pvPhoneDevice pvPhoneBack">
        <div className="pvLabel">Synced ✓</div>
        <div className="pvAmount">Offline</div>
        <div className="pvBar"><i style={{ width: "90%" }} /></div>
      </div>
    </div>
  );
}

function TerminalVisual() {
  return (
    <div className="pv pvTerm mono" aria-hidden="true">
      <div><span className="pvPrompt">$</span> curl -X POST /auth/login</div>
      <div className="pvOk">200 OK</div>
      <div>{"{"} "access": "eyJhb…",</div>
      <div>&nbsp;&nbsp;"refresh": "d8f2…",</div>
      <div>&nbsp;&nbsp;"expiresIn": 900 {"}"}</div>
    </div>
  );
}

function CodeVisual() {
  return (
    <div className="pv pvCode mono" aria-hidden="true">
      <div className="pvComment">// Controller → Service → Repository</div>
      <div><span className="pvKw">app</span>.<span className="pvFn">MapGet</span>(<span className="pvStr">"/projects"</span>, <span className="pvKw">async</span> (</div>
      <div>&nbsp;&nbsp;IProjectService svc) =&gt;</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="pvKw">await</span> svc.<span className="pvFn">GetAllAsync</span>())</div>
      <div>&nbsp;&nbsp;.<span className="pvFn">WithOpenApi</span>();</div>
    </div>
  );
}

function SiteVisual() {
  return (
    <div className="pv pvSite" aria-hidden="true">
      <div className="pvWindow">
        <div className="pvWindowBar"><i /><i /><i /></div>
        <i className="pvLine pvLineHead" />
        <i className="pvLine" style={{ width: "82%" }} />
        <i className="pvLine" style={{ width: "64%" }} />
        <div className="pvTiles"><i /><i /><i /></div>
      </div>
    </div>
  );
}

const VISUALS = {
  kanaanflow: PhoneVisual,
  mkanaanauth: TerminalVisual,
  mkanaanapi: CodeVisual,
  "personal-portfolio": SiteVisual,
};

export default function ProjectVisual({ slug }) {
  const Visual = VISUALS[slug] || SiteVisual;
  return <Visual />;
}
