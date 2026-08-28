import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import CaseStudyMeta from "@/components/CaseStudyMeta";
import CaseStudyImageBlock from "@/components/CaseStudyImageBlock";
import CaseStudyConfidentialityNote from "@/components/CaseStudyConfidentialityNote";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";
import WalletHeroVisual from "@/components/WalletHeroVisual";
import IdentityTrustVisual from "@/components/IdentityTrustVisual";

export default function PublicSectorAppPage() {
  return (
    <PageWrapper>
      <Link href="/#work" className="wallet-back-link">
        ← Back to selected work
      </Link>

      <section className="wallet-case-hero">
        <div className="wallet-case-copy">
          <p className="wallet-eyebrow">Content design · Digital identity</p>
          <h1>Designing trust into a government digital wallet.</h1>
          <p>
            I shaped content across wallet, sign-in and identity-verification journeys,
            helping people understand why sensitive steps were needed and how to access
            verified government documents with confidence.
          </p>
        </div>
        <WalletHeroVisual />
      </section>

      <CaseStudyMeta
        items={[
          { label: "Role", value: "Content Designer" },
          { label: "Sector", value: "Public sector" },
          { label: "Product", value: "Government digital wallet" },
          { label: "Focus", value: "Trust, identity & secure documents" },
        ]}
      />

      <section className="wallet-summary">
        <article><span>The challenge</span><p>Make unfamiliar identity and document journeys feel secure without overwhelming a broad public audience.</p></article>
        <article><span>My contribution</span><p>Content options, journey guidance, cross-team iteration and structured handover across connected services.</p></article>
        <article><span>The outcome</span><p>Clearer explanations and instructions ready for review, sign-off, continuation and translation.</p></article>
      </section>

      <CaseStudyConfidentialityNote />

      <section className="wallet-context">
        <div>
          <p className="wallet-eyebrow">The service ecosystem</p>
          <h2>One user journey. Several secure services.</h2>
        </div>
        <div>
          <p>
            People could begin in a public service, move through GOV.UK One Login and
            identity verification, then return to access or add a document. Internally
            these were distinct service areas; to users they needed to feel like one
            coherent journey.
          </p>
          <p>
            My role was to keep people oriented: where they were, why they had moved,
            what information was needed and what would happen next.
          </p>
        </div>
      </section>

      <CaseStudyImageBlock
        imageSrc="/visuals/public-sector-app/graphic4.jpeg"
        imageAlt="Diagram showing a public service journey moving through GOV.UK One Login before returning to the service."
        label="Connected journey"
        title="Mapping the handoffs around GOV.UK One Login"
        description="Understanding the wider ecosystem helped the team write content around the user’s task rather than the boundaries between internal services."
      />

      <section className="wallet-principles">
        <div className="wallet-principles-heading">
          <p className="wallet-eyebrow">Content strategy</p>
          <h2>Trust is built one clear answer at a time.</h2>
          <p>At every sensitive moment, the content needed to answer the question already forming in the user’s mind.</p>
        </div>
        <div className="wallet-principle-list">
          <article><span>01</span><div><h3>Why do you need this?</h3><p>Explain the purpose before asking for sensitive information or an unfamiliar action.</p></div></article>
          <article><span>02</span><div><h3>What should I do?</h3><p>Turn verification requirements into short, practical and accessible instructions.</p></div></article>
          <article><span>03</span><div><h3>Is this secure?</h3><p>Use calm, transparent language to show how verification protects access to documents.</p></div></article>
          <article><span>04</span><div><h3>What happens next?</h3><p>Maintain continuity across service handoffs so people stay confident and oriented.</p></div></article>
        </div>
      </section>

      <IdentityTrustVisual />

      <section className="wallet-work">
        <div>
          <p className="wallet-eyebrow">How I worked</p>
          <h2>Explore, compare, test and align.</h2>
        </div>
        <div className="wallet-work-grid">
          <article><strong>Understand</strong><p>Reviewed existing flows, research context and decisions after joining mid-project.</p></article>
          <article><strong>Identify</strong><p>Found moments where reassurance, explanation or clearer instruction was essential.</p></article>
          <article><strong>Explore</strong><p>Created alternative approaches to compare tone, clarity and confidence.</p></article>
          <article><strong>Refine</strong><p>Iterated with the wider content team and prepared clearly labelled handover materials.</p></article>
        </div>
      </section>

      <section className="wallet-visual-pair">
        <CaseStudyImageBlock
          imageSrc="/visuals/public-sector-app/screen-examples.png"
          imageAlt="Mobile screens showing passport photo and face-scan guidance for identity verification."
          label="Verification guidance"
          title="Clear instructions for sensitive steps"
          description="Content needed to make unfamiliar actions achievable while setting accurate expectations."
        />
        <CaseStudyImageBlock
          imageSrc="/visuals/public-sector-app/screen-examples2.png"
          imageAlt="Mobile screen showing a digital government document card."
          label="Verified documents"
          title="Making digital credentials understandable"
          description="The wallet introduced a new mental model: secure access to verified documents on a device."
        />
      </section>

      <section className="wallet-decisions">
        <div>
          <p className="wallet-eyebrow">Key decisions</p>
          <h2>Write for confidence, not internal logic.</h2>
        </div>
        <div>
          <article><h3>Lead with the user’s goal</h3><p>Service architecture stayed in the background; content focused on the task people were trying to complete.</p></article>
          <article><h3>Be transparent about verification</h3><p>Clear explanations of why, what and next helped make security feel protective rather than obstructive.</p></article>
          <article><h3>Design for continuation</h3><p>Structured Figma and Miro materials preserved context for in-house designers, reviewers and translation teams.</p></article>
        </div>
      </section>

      <section className="wallet-impact">
        <div>
          <p className="wallet-eyebrow">Outcome</p>
          <h2>Clarity across high-trust moments.</h2>
        </div>
        <ul>
          <li>Improved guidance around identity-verification tasks</li>
          <li>Strengthened explanations of secure document access</li>
          <li>Supported iterative review across the wider content team</li>
          <li>Prepared content for sign-off, handover and translation</li>
          <li>Kept connected service journeys focused on the user’s task</li>
        </ul>
      </section>

      <section className="wallet-reflection">
        <p className="wallet-eyebrow">Reflection</p>
        <p>
          High-trust content works best when it is calm, specific and timely. People do
          not need every technical detail; they need enough transparency to understand
          the request, feel in control and take the next step confidently.
        </p>
      </section>

      <CaseStudyFooterNav
        nextHref="/work/markel-1wf"
        nextLabel="One Workflow Product Redesign"
      />
    </PageWrapper>
  );
}
