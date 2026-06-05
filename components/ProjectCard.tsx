import Link from "next/link";

type Project = {
  title: string;
  description: string;
  href: string;
  tags?: string[];
};

export default function ProjectCard({
  title,
  description,
  href,
  tags,
}: Project) {
  return (
    <Link href={href} style={{ display: "block" }}>
      <article
        style={{
          border: "1px solid var(--border)",
          background: "var(--surface)",
          padding: "1.5rem",
          borderRadius: "20px",
          marginTop: "1rem",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          boxShadow: "0 1px 0 rgba(0, 0, 0, 0.03)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          <div>
            <p
              style={{
                color: "var(--accent)",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "0.75rem",
              }}
            >
              Case study
            </p>

            <h3 style={{ fontSize: "1.5rem", maxWidth: 620 }}>{title}</h3>
          </div>

          <span
            style={{
              border: "1px solid var(--accent-soft)",
              background: "var(--accent-soft)",
              borderRadius: "999px",
              padding: "0.35rem 0.65rem",
              color: "var(--accent-strong)",
              fontSize: "0.9rem",
              whiteSpace: "nowrap",
            }}
          >
            View →
          </span>
        </div>

        <p
          style={{
            color: "var(--muted)",
            maxWidth: 720,
            marginTop: "1rem",
          }}
        >
          {description}
        </p>

        {tags && (
          <div
            style={{
              marginTop: "1.25rem",
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.8rem",
                  padding: "0.3rem 0.65rem",
                  border: "1px solid var(--border)",
                  borderRadius: "999px",
                  color: "var(--muted)",
                  background: "var(--bg)",
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