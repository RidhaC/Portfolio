import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

const CATS = {
  "Secure Password Manager": "Cryptography",
  "Keylogger": "Security Research",
  "Network Scanner": "Network Security",
  "Vulnerability Scanner": "Network Security",
  "SecurePass - Password Health & Breach Monitoring App": "Full-Stack",
  "FoodHub Data Analysis": "Data Science",
  "Personal Loan Purchase Prediction": "Machine Learning",
  "Visa Approval Prediction": "Machine Learning",
  "Predictive Maintenance for Wind Turbine Failures": "Machine Learning",
  "Medical Question Answering System using RAG": "AI / NLP",
  "Safety Helmet Detection using Computer Vision": "Computer Vision",
  "File I/O Utility Library (Custom Insert, Delete, Extract)": "Systems",
};

export default function Projects() {
  const allCats = ["All", ...new Set(Object.values(CATS))];
  const [active, setActive] = useState("All");
  const filtered = projects.filter(p => active === "All" || CATS[p.title] === active);

  return (
    <div className="page">
      <section className="hex-bg" style={{ padding:"5rem 1.5rem 4rem", borderBottom:"1px solid rgba(0,255,157,0.07)", position:"relative" }}>
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,rgba(0,255,157,0.3),transparent)" }} />
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <p className="label" style={{ marginBottom:10 }}>Portfolio</p>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(2.5rem,5vw,3.5rem)", color:"var(--text-primary)", marginBottom:"1rem" }}>
            Security <span className="glow-text">Projects</span>
          </h1>
          <p style={{ fontSize:"0.95rem", color:"rgba(100,120,150,0.9)", maxWidth:520, lineHeight:1.75 }}>
            {projects.length} projects spanning cybersecurity, machine learning, full-stack, and systems programming.
          </p>
        </div>
      </section>

      <div style={{ borderBottom:"1px solid rgba(0,255,157,0.06)", background:"rgba(6,16,32,0.6)", position:"sticky", top:64, zIndex:100, backdropFilter:"blur(20px)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0.75rem 1.5rem", display:"flex", gap:8, flexWrap:"wrap" }}>
          {allCats.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              fontFamily:"'Space Mono',monospace", fontSize:"0.68rem", letterSpacing:"0.06em",
              padding:"0.35rem 0.9rem",
              border:`1px solid ${active===cat?"var(--accent)":"rgba(74,96,128,0.2)"}`,
              background: active===cat ? "rgba(0,255,157,0.08)" : "transparent",
              color: active===cat ? "var(--accent)" : "rgba(74,96,128,0.7)",
              cursor:"pointer", transition:"all 0.2s",
            }}>{cat}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:"3rem 1.5rem 5rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map(p => (
            <ProjectCard key={p.title} title={p.title} description={p.description}
              technologies={p.technologies} link={p.link} category={CATS[p.title]} />
          ))}
        </div>
      </div>
    </div>
  );
}