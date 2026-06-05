type ProcessStep = {
  title: string;
  description: string;
};

type CaseStudyProcessProps = {
  steps: ProcessStep[];
};

export default function CaseStudyProcess({ steps }: CaseStudyProcessProps) {
  return (
    <section style={{ marginTop: "4rem" }}>
      <h2>Process</h2>

      <div
        style={{
          display: "grid",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={step.title}
            style={{
              display: "grid",
              gridTemplateColumns: "48px 1fr",
              gap: "1rem",
              alignItems: "start",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "1rem",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "999px",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--muted)",
                fontSize: "0.9rem",
              }}
            >
              {index + 1}
            </div>

            <div>
              <h3 style={{ margin: 0 }}>{step.title}</h3>
              <p style={{ color: "var(--muted)", marginTop: "0.5rem" }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}