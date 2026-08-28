import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import CaseStudyMeta from "@/components/CaseStudyMeta";
import CaseStudyImageBlock from "@/components/CaseStudyImageBlock";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";
import DesignSystemHero from "@/components/DesignSystemHero";
import DesignSystemFeature from "@/components/DesignSystemFeature";

export default function MarkelDesignSystemPage() {
  return (
    <PageWrapper>
      <Link href="/#work" className="ds-back-link">
        ← Back to selected work
      </Link>

      <section className="ds-case-hero">
        <div className="ds-case-hero-copy">
          <p className="ds-eyebrow">Design system · Engineering case study</p>
          <h1>Building the system behind better internal products.</h1>
          <p className="ds-case-intro">
            I designed and developed an Angular component library and documentation
            platform that turns shared design decisions into production-ready UI.
          </p>
          <div className="ds-hero-tags">
            {[
              "Angular",
              "TypeScript",
              "SCSS",
              "Bootstrap",
              "Component APIs",
            ].map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        <DesignSystemHero />
      </section>

      <CaseStudyMeta
        items={[
          { label: "Role", value: "Design system owner" },
          { label: "Ownership", value: "Design, architecture & build" },
          { label: "Stack", value: "Angular, TypeScript, Bootstrap, SCSS" },
          { label: "Users", value: "Internal product teams" },
        ]}
      />

      <section className="ds-outcomes">
        <article>
          <span>01</span>
          <h3>One shared language</h3>
          <p>Reusable components, layouts and interaction patterns across internal products.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Built for developers</h3>
          <p>Live examples, implementation guidance and copyable code alongside every component.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Proven in delivery</h3>
          <p>Components were refined through real underwriting workflows—not isolated UI exercises.</p>
        </article>
      </section>

      <DesignSystemFeature
        imageSrc="/visuals/markel-design-system/alertBanner.png"
        imageAlt="Alert banner documentation with guidance, examples and code navigation."
        eyebrow="Documentation platform"
        title="The component and its implementation, side by side."
        description="Each page combines behaviour, variants, usage guidance and live examples. Developers can understand the intent, inspect the options and move into implementation without hunting through separate sources."
        mode="tokens"
      />

      <section className="ds-build-story">
        <div>
          <p className="ds-eyebrow">What I owned</p>
          <h2>From foundations to production components.</h2>
        </div>
        <div className="ds-build-steps">
          <article><span>01</span><div><h3>Define</h3><p>Established layout, spacing, typography, colour and SCSS principles.</p></div></article>
          <article><span>02</span><div><h3>Architect</h3><p>Created consistent Angular APIs, states, variants and composition patterns.</p></div></article>
          <article><span>03</span><div><h3>Build</h3><p>Developed standalone components for forms, data, feedback and workflows.</p></div></article>
          <article><span>04</span><div><h3>Document</h3><p>Paired live examples with practical guidance and reusable snippets.</p></div></article>
        </div>
      </section>

      <DesignSystemFeature
        imageSrc="/visuals/markel-design-system/docUpload.png"
        imageAlt="Document upload documentation with reusable layers and a drag-and-drop area."
        eyebrow="Composable architecture"
        title="Small building blocks, assembled into complete workflows."
        description="Document upload demonstrates the system at its best: focused components combine into a richer workflow while keeping state, behaviour and implementation reusable."
        mode="anatomy"
        reverse
      />

      <section className="ds-component-gallery">
        <div className="ds-gallery-heading">
          <p className="ds-eyebrow">Component library</p>
          <h2>Designed around real enterprise work.</h2>
          <p>
            I prioritised patterns teams repeatedly needed in dense internal products:
            status, progress, uploads, tables, search, pagination and structured forms.
          </p>
        </div>
        <div className="ds-gallery-grid">
          <CaseStudyImageBlock
            imageSrc="/visuals/markel-design-system/bagde.png"
            imageAlt="Badge component variants and usage guidance."
            label="Status & metadata"
            title="Badges with consistent semantic variants"
          />
          <CaseStudyImageBlock
            imageSrc="/visuals/markel-design-system/progTracker.png"
            imageAlt="Progress tracker variants for multi-step workflows."
            label="Workflow state"
            title="Progress patterns for complex journeys"
          />
        </div>
      </section>

      <DesignSystemFeature
        imageSrc="/visuals/markel-design-system/tableCode.png"
        imageAlt="Table documentation with implementation snippets and full-size examples."
        eyebrow="Developer experience"
        title="Production patterns backed by clear APIs."
        description="The system pairs full-scale enterprise examples with copyable code. Modular Angular components, content projection and TemplateRef support flexibility without fragmenting the visual language."
        mode="code"
      />

      <section className="ds-decisions">
        <div className="ds-decisions-heading">
          <p className="ds-eyebrow">Engineering decisions</p>
          <h2>Flexible enough to scale. Opinionated enough to stay consistent.</h2>
        </div>
        <div className="ds-decision-grid">
          <article><code>standalone: true</code><h3>Modular by default</h3><p>Standalone Angular components make adoption incremental and dependencies clearer.</p></article>
          <article><code>&lt;ng-content /&gt;</code><h3>Composition over duplication</h3><p>Content projection supports richer use cases without multiplying near-identical components.</p></article>
          <article><code>TemplateRef&lt;T&gt;</code><h3>Controlled flexibility</h3><p>Typed templates give teams room for complex data while preserving shared structure.</p></article>
        </div>
      </section>

      <section className="ds-impact">
        <div>
          <p className="ds-eyebrow">Outcome</p>
          <h2>A foundation teams can actually ship with.</h2>
        </div>
        <ul>
          <li>Reusable Angular components for complex internal applications</li>
          <li>One documentation platform for behaviour, usage and implementation</li>
          <li>Less duplicated front-end effort across common interface patterns</li>
          <li>Stronger consistency between design intent and delivered UI</li>
          <li>A scalable base for future applications and product redesigns</li>
        </ul>
      </section>

      <section className="ds-next-story">
        <div>
          <p className="ds-eyebrow">The system in production</p>
          <h2>Shared components became the foundation for One Workflow.</h2>
          <p>
            See how I applied the system to redesign critical journeys in Markel’s
            global underwriting platform.
          </p>
        </div>
        <Link href="/work/markel-1wf">Explore the product redesign →</Link>
      </section>

      <section className="ds-reflection">
        <p className="ds-eyebrow">Reflection</p>
        <p>
          Building this system confirmed that design systems are products, not component
          inventories. Their value comes from joining thoughtful interaction design,
          sound front-end architecture, useful documentation and continuous refinement.
        </p>
      </section>

      <CaseStudyFooterNav
        nextHref="/work/ai-powered-erp"
        nextLabel="Gen AI ERP Service Enhancement"
      />
    </PageWrapper>
  );
}
