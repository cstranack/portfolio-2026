export default function SchedulingLogicVisual() {
  const rows = [
    ["Fresh", "Chilled", "08:30", "Confirmed"],
    ["Ambient", "Standard", "10:00", "Review"],
    ["Frozen", "Priority", "11:30", "Confirmed"],
  ];

  return (
    <section className="schedule-logic" aria-label="Illustration of delivery constraints becoming a clear schedule">
      <div className="schedule-rules">
        <p>Operational inputs</p>
        <div><span>01</span><strong>Product type</strong><small>Perishable / ambient</small></div>
        <div><span>02</span><strong>Warehouse capacity</strong><small>Dock availability</small></div>
        <div><span>03</span><strong>Delivery rules</strong><small>Time and handling</small></div>
      </div>
      <div className="schedule-transform"><i /><strong>Plan</strong></div>
      <div className="schedule-board">
        <div className="schedule-board-head"><strong>Tuesday · Delivery schedule</strong><span>3 deliveries</span></div>
        {rows.map((row) => (
          <div className="schedule-board-row" key={row[2]}>
            <span>{row[0]}</span><span>{row[1]}</span><strong>{row[2]}</strong><i className={row[3] === "Review" ? "is-review" : ""}>{row[3]}</i>
          </div>
        ))}
      </div>
    </section>
  );
}
