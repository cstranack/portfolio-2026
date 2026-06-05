import Image from "next/image";

type CaseStudyImageBlockProps = {
  label?: string;
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function CaseStudyImageBlock({
  label = "Visual",
  title,
  description,
  imageSrc,
  imageAlt = "",
}: CaseStudyImageBlockProps) {
  return (
    <figure style={{ marginTop: "3rem", marginBottom: "3rem" }}>
      <div
        style={{
          border: "1px solid var(--border)",
          borderRadius: "20px",
          background:
            "linear-gradient(135deg, var(--accent-soft) 0%, var(--surface) 52%, var(--surface-soft) 100%)",
          padding: "1rem",
          overflow: "hidden",
        }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1400}
            height={900}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "14px",
              border: "1px solid var(--border)",
            }}
          />
        ) : (
          <div
            style={{
              minHeight: "320px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div>
              <p
                style={{
                  color: "var(--accent)",
                  fontSize: "0.85rem",
                  marginBottom: "0.75rem",
                  fontWeight: 600,
                }}
              >
                {label}
              </p>

              <h3 style={{ fontSize: "1.5rem", lineHeight: 1.2 }}>{title}</h3>

              {description && (
                <p
                  style={{
                    color: "var(--muted)",
                    maxWidth: 520,
                    marginTop: "1rem",
                  }}
                >
                  {description}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      <figcaption style={{ marginTop: "0.85rem" }}>
        <p
          style={{
            color: "var(--accent)",
            fontSize: "0.85rem",
            fontWeight: 600,
            marginBottom: "0.25rem",
          }}
        >
          {label}
        </p>

        <p style={{ color: "var(--muted)", margin: 0 }}>{title}</p>

        {description && (
          <p style={{ color: "var(--muted)", marginTop: "0.25rem" }}>
            {description}
          </p>
        )}
      </figcaption>
    </figure>
  );
}