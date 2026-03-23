import { useState } from "react";

const CONTACTS = [
  {
    label:"Email", value:"ridhachehime0@gmail.com", href:"mailto:ridhachehime0@gmail.com",
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  },
  {
    label:"LinkedIn", value:"linkedin.com/in/ridha-chehime", href:"https://linkedin.com/in/ridha-chehime",
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label:"GitHub", value:"github.com/RidhaC", href:"https://github.com/RidhaC",
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(null);
  const copy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="page">
      <section className="hex-bg" style={{ padding:"5rem 1.5rem 4rem", borderBottom:"1px solid rgba(0,255,157,0.07)" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <p className="label" style={{ marginBottom:10 }}>Get in Touch</p>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(2.5rem,5vw,3.5rem)", color:"var(--text-primary)", marginBottom:"1rem" }}>
            Let's <span className="glow-text">Connect</span>
          </h1>
          <p style={{ fontSize:"0.95rem", color:"rgba(100,120,150,0.9)", maxWidth:480, lineHeight:1.75 }}>
            Open to internships, research collaborations, and security-focused roles.
          </p>
        </div>
      </section>

      <div style={{ maxWidth:900, margin:"0 auto", padding:"5rem 1.5rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {CONTACTS.map(c => (
            <div key={c.label} className="glass" style={{ padding:"2rem", textAlign:"center", position:"relative" }}>
              <div className="card-stripe" />
              <div style={{ width:48, height:48, margin:"0 auto 1rem", display:"flex", alignItems:"center", justifyContent:"center", border:"1px solid rgba(0,255,157,0.2)", background:"rgba(0,255,157,0.05)", color:"var(--accent)" }}>
                {c.icon}
              </div>
              <p className="label" style={{ fontSize:"0.62rem", marginBottom:6 }}>{c.label}</p>
              <a href={c.href} target={c.href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
                style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.72rem", color:"rgba(226,232,240,0.75)", display:"block", marginBottom:"1.25rem", wordBreak:"break-all", textDecoration:"none" }}
                onMouseEnter={e => e.target.style.color = "var(--accent-blue)"}
                onMouseLeave={e => e.target.style.color = "rgba(226,232,240,0.75)"}>
                {c.value}
              </a>
              <button onClick={() => copy(c.value, c.label)} style={{
                fontFamily:"'Space Mono',monospace", fontSize:"0.62rem",
                color: copied===c.label ? "var(--accent)" : "rgba(74,96,128,0.65)",
                background:"transparent",
                border:`1px solid ${copied===c.label?"rgba(0,255,157,0.3)":"rgba(74,96,128,0.15)"}`,
                padding:"0.25rem 0.8rem", cursor:"pointer", transition:"all 0.2s",
              }}>
                {copied===c.label ? "✓ copied" : "copy"}
              </button>
            </div>
          ))}
        </div>

        <div className="glass" style={{ padding:"2.5rem", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,var(--accent),transparent)" }} />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                <span className="dot-green" />
                <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.65rem", color:"rgba(0,255,157,0.65)", letterSpacing:"0.15em" }}>AVAILABLE FOR OPPORTUNITIES</span>
              </div>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.2rem", color:"var(--text-primary)", marginBottom:8 }}>
                Open to internships & entry-level roles
              </h3>
              <p style={{ fontSize:"0.875rem", color:"rgba(100,120,150,0.85)", lineHeight:1.7, maxWidth:480 }}>
                Graduating April 2026. Seeking security engineering, penetration testing, SOC analyst,
                and threat intelligence roles. Based in Kalamazoo, MI - open to remote.
              </p>
            </div>
            <a href="mailto:ridhachehime0@gmail.com" className="btn-cyber" style={{ textDecoration:"none", whiteSpace:"nowrap", flexShrink:0 }}>
              $ send_email →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}