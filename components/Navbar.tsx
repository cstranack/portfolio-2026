"use client";

import Link from "next/link";

export default function Navbar() {

  return (
    <header className="site-header">
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "1rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo / Name */}
        <Link href="/#top" className="site-brand" aria-label="Claire Stranack — back to homepage">
          Claire Stranack
        </Link>

        {/* Desktop links */}
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}
