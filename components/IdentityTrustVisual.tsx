export default function IdentityTrustVisual() {
  return (
    <section className="identity-trust-visual" aria-label="Illustration of a secure identity verification journey">
      <div className="identity-step">
        <span className="identity-step-icon">1</span>
        <div><small>Understand</small><strong>Why am I being asked?</strong></div>
      </div>
      <div className="identity-connector"><i /></div>
      <div className="identity-step is-active">
        <span className="identity-step-icon">2</span>
        <div><small>Verify</small><strong>Prove it’s really you</strong></div>
        <div className="identity-face"><i /><i /><span /></div>
      </div>
      <div className="identity-connector"><i /></div>
      <div className="identity-step">
        <span className="identity-step-icon">3</span>
        <div><small>Access</small><strong>Open your document</strong></div>
      </div>

      <div className="identity-permission">
        <div><span>Privacy check</span><i>Secure</i></div>
        <p>This service will confirm:</p>
        <ul><li><span>✓</span>Your identity</li><li><span>✓</span>Your document eligibility</li></ul>
        <button>Continue securely</button>
      </div>
    </section>
  );
}
