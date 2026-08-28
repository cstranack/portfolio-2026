const stages = [
  { step: "01", title: "Farm", detail: "Order prepared", x: 130, y: 210 },
  { step: "02", title: "Warehouse", detail: "Capacity checked", x: 600, y: 210 },
  { step: "03", title: "Store", detail: "Stock received", x: 1070, y: 210 },
];

function StageIcon({ index }: { index: number }) {
  if (index === 0) {
    return <>
      <path d="M-29 17V-10L-21-25-10-31 1-25 9-10V17M-33 17H13" />
      <circle cx="-10" cy="-13" r="5" />
      <path d="M-17 17V3Q-17-1-13-1H-7Q-3-1-3 3V17" />
      <path d="M21 17V-24M21-16L15-20M21-11L27-16M21-4L15-9M21 2L27-3M21 9L15 4" />
    </>;
  }
  if (index === 1) {
    return <>
      <path d="M-27 20V-16L0-30 27-16V20" />
      <path d="M-16 20V-2H0V20M0 20V-10H14V20M-8-2V-13Q-8-19-2-19H2Q8-19 8-13V-10" />
    </>;
  }
  return <>
    <path d="M-25-12H25L19-25H-19ZM-25-12Q-25-4-18-4T-10-12Q-10-4-3-4T5-12Q5-4 12-4T20-12Q20-4 25-4" />
    <path d="M-20-4V21H20V-4M-13 15V2H-2V15M7 21V2Q7-3 12-3T17 2V21" />
    <path d="M-10-25L-13-12M0-25V-12M10-25L13-12" />
  </>;
}

export default function SupplyJourneyVisual() {
  const route = "M130 210 C285 210 425 150 600 210 S915 210 1070 210";

  return (
    <figure className="supply-journey-figure">
      <div className="supply-journey-heading">
        <div><span>Live journey model</span><strong>Fresh produce · Tuesday plan</strong></div>
        <p><i /> End-to-end delivery</p>
      </div>

      <div className="supply-journey-canvas">
        <svg viewBox="0 0 1200 410" role="img" aria-labelledby="supply-journey-title supply-journey-desc">
          <title id="supply-journey-title">End-to-end supermarket supply journey</title>
          <desc id="supply-journey-desc">A continuous animated route connects supplier, collection, warehouse, distribution and store.</desc>
          <defs>
            <linearGradient id="journey-route-gradient" x1="0" x2="1">
              <stop offset="0" stopColor="#9b83dc" />
              <stop offset=".5" stopColor="#6d4bc3" />
              <stop offset="1" stopColor="#4f9a72" />
            </linearGradient>
            <filter id="journey-shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#342357" floodOpacity=".14" />
            </filter>
            <pattern id="journey-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0V32" fill="none" stroke="#6d4bc3" strokeOpacity=".07" />
            </pattern>
            <path id="journey-motion-path" d={route} />
          </defs>

          <rect width="1200" height="410" rx="24" fill="url(#journey-grid)" />
          <path className="journey-route-halo" d={route} />
          <path className="journey-route-line" d={route} />

          <g className="journey-moving-truck">
            <rect x="-25" y="-14" width="30" height="22" rx="3" />
            <path className="journey-truck-cab" d="M5-8H15L24 0V8H5Z" />
            <path className="journey-truck-window" d="M9-5H14L19 0H9Z" />
            <circle cx="-14" cy="11" r="6" />
            <circle cx="15" cy="11" r="6" />
            <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
              <mpath href="#journey-motion-path" />
            </animateMotion>
          </g>

          {stages.map((stage, index) => (
            <g className="journey-stage" key={stage.title} transform={`translate(${stage.x} ${stage.y})`}>
              <circle className="journey-stage-disc" r="43" filter="url(#journey-shadow)" />
              <g className="journey-stage-icon"><StageIcon index={index} /></g>
              <g className="journey-stage-label" transform="translate(-84 74)">
                <rect width="168" height="66" rx="13" />
                <text x="14" y="20" className="journey-stage-step">{stage.step}</text>
                <text x="14" y="40" className="journey-stage-title">{stage.title}</text>
                <text x="14" y="56" className="journey-stage-detail">{stage.detail}</text>
              </g>
            </g>
          ))}
        </svg>
      </div>

      <figcaption>
        <span>Journey mapping</span>
        <p>Connecting supplier actions with warehouse planning</p>
        <small>Mapping each handoff made dates, capacity, product scenarios and downstream impact visible before detailed prototyping began.</small>
      </figcaption>
    </figure>
  );
}
