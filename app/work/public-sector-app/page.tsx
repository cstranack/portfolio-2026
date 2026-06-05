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

export default function PublicSectorAppPage() {
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
          Government Digital Wallet Experience
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--muted)",
            maxWidth: 720,
          }}
        >
          Supporting content design for a government digital wallet experience,
          helping users understand how to verify their identity and access secure
          government-issued documents through GOV.UK One Login.
        </p>
      </section>

      <CaseStudySummary
        items={[
          {
            label: "The problem",
            value:
              "Users needed a secure and understandable way to access government-issued documents through a digital wallet, supported by identity verification and GOV.UK One Login.",
          },
          {
            label: "The work",
            value:
              "I joined the wallet team as a Content Designer, focusing on clarity, trust and guidance across One Login, identity verification and document access journeys.",
          },
          {
            label: "The outcome",
            value:
              "I contributed content options, iterated with the wider content team, supported review cycles and prepared clearly labelled Figma and Miro handover materials.",
          },
        ]}
      />

      <CaseStudyMeta
        items={[
          {
            label: "Role",
            value: "Content Designer",
          },
          {
            label: "Sector",
            value: "Public sector",
          },
          {
            label: "Product area",
            value: "Digital wallet",
          },
          {
            label: "Focus",
            value: "Identity verification & document access",
          },
        ]}
      />

      <CaseStudyConfidentialityNote />

      <CaseStudyCallout title="Designing content for secure, high-trust digital journeys">
        <p>
          The wallet experience needed to feel clear, trustworthy and accessible
          for a broad public audience. My focus was on helping users understand
          what was happening, why identity verification was needed and how secure
          government documents could be accessed through the wider One Login
          ecosystem.
        </p>
      </CaseStudyCallout>

      <CaseStudyImageBlock
        imageSrc="/visuals/public-sector-app/graphic4.jpeg"
        imageAlt="Diagram showing a GOV.UK service journey moving through GOV.UK One Login before returning to the service."
        label="Service ecosystem"
        title="Understanding how the wallet connected with GOV.UK One Login"
        description="A simplified journey showing how users move from a public service into GOV.UK One Login, complete authentication or verification steps, then return to continue or finish their service."
      />

      <CaseStudySection title="Overview" eyebrow="Context">
        <p>
          I worked as part of the wallet team, exploring how a government digital
          wallet could help users access secure government-issued documents such
          as veteran cards, with potential future support for documents like ID
          and passports.
        </p>

        <p>
          Although much of the journey connected with GOV.UK One Login, the work
          was viewed through the lens of the wallet experience: how users
          understand what the wallet is, how documents are added or accessed, and
          how identity verification supports trust and security.
        </p>

        <p>
          The experience sat within a wider ecosystem of public digital services,
          where users may begin in a service, move through One Login or identity
          verification, and then return to complete their task or access a
          document.
        </p>
      </CaseStudySection>

      <CaseStudySection title="The Challenge" eyebrow="Problem">
        <p>
          The wallet and verification journeys needed to work for a very broad
          audience. Users could have different levels of digital confidence,
          different accessibility needs and different expectations around what it
          means to store government documents digitally.
        </p>

        <p>
          Because the service touched on security, trust and personal identity,
          content needed to be carefully considered. Small wording choices could
          affect whether users understood the process, trusted the service or
          knew what action to take next.
        </p>

        <p>
          The challenge was to make unfamiliar concepts feel clear and
          reassuring without overloading users with too much explanation at once.
        </p>
      </CaseStudySection>

      <CaseStudyImageBlock
        imageSrc="/visuals/public-sector-app/screen-examples.png"
        imageAlt="Mobile screens showing passport photo and face scan instructions for identity verification."
        label="Identity verification"
        title="Designing clear guidance for sensitive verification steps"
        description="These screens represent the kind of instructional content users need when completing identity verification tasks such as taking a passport photo or scanning their face."
      />

      <CaseStudyProcess
        steps={[
          {
            title: "Join mid-project and understand the wallet journey",
            description:
              "Joined during an existing structured design process, reviewing current flows, content decisions, research context and how the wallet connected with One Login and identity verification.",
          },
          {
            title: "Identify key content moments",
            description:
              "Looked for points where users needed important information, reassurance or clearer instructions to understand what was happening and continue confidently.",
          },
          {
            title: "Explore content approaches",
            description:
              "Created alternative wording and communication approaches, considering tone, clarity, accessibility, trust and how visuals could support understanding.",
          },
          {
            title: "Review, iterate and hand over",
            description:
              "Discussed options with the wider content design team, gained lead sign-off and prepared clearly labelled Figma and Miro materials for handover and translation.",
          },
        ]}
      />

      <CaseStudyDecision
        decisions={[
          {
            decision:
              "Frame the experience around user trust, not internal service logic",
            rationale:
              "The wallet connected several service areas, but users needed a simple explanation of what they were doing and why it mattered.",
            impact:
              "Helped keep the content focused on user understanding rather than exposing unnecessary internal complexity.",
          },
          {
            decision:
              "Use content to explain identity verification clearly",
            rationale:
              "Users may feel cautious when asked to verify their identity, especially within a government digital service.",
            impact:
              "Supported a more transparent experience by explaining what was happening, why verification was needed and what users needed to do next.",
          },
          {
            decision:
              "Make digital documents feel secure and understandable",
            rationale:
              "A government digital wallet introduces a new mental model for many users, especially when storing sensitive documents such as veteran cards, ID or passports.",
            impact:
              "Helped position the wallet as a secure place to access government-issued documents, while keeping the language clear and reassuring.",
          },
          {
            decision:
              "Create multiple content options before aligning on a direction",
            rationale:
              "There were often several possible ways to explain the same moment, each with different implications for tone, clarity and confidence.",
            impact:
              "Allowed the content team to compare approaches, choose stronger wording and refine the journey through iteration.",
          },
          {
            decision:
              "Prepare content clearly for handover and translation",
            rationale:
              "The project needed to move into client continuation, and content decisions had to remain understandable beyond my time on the project.",
            impact:
              "Made it easier for in-house designers and translation teams to understand the intended content structure and rationale.",
          },
        ]}
      />

      <CaseStudyImageBlock
        imageSrc="/visuals/public-sector-app/screen-examples2.png"
        imageAlt="Mobile screen showing a digital document card for an HM Armed Forces Veteran Card."
        label="Verified documents"
        title="Supporting access to secure government-issued documents"
        description="The wallet experience explored how users could access verified government documents, such as veteran cards, with potential future support for documents like ID and passports."
      />

      <CaseStudySection title="Impact" eyebrow="Outcome">
        <ul style={{ paddingLeft: "1.25rem" }}>
          <li>
            Contributed content design to selected wallet, One Login and identity
            verification journeys.
          </li>
          <li>
            Helped improve clarity, tone and communication of key information
            around secure document access.
          </li>
          <li>
            Supported clearer guidance for sensitive identity verification steps.
          </li>
          <li>
            Explored how users could understand and access government-issued
            documents through a digital wallet.
          </li>
          <li>
            Supported iterative review cycles with the wider content design team.
          </li>
          <li>
            Prepared clearly labelled Figma and Miro content sections for
            handover to in-house designers.
          </li>
          <li>
            Helped ensure content was ready for review, sign-off and translation.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Reflection" eyebrow="Learning">
        <p>
          This project highlighted how powerful content design can be in secure
          public digital services. When users are asked to verify their identity
          or access sensitive documents, the language needs to build trust
          without becoming long, intimidating or overly technical.
        </p>

        <p>
          It also reinforced how important it is to consider the wider ecosystem.
          The wallet, One Login and identity verification journeys were closely
          connected, so content needed to help users understand where they were,
          why they were there and how each step supported the overall service.
        </p>

        <p>
          Observing user testing was especially valuable. It showed how different
          people interpret the same content in different ways, and reinforced the
          importance of testing language as carefully as interface design.
        </p>
      </CaseStudySection>

      <CaseStudyFooterNav
        nextHref="/work/markel-1wf"
        nextLabel="One Workflow Product Redesign"
      />
    </PageWrapper>
  );
}