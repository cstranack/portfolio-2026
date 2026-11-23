import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import CaseStudyMeta from "@/components/CaseStudyMeta";
import CaseStudyImageBlock from "@/components/CaseStudyImageBlock";
import CaseStudyConfidentialityNote from "@/components/CaseStudyConfidentialityNote";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";
import WorkflowHeroVisual from "@/components/WorkflowHeroVisual";
import WorkflowReframeVisual from "@/components/WorkflowReframeVisual";

export default function MarkelOneWorkflowPage() {
  return (
    <PageWrapper>
      <Link href="/" className="workflow-back-link">
        ← Back to home
      </Link>

      <section className="workflow-hero">
        <div className="workflow-hero-copy">
          <p className="workflow-eyebrow">Product strategy · Enterprise UX</p>
          <h1>Simplifying the workflows behind global underwriting.</h1>
          <p>
            I led the redesign of two critical areas in Markel’s One Workflow platform,
            turning fragmented, click-heavy processes into clearer experiences shaped
            around how underwriters actually work.
          </p>
        </div>
        <WorkflowHeroVisual />
      </section>

      <CaseStudyMeta
        items={[
          { label: "Role", value: "Lead UX/UI Designer" },
          { label: "Product", value: "Global underwriting platform" },
          { label: "Scope", value: "Submission Creation & Policy Page" },
          { label: "Leadership", value: "Strategy, design direction & delivery" },
        ]}
      />

      <section className="workflow-summary">
        <article>
          <span>The friction</span>
          <p>Too many clicks, competing screen patterns, nested scrolling and information shown at the wrong level.</p>
        </article>
        <article>
          <span>My intervention</span>
          <p>Research across user groups, workflow analysis, strategic reframing and high-fidelity redesign across two workstreams.</p>
        </article>
        <article>
          <span>The result</span>
          <p>One redesigned journey released with positive feedback; the larger Policy Page redesign progressed into delivery.</p>
        </article>
      </section>

      <CaseStudyConfidentialityNote />

      <CaseStudyImageBlock
        imageSrc="/visuals/markel-1wf/before-and-after.png"
        imageAlt="Before and after comparison showing a dense table-based Policy Page transformed into a clearer structured policy view."
        label="Before and after"
        title="From dense reference-based tables to a clearer policy-level experience"
        description="The redesign reduced duplication, established a stronger hierarchy and brought related policy information into a structure users could scan and act on."
      />

      <section className="workflow-strategy">
        <div className="workflow-strategy-heading">
          <p className="workflow-eyebrow">Strategic approach</p>
          <h2>Reduce interface complexity without flattening domain complexity.</h2>
          <p>
            Underwriting contains real rules, dependencies and edge cases. The goal was
            not to hide that complexity, but to organise it around the decisions users
            needed to make.
          </p>
        </div>
        <div className="workflow-principles">
          <article><span>01</span><h3>Consolidate</h3><p>Bring related tasks together and remove unnecessary movement between screens and modals.</p></article>
          <article><span>02</span><h3>Match mental models</h3><p>Use language and structures that reflect how underwriters understand submissions and policies.</p></article>
          <article><span>03</span><h3>Design for the whole</h3><p>Move from fragmented reference-level data towards a clearer policy-level view.</p></article>
        </div>
      </section>

      <section className="workflow-research">
        <div>
          <p className="workflow-eyebrow">Discovery & direction</p>
          <h2>Patterns emerged across different user groups.</h2>
        </div>
        <div>
          <p>
            I gathered feedback from underwriters, administration teams, processing
            teams and different classes of business. Their scenarios varied, but the
            same needs kept surfacing: fewer clicks, clearer context and more direct
            routes through the work.
          </p>
          <p>
            I also audited old and current screens to expose duplicated patterns and UX
            debt. That helped us avoid adding another visual layer and identify legacy
            experiences that needed to be retired as the redesign rolled out.
          </p>
        </div>
      </section>

      <section className="workflow-workstream-heading">
        <p className="workflow-eyebrow">Workstream 01</p>
        <h2>Submission Creation</h2>
        <p>Turning a modal-heavy starting point into one direct, structured flow.</p>
      </section>

      <CaseStudyImageBlock
        imageSrc="/visuals/markel-1wf/sub-creation.png"
        imageAlt="Before and after comparison of a fragmented modal-based Submission Creation journey redesigned into one input page."
        label="Journey consolidation"
        title="From multiple modals to one clearer input page"
        description="Smarter fields, searchable dropdowns, frequently used suggestions and quicker duplication reduced unnecessary navigation at the start of the underwriting process."
      />

      <section className="workflow-result">
        <div>
          <p className="workflow-eyebrow">Released outcome</p>
          <h2>A faster start to new business.</h2>
        </div>
        <div>
          <p>
            The redesigned flow moved through development and UAT before being released
            to users. Feedback was strongly positive: users felt the more direct journey
            would save valuable underwriting time.
          </p>
          <ul>
            <li>Removed repeated movement between separate modals</li>
            <li>Made common inputs faster to find and complete</li>
            <li>Balanced familiar behaviour with a more modern interface</li>
          </ul>
        </div>
      </section>

      <section className="workflow-workstream-heading">
        <p className="workflow-eyebrow">Workstream 02</p>
        <h2>Policy Page</h2>
        <p>Reframing one of the platform’s most complex areas around the policy as a whole.</p>
      </section>

      <WorkflowReframeVisual />

      <CaseStudyImageBlock
        imageSrc="/visuals/markel-1wf/policy-page-map.png"
        imageAlt="Flow map showing the Policy Page redesign broken into sections, tabs, actions and underwriting states."
        label="Workflow architecture"
        title="Breaking a dense page into six navigable areas"
        description="Mapping the experience exposed the relationships between data, actions and states, giving the team a shared structure for tackling the redesign."
      />

      <section className="workflow-policy-story">
        <div>
          <p className="workflow-eyebrow">The pivotal decision</p>
          <h2>Shift from references to the policy.</h2>
        </div>
        <div>
          <p>
            The original page organised data, tasks and actions by reference. When a
            policy contained multiple references, users saw duplicated information and
            struggled to understand the whole picture.
          </p>
          <p>
            I reframed the experience around a policy-level view, then divided the page
            into six focused tabs. This reduced scrolling, clarified relationships and
            made the redesign manageable for users, stakeholders and delivery teams.
          </p>
        </div>
      </section>

      <CaseStudyImageBlock
        imageSrc="/visuals/markel-1wf/pricing-examples.png"
        imageAlt="Policy Page pricing designs showing policy-level quote information and pricing actions."
        label="Complexity deep dive"
        title="Making multiple pricing routes understandable at policy level"
        description="The design had to connect manual pricing in One Workflow with HX pricing in an integrated platform, while making quote status and next actions clear."
      />

      <section className="workflow-leadership">
        <div>
          <p className="workflow-eyebrow">Design leadership</p>
          <h2>Scaling the work without losing the strategy.</h2>
        </div>
        <p>
          As the Policy Page grew in scope, I brought in and managed a UX/UI contractor.
          I set direction, shared domain context, reviewed outputs and maintained
          consistency across a four-month design effort—while working closely with
          product, business analysts and engineering to keep decisions feasible.
        </p>
      </section>

      <section className="workflow-impact">
        <div>
          <p className="workflow-eyebrow">Combined impact</p>
          <h2>Clearer journeys, stronger product foundations.</h2>
        </div>
        <div className="workflow-impact-grid">
          <article><strong>1</strong><p>Core journey released after development and UAT</p></article>
          <article><strong>6</strong><p>Policy Page areas structured into focused tabs</p></article>
          <article><strong>2</strong><p>Major workstreams led from discovery into delivery</p></article>
          <article><strong>+</strong><p>Reusable patterns applied across critical workflows</p></article>
        </div>
      </section>

      <section className="workflow-reflection">
        <p className="workflow-eyebrow">Reflection</p>
        <p>
          The most important design move was not a component or layout—it was finding
          the right level at which to organise the work. Once the experience reflected
          the policy, rather than the underlying references, the interface could support
          complexity without making users carry all of it themselves.
        </p>
      </section>

      <CaseStudyFooterNav
        nextHref="/work/markel-design-system"
        nextLabel="Markel Internal Design System"
      />
    </PageWrapper>
  );
}
