export default function WalletHeroVisual() {
  return (
    <div className="wallet-hero-visual" aria-hidden="true">
      <div className="wallet-halo" />
      <div className="wallet-security-ring ring-one" />
      <div className="wallet-security-ring ring-two" />

      <div className="wallet-phone">
        <div className="wallet-phone-bar"><span>9:41</span><i /></div>
        <div className="wallet-phone-body">
          <div className="wallet-app-head"><span>Wallet</span><i>•••</i></div>
          <p>Your documents</p>
          <div className="wallet-document-card">
            <div className="wallet-crown">♛</div>
            <small>Government document</small>
            <strong>Veteran card</strong>
            <div className="wallet-doc-meta"><span>Verified</span><i /></div>
          </div>
          <div className="wallet-add-row"><span>＋</span><div><strong>Add a document</strong><small>Verify and save securely</small></div></div>
        </div>
      </div>

      <div className="wallet-verify-card">
        <div className="wallet-shield"><span>✓</span></div>
        <div><strong>Identity verified</strong><small>Your details match</small></div>
      </div>

      <div className="wallet-privacy-card">
        <span>◉</span>
        <div><strong>You’re in control</strong><small>Share only what’s needed</small></div>
      </div>

      <div className="wallet-scan-line" />
    </div>
  );
}
