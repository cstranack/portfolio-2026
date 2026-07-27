import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import CaseStudyMeta from "@/components/CaseStudyMeta";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyCallout from "@/components/CaseStudyCallout";
import CaseStudyImageBlock from "@/components/CaseStudyImageBlock";
import CaseStudyProcess from "@/components/CaseStudyProcess";
import CaseStudyDecision from "@/components/CaseStudyDecision";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";
import CaseStudySummary from "@/components/CaseStudySummary";

export default function MarkelDesignSystemPage() {
  return (
    <PageWrapper>
      <Link
        href="/#work"
        style={{
          display: "inline-block",
          marginBottom: "2rem",
          color: "var(--accent)",
          fontWeight: 600,
        }}
      >
        ← Back to selected work
      </Link>

      <section style={{ maxWidth: 920 }}>
        <p
          style={{
            color: "var(--accent)",
            fontWeight: 600,
            marginBottom: "0.75rem",
          }}
        >
          Case Study
        </p>

        <h1>Markel Internal Design System</h1>

        <p
          style={{
            color: "var(--muted)",
            fontSize: "1.25rem",
            lineHeight: 1.7,
            marginTop: "1rem",
          }}
        >
          Designing and building an Angular component library and documentation
          platform to standardise internal applications across Markel.
        </p>
      </section>

      <CaseStudySummary
        items={[
          {
            label: "The problem",
            value:
              "Internal applications were inconsistent in layout, UI behaviour and implementation, with no central reference for reusable patterns.",
          },
          {
            label: "The work",
            value:
              "I designed and developed a reusable Angular design system with standalone components, layout patterns, utilities, documentation and live usage examples.",
          },
          {
            label: "The outcome",
            value:
              "The system gives teams a scalable foundation for building consistent internal applications faster, with clearer documentation and stronger design-development alignment.",
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
            value: "Component library & documentation",
          },
        ]}
      />

      <CaseStudyCallout
        eyebrow="Key highlight"
        title="A design system built for real product delivery"
      >
        <p>
          This was not just a visual component library. I designed and built a
          working Angular system with developer-focused documentation, live
          examples, usage guidance and reusable patterns that support complex
          internal product workflows.
        </p>
      </CaseStudyCallout>

      <CaseStudyImageBlock
        imageSrc="/visuals/markel-design-system/alertBanner.png"
        imageAlt="Alert banner documentation page showing overview, usage guidance, examples and code navigation."
        label="Documentation platform"
        title="Developer-focused documentation for reusable Angular components"
        description="Each component page gives teams a central place to understand behaviour, variants, usage guidance and implementation details, helping the system feel practical rather than theoretical."
      />

      <CaseStudySection title="Overview" eyebrow="Context">
        <p>
          I designed and developed an Angular-based design system to standardise
          the look, behaviour and implementation of Markel’s internal
          applications. The system includes reusable standalone components,
          layout patterns, utilities and a dedicated documentation site to
          support adoption across product teams.
        </p>

        <p>
          The goal was to create a shared foundation that could help teams build
          consistent screens faster, reduce duplicated implementation effort and
          give developers clearer guidance when working on complex internal
          tools.
        </p>
      </CaseStudySection>

      <CaseStudyImageBlock
        imageSrc="/visuals/markel-design-system/homePage.png"
        imageAlt="Markel Design System homepage showing tech stack, layout system and CSS guidelines."
        label="System foundations"
        title="A central home for foundations, layout guidance and component documentation"
        description="The documentation site brings together the technical stack, layout system, SCSS guidance and component library so teams have one place to understand how the system should be used."
      />

      <CaseStudySection title="System structure" eyebrow="Design system layers">
        <p>
          The design system is structured around three connected layers: a
          reusable Angular component library, a developer-focused documentation
          platform, and a set of layout and pattern foundations that help teams
          build complete, consistent screens — not just isolated UI elements.
        </p>

        <ul>
          <li>
            <strong>Component library:</strong> reusable form controls, data
            components, feedback patterns and navigation components.
          </li>
          <li>
            <strong>Documentation site:</strong> live examples, real usage
            scenarios, copyable snippets and implementation guidance.
          </li>
          <li>
            <strong>Layout and patterns:</strong> page structures, form
            composition, spacing, typography and reusable screen patterns.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyProcess
        // title="How I approached it"
        steps={[
          {
            title: "Define foundations",
            description:
              "Established shared guidance for layout, spacing, typography, colour, SCSS structure and implementation principles.",
          },
          {
            title: "Build reusable components",
            description:
              "Designed and developed Angular standalone components with consistent APIs, configurable states and reusable variants.",
          },
          {
            title: "Document real usage",
            description:
              "Created documentation pages with live examples, practical scenarios, usage guidance, implementation notes and code snippets.",
          },
          {
            title: "Refine through adoption",
            description:
              "Tested components through live product work and developer feedback, improving the system as real requirements emerged.",
          },
        ]}
      />

      <CaseStudyImageBlock
        imageSrc="/visuals/markel-design-system/docUpload.png"
        imageAlt="Document upload component documentation showing reusable layers, component overview and drag-and-drop upload area."
        label="Composite component"
        title="Document upload patterns built from reusable component layers"
        description="The document upload documentation shows how smaller components can combine into a complete workflow, helping teams build richer interfaces while keeping the underlying system reusable."
      />

      <CaseStudySection title="Component library" eyebrow="Design & build">
        <p>
          The component library includes reusable UI patterns for forms, data,
          feedback, navigation and workflow-heavy interfaces. Components are
          designed with consistent APIs, configurable states and variants, and
          implementation patterns that make them easier for developers to adopt.
        </p>

        <p>
          I focused on real internal product needs rather than isolated UI demos.
          This meant prioritising components that appear repeatedly across
          enterprise tools, including status badges, tables, upload workflows,
          alerts, progress indicators, search, pagination and form inputs.
        </p>
      </CaseStudySection>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "1.25rem",
          marginTop: "3rem",
        }}
      >
        <CaseStudyImageBlock
          imageSrc="/visuals/markel-design-system/bagde.png"
          imageAlt="Badge component documentation showing overview, types, examples and usage guidance."
          label="Component variants"
          title="Badges for status, counts and lightweight metadata"
          description="Badge documentation explains when to use each badge type and how colour variants should communicate meaning across internal applications."
        />

        <CaseStudyImageBlock
          imageSrc="/visuals/markel-design-system/progTracker.png"
          imageAlt="Progress tracker documentation showing examples for basic steps, status states, counts and sub-labels."
          label="Workflow component"
          title="Progress trackers for multi-step enterprise journeys"
          description="Progress tracker patterns support step-based workflows, with variants for completion status, counts and additional sub-label context."
        />
      </div>

      <CaseStudySection title="Documentation approach" eyebrow="Adoption">
        <p>
          A key part of the project was making the system easy to understand and
          use. The documentation site was designed for developers as much as
          designers, with a consistent page structure that explains what each
          component is for, how it behaves, when to use it and how to implement
          it.
        </p>

        <p>
          Each component page follows a predictable structure with overview,
          patterns, guidance and code examples. This reduces guesswork and helps
          teams make consistent decisions without needing to reinvent UI behaviour
          for every product.
        </p>
      </CaseStudySection>

      <CaseStudyImageBlock
        imageSrc="/visuals/markel-design-system/tableCode.png"
        imageAlt="Table component documentation showing copyable code snippets and full-size table examples."
        label="Developer experience"
        title="Copyable code examples paired with real interface patterns"
        description="The documentation supports implementation as well as design guidance, giving developers reusable snippets and full-size examples for common enterprise patterns such as tables and sticky columns."
      />

      <CaseStudySection title="Key improvements" eyebrow="Before and after">
        <p>
          Before the design system, teams were manually styling layouts,
          rebuilding common components and making separate decisions about UI
          behaviour. The new system provides a shared reference point for both
          design and implementation.
        </p>
      </CaseStudySection>


        <CaseStudyDecision
            decisions={[
                {
                decision: "Improve consistency across internal applications",
                rationale:
                    "Before the design system, teams were manually styling layouts and making separate decisions about UI behaviour, which created inconsistent experiences across products.",
                impact:
                    "Created a shared visual and interaction language across components, layouts, spacing and common interface patterns.",
                },
                {
                decision: "Support developer adoption through documentation",
                rationale:
                    "Developers needed more than reusable components — they needed guidance, live examples, implementation details and clear usage patterns.",
                impact:
                    "Reduced guesswork by providing a dedicated documentation site with consistent page structures, practical examples and copyable snippets.",
                },
                {
                decision: "Design components around real product needs",
                rationale:
                    "The system needed to support complex internal tools, not just isolated UI examples, so components had to work for dense workflows and edge cases.",
                impact:
                    "Prioritised reusable patterns such as alerts, badges, progress trackers, document upload, tables and layout structures that could support live product work.",
                },
                {
                decision: "Build for flexibility and future scale",
                rationale:
                    "Markel’s internal applications will continue to evolve, so the system needed to support variation without becoming fragmented.",
                impact:
                    "Used configurable Angular components, consistent APIs and reusable layout foundations that can expand as new requirements emerge.",
                },
            ]}
            />


      <CaseStudySection title="Technical decisions" eyebrow="Implementation">
        <p>
          The system is built using Angular standalone components, supported by
          Bootstrap and a custom SCSS structure. I designed components to be
          modular and configurable, using patterns such as content projection and
          TemplateRef where teams needed flexibility for more complex use cases.
        </p>

        <p>
          The documentation was built alongside the component library, so
          adoption guidance evolved at the same time as the implementation. This
          helped keep the system grounded in live product needs rather than
          becoming a static reference library.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Impact" eyebrow="Outcome">
        <ul>
          <li>
            Created a reusable Angular component library for internal
            applications.
          </li>
          <li>
            Built a dedicated documentation site with live examples and usage
            guidance.
          </li>
          <li>
            Improved UI consistency across complex internal product workflows.
          </li>
          <li>
            Reduced duplicated implementation effort for common interface
            patterns.
          </li>
          <li>
            Created a scalable foundation for future applications and redesign
            work.
          </li>
          <li>
            Established a stronger bridge between design decisions and front-end
            delivery.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyCallout
        eyebrow="See the system in action"
        title="From shared components to real product redesign"
      >
        <p>
          The design system became a foundation for redesigning key internal
          workflows, including One Workflow — Markel’s global underwriting
          platform.
        </p>

        <Link
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
        </Link>
      </CaseStudyCallout>

      <CaseStudySection title="Reflection" eyebrow="Learning">
        <p>
          This project has been a valuable opportunity to combine my UX design
          and front-end development experience. The biggest learning has been
          that a design system is not just a collection of components — it is a
          product that needs structure, documentation, adoption and continuous
          refinement.
        </p>

        <p>
          Building the system alongside live product work helped keep it
          practical. It meant the components, patterns and documentation were
          shaped by real implementation needs, developer feedback and the
          complexity of Markel’s internal applications.
        </p>
      </CaseStudySection>

      <CaseStudyFooterNav
        nextHref="/work/ai-powered-erp"
        nextLabel="Gen AI ERP Service Enhancement"
      />
    </PageWrapper>
  );
}