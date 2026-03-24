export default function Resume() {
  return (
    <div className="page">
      <section className="hex-bg" style={{ padding:"5rem 1.5rem 4rem", borderBottom:"1px solid rgba(0,255,157,0.07)" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <p className="label" style={{ marginBottom:10 }}>Credentials</p>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(2.5rem,5vw,3.5rem)", color:"var(--text-primary)", marginBottom:"1.5rem" }}>
            My <span className="glow-text">Resume</span>
          </h1>
          <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
            <a href="/Ridha_Chehime_Resume.pdf" download className="btn-cyber" style={{ textDecoration:"none" }}>↓ download_resume.pdf</a>
            <a href="https://linkedin.com/in/ridha-chehime" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ textDecoration:"none" }}>LinkedIn →</a>
          </div>
        </div>
      </section>

      <div style={{ maxWidth:1100, margin:"3rem auto", padding:"0 1.5rem" }}>

        {/* PDF embed */}
        <div className="glass" style={{ overflow:"hidden", padding:0, marginBottom:"4rem" }}>
          <div style={{ padding:"0.6rem 1rem", display:"flex", alignItems:"center", gap:6, background:"rgba(0,255,157,0.03)", borderBottom:"1px solid rgba(0,255,157,0.1)" }}>
            {["#ff5f57","#febc2e","#28c840"].map(c => <span key={c} style={{ width:10,height:10,borderRadius:"50%",background:c,opacity:0.85 }} />)}
            <span style={{ marginLeft:8, fontFamily:"'Space Mono',monospace", fontSize:"0.65rem", color:"rgba(74,96,128,0.7)" }}>Ridha_Chehime_Resume.pdf</span>
          </div>
          <iframe src="/Ridha_Chehime_Resume.pdf" title="Resume" style={{ width:"100%", height:"85vh", border:"none", display:"block" }} />
        </div>

        {/* Objective */}
        <Section label="Overview" title="Objective">
          <div className="glass" style={{ padding:"1.75rem", position:"relative" }}>
            <div className="card-stripe" />
            <p style={{ fontSize:"0.9rem", color:"rgba(100,120,150,0.9)", lineHeight:1.9 }}>
              Seeking to immerse in the day-to-day operations of information security and cybersecurity teams
              at major organizations to gain practical, real-world experience in designing security controls
              and the detection and prevention of security events. With a diverse background in penetration
              testing, networking, and exposure in leveraging AI/ML for business applications transformation,
              eager to contribute and add value to organizations' various initiatives and goals. Particular
              interest in pursuing SOC analyst and incident response opportunities and continuously expanding
              expertise in cybersecurity.
            </p>
          </div>
        </Section>

        {/* Education */}
        <Section label="Education" title="Academic Background">
          <TimelineItem
            title="B.S. in Cybersecurity — Minor in Data Science"
            sub="Western Michigan University · Kalamazoo, MI"
            date="Graduating April 2026"
            bullets={[
              "Lee Honors College",
            ]}
          />
          <TimelineItem
            title="Post Graduate Program Certificate — AI & Machine Learning: Business Applications"
            sub="The University of Texas at Austin · McCombs School of Business"
            date="May 2025 – January 2026"
            bullets={[
              "Developed practical exposure in AI powered business application transformation projects.",
              "Gained particular experience in eight industry-relevant projects, including applications like sentiment analysis in finance, AI-powered medical assistants, and legal document summarization.",
              "Strengthened knowledge in Python, data preprocessing, model training and deployment.",
            ]}
          />
        </Section>

        {/* Certifications */}
        <Section label="Certifications" title="Credentials">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                org:"ISC2",
                name:"Certified in Cybersecurity (CC)",
                status:"Completed",
                color:"var(--accent)",
                date:"June 2025 – May 2028",
              },
              {
                org:"CompTIA",
                name:"Network+",
                status:"Completed",
                color:"var(--accent)",
                date:"March 2026 – March 2029",
              },
              {
                org:"CompTIA",
                name:"Security+",
                status:"In Progress",
                color:"#fbbf24",
                date:"Expected April 2026",
              },
            ].map(cert => (
              <div key={cert.name} className="glass" style={{ padding:"1.5rem", position:"relative" }}>
                <div className="card-stripe" />
                <p style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.62rem", color:"rgba(0,255,157,0.5)", letterSpacing:"0.15em", marginBottom:6 }}>{cert.org}</p>
                <h4 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.95rem", color:"var(--text-primary)", marginBottom:8, lineHeight:1.3 }}>{cert.name}</h4>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:4 }}>
                  <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.65rem", color:cert.color }}>{cert.status}</span>
                  <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.6rem", color:"rgba(74,96,128,0.6)" }}>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Work Experience */}
        <Section label="Experience" title="Work Experience">
          <TimelineItem
            title="Peer Student Success Team Assistant Coordinator & Mentor"
            sub="Lee Honors College · Western Michigan University · Kalamazoo, MI"
            date="August 2023 – Present"
            bullets={[
              "Facilitated academic and social support by guiding new honors students through mentorship and peer support.",
              "Organized academic, volunteer, and community events to enhance student engagement, leveraging leadership and event planning skills to create peer connections.",
            ]}
          />
          <TimelineItem
            title="Research Assistant"
            sub="College of Engineering · Western Michigan University · Kalamazoo, MI"
            date="May 2023 – August 2023"
            bullets={[
              "Conducted in-depth research on Goal Structuring Notations in autonomous vehicles, applying analytical skills to support advancements in system safety and reliability.",
              "Collected and analyzed large datasets and designed experiments to support autonomous system safety research, ensuring integrity and accuracy while documenting and improving outcomes.",
            ]}
          />
        </Section>

        {/* Projects */}
        <Section label="Projects" title="Projects & Relevant Coursework">
          {[
            {
              title:"Periodic Access Review System",
              sub:"Senior Design Project",
              desc:"Developed a full-stack access review system automating roster comparison, exception tracking, and compliance validation to enforce least-privilege access controls.",
            },
            {
              title:"Network & Vulnerability Scanner",
              sub:"Security Tool",
              desc:"Developed a Scapy-based vulnerability scanner performing ICMP, TCP, and ARP scans with CVE and SSL/TLS analysis.",
            },
            {
              title:"OWASP Juice Shop Pen-Testing",
              sub:"Penetration Testing",
              desc:"Performed penetration testing on OWASP Juice Shop, identifying vulnerabilities like XSS, SQL injection, and authentication flaws.",
            },
            {
              title:"Password Manager",
              sub:"Cryptography",
              desc:"Developed an offline desktop password manager in Python with AES-256 encryption, TOTP MFA, password strength analysis, reuse detection, and age-based alerts.",
            },
          ].map(p => (
            <div key={p.title} className="glass" style={{ padding:"1.5rem", position:"relative", marginBottom:"1rem" }}>
              <div className="card-stripe" />
              <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"flex-start", gap:8, marginBottom:8 }}>
                <h4 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1rem", color:"var(--text-primary)" }}>{p.title}</h4>
                <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.62rem", color:"rgba(0,255,157,0.55)", padding:"0.2rem 0.6rem", border:"1px solid rgba(0,255,157,0.12)", background:"rgba(0,255,157,0.03)", whiteSpace:"nowrap" }}>{p.sub}</span>
              </div>
              <p style={{ fontSize:"0.875rem", color:"rgba(100,120,150,0.9)", lineHeight:1.7 }}>{p.desc}</p>
            </div>
          ))}
        </Section>

        {/* Skills — exact from resume */}
        <Section label="Skills" title="Technical Skills">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                cat:"Programming Languages",
                items:["Python","Java","JavaScript","C","Bash","SQL (MySQL)","HTML","CSS","R"],
              },
              {
                cat:"Security Tools",
                items:["Nmap","Wireshark","OWASP ZAP","Burp Suite","Snort","Metasploit"],
              },
              {
                cat:"Tools & Platforms",
                items:["Linux (Ubuntu, Fedora, Kali)","Windows","Docker","Kubernetes","GitHub","Agile","Django"],
              },
            ].map(g => (
              <div key={g.cat} className="glass" style={{ padding:"1.5rem" }}>
                <p className="label" style={{ marginBottom:"0.75rem", fontSize:"0.6rem" }}>{g.cat}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
                  {g.items.map(item => (
                    <span key={item} className="tag" style={{ marginBottom:"0.2rem" }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  );
}

function Section({ label, title, children }) {
  return (
    <div style={{ marginBottom:"4rem" }}>
      <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:"2rem" }}>
        <div>
          <p className="label" style={{ marginBottom:4, fontSize:"0.6rem" }}>{label}</p>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1.65rem", color:"var(--text-primary)" }}>{title}</h2>
        </div>
        <div className="flex-1 divider" />
      </div>
      {children}
    </div>
  );
}

function TimelineItem({ title, sub, date, bullets }) {
  return (
    <div className="timeline-line" style={{ paddingLeft:"1.5rem", marginBottom:"2rem", position:"relative" }}>
      <div className="timeline-dot" />
      <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:8, marginBottom:8 }}>
        <div>
          <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1rem", color:"var(--text-primary)" }}>{title}</h3>
          <p style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.72rem", color:"var(--accent-blue)", marginTop:2 }}>{sub}</p>
        </div>
        <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.65rem", color:"rgba(0,255,157,0.6)", padding:"0.2rem 0.6rem", border:"1px solid rgba(0,255,157,0.15)", background:"rgba(0,255,157,0.04)", whiteSpace:"nowrap" }}>{date}</span>
      </div>
      {bullets.map((b,i) => (
        <div key={i} style={{ display:"flex", gap:8, marginBottom:4 }}>
          <span style={{ color:"rgba(0,255,157,0.45)", fontFamily:"'Space Mono',monospace", flexShrink:0, marginTop:2 }}>▸</span>
          <span style={{ fontSize:"0.85rem", color:"rgba(100,120,150,0.9)", lineHeight:1.65 }}>{b}</span>
        </div>
      ))}
    </div>
  );
}