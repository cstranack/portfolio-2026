export default function AiErpHeroVisual() {
  return (
    <div className="ai-hero-visual" aria-label="Animated concept showing an AI assistant helping draft a business communication">
      <div className="ai-orbit ai-orbit-one" />
      <div className="ai-orbit ai-orbit-two" />

      <div className="ai-workspace-card">
        <div className="ai-workspace-head"><span>New communication</span><i>Draft</i></div>
        <div className="ai-prompt-label">What would you like to create?</div>
        <div className="ai-prompt-box">
          <p>Invite regional teams to the annual conference</p>
          <span>↑</span>
        </div>
        <div className="ai-prompt-chips"><span>Professional</span><span>Warm</span><span>Concise</span></div>
        <div className="ai-generation"><i /><i /><i /></div>
        <div className="ai-output-lines"><i /><i /><i /></div>
        <div className="ai-output-actions"><span>Refine tone</span><strong>Review draft →</strong></div>
      </div>

      <div className="ai-assistant-badge">
        <div className="ai-assistant-orb"><i /></div>
        <div><strong>Lumi</strong><small>AI assistant · Ready</small></div>
      </div>

      <div className="ai-control-card">
        <span>Human review</span>
        <strong>You approve every message</strong>
        <div><i /> In your control</div>
      </div>
    </div>
  );
}
