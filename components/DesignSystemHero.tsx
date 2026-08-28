export default function DesignSystemHero() {
  return (
    <div className="ds-hero-visual" aria-hidden="true">
      <div className="ds-hero-grid" />

      <div className="ds-component-preview">
        <div className="ds-preview-bar">
          <span />
          <span />
          <span />
          <small>alert-banner.component.ts</small>
        </div>
        <div className="ds-preview-body">
          <div className="ds-preview-label">Live component</div>
          <div className="ds-alert-row">
            <div className="ds-alert-icon">!</div>
            <div>
              <strong>Application update</strong>
              <i />
              <i className="is-short" />
            </div>
            <button>Action</button>
          </div>
          <div className="ds-preview-code">
            <span>&lt;app-alert</span>
            <span className="is-indent">variant=&quot;information&quot;</span>
            <span className="is-indent">[dismissible]=&quot;true&quot;</span>
            <span>/&gt;</span>
          </div>
        </div>
      </div>

      <div className="ds-token-card ds-token-colour">
        <span className="ds-token-swatch" />
        <div><strong>brand-600</strong><small>#6D4BC3</small></div>
      </div>
      <div className="ds-token-card ds-token-space">
        <span className="ds-space-bars"><i /><i /><i /></span>
        <div><strong>space-4</strong><small>16px</small></div>
      </div>
      <div className="ds-status-pill"><span /> Component ready</div>
    </div>
  );
}
