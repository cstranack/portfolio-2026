import Link from "next/link";
import BackToTopButton from "@/components/BackToTopButton";

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
      <Link href="/" style={{ color: "var(--muted)" }}>
        ← Back to home
      </Link>

      {nextHref && (
        <Link href={nextHref} style={{ fontWeight: 600 }}>
          {nextLabel} →
        </Link>
      )}
      <BackToTopButton />
    </nav>
  );
}
