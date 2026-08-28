export default function WorkflowHeroVisual() {
  return (
    <div className="wf-hero-visual" aria-hidden="true">
      <div className="wf-grid" />
      <div className="wf-flow-line"><span /></div>

      <div className="wf-stage-card wf-stage-submission">
        <small>01 · Submission</small>
        <strong>New business</strong>
        <div className="wf-field"><i /><span /></div>
        <div className="wf-field"><i /><span /></div>
        <div className="wf-field is-short"><i /><span /></div>
      </div>

      <div className="wf-stage-node wf-node-review"><span>02</span><strong>Review</strong></div>
      <div className="wf-stage-node wf-node-price"><span>03</span><strong>Price</strong></div>
      <div className="wf-stage-node wf-node-bind"><span>04</span><strong>Bind</strong></div>

      <div className="wf-policy-card">
        <div className="wf-policy-head"><span>Policy overview</span><i>In progress</i></div>
        <div className="wf-policy-metric"><small>Quote premium</small><strong>£124,500</strong></div>
        <div className="wf-policy-progress"><span /></div>
        <div className="wf-policy-meta"><span>3 tasks</span><span>2 quotes</span><span>1 policy</span></div>
      </div>

      <div className="wf-cursor">
        <svg viewBox="0 0 24 30"><path d="M2 2L20 17H11L7 27L2 2Z" /></svg>
        <span>Next action</span>
      </div>
    </div>
  );
}
