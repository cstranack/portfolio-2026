import PageWrapper from "@/components/PageWrapper";
import CaseStudyMeta from "@/components/CaseStudyMeta";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyCallout from "@/components/CaseStudyCallout";
import CaseStudyImageBlock from "@/components/CaseStudyImageBlock";
import CaseStudyProcess from "@/components/CaseStudyProcess";
import CaseStudyDecision from "@/components/CaseStudyDecision";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";
import CaseStudySummary from "@/components/CaseStudySummary";
import CaseStudyConfidentialityNote from "@/components/CaseStudyConfidentialityNote";
import Link from "next/link";

export default function MarkelDesignSystemPage() {
  return (
    <PageWrapper>
      <Link
        href="/#work"
        style={{
          display: "inline-block",
          marginTop: "2rem",
          color: "var(--muted)",
          fontSize: "0.95rem",
        }}
      >
        ← Back to selected work
      </Link>

      <section style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
        <p style={{ color: "var(--muted)" }}>Case Study</p>

        <h1 style={{ fontSize: "3rem", lineHeight: 1.1, marginTop: "1rem" }}>
          Markel Internal Design System
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--muted)",
            maxWidth: 720,
          }}
        >
          Creating a scalable component library and design foundation to
          modernise Markel’s internal product ecosystem.
        </p>
      </section>

      <CaseStudySummary
        items={[
          {
            label: "The problem",
            value:
              "Internal applications varied widely in UI patterns, usability, visual language and code conventions, creating inconsistency and growing UX debt.",
          },
          {
            label: "The work",
            value:
              "I led the design and front-end architecture of a reusable Angular and Bootstrap design system, covering foundations, components, documentation and governance.",
          },
          {
            label: "The outcome",
            value:
              "The system became the foundation for new internal applications and redesigns, improving consistency, delivery speed and scalability across Markel products.",
          },
        ]}
      />

      <CaseStudyMeta
        items={[
          {
            label: "Role",
            value: "Design system owner",
          },
          {
            label: "Company",
            value: "Markel",
          },
          {
            label: "Stack",
            value: "Angular, Bootstrap, SCSS",
          },
          {
            label: "Focus",
            value: "Enterprise product ecosystem",
          },
        ]}
      />

      <CaseStudyCallout title="A design system that bridges product design and front-end delivery">
        <p>
          This project was not only about making Markel’s internal tools look
          consistent. It was about creating reusable patterns, component
          architecture and documentation that could help teams build complex
          internal applications faster and with a higher baseline of quality.
        </p>
      </CaseStudyCallout>

       <CaseStudyImageBlock
        imageSrc="/visuals/markel-design-system/Frame 4.png"
        imageAlt="Design system component index grouped by display and feedback, form inputs, navigation, and data tables."
        label="Design system structure"
        title="Organising components by product use case"
        description="Components were grouped into categories such as feedback, forms, navigation and data-heavy table patterns to help teams find and apply them consistently."
        />

      <CaseStudySection title="Overview" eyebrow="Context">
        <p>
          When I joined Markel, internal applications varied widely across visual
          design, usability, UI patterns and code conventions. Teams were often
          rebuilding similar components from scratch, which created duplicated
          effort, inconsistent experiences and growing design and technical debt.
        </p>

        <p>
          As part of a broader initiative to modernise internal tools, I led the
          creation of a scalable design system for use across the business. The
          system defines both the visual foundation and reusable front-end
          component architecture for future Markel products.
        </p>
      </CaseStudySection>

      <CaseStudySection title="The Challenge" eyebrow="Problem">
        <p>
          Markel’s internal products support complex, data-heavy workflows,
          particularly across underwriting and operational tools. These
          interfaces need to handle dense information, validation, filtering,
          multi-step flows, status indicators, batch actions and contextual
          menus.
        </p>

        <p>
          Without shared standards, teams approached these problems differently.
          This led to visual inconsistency, duplicated code, slower onboarding
          for developers and a less predictable experience for users moving
          between internal applications.
        </p>
      </CaseStudySection>

      <CaseStudyProcess
        steps={[
          {
            title: "Define foundations",
            description:
              "Established shared principles for colour, typography, spacing, accessibility, iconography and interaction behaviour across internal products.",
          },
          {
            title: "Build reusable components",
            description:
              "Designed and implemented core Angular and Bootstrap components, supported by a custom SCSS token library for consistent styling.",
          },
          {
            title: "Document usage patterns",
            description:
              "Created documentation covering component behaviour, code examples, accessibility notes, usage guidance, limitations and anti-patterns.",
          },
          {
            title: "Create governance and feedback loops",
            description:
              "Established a contribution model so teams could request enhancements, validate needs and adopt components with clearer release guidance.",
          },
        ]}
      />

      <CaseStudyDecision
        decisions={[
          {
            decision:
              "Prioritise data-heavy components early",
            rationale:
              "Many Markel applications rely on dense operational data, so components like grids, filters, badges and contextual menus would have the biggest immediate value.",
            impact:
              "Helped teams support complex workflows more consistently while reducing the need to rebuild common interface patterns from scratch.",
          },
          {
            decision:
              "Build the system in the same stack used by delivery teams",
            rationale:
              "The design system needed to be practical for real implementation, not just a Figma library disconnected from engineering workflows.",
            impact:
              "Made adoption easier by providing reusable Angular, Bootstrap and SCSS patterns that developers could integrate directly into applications.",
          },
          {
            decision:
              "Create documentation for both usage and contribution",
            rationale:
              "A design system only scales if teams understand when to use components, how they behave and how to request changes safely.",
            impact:
              "Improved consistency, reduced ambiguity and created a more sustainable model for evolving the system over time.",
          },
          {
            decision:
              "Design for evolution rather than a fixed library",
            rationale:
              "Markel’s internal tools will continue to grow, especially through initiatives such as One Workflow and future analytics capabilities.",
            impact:
              "Created a foundation that can expand into new components, layout templates, notifications and cross-application behaviours.",
          },
        ]}
      />

    <CaseStudyImageBlock
    imageSrc="/visuals/markel-design-system/Frame 1.png"
    imageAlt="Badge component documentation showing text label badges, square badges and pill badge variants."
    label="Component variants"
    title="Badge variants for status, labels and counters"
    description="Badge documentation covered multiple variants including text labels, square counters and pill badges, helping teams apply consistent status and notification patterns across internal applications."
    />

    <CaseStudyImageBlock
    imageSrc="/visuals/markel-design-system/Frame 7.png"
    imageAlt="Alert banner documentation showing variations with primary actions, secondary actions and close behaviour."
    label="Interaction patterns"
    title="Alert banner variations with actions and close behaviour"
    description="Alert banner documentation covered different combinations of actions, close behaviour and usage patterns to support consistent feedback across internal applications."
    />

      <CaseStudySection title="Component System" eyebrow="Design & build">
        <p>
          The design system includes foundations and reusable components for the
          patterns most commonly needed across Markel’s internal tools. This
          includes form controls, navigation patterns, buttons, status badges and
          complex table interactions.
        </p>

        <p>
          One of the most important components is the data grid, designed to
          support server-side async loading, configurable columns, validation,
          conditional formatting, sorting, filtering, pagination, multi-select
          and row or cell-level actions.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Governance" eyebrow="Scaling adoption">
        <p>
          To keep the system stable and trustworthy, I established documentation
          and contribution guidance covering component usage, accessibility,
          code examples, release notes and known limitations.
        </p>

        <p>
          Teams can request enhancements or new components, which are reviewed
          against user need, technical feasibility and wider product consistency
          before being added to the system.
        </p>
      </CaseStudySection>

    <CaseStudyImageBlock
    imageSrc="/visuals/markel-design-system/Frame 6.png"
    imageAlt="Progress tracker component documentation showing multiple steps and sub-step labels."
    label="Workflow component"
    title="Progress tracker designed for complex multi-step processes"
    description="The progress tracker component was documented with support for multiple steps and optional sub-step labels, helping teams apply a consistent pattern across longer enterprise workflows."
    />

      <CaseStudySection title="Impact" eyebrow="Outcome">
        <ul style={{ paddingLeft: "1.25rem" }}>
          <li>
            Created a shared visual and functional language for Markel internal
            applications.
          </li>
          <li>
            Reduced duplicated component work by giving teams reusable Angular
            and Bootstrap patterns.
          </li>
          <li>
            Improved consistency across data-heavy enterprise workflows.
          </li>
          <li>
            Established documentation, governance and contribution processes for
            future scalability.
          </li>
          <li>
            Provided a foundation for new applications and redesigns, including
            ongoing One Workflow transformation work.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyCallout
        eyebrow="See the system in action"
        title="From shared components to real product redesign"
        >
        <p>
            The design system became a foundation for redesigning key internal workflows,
            including One Workflow — Markel’s global underwriting platform.
        </p>

        <a
            href="/work/markel-1wf"
            style={{
            display: "inline-block",
            marginTop: "1.25rem",
            background: "var(--accent)",
            color: "var(--bg)",
            padding: "0.85rem 1.1rem",
            borderRadius: "999px",
            fontWeight: 600,
            }}
        >
            See the impact in One Workflow →
        </a>
        </CaseStudyCallout>

      <CaseStudySection title="Reflection" eyebrow="Learning">
        <p>
          This project has been a valuable opportunity to combine my UX design
          and front-end development experience. The most important lesson has
          been that a design system is not just a collection of components — it
          is a shared product that needs governance, documentation, adoption and
          continuous improvement.
        </p>

        <p>
          It has also reinforced how powerful a design system can be in complex
          enterprise environments, where consistency, accessibility and delivery
          speed all have a direct impact on the quality of internal tools.
        </p>
      </CaseStudySection>

      <CaseStudyFooterNav
        nextHref="/work/ai-powered-erp"
        nextLabel="Gen AI ERP Service Enhancement"
      />
    </PageWrapper>
  );
}