import { useState } from "react";

export default function ProjectCard({ title, description, technologies, link, category }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="glass" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ padding: "1.75rem", position: "relative", height: "100%", display: "flex", flexDirection: "column" }}>
      <div className="card-stripe" />

      {category && <p className="label" style={{ marginBottom: "0.4rem", fontSize: "0.6rem" }}>{category}</p>}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
        <h3 style={{
          fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.3,
          color: hovered ? "var(--accent)" : "var(--text-primary)",
          transition: "color 0.3s", flex: 1, paddingRight: "0.75rem",
        }}>{title}</h3>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
          style={{ opacity: hovered ? 1 : 0.25, transition: "all 0.3s", transform: hovered ? "translate(2px,-2px)" : "none", flexShrink: 0 }}>
          <path d="M2 12L12 2M12 2H5M12 2V9" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      <p style={{ fontSize: "0.83rem", color: "rgba(100,120,150,0.9)", lineHeight: 1.75, flex: 1, marginBottom: "1.25rem" }}>
        {description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
        {technologies.slice(0, 6).map(t => <span key={t} className="tag">{t}</span>)}
        {technologies.length > 6 && (
          <span className="tag" style={{ color: "rgba(56,189,248,0.6)", borderColor: "rgba(56,189,248,0.2)" }}>
            +{technologies.length - 6}
          </span>
        )}
      </div>

      <div style={{ borderTop: "1px solid rgba(0,255,157,0.07)", paddingTop: "1rem" }}>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: "'Space Mono',monospace", fontSize: "0.72rem",
            color: "var(--accent-blue)", display: "inline-flex", alignItems: "center", gap: "0.4rem",
            textDecoration: "none", transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--accent-blue)"}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            view_on_github →
          </a>
        ) : (
          <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", color: "rgba(74,96,128,0.45)" }}>
            // private repository
          </span>
        )}
      </div>
    </div>
  );
}