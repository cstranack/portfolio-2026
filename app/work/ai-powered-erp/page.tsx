import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import CaseStudyMeta from "@/components/CaseStudyMeta";
import CaseStudyImageBlock from "@/components/CaseStudyImageBlock";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";
import AiErpHeroVisual from "@/components/AiErpHeroVisual";
import AiTrustLoopVisual from "@/components/AiTrustLoopVisual";
import LumiCharacter from "@/components/LumiCharacter";

export default function AiPoweredErpPage() {
  return (
    <PageWrapper>
      <Link href="/" className="ai-back-link">← Back to home</Link>

      <section className="ai-case-hero">
        <div className="ai-case-copy">
          <p className="ai-eyebrow">Generative AI · Enterprise product discovery</p>
          <h1>Making AI useful inside complex business software.</h1>
          <p>
            I shaped an AI-assisted communications experience for an enterprise
            ERP platform—turning a broad innovation brief into a focused,
            testable concept that kept people firmly in control.
          </p>
        </div>
        <AiErpHeroVisual />
      </section>

      <CaseStudyMeta items={[
        { label: "Role", value: "UX Designer" },
        { label: "Project", value: "Gen AI discovery sprint" },
        { label: "Duration", value: "3 months · 2024" },
        { label: "Focus", value: "AI-assisted communications" },
      ]} />

      <section className="ai-summary">
        <article><span>The opportunity</span><p>Find a credible use for generative AI within a broad, complex ERP ecosystem.</p></article>
        <article><span>The design challenge</span><p>Make AI approachable and useful without hiding uncertainty or removing user judgement.</p></article>
        <article><span>The result</span><p>An end-to-end tested prototype, assistant identity and guidance for future delivery.</p></article>
      </section>

      <section className="ai-context">
        <div><p className="ai-eyebrow">Finding the right problem</p><h2>Not “where can we add AI?”—where can AI genuinely help?</h2></div>
        <div>
          <p>The initial brief was intentionally open. Rather than defaulting to a generic chatbot, I explored business workflows where generative capability could remove meaningful effort.</p>
          <p>Communication creation emerged as the strongest opportunity: admins already had a clear goal, but drafting, refining and distributing messages could be slow and cognitively heavy.</p>
        </div>
      </section>

      <CaseStudyImageBlock
        imageSrc="/visuals/ai-powered-erp/comms-email.png"
        imageAlt="AI-assisted communication workflow showing campaign design, an assistant panel and generated email preview."
        label="Prototype concept"
        title="One connected flow—from intent to reviewed communication"
        description="The prototype showed how an admin could brief the assistant, shape the output and preview the final communication before choosing to distribute it."
      />

      <section className="ai-principles">
        <div><p className="ai-eyebrow">Design strategy</p><h2>Build confidence through behaviour, not AI theatre.</h2></div>
        <div className="ai-principle-list">
          <article><span>01</span><div><h3>Focus on a specific job</h3><p>Anchor the AI in an existing communication task rather than presenting an empty chat box.</p></div></article>
          <article><span>02</span><div><h3>Show what the AI is doing</h3><p>Use clear status, previews and conversational feedback to make the experience understandable.</p></div></article>
          <article><span>03</span><div><h3>Protect human judgement</h3><p>Let users direct, edit and approve the output instead of automating consequential decisions.</p></div></article>
        </div>
      </section>

      <AiTrustLoopVisual />

      <section className="ai-process">
        <div><p className="ai-eyebrow">From ambiguity to prototype</p><h2>Research, narrow, test, refine.</h2></div>
        <div className="ai-process-grid">
          <article><strong>Explore</strong><p>Reviewed emerging human–AI interaction patterns, trust signals and assistant behaviours.</p></article>
          <article><strong>Frame</strong><p>Compared possible opportunities and focused the concept on communication generation.</p></article>
          <article><strong>Prototype</strong><p>Mapped the journey, moved from wireframes to realistic flows and tested the interaction.</p></article>
          <article><strong>Evolve</strong><p>Refined tone, personality and controls in response to feedback, then documented the direction.</p></article>
        </div>
      </section>

      <section className="ai-identity-section">
        <div className="ai-identity-copy">
          <p className="ai-eyebrow">Assistant identity</p>
          <h2>A little personality made an unfamiliar capability easier to approach.</h2>
          <p>Giving the assistant a clear identity helped users understand when they were interacting with AI. Testing shaped a presence that felt friendly and useful without becoming distracting or overly human.</p>
          <div className="ai-identity-tags"><span>Approachable</span><span>Clear</span><span>Supportive</span></div>
        </div>
        <div className="ai-identity-art">
          <LumiCharacter />
        </div>
      </section>

      <section className="ai-impact">
        <div><p className="ai-eyebrow">Outcome</p><h2>A concept stakeholders could believe in—and build from.</h2></div>
        <div className="ai-impact-grid">
          <article><strong>01</strong><p>End-to-end prototype demonstrating a practical AI use case inside the ERP platform</p></article>
          <article><strong>02</strong><p>Positive user response to the assistant’s clearer, more approachable personality</p></article>
          <article><strong>03</strong><p>Figma iterations and visual guidance supporting consistency beyond the sprint</p></article>
          <article><strong>→</strong><p>Senior stakeholder enthusiasm and plans to continue exploring the concept</p></article>
        </div>
      </section>

      <blockquote className="ai-quote">
        <p>“Your innovation, collaboration and passion is second to none.”</p>
        <cite>Senior stakeholder feedback</cite>
      </blockquote>

      <section className="ai-reflection">
        <p className="ai-eyebrow">Reflection</p>
        <p>This project taught me that designing for AI is as much about expectations as interface. Users need to understand what the system can do, retain control when it may be wrong, and feel confident about what happens next.</p>
      </section>

      <CaseStudyFooterNav nextHref="/work/legacy-supply-chain" nextLabel="Supply Chain Scheduling Redesign" />
    </PageWrapper>
  );
}
