type CaseStudySectionProps = {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export default function CaseStudySection({
  title,
  eyebrow,
  children,
}: CaseStudySectionProps) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(180px, 260px) 1fr",
        gap: "2rem",
        marginTop: "4rem",
        alignItems: "start",
      }}
    >
      <div>
        {eyebrow && (
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.85rem",
              marginBottom: "0.5rem",
            }}
          >
            {eyebrow}
          </p>
        )}

        <h2 style={{ marginTop: 0 }}>{title}</h2>
      </div>

      <div style={{ color: "var(--muted)", maxWidth: 720 }}>{children}</div>
    </section>
  );
}