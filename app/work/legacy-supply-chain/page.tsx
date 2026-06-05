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

export default function LegacySupplyChainPage() {
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
          Supply Chain Scheduling Redesign
        </h1>

        <p style={{ fontSize: "1.25rem", color: "var(--muted)", maxWidth: 720 }}>
        Redesigning key supplier-to-warehouse scheduling journeys for a legacy supply
        chain platform used to manage deliveries across the UK.
        </p>
      </section>

      <CaseStudySummary
        items={[
            {
            label: "The problem",
            value:
                "A 20+ year-old supply chain system no longer supported the complexity of supplier-to-warehouse delivery scheduling.",
            },
            {
            label: "The work",
            value:
                "I designed high-fidelity Figma prototypes across more than 20 journeys, working closely with users, business analysts and stakeholders.",
            },
            {
            label: "The outcome",
            value:
                "The redesigned journeys improved clarity, supported stakeholder sign-off and helped hand over a stronger foundation to the client’s in-house design team.",
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
            label: "Client",
            value: "Leading UK supermarket",
            },
            {
            label: "Duration",
            value: "5 months",
            },
            {
            label: "Focus",
            value: "Supplier and delivery scheduling",
            },
        ]}
        />

        <CaseStudyCallout title="Modernising complex operational workflows without slowing delivery">
        <p>
            The challenge was not simply to refresh the interface, but to help operational
            teams manage complex delivery scenarios more clearly — including different
            product types, warehouse rules, and scheduling constraints.
        </p>
        </CaseStudyCallout>

        <CaseStudyImageBlock
        imageSrc="/visuals/legacy-supply-chain/before-after.png"
        imageAlt="Before and after comparison of a legacy supply chain desktop system redesigned into a modern web interface."
        label="Before and after"
        title="Modernising a legacy desktop workflow into a clearer web experience"
        description="The redesign moved a dense, difficult-to-read legacy interface into a more structured web-based experience with clearer hierarchy, filters, actions and delivery planning controls."
        />

        <CaseStudySection title="Overview" eyebrow="Context">
        <p>
            The client’s existing supply chain management system was over 20 years old,
            with a dated interface and limited functionality. It was used daily by
            operational teams to schedule, monitor and amend deliveries across the UK.
        </p>

        <p>
            My work focused on supplier-to-warehouse delivery scheduling, where users had
            to account for a wide range of product and delivery scenarios, including the
            distinction between perishable and non-perishable goods.
        </p>
        </CaseStudySection>


        <CaseStudySection title="The Challenge" eyebrow="Problem">
        <p>
            The existing system no longer supported the complexity of the work users were
            doing. Users relied on workarounds, fragmented processes and deep system
            knowledge to complete everyday tasks.
        </p>

        <p>
            The project also moved at pace, with limited opportunity for a traditional
            discovery phase. This meant the design process needed to be pragmatic,
            collaborative and tightly aligned with users, business analysts and
            stakeholders.
        </p>
        </CaseStudySection>

            <CaseStudyImageBlock
        imageSrc="/visuals/legacy-supply-chain/supply-chain-graphic.png"
        imageAlt="Visual showing a supply chain workflow from suppliers through warehouse delivery planning."
        label="Workflow context"
        title="Understanding supplier-to-warehouse delivery planning"
        description="The project focused on complex delivery planning journeys, where users needed to manage suppliers, warehouse delivery dates, order plans and different product scenarios."
        />

        <CaseStudyProcess
        steps={[
            {
            title: "Understand existing journeys",
            description:
                "Worked closely with users and business analysts to understand how existing flows worked, where users struggled, and which scenarios needed to be supported.",
            },
            {
            title: "Map and validate workflows",
            description:
                "Used mapped journeys to clarify complex scheduling processes and validate the intended flow before moving into detailed interface design.",
            },
            {
            title: "Prototype in high fidelity",
            description:
                "Created Figma prototypes using strict brand guidelines and pre-built components, ensuring designs were realistic and aligned with the wider programme.",
            },
            {
            title: "Review, sign off and repeat",
            description:
                "Presented flows to users and stakeholders for feedback and sign-off, repeating the process across more than 20 journeys of varying complexity.",
            },
        ]}
        />

        <CaseStudyDecision
        decisions={[
            {
            decision: "Design around real operational scenarios",
            rationale:
                "Delivery scheduling involved many different product and warehouse conditions, including important differences between perishable and non-perishable goods.",
            impact:
                "Helped ensure the redesigned flows supported the nuance of day-to-day supply chain work rather than oversimplifying it.",
            },
            {
            decision: "Work pragmatically within a fast-paced delivery model",
            rationale:
                "There was limited time for a formal research phase, so user conversations and BA journey mapping became essential inputs into the design process.",
            impact:
                "Allowed the team to keep momentum while still grounding design decisions in user needs and operational reality.",
            },
            {
            decision: "Use high-fidelity prototypes for alignment and sign-off",
            rationale:
                "The project required confidence from multiple stakeholders and needed to follow strict visual and component guidelines.",
            impact:
                "Made it easier to communicate intended experiences, gain sign-off and hand over designs clearly to the client’s in-house team.",
            },
        ]}
        />



        <CaseStudySection title="Impact" eyebrow="Outcome">
        <ul style={{ paddingLeft: "1.25rem" }}>
            <li>Supported the redesign of more than 20 supply chain journeys.</li>
            <li>Improved clarity across complex supplier-to-warehouse scheduling flows.</li>
            <li>Created high-fidelity prototypes ready for stakeholder review and handover.</li>
            <li>Helped transfer project knowledge to the client’s in-house design team.</li>
        </ul>
        </CaseStudySection>

        <CaseStudySection title="Reflection" eyebrow="Learning">
        <p>
            This project taught me how important pragmatic UX can be in complex enterprise
            environments. While the pace limited the ability to follow a full discovery
            process, close collaboration with users and business analysts helped keep the
            work grounded in real operational needs.
        </p>

        <p>
            I also gained a much deeper appreciation for the complexity of supply chain
            systems, where small design decisions can have a significant impact on how
            confidently users complete critical tasks.
        </p>
        </CaseStudySection>

        <CaseStudyFooterNav 
        nextHref="/work/ai-powered-erp"
        nextLabel="AI-Powered ERP Concept"
  />
    </PageWrapper>
  );
}