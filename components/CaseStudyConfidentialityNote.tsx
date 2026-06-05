export default function CaseStudyConfidentialityNote() {
  return (
    <aside
        style={{
        marginTop: "2rem",
        padding: "1rem 1.25rem",
        border: "1px solid var(--accent-soft)",
        borderRadius: "14px",
        background: "var(--surface)",
        }}
    >
      <p
        style={{
          margin: 0,
          color: "var(--muted)",
          fontSize: "0.95rem",
        }}
      >
        Due to the confidential nature of this client work, some identifying
        details and interface visuals have been adapted or summarised. The case
        study focuses on my design process, decision-making and contribution.
      </p>
    </aside>
  );
}