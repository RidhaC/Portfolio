import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(0,255,157,0.08)",
      background: "rgba(2,8,18,0.95)",
      backdropFilter: "blur(20px)",
      position: "relative", zIndex: 1,
    }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.8rem", color: "var(--accent)" }}>
              ridha.chehime
            </p>
            <p style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.65rem", color: "var(--text-muted)", marginTop: 3 }}>
              Cybersecurity Student · WMU '26
            </p>
          </div>

          <p style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.65rem", color: "rgba(74,96,128,0.5)" }}>
            © {new Date().getFullYear()} Ridha Chehime · All rights reserved
          </p>

        </div>

        <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(0,255,157,0.05)" }}>
          <div className="flex items-center justify-center gap-3">
            <div className="divider" style={{ width: 60 }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.6rem", color: "rgba(0,255,157,0.25)", letterSpacing: "0.3em" }}>
              SECURE · DEFEND · PROTECT
            </span>
            <div className="divider" style={{ width: 60 }} />
          </div>
        </div>
      </div>
    </footer>
  );
}