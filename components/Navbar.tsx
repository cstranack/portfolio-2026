"use client";


export default function Navbar() {

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        background: "rgba(251, 250, 248, 0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          padding: "1rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo / Name */}
        <div style={{ fontWeight: 700, letterSpacing: "-0.03em" }}>
          Claire Stranack
        </div>

        {/* Desktop links */}
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}