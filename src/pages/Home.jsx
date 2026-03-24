import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts.json";
import BlogPost from "../components/BlogPost";

function MatrixRain() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d");

    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエカキBCDEFGHJKLMN";
    const cols = Math.floor(c.width / 20); // wider columns = fewer draws
    const drops = Array(cols).fill(1);

    let animId;
    let lastTime = 0;
    const fps = 20; // cap at 20fps instead of ~18fps via setInterval
    const interval = 1000 / fps;

    const draw = (timestamp) => {
      animId = requestAnimationFrame(draw);
      if (timestamp - lastTime < interval) return;
      lastTime = timestamp;

      ctx.fillStyle = "rgba(2,8,18,0.08)";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = "#00ff9d";
      ctx.font = "12px monospace";

      drops.forEach((y, i) => {
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 20, y * 20);
        if (y * 20 > c.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed", top: 0, left: 0,
        opacity: 0.03,
        pointerEvents: "none",
        zIndex: 0,
        willChange: "transform", // tells browser to composite on GPU
      }}
    />
  );
}

function useTyping(words, speed = 85, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[wi];
    const t = setTimeout(() => {
      if (!del) {
        setDisplay(w.slice(0, ci + 1));
        if (ci + 1 === w.length) setTimeout(() => setDel(true), pause);
        else setCi(c => c + 1);
      } else {
        setDisplay(w.slice(0, ci - 1));
        if (ci - 1 === 0) { setDel(false); setWi(w2 => (w2 + 1) % words.length); setCi(0); }
        else setCi(c => c - 1);
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [ci, del, wi, words, speed, pause]);
  return display;
}

const SKILLS = [
  { name: "Python",                     pct: 92 },
  { name: "Linux (Kali / Ubuntu / Fedora)", pct: 90 },
  { name: "Network Security",           pct: 88 },
  { name: "Penetration Testing",        pct: 84 },
  { name: "Nmap / Wireshark",           pct: 86 },
  { name: "Burp Suite / OWASP ZAP",     pct: 83 },
  { name: "JavaScript / React",         pct: 78 },
  { name: "Java / C / Bash",            pct: 80 },
  { name: "SQL (MySQL)",                pct: 77 },
  { name: "Docker / Kubernetes",        pct: 72 },
  { name: "Cryptography (AES / SHA)",   pct: 80 },
  { name: "Snort / Metasploit",         pct: 75 },
];

const TOOLS = [
  { icon:"🐍", name:"Python / R",       sub:"Scripting & Analysis" },
  { icon:"🔍", name:"Wireshark",        sub:"Packet Analysis" },
  { icon:"🗺️", name:"Nmap",             sub:"Network Scanning" },
  { icon:"🕷️", name:"Burp Suite",       sub:"Web App Testing" },
  { icon:"⚡", name:"OWASP ZAP",        sub:"Vuln Scanning" },
  { icon:"💀", name:"Metasploit",       sub:"Exploitation FW" },
  { icon:"🛡️", name:"Snort",            sub:"IDS / IPS" },
  { icon:"🐳", name:"Docker / K8s",     sub:"Containers" },
  { icon:"🔐", name:"AES-256 / SHA",    sub:"Cryptography" },
  { icon:"🌐", name:"Django / Node.js", sub:"Backend Dev" },
  { icon:"⚛️", name:"React",            sub:"Frontend Dev" },
  { icon:"🐉", name:"Kali Linux",       sub:"Pen-Test OS" },
];

const STATS = [
  { val:"3.86", suf:"",  label:"GPA" },
  { val:"12",   suf:"+", label:"Projects" },
  { val:"2026", suf:"",  label:"Graduation" },
  { val:"2",    suf:"",  label:"Certs Earned" },
];

export default function Home() {
  const typed = useTyping([
    "SOC Analyst",
    "Penetration Tester",
    "Incident Responder",
    "Security Researcher",
    "Network Defender",
  ]);
  const skillRef = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 });
    if (skillRef.current) obs.observe(skillRef.current);
    return () => obs.disconnect();
  }, []);

  const latest = posts[posts.length - 1];

  return (
    <div style={{ position:"relative", zIndex:1 }}>
      <MatrixRain />

      {/* HERO */}
      <section className="hero-section hex-bg" style={{ padding:"0 1.5rem" }}>
        {[400,260,140].map(s => (
          <div key={s} style={{
            position:"absolute", top:"50%", right:"8%",
            width:s, height:s, borderRadius:"50%",
            border:`1px solid rgba(0,255,157,0.04)`,
            transform:"translateY(-50%)", pointerEvents:"none",
          }} />
        ))}

        <div style={{ maxWidth:1200, margin:"0 auto", width:"100%", paddingTop:80 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">

            <div className="fade-up">
              <div style={{
                display:"inline-flex", alignItems:"center", gap:8,
                background:"rgba(0,255,157,0.04)", border:"1px solid rgba(0,255,157,0.18)",
                padding:"0.35rem 1rem", marginBottom:"2rem",
              }}>
                <span className="dot-green" style={{ width:6, height:6 }} />
                <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.68rem", color:"rgba(0,255,157,0.75)", letterSpacing:"0.15em" }}>
                  root@ridha-chehime:~$
                </span>
              </div>

              <h1 style={{
                fontFamily:"'Syne',sans-serif", fontWeight:800,
                fontSize:"clamp(2.8rem,6vw,4.2rem)", lineHeight:1.05,
                letterSpacing:"-0.02em", marginBottom:"0.5rem",
              }}>
                <span style={{ color:"var(--text-primary)" }}>Ridha<br /></span>
                <span className="glow-text">Chehime</span>
              </h1>

              <div style={{ display:"flex", alignItems:"center", gap:8, minHeight:36, marginBottom:"1.5rem" }}>
                <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"1rem", color:"var(--accent-blue)" }}>&gt;_</span>
                <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"1rem", color:"rgba(226,232,240,0.65)" }}>{typed}</span>
                <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"1rem", color:"var(--accent)", animation:"blink 1s step-end infinite" }}>█</span>
              </div>

              {/* Objective from resume — exact text */}
              <p style={{ fontSize:"0.95rem", color:"rgba(100,120,150,0.9)", lineHeight:1.85, maxWidth:500, marginBottom:"2.5rem" }}>
                Seeking to immerse in the day-to-day operations of information security and cybersecurity teams,
                gaining real-world experience in designing security controls and the detection and prevention of
                security events. Background in{" "}
                <span style={{ color:"rgba(226,232,240,0.75)" }}>penetration testing, networking, and AI/ML</span>.
                Particular interest in{" "}
                <span style={{ color:"var(--accent)", opacity:0.85 }}>SOC analyst and incident response</span>{" "}
                opportunities.
              </p>

              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.85rem" }}>
                <Link to="/projects" className="btn-cyber" style={{ textDecoration:"none" }}>./view_projects.sh</Link>
                <Link to="/contact"  className="btn-ghost" style={{ textDecoration:"none" }}>$ contact --me</Link>
              </div>
            </div>

            {/* Terminal window */}
            <div className="glass float" style={{ padding:0, overflow:"hidden" }}>
              <div style={{
                padding:"0.6rem 1rem", display:"flex", alignItems:"center", gap:6,
                background:"rgba(0,255,157,0.03)", borderBottom:"1px solid rgba(0,255,157,0.1)",
              }}>
                {["#ff5f57","#febc2e","#28c840"].map(c => (
                  <span key={c} style={{ width:10,height:10,borderRadius:"50%",background:c,opacity:0.85 }} />
                ))}
                <span style={{ marginLeft:8, fontFamily:"'Space Mono',monospace", fontSize:"0.65rem", color:"rgba(74,96,128,0.7)" }}>
                  ridha_profile.sh — bash
                </span>
              </div>
              <div style={{ padding:"1.5rem", fontFamily:"'Space Mono',monospace", fontSize:"0.78rem", lineHeight:2.1 }}>
                {[
                  { p:"$ ", t:"whoami",                                   c:"var(--accent)" },
                  { t:"ridha_chehime",                                     c:"rgba(226,232,240,0.7)" },
                  { p:"$ ", t:"cat education.txt",                         c:"var(--accent)" },
                  { t:"> B.S. Cybersecurity — WMU (GPA: 3.86)",           c:"var(--accent-blue)" },
                  { t:"> AI/ML Cert — UT Austin McCombs",                  c:"var(--accent-blue)" },
                  { p:"$ ", t:"cat certifications.txt",                        c:"var(--accent)" },
                  { t:"> ISC2 CC — Completed (Jun 2025 – May 2028)",           c:"rgba(56,189,248,0.8)" },
                  { t:"> CompTIA Network+ — Completed (Mar 2026 – Mar 2029)",  c:"rgba(56,189,248,0.8)" },
                  { t:"> CompTIA Security+ — In Progress",                     c:"rgba(56,189,248,0.6)" },
                  { p:"$ ", t:"echo $AVAILABILITY",                        c:"var(--accent)" },
                  { t:"OPEN TO OPPORTUNITIES █",                           c:"var(--accent)", glow:true },
                ].map((l,i) => (
                  <div key={i} style={{ display:"flex" }}>
                    {l.p && <span style={{ color:"var(--accent)", marginRight:4 }}>{l.p}</span>}
                    <span style={{ color:l.c, textShadow:l.glow?"0 0 12px rgba(0,255,157,0.6)":"none" }}>{l.t}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ borderTop:"1px solid rgba(0,255,157,0.07)", borderBottom:"1px solid rgba(0,255,157,0.07)", background:"rgba(6,16,32,0.7)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"3rem 1.5rem" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="stat-val">{s.val}{s.suf}</div>
                <div style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.65rem", color:"var(--text-muted)", letterSpacing:"0.15em", marginTop:6, textTransform:"uppercase" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section ref={skillRef} style={{ maxWidth:1200, margin:"0 auto", padding:"6rem 1.5rem" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Skill bars */}
          <div>
            <p className="label" style={{ marginBottom:6 }}>Proficiency</p>
            <h2 className="section-title" style={{ marginBottom:"2.5rem" }}>Technical Skills</h2>
            {SKILLS.map((sk, i) => (
              <div key={sk.name} style={{ marginBottom:"1.4rem" }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                  <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.75rem", color:"rgba(226,232,240,0.75)" }}>{sk.name}</span>
                  <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.7rem", color:"rgba(0,255,157,0.65)" }}>{sk.pct}%</span>
                </div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" style={{ width: vis ? `${sk.pct}%` : "0%", transitionDelay:`${i * 0.08}s` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Tools + Certs */}
          <div>
            <p className="label" style={{ marginBottom:6 }}>Tools & Certs</p>
            <h2 className="section-title" style={{ marginBottom:"2.5rem" }}>Security Stack</h2>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {TOOLS.map(t => (
                <div key={t.name} className="glass" style={{ padding:"0.9rem 1rem", display:"flex", alignItems:"center", gap:10 }}>
                  <span style={{ fontSize:"1.15rem" }}>{t.icon}</span>
                  <div>
                    <div style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.72rem", color:"var(--text-primary)" }}>{t.name}</div>
                    <div style={{ fontSize:"0.65rem", color:"var(--text-muted)" }}>{t.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications — exact from resume */}
            <div className="glass" style={{ padding:"1.25rem" }}>
              <p className="label" style={{ marginBottom:"0.75rem", fontSize:"0.6rem" }}>Certifications</p>
              {[
                { name:"ISC2 — Certified in Cybersecurity (CC)", status:"Completed", color:"var(--accent)", date:"Jun 2025 – May 2028" },
                { name:"CompTIA Network+",                        status:"Completed", color:"var(--accent)", date:"Mar 2026 – Mar 2029" },
                { name:"CompTIA Security+",                       status:"In Progress", color:"#fbbf24",     date:"Expected Apr 2026" },
                { name:"UT Austin — AI/ML Certificate",           status:"Completed", color:"var(--accent)", date:"May 2025 – Jan 2026" },
              ].map(cert => (
                <div key={cert.name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0.55rem 0", borderBottom:"1px solid rgba(0,255,157,0.05)", gap:8 }}>
                  <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.7rem", color:"rgba(226,232,240,0.75)", flex:1 }}>{cert.name}</span>
                  <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.6rem", color:cert.color, whiteSpace:"nowrap" }}>{cert.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LATEST POST */}
      {latest && (
        <section style={{ borderTop:"1px solid rgba(0,255,157,0.07)", background:"rgba(6,16,32,0.5)", padding:"5rem 1.5rem" }}>
          <div style={{ maxWidth:1200, margin:"0 auto" }}>
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="label" style={{ marginBottom:6 }}>From the blog</p>
                <h2 className="section-title">Latest Entry</h2>
              </div>
              <Link to="/blog" style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.72rem", color:"var(--accent-blue)", textDecoration:"none" }}
                onMouseEnter={e => e.target.style.color = "var(--accent)"}
                onMouseLeave={e => e.target.style.color = "var(--accent-blue)"}>
                all_posts →
              </Link>
            </div>
            <div style={{ maxWidth:640 }}>
              <BlogPost title={latest.title} date={latest.date} content={latest.content} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}