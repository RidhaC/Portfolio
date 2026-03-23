import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV = [
  { path: "/",         label: "home" },
  { path: "/projects", label: "projects" },
  { path: "/resume",   label: "resume" },
  { path: "/blog",     label: "blog" },
  { path: "/contact",  label: "contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 9000,
      backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
      background: scrolled ? "rgba(2,8,18,0.92)" : "rgba(2,8,18,0.5)",
      borderBottom: scrolled ? "1px solid rgba(0,255,157,0.14)" : "1px solid transparent",
      transition: "all 0.4s ease",
    }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
          <div style={{
            width: 34, height: 34,
            border: "1px solid rgba(0,255,157,0.45)",
            background: "rgba(0,255,157,0.06)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.7rem", color: "var(--accent)",
            clipPath: "polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)",
          }}>RC</div>
          <span style={{
            fontFamily: "'Space Mono', monospace", fontSize: "0.78rem",
            letterSpacing: "0.1em", color: "rgba(226,232,240,0.55)",
          }}>ridha.chehime</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8" style={{ listStyle: "none" }}>
          {NAV.map(({ path, label }) => (
            <li key={path}>
              <Link to={path} className={`nav-link ${pathname === path ? "active" : ""}`}
                style={{ textDecoration: "none" }}>
                <span style={{ color: "rgba(0,255,157,0.4)", marginRight: 2 }}>/</span>{label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <span className="dot-green" style={{ width: 7, height: 7 }} />
          <span style={{
            fontFamily: "'Space Mono', monospace", fontSize: "0.65rem",
            color: "rgba(0,255,157,0.55)", letterSpacing: "0.15em",
          }}>AVAILABLE</span>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer" }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: "block", height: 1,
              width: i === 1 ? (open ? 22 : 14) : 22,
              background: "var(--accent)", transition: "width 0.3s",
            }} />
          ))}
        </button>
      </div>

      <div style={{
        maxHeight: open ? 320 : 0, overflow: "hidden",
        transition: "max-height 0.35s ease",
        borderTop: open ? "1px solid rgba(0,255,157,0.1)" : "none",
        background: "rgba(2,8,18,0.97)",
      }}>
        <ul className="flex flex-col gap-5 px-8 py-6" style={{ listStyle: "none" }}>
          {NAV.map(({ path, label }) => (
            <li key={path}>
              <Link to={path} className={`nav-link ${pathname === path ? "active" : ""}`}
                style={{ textDecoration: "none", fontSize: "0.9rem" }}>
                <span style={{ color: "rgba(0,255,157,0.4)" }}>/</span>{label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}