import BlogPost from "../components/BlogPost";
import posts from "../data/posts.json";

export default function Blog() {
  return (
    <div className="page">
      <section className="hex-bg" style={{ padding:"5rem 1.5rem 4rem", borderBottom:"1px solid rgba(0,255,157,0.07)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <p className="label" style={{ marginBottom:10 }}>Writing</p>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(2.5rem,5vw,3.5rem)", color:"var(--text-primary)", marginBottom:"1rem" }}>
            Blog & <span className="glow-text">Cyber News</span>
          </h1>
          <p style={{ fontSize:"0.95rem", color:"rgba(100,120,150,0.9)", maxWidth:480, lineHeight:1.75 }}>
            Write-ups, tool breakdowns, and thoughts on the evolving threat landscape.
          </p>
        </div>
      </section>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:"4rem 1.5rem" }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div style={{ gridColumn:"1 / span 2" }}>
            <p className="label" style={{ marginBottom:"1.5rem" }}>My Posts</p>
            <div style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
              {posts.length > 0 ? posts.map((p, i) => (
                <BlogPost key={i} title={p.title} date={p.date} content={p.content} />
              )) : (
                <div className="glass" style={{ padding:"3rem", textAlign:"center" }}>
                  <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.8rem", color:"rgba(74,96,128,0.5)" }}>
                    // No posts yet. Stay tuned.
                  </span>
                </div>
              )}
            </div>
          </div>

          <div>
            <p className="label" style={{ marginBottom:"1.5rem" }}>Threat Intel</p>
            <div className="glass" style={{ overflow:"hidden", padding:0, marginBottom:"1.5rem" }}>
              <div style={{ padding:"0.65rem 1rem", display:"flex", alignItems:"center", gap:8, background:"rgba(0,255,157,0.03)", borderBottom:"1px solid rgba(0,255,157,0.08)" }}>
                <span className="dot-green" style={{ width:6,height:6 }} />
                <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.65rem", color:"rgba(0,255,157,0.65)", letterSpacing:"0.1em" }}>LIVE FEED</span>
              </div>
              <iframe
                src="https://feed.mikle.com/widget/v2/173324/?preloader-text=Loading&"
                height="380px" width="100%" title="Cybersecurity News"
                scrolling="no" frameBorder="0" style={{ display:"block" }}
              />
            </div>

            <div className="glass" style={{ padding:"1.5rem" }}>
              <p className="label" style={{ marginBottom:"1rem", fontSize:"0.6rem" }}>Security Resources</p>
              {[
                { name:"The Hacker News",   url:"https://thehackernews.com" },
                { name:"Krebs on Security", url:"https://krebsonsecurity.com" },
                { name:"Bleeping Computer", url:"https://bleepingcomputer.com" },
                { name:"CISA Advisories",   url:"https://cisa.gov/news-events/cybersecurity-advisories" },
                { name:"NIST NVD (CVEs)",   url:"https://nvd.nist.gov" },
              ].map(l => (
                <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer"
                  style={{ display:"flex", justifyContent:"space-between", padding:"0.55rem 0", borderBottom:"1px solid rgba(0,255,157,0.04)", textDecoration:"none" }}>
                  <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"0.72rem", color:"rgba(226,232,240,0.65)" }}
                    onMouseEnter={e => e.target.style.color = "var(--accent)"}
                    onMouseLeave={e => e.target.style.color = "rgba(226,232,240,0.65)"}>
                    {l.name}
                  </span>
                  <span style={{ color:"rgba(0,255,157,0.35)", fontSize:"0.75rem" }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}