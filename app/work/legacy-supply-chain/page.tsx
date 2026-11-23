import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import CaseStudyMeta from "@/components/CaseStudyMeta";
import CaseStudyImageBlock from "@/components/CaseStudyImageBlock";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";
import SupplyChainHeroVisual from "@/components/SupplyChainHeroVisual";
import SchedulingLogicVisual from "@/components/SchedulingLogicVisual";
import SupplyJourneyVisual from "@/components/SupplyJourneyVisual";

export default function LegacySupplyChainPage() {
  return (
    <PageWrapper>
      <Link href="/" className="supply-back-link">
        ← Back to home
      </Link>

      <section className="supply-case-hero">
        <div className="supply-case-copy">
          <p className="supply-eyebrow">Operational UX · Legacy modernisation</p>
          <h1>Modernising the journeys that keep deliveries moving.</h1>
          <p>
            I redesigned supplier-to-warehouse scheduling for a leading UK
            supermarket, translating complex operational rules into more than 20
            clearer journeys for planning, monitoring and amending deliveries.
          </p>
        </div>
        <SupplyChainHeroVisual />
      </section>

      <CaseStudyMeta
        items={[
          { label: "Role", value: "UX Designer" },
          { label: "Client", value: "Leading UK supermarket" },
          { label: "Duration", value: "5 months" },
          { label: "Scope", value: "20+ scheduling journeys" },
        ]}
      />

      <section className="supply-summary">
        <article><span>The system</span><p>A 20-year-old desktop platform supporting daily supplier and warehouse operations.</p></article>
        <article><span>The challenge</span><p>Modernise complex scheduling journeys at pace without losing critical rules or edge cases.</p></article>
        <article><span>The delivery</span><p>Validated high-fidelity prototypes, stakeholder sign-off and a structured handover to the in-house team.</p></article>
      </section>

      <CaseStudyImageBlock
        imageSrc="/visuals/legacy-supply-chain/before-after.png"
        imageAlt="Before and after comparison of a legacy supply-chain desktop system redesigned as a web interface."
        label="Before and after"
        title="From a dense legacy desktop tool to a clearer planning experience"
        description="The redesign introduced stronger hierarchy, visible actions, clearer filters and more usable delivery-planning controls."
      />

      <section className="supply-context">
        <div>
          <p className="supply-eyebrow">Operational context</p>
          <h2>Scheduling is a network of constraints—not a calendar.</h2>
        </div>
        <div>
          <p>
            Operational teams scheduled, monitored and amended deliveries across UK
            warehouses. A single plan could depend on product type, handling needs,
            warehouse rules, capacity and available delivery windows.
          </p>
          <p>
            The interface had to make those dependencies visible enough to support good
            decisions without forcing users to carry the whole system in their heads.
          </p>
        </div>
      </section>

      <SchedulingLogicVisual />

      <section className="supply-principles">
        <div>
          <p className="supply-eyebrow">Design strategy</p>
          <h2>Preserve operational depth. Remove interaction friction.</h2>
        </div>
        <div className="supply-principle-list">
          <article><span>01</span><div><h3>Design from real scenarios</h3><p>Use product, warehouse and timing conditions to shape the flow—not generic happy paths.</p></div></article>
          <article><span>02</span><div><h3>Make constraints visible</h3><p>Surface the information users need when choosing, reviewing or changing a slot.</p></div></article>
          <article><span>03</span><div><h3>Validate before polishing</h3><p>Confirm mapped journeys with users and BAs before committing to detailed interface work.</p></div></article>
        </div>
      </section>

      <SupplyJourneyVisual />

      <section className="supply-delivery">
        <div>
          <p className="supply-eyebrow">Pragmatic delivery</p>
          <h2>A fast feedback loop replaced a long discovery phase.</h2>
        </div>
        <div className="supply-delivery-steps">
          <article><strong>Understand</strong><p>Work directly with users and business analysts to uncover rules, pain points and exceptions.</p></article>
          <article><strong>Map</strong><p>Turn operational knowledge into journeys the wider team could inspect and validate.</p></article>
          <article><strong>Prototype</strong><p>Create realistic Figma flows within strict brand and component guidelines.</p></article>
          <article><strong>Review</strong><p>Present, refine and gain sign-off before repeating the cycle across the next journey.</p></article>
        </div>
      </section>

      <section className="supply-scenario-strip">
        <div><span>Fresh</span><strong>Short shelf life</strong><small>Prioritised windows</small></div>
        <div><span>Frozen</span><strong>Handling rules</strong><small>Special capacity</small></div>
        <div><span>Ambient</span><strong>Flexible timing</strong><small>Standard slots</small></div>
        <div><span>Amendment</span><strong>Plans change</strong><small>Clear downstream impact</small></div>
      </section>

      <section className="supply-impact">
        <div>
          <p className="supply-eyebrow">Outcome</p>
          <h2>A stronger foundation for operational delivery.</h2>
        </div>
        <div className="supply-impact-grid">
          <article><strong>20+</strong><p>Journeys redesigned across varying levels of complexity</p></article>
          <article><strong>5</strong><p>Months of iterative design and stakeholder alignment</p></article>
          <article><strong>1</strong><p>Coherent web experience replacing fragmented legacy patterns</p></article>
          <article><strong>→</strong><p>Clear handover to the client’s in-house design team</p></article>
        </div>
      </section>

      <section className="supply-reflection">
        <p className="supply-eyebrow">Reflection</p>
        <p>
          This project strengthened my ability to design pragmatically in complex
          environments. When a full discovery phase is not possible, close collaboration,
          explicit journey mapping and frequent validation become the research practice.
        </p>
      </section>

      <CaseStudyFooterNav
        nextHref="/work/ai-powered-erp"
        nextLabel="AI-Powered ERP Concept"
      />
    </PageWrapper>
  );
}
