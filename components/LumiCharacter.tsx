export default function LumiCharacter() {
  return (
    <div className="lumi-scene" role="img" aria-label="Lumi, a friendly green AI assistant, gently floating and blinking">
      <div className="lumi-ambient lumi-ambient-one" />
      <div className="lumi-ambient lumi-ambient-two" />
      <div className="lumi-orbit-ring"><i /><i /><i /></div>
      <div className="lumi-float">
        <div className="lumi-shadow" />
        <div className="lumi-body">
          <div className="lumi-sheen" />
          <div className="lumi-face"><i className="lumi-eye" /><i className="lumi-eye" /></div>
        </div>
      </div>
      <div className="lumi-status"><i /> Lumi is ready</div>
    </div>
  );
}
