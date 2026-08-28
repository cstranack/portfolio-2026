import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";
import HeroSystemVisual from "@/components/HeroSystemVisual";
import Image from "next/image";

export default function Home() {
  return (
    <PageWrapper>
      {/* HERO */}
      <section
        className="home-hero"
        style={{
          paddingTop: "4.5rem",
          paddingBottom: "5rem",
          minHeight: "72vh",
        }}
      >
        <div className="home-hero-copy">
        <p
          style={{
            color: "var(--accent)",
            fontWeight: 600,
            marginBottom: "1rem",
          }}
        >
          UI Engineer & Product Designer
        </p>

        <h1 style={{ maxWidth: 920 }}>
          I design complex products — and build the systems that bring them to life.
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "var(--muted)",
            maxWidth: 680,
            marginTop: "1.5rem",
          }}
        >
          I’m Claire Stranack, a designer and front-end engineer specialising in
          enterprise products, design systems and reusable UI. I turn complex
          workflows into clear experiences, then help teams deliver them in code.
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
            Explore design & engineering work
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
        </div>

        <HeroSystemVisual />
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

          <h2>From complex workflows to production-ready UI.</h2>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "1.05rem",
              marginTop: "1rem",
            }}
          >
            Selected projects spanning enterprise UX, design systems, front-end
            architecture and practical implementation.
          </p>
        </div>

        <div
          className="project-grid"
          style={{
            marginTop: "2rem",
          }}
        >

          <ProjectCard
            title="Markel Internal Design System"
            description="Designed and built a reusable Angular component library and documentation platform for Markel’s internal product ecosystem."
            href="/work/markel-design-system"
            imageSrc="/visuals/homepage/alertBanner2.png"
            imageAlt="Preview of the Markel internal design system component library."
            tags={["Angular", "Component Architecture", "Design Systems"]}
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
              role: "Front-end Engineering",
              description:
                "Built and delivered front-end features for a three-day international event app, supporting hundreds of attendees, complex agendas and image uploads.",
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

      <section id="about" className="about-section">
        <div className="about-heading">
          <p>About me</p>
          <h2>I’m happiest in the space between <span>figuring it out</span> and <span>making it real.</span></h2>
        </div>

        <div className="about-layout">
          <div className="about-portrait-wrap">
            <div className="about-portrait-grid" />
            <div className="about-portrait-card">
              <Image src="/images/me2.png" alt="Claire Stranack" width={700} height={900} />
            </div>
            <div className="about-float-card about-float-role"><i /> Designer <span>+</span> Developer</div>
            <div className="about-float-card about-float-place"><span>⌁</span><div><small>Based in</small><strong>London, UK</strong></div></div>
            <div className="about-personal-orbit"><span>Sewing</span><span>Garden & pond</span><span>Motorbikes</span></div>
          </div>

          <div className="about-copy">
            <p className="about-lede">I design complex digital products and build the systems that help teams deliver them well.</p>
            <p>I’ve worked across enterprise platforms, design systems and high-fidelity product experiences—turning messy workflows into interfaces that feel clear, considered and genuinely usable.</p>
            <p>Because I work in both design and front-end development, I can move between user needs, business constraints and implementation detail without losing the thread.</p>

            <div className="about-overlap" aria-label="The overlap between product design and front-end engineering">
              <div><span>Think in</span><strong>Journeys</strong><small>Research · flows · strategy</small></div>
              <div className="about-overlap-core"><i>+</i><strong>Make it work</strong><small>The useful middle</small></div>
              <div><span>Build in</span><strong>Components</strong><small>UI · systems · code</small></div>
            </div>

            <div className="about-note">
              <span>Off screen</span>
              <p>I’m usually making, fixing or learning something—sewing clothes, working on my garden and pond, or getting out on my motorbike. Apparently I don’t really do “hands off.”</p>
            </div>
          </div>
        </div>
      </section>


    </PageWrapper>
  );
}
