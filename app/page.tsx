import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <PageWrapper>
      {/* HERO */}
      <section
        style={{
          paddingTop: "7rem",
          paddingBottom: "5rem",
          minHeight: "72vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "var(--accent)",
            fontWeight: 600,
            marginBottom: "1rem",
          }}
        >
          UX Designer & UI Developer
        </p>

        <h1 style={{ maxWidth: 920 }}>
          Designing clear, usable products for complex systems.
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--muted)",
            maxWidth: 680,
            marginTop: "1.5rem",
          }}
        >
          I’m Claire Stranack, a UX designer with experience simplifying enterprise
          workflows, designing high-fidelity prototypes and building thoughtful digital
          experiences.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginTop: "2rem",
          }}
        >
          <a
            href="#work"
            style={{
              background: "var(--accent)",
              color: "var(--bg)",
              padding: "0.85rem 1.1rem",
              borderRadius: "999px",
              fontWeight: 600,
            }}
          >
            View selected work
          </a>

          <a
            href="#about"
            style={{
              border: "1px solid var(--border)",
              padding: "0.85rem 1.1rem",
              borderRadius: "999px",
              fontWeight: 600,
            }}
          >
            About me
          </a>
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ marginTop: "3rem" }}>
        <div style={{ maxWidth: 680 }}>
          <p
            style={{
              color: "var(--accent)",
              fontWeight: 600,
              marginBottom: "0.75rem",
            }}
          >
            Selected work
          </p>

          <h2>Complex problems, simplified through design.</h2>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "1.05rem",
              marginTop: "1rem",
            }}
          >
            A small selection of projects focused on enterprise workflows, product
            thinking and practical UX delivery.
          </p>
        </div>

        <div
          style={{
            marginTop: "2rem",
            display: "grid",
            gap: "1.25rem",
          }}
        >

          <ProjectCard
            title="Markel Internal Design System"
            description="Led the design and front-end architecture of a reusable Angular and Bootstrap design system for Markel’s internal product ecosystem."
            href="/work/markel-design-system"
            imageSrc="/visuals/homepage/alertBanner2.png"
            imageAlt="Preview of the Markel internal design system component library."
            tags={["Design Systems", "Angular", "Enterprise UX"]}
          />

          <ProjectCard
            title="One Workflow Product Redesign"
            description="Led UX/UI redesign across Markel’s global underwriting platform, improving Submission Creation and Policy Page workflows."
            href="/work/markel-1wf"
            imageSrc="/visuals/homepage/1WFExample.png"
            imageAlt="Preview of the policy page design for Markel's underwriting platform."
            tags={["Enterprise UX", "Underwriting", "Workflow Design"]}
          />

          <ProjectCard
            title="Government Digital Wallet Experience"
            description="Supported content design for a secure login and identity verification service intended to simplify access to public digital services."
            href="/work/public-sector-app"
            imageSrc="/visuals/homepage/GovExample2.png"
            imageAlt="Preview of the digital wallet screens."
            tags={["Content Design", "Public Sector", "Service Design"]}
          />

          <ProjectCard
            title="Supply Chain Scheduling Redesign"
            description="Redesigned supplier-to-warehouse scheduling journeys for a legacy platform used to manage deliveries across the UK."
            href="/work/legacy-supply-chain"
            imageSrc="/visuals/homepage/SainsExample.png"
            imageAlt="Preview of the supply chain scheduling app redesign."
            tags={["Enterprise UX", "Supply Chain", "Prototyping"]}
          />

          <ProjectCard
            title="Gen AI ERP Service Enhancement"
            description="Explored how generative AI could help business admins compose, refine and distribute communications more efficiently."
            href="/work/ai-powered-erp"
            imageSrc="/visuals/homepage/GenAI.png"
            imageAlt="Preview of the Gen AI ERP app design."
            tags={["AI", "ERP", "Prototyping"]}
          />
        </div>
      </section>

      <section style={{ marginTop: "5rem" }}>
        <div style={{ maxWidth: 680 }}>
          <p
            style={{
              color: "var(--accent)",
              fontWeight: 600,
              marginBottom: "0.75rem",
            }}
          >
            Additional experience
          </p>

          <h2>Broader product and delivery experience.</h2>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "1.05rem",
              marginTop: "1rem",
            }}
          >
            A few smaller projects that show the range of products, industries and
            delivery contexts I have worked across.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          {[
            {
              title: "Clienteling software for luxury brands",
              role: "UX Designer",
              description:
                "Supported continuous product development for a clienteling app used by retail sales associates to deliver more connected in-store customer experiences.",
            },
            {
              title: "International conferencing app",
              role: "Front-end Developer",
              description:
                "Built front-end features for a three-day event app supporting hundreds of attendees, agendas and functionality such as image upload.",
            },
            {
              title: "Customer collection app",
              role: "UX Designer",
              description:
                "Designed prototype enhancements that gave customers more flexibility when collecting project materials, including amended collection slots and partial collections.",
            }
          ].map((project) => (
            <article
              key={project.title}
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface)",
                borderRadius: "18px",
                padding: "1.25rem",
              }}
            >
              <p
                style={{
                  color: "var(--accent)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                }}
              >
                {project.role}
              </p>

              <h3>{project.title}</h3>

              <p
                style={{
                  color: "var(--muted)",
                  marginTop: "0.75rem",
                }}
              >
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

    <section id="about" style={{ marginTop: "7rem", paddingBottom: "5rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(260px, 0.8fr)",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 760 }}>
          <p
            style={{
              color: "var(--accent)",
              fontWeight: 600,
              marginBottom: "0.75rem",
            }}
          >
            About
          </p>

          <h2>Designer with a developer’s understanding of delivery.</h2>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "1.1rem",
              marginTop: "1rem",
            }}
          >
            I’m a UX Designer and UI Developer with experience working across complex
            enterprise platforms, design systems and high-fidelity product
            experiences. I enjoy turning messy workflows into clearer, more usable
            digital products.
          </p>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "1.1rem",
              marginTop: "1rem",
            }}
          >
            My background in both design and front-end development helps me bridge
            the gap between user needs, business goals and practical implementation.
          </p>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "1.1rem",
              marginTop: "1rem",
            }}
          >
            Outside of work, I’m usually making, fixing or learning something — from
            sewing my own clothes to working on my garden and pond, or getting out on
            my motorbike. I like practical, hands-on projects, which is probably why I
            enjoy design work that moves from messy ideas into something clear and
            useful.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginTop: "2rem",
            }}
          >
            {[
              "Enterprise UX",
              "Design systems",
              "Prototyping",
              "User journeys",
              "Front-end implementation",
              "Stakeholder collaboration",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "999px",
                  padding: "0.5rem 0.85rem",
                  color: "var(--muted)",
                  background: "var(--surface)",
                  fontSize: "0.95rem",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            background:
              "linear-gradient(135deg, var(--accent-soft), var(--surface))",
            border: "1px solid var(--border)",
            borderRadius: "28px",
            padding: "1rem",
          }}
        >
          <Image
            src="/images/me2.png"
            alt="Claire Stranack"
            width={700}
            height={900}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "20px",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>


    </PageWrapper>
  );
}