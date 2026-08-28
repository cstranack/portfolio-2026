const steps = [
  { number: "01", label: "Intent", title: "Set the goal", detail: "Audience, purpose and tone" },
  { number: "02", label: "Assist", title: "Generate & refine", detail: "AI proposes, user directs" },
  { number: "03", label: "Control", title: "Review & approve", detail: "Nothing sends automatically" },
];

export default function AiTrustLoopVisual() {
  return (
    <section className="ai-trust-loop" aria-label="Human-centred AI interaction model">
      <div className="ai-loop-head">
        <div><span>Interaction model</span><strong>Assistance without surrendering control</strong></div>
        <p><i /> Human in the loop</p>
      </div>
      <div className="ai-loop-flow">
        {steps.map((step, index) => (
          <div className="ai-loop-stage-wrap" key={step.number}>
            <article className={index === 1 ? "is-ai" : ""}>
              <span>{step.number} · {step.label}</span>
              {index === 1 && <div className="ai-mini-orb"><i /></div>}
              {index === 0 && <div className="ai-intent-icon"><i /><i /><i /></div>}
              {index === 2 && <div className="ai-review-icon">✓</div>}
              <strong>{step.title}</strong>
              <small>{step.detail}</small>
            </article>
            {index < steps.length - 1 && <div className="ai-loop-connector"><i /></div>}
          </div>
        ))}
      </div>
      <div className="ai-loop-note"><span>Principle</span><p>Make AI capability visible, its status understandable and every consequential action reversible.</p></div>
    </section>
  );
}
