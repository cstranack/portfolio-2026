type CaseStudyCalloutProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
};

export default function CaseStudyCallout({
  eyebrow = "Key highlight",
  title,
  children,
}: CaseStudyCalloutProps) {
  return (
    <aside
        style={{
        marginTop: "3rem",
        padding: "1.5rem",
        borderRadius: "18px",
        border: "1px solid var(--accent-soft)",
        background: "linear-gradient(135deg, var(--accent-soft), var(--surface))",
        }}
    >
      <p
        style={{
          color: "var(--accent-strong)",
          fontSize: "0.85rem",
          marginBottom: "0.75rem",
        }}
      >
        {eyebrow}
      </p>

      <h3 style={{ fontSize: "1.5rem", lineHeight: 1.2 }}>{title}</h3>

      <div style={{ color: "var(--muted)", maxWidth: 720, marginTop: "1rem" }}>
        {children}
      </div>
    </aside>
  );
}