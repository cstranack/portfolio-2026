import Image from "next/image";

type DesignSystemFeatureProps = {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  mode: "tokens" | "anatomy" | "code";
  reverse?: boolean;
};

export default function DesignSystemFeature({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
  mode,
  reverse = false,
}: DesignSystemFeatureProps) {
  return (
    <section className={`ds-feature${reverse ? " is-reverse" : ""}`}>
      <div className="ds-feature-image">
        <Image src={imageSrc} alt={imageAlt} width={1400} height={900} />
      </div>

      <div className="ds-feature-copy">
        <p className="ds-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>

        {mode === "tokens" && (
          <div className="ds-mini-panel ds-mini-tokens">
            <span style={{ background: "#362F71" }} />
            <span style={{ background: "#6D4BC3" }} />
            <span style={{ background: "#BBA7F0" }} />
            <span style={{ background: "#EEE8FF" }} />
            <small>Semantic colour variants</small>
          </div>
        )}

        {mode === "anatomy" && (
          <div className="ds-mini-panel ds-mini-anatomy">
            <span><i>01</i> Trigger</span>
            <span><i>02</i> Drop zone</span>
            <span><i>03</i> File state</span>
          </div>
        )}

        {mode === "code" && (
          <div className="ds-mini-panel ds-mini-code">
            <span><i>const</i> columns = signal(...)</span>
            <span><i>&lt;ds-table</i> [data]=&quot;rows&quot; /&gt;</span>
            <small>Reusable API + live example</small>
          </div>
        )}
      </div>
    </section>
  );
}
