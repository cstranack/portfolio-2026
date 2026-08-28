export default function WorkflowReframeVisual() {
  return (
    <section className="wf-reframe" aria-label="Diagram showing reference-level information consolidated into a policy-level view">
      <div className="wf-reframe-side">
        <p>Before · Reference level</p>
        {["Reference A", "Reference B", "Reference C"].map((label, index) => (
          <div className="wf-reference" key={label}>
            <span>0{index + 1}</span>
            <div><strong>{label}</strong><i /><i className="is-short" /></div>
            <small>Tasks · Quote · Data</small>
          </div>
        ))}
      </div>

      <div className="wf-reframe-flow">
        <span className="wf-flow-pulse" />
        <strong>Reframe</strong>
      </div>

      <div className="wf-reframe-side is-after">
        <p>After · Policy level</p>
        <div className="wf-policy-view">
          <div className="wf-policy-view-head"><strong>Policy overview</strong><span>Clear whole</span></div>
          <div className="wf-policy-tabs"><i>Summary</i><i>Quotes</i><i>Tasks</i></div>
          <div className="wf-policy-view-body"><span /><span /><span /></div>
          <small>One place for related information and actions</small>
        </div>
      </div>
    </section>
  );
}
