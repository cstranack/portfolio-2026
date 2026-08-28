export default function SupplyChainHeroVisual() {
  return (
    <div className="supply-hero-visual" aria-hidden="true">
      <div className="supply-map-grid" />
      <svg className="supply-route-map" viewBox="0 0 500 520" role="presentation">
        <path
          id="supplier-to-warehouse"
          d="M 100 145 C 175 130, 235 190, 292 182 S 380 150, 422 175"
          className="supply-route-path"
        />
        <path
          d="M 422 175 C 430 245, 355 265, 300 300 S 218 344, 182 375"
          className="supply-route-path is-secondary"
        />
        <circle r="5" className="supply-route-pulse">
          <animateMotion dur="4.8s" repeatCount="indefinite" path="M 100 145 C 175 130, 235 190, 292 182 S 380 150, 422 175" />
        </circle>
        <g className="supply-truck-svg">
          <rect x="-19" y="-11" width="25" height="17" rx="3" />
          <path d="M6 -7H14L20 0V6H6Z" />
          <rect x="9" y="-4" width="5" height="5" rx="1" className="supply-truck-window" />
          <circle cx="-11" cy="8" r="4" />
          <circle cx="13" cy="8" r="4" />
          <animateMotion dur="7s" repeatCount="indefinite" rotate="auto" path="M 100 145 C 175 130, 235 190, 292 182 S 380 150, 422 175" />
        </g>
      </svg>

      <div className="supply-location supply-supplier">
        <span className="supply-icon">▦</span>
        <small>Supplier</small>
        <strong>Fresh produce</strong>
      </div>

      <div className="supply-location supply-warehouse">
        <span className="supply-icon">⌂</span>
        <small>Warehouse</small>
        <strong>North depot</strong>
        <div className="supply-capacity"><i /></div>
      </div>

      <div className="supply-schedule-card">
        <div className="supply-card-head"><strong>Delivery plan</strong><span>Live</span></div>
        <div className="supply-date-row"><i>MON</i><i className="is-active">TUE</i><i>WED</i><i>THU</i></div>
        <div className="supply-slot"><span>08:30</span><div><strong>Produce delivery</strong><small>Dock 04 · Confirmed</small></div></div>
        <div className="supply-slot is-warning"><span>10:00</span><div><strong>Capacity conflict</strong><small>Review slot</small></div></div>
      </div>

      <div className="supply-status"><span>✓</span><div><strong>Slot confirmed</strong><small>Supplier notified</small></div></div>
    </div>
  );
}
