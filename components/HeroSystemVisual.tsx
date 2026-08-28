export default function HeroSystemVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />

      <div className="hero-window">
        <div className="hero-window-bar">
          <span />
          <span />
          <span />
          <p>product-system.tsx</p>
        </div>

        <div className="hero-window-body">
          <div className="hero-sidebar">
            <span className="hero-sidebar-block is-active" />
            <span className="hero-sidebar-block" />
            <span className="hero-sidebar-block" />
            <span className="hero-sidebar-block is-short" />
          </div>

          <div className="hero-canvas">
            <div className="hero-code-line line-one">
              <i />
              <i />
              <i />
            </div>
            <div className="hero-code-line line-two">
              <i />
              <i />
            </div>

            <div className="hero-component-card">
              <div className="hero-card-label">Reusable component</div>
              <div className="hero-card-title" />
              <div className="hero-card-copy" />
              <div className="hero-card-copy is-short" />
              <div className="hero-card-actions">
                <span />
                <span />
              </div>
            </div>

            <div className="hero-code-line line-three">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-float-card hero-float-design">
        <span className="hero-float-icon">◆</span>
        <span>
          <strong>Design system</strong>
          <small>Clear patterns</small>
        </span>
      </div>

      <div className="hero-float-card hero-float-code">
        <span className="hero-float-icon">&lt;/&gt;</span>
        <span>
          <strong>Production UI</strong>
          <small>Built to scale</small>
        </span>
      </div>

      <div className="hero-cursor">
        <svg viewBox="0 0 24 30" role="presentation">
          <path d="M2 2L20 17H11L7 27L2 2Z" />
        </svg>
        <span>Claire</span>
      </div>
    </div>
  );
}
