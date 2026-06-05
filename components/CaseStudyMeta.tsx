type MetaItem = {
  label: string;
  value: string;
};

type CaseStudyMetaProps = {
  items: MetaItem[];
};

export default function CaseStudyMeta({ items }: CaseStudyMetaProps) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "1rem",
        marginTop: "2rem",
        marginBottom: "4rem",
      }}
    >
      {items.map((item) => (
        <div
          key={item.label}
          style={{
            border: "1px solid var(--border)",
            borderRadius: "14px",
            padding: "1rem",
          }}
        >
          <p style={{ color: "var(--accent)", fontSize: "0.85rem" }}>
            {item.label}
          </p>

          <p style={{ marginTop: "0.5rem" }}>{item.value}</p>
        </div>
      ))}
    </section>
  );
}