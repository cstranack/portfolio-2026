type SummaryItem = {
  label: string;
  value: string;
};

type CaseStudySummaryProps = {
  items: SummaryItem[];
};

export default function CaseStudySummary({ items }: CaseStudySummaryProps) {
  return (
    <section
      style={{
        marginTop: "2rem",
        padding: "1.5rem",
        border: "1px solid var(--border)",
        borderRadius: "18px",
        background: "var(--surface)",
      }}
    >
      <p
        style={{
        color: "var(--accent)",
        fontSize: "0.85rem",
        fontWeight: 600,
        marginBottom: "1rem",
        }}
      >
        At a glance
      </p>

      <div
        style={{
          display: "grid",
          gap: "1rem",
        }}
      >
        {items.map((item) => (
          <div key={item.label}>
            <p
              style={{
                fontWeight: 600,
                marginBottom: "0.25rem",
              }}
            >
              {item.label}
            </p>

            <p
              style={{
                color: "var(--muted)",
                margin: 0,
              }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}