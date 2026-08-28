import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  tags?: string[];
  imageSrc?: string;
  imageAlt?: string;
};

export default function ProjectCard({
  title,
  description,
  href,
  tags = [],
  imageSrc,
  imageAlt = "",
}: ProjectCardProps) {
  return (
    <Link href={href} className="project-card-link">
      <article
        className="project-card"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "20px",
          padding: "1rem",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {imageSrc && (
          <div
            className="project-card-media"
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "14px",
              overflow: "hidden",
              background: "var(--surface-soft)",
              border: "1px solid var(--border)",
              marginBottom: "1rem",
            }}
          >
            <Image
              className="project-card-image"
              src={imageSrc}
              alt={imageAlt}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "left top",
              }}
              sizes="(max-width: 700px) 100vw, (max-width: 1199px) 50vw, 33vw"
            />
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            alignItems: "flex-start",
            marginBottom: "0.75rem",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "var(--muted)",
              fontSize: "0.9rem",
            }}
          >
            Case study
          </p>

          <span
            className="project-card-arrow"
            style={{
              color: "var(--accent)",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            View →
          </span>
        </div>

        <h3 style={{ margin: "0 0 0.75rem" }}>{title}</h3>

        <p style={{ color: "var(--muted)", marginTop: 0 }}>{description}</p>

        {tags.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginTop: "auto",
              paddingTop: "1rem",
            }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: "var(--accent-soft)",
                  color: "var(--accent-strong)",
                  borderRadius: "999px",
                  padding: "0.35rem 0.6rem",
                  fontSize: "0.8rem",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
