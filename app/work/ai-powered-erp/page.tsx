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

export default function AiPoweredErpPage() {
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
          Gen AI ERP Service Enhancement
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--muted)",
            maxWidth: 720,
          }}
        >
          Exploring how generative AI could support an ERP system by helping
          business admins compose, refine and distribute communications more
          efficiently.
        </p>
      </section>

      <CaseStudySummary
        items={[
          {
            label: "The problem",
            value:
              "Business admins used an ERP system to manage and distribute communications, but the process had opportunities for AI-supported content generation, refinement and delivery.",
          },
          {
            label: "The work",
            value:
              "I explored AI interaction patterns, mapped AI-supported user journeys, created wireframes and iterated high-fidelity Figma prototypes alongside user testing.",
          },
          {
            label: "The outcome",
            value:
              "The team delivered an end-to-end AI-enhanced prototype, stakeholder presentation and Figma handover, with plans to continue the work into future development.",
          },
        ]}
      />

      <CaseStudyMeta
        items={[
          {
            label: "Role",
            value: "UX Designer",
          },
          {
            label: "Project type",
            value: "Discovery sprint",
          },
          {
            label: "Duration",
            value: "3 months, 2024",
          },
          {
            label: "Focus",
            value: "AI-assisted communications",
          },
        ]}
      />

      <CaseStudyConfidentialityNote />

      <CaseStudyCallout title="Designing AI that felt useful, approachable and trustworthy">
        <p>
          The challenge was not just to add AI into an ERP system, but to design
          an experience that helped users compose and distribute communications
          with more confidence. A key part of the work was considering how the AI
          should behave, explain itself and build trust through the interaction.
        </p>
      </CaseStudyCallout>

        <CaseStudyImageBlock
        imageSrc="/visuals/ai-powered-erp/comms-email.png"
        imageAlt="AI-assisted communication workflow showing a campaign design screen, AI assistant panel and generated email preview."
        label="Prototype concept"
        title="AI-supported communication generation flow"
        description="The prototype showed how users could work with an AI assistant to create, refine and preview campaign communications before distributing them through familiar tools such as email."
        />

      <CaseStudySection title="Overview" eyebrow="Context">
        <p>
          This discovery sprint explored how generative AI could be introduced
          into an ERP system used across a range of business contexts. One of the
          most valuable opportunities identified was supporting business admins
          who manage communication creation and distribution.
        </p>

        <p>
          The aim was to identify where AI could improve the user experience,
          reduce manual effort and improve the quality of output, then produce an
          end-to-end prototype that could be used to communicate the concept and
          inform future build work.
        </p>
      </CaseStudySection>

      <CaseStudySection title="The Challenge" eyebrow="Problem">
        <p>
          ERP systems can support broad and complex business processes, but that
          flexibility can also make everyday workflows feel heavy. In this case,
          users needed to create and distribute business communications, sometimes
          to large groups or conference audiences.
        </p>

        <p>
          The design challenge was to find a focused use case for generative AI
          that felt genuinely valuable, rather than adding a generic chatbot or
          disconnected AI layer. The experience needed to support content
          generation and distribution while keeping the user in control.
        </p>
      </CaseStudySection>

      <CaseStudyProcess
        steps={[
          {
            title: "Research AI interaction patterns",
            description:
              "Explored how other products facilitate AI-to-human interaction, including conversational interfaces, assistant-style patterns and approaches to building trust.",
          },
          {
            title: "Identify the strongest use case",
            description:
              "Worked through possible directions and narrowed the focus to content generation and communication distribution as the most valuable area to develop further.",
          },
          {
            title: "Map the AI-supported journey",
            description:
              "Created user journeys showing how AI could support the comms generation and delivery process from initial input through to review and distribution.",
          },
          {
            title: "Prototype and iterate",
            description:
              "Moved from early wireframes into high-fidelity Figma prototypes, iterating the AI interaction, tone, personality and communication style alongside user feedback.",
          },
        ]}
      />

      <CaseStudyDecision
        decisions={[
          {
            decision:
              "Focus AI on communication generation and distribution",
            rationale:
              "The discovery identified several possible AI opportunities, but comms creation had a clear user need and a strong fit for generative AI.",
            impact:
              "Created a focused concept that was easier to validate, prototype and explain to stakeholders.",
          },
          {
            decision:
              "Design the AI as an assistant with a clear identity",
            rationale:
              "User feedback became more positive once the AI had a more personable presence, with users describing it as approachable, cute and helpful without feeling excessive.",
            impact:
              "Increased willingness to engage with the AI and helped make the interaction feel more trustworthy and human.",
          },
          {
            decision:
              "Keep the user in control of AI-generated content",
            rationale:
              "Business communications still require judgement, tone control and review, so the AI needed to support the user rather than fully automate the workflow.",
            impact:
              "Positioned AI as a collaborative helper for drafting and refinement, reducing the risk of users feeling detached from the final output.",
          },
          {
            decision:
              "Create guidance for future consistency",
            rationale:
              "Because the AI had been given an identity and personality, future work would need consistency across visual design, tone and interaction behaviour.",
            impact:
              "Produced a basic visual guide to support future design and development work beyond the discovery sprint.",
          },
        ]}
      />

    <CaseStudyImageBlock
    imageSrc="/visuals/ai-powered-erp/lumi2.png"
    imageAlt="Circular AI assistant visual identity with a green and blue gradient."
    label="AI assistant identity"
    title="Creating a personable assistant to make AI feel more approachable"
    description="The assistant identity helped make the AI feel less abstract and more approachable, supporting a more conversational experience while keeping the user in control."
    />

      <CaseStudySection title="Impact" eyebrow="Outcome">
        <ul style={{ paddingLeft: "1.25rem" }}>
          <li>
            Delivered an end-to-end prototype demonstrating how generative AI
            could support ERP communication workflows.
          </li>
          <li>
            Helped the client visualise a practical, user-centred AI use case
            within an existing enterprise system.
          </li>
          <li>
            Produced Figma files containing iterations and the final prototype to
            inform future development.
          </li>
          <li>
            Created a basic visual guide to help maintain consistency around the
            AI assistant’s identity and personality.
          </li>
          <li>
            Contributed to a stakeholder presentation that received very positive
            senior feedback and led to plans to continue the work.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudyCallout
        eyebrow="Stakeholder feedback"
        title="“Your innovation, collaboration and passion is second to none.”"
      >
        <p>
          A senior stakeholder shared that presenting the work was “an absolute
          pleasure” and that the team had amazed local executives, opening up
          further discussion around where the innovation could go next.
        </p>
      </CaseStudyCallout>

      <CaseStudySection title="Reflection" eyebrow="Learning">
        <p>
          This was my first time designing for AI, and it highlighted how much
          complexity AI introduces beyond the interface itself. I had to consider
          how users might assume the AI works, how much explanation it should
          provide and how to handle moments where the AI may be incorrect.
        </p>

        <p>
          It was also a valuable opportunity to take ownership of my design
          process, progress quickly through iterations and support future delivery
          by thinking about consistency, personality and implementation from the
          start.
        </p>
      </CaseStudySection>

      <CaseStudyFooterNav
        nextHref="/work/legacy-supply-chain"
        nextLabel="Supply Chain Scheduling Redesign"
      />
    </PageWrapper>
  );
}