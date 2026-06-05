type Decision = {
  decision: string;
  rationale: string;
  impact: string;
};

type CaseStudyDecisionProps = {
  decisions: Decision[];
};

export default function CaseStudyDecision({
  decisions,
}: CaseStudyDecisionProps) {
  return (
    <section style={{ marginTop: "4rem" }}>
      <h2>Key Decisions</h2>

      <div
        style={{
          display: "grid",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        {decisions.map((item) => (
          <article
            key={item.decision}
            style={{
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "1.25rem",
            }}
          >
            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.85rem",
                marginBottom: "0.5rem",
              }}
            >
              Decision
            </p>

            <h3 style={{ marginTop: 0 }}>{item.decision}</h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <div>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.85rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  Why
                </p>
                <p style={{ margin: 0 }}>{item.rationale}</p>
              </div>

              <div>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.85rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  Impact
                </p>
                <p style={{ margin: 0 }}>{item.impact}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}