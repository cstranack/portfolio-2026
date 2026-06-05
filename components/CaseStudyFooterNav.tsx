import Link from "next/link";

type CaseStudyFooterNavProps = {
  nextHref?: string;
  nextLabel?: string;
};

export default function CaseStudyFooterNav({
  nextHref,
  nextLabel = "Next project",
}: CaseStudyFooterNavProps) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        marginTop: "5rem",
        paddingTop: "2rem",
        borderTop: "1px solid var(--border)",
        flexWrap: "wrap",
      }}
    >
      <Link href="/#work" style={{ color: "var(--muted)" }}>
        ← Back to selected work
      </Link>

      {nextHref && (
        <Link href={nextHref} style={{ fontWeight: 600 }}>
          {nextLabel} →
        </Link>
      )}
    </nav>
  );
}