export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem 1.5rem",
        marginTop: "4rem",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
          color: "var(--muted)",
          fontSize: "0.95rem",
        }}
      >
        <p>© {new Date().getFullYear()} Claire Stranack</p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="mailto:clairelstranack@gmail.com">Email</a>
          <a href="https://www.linkedin.com/" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
