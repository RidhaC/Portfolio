export default function BlogPost({ title, date, content }) {
  const fmt = new Date(date).toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "numeric",
  });

  return (
    <article className="glass" style={{ padding: "1.75rem", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: 0, left: 0, bottom: 0, width: 2,
        background: "linear-gradient(180deg, var(--accent), transparent)", opacity: 0.6,
      }} />
      <div className="card-stripe" />
      <div style={{ paddingLeft: "0.5rem" }}>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", color: "rgba(0,255,157,0.55)" }}>
          {fmt}
        </span>
        <h3 style={{
          fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1.15rem",
          color: "var(--text-primary)", margin: "0.4rem 0 0.75rem", lineHeight: 1.35,
        }}
        onMouseEnter={e => e.target.style.color = "var(--accent)"}
        onMouseLeave={e => e.target.style.color = "var(--text-primary)"}>
          {title}
        </h3>
        <p style={{ fontSize: "0.875rem", color: "rgba(100,120,150,0.9)", lineHeight: 1.75 }}>
          {content}
        </p>
      </div>
    </article>
  );
}