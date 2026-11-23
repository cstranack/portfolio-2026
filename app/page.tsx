import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";
import HeroSystemVisual from "@/components/HeroSystemVisual";
import Image from "next/image";
import type { CSSProperties } from "react";

const hobbies = [
  {
    number: "01",
    name: "Gardening",
    images: [
      { src: "/images/hobbies/gardening-1.jpg", alt: "Tomato seedlings growing in Claire's garden" },
      { src: "/images/hobbies/gardening-2.png", alt: "Seedlings and flowers in Claire's greenhouse" },
    ],
  },
  {
    number: "02",
    name: "Reading",
    images: [
      { src: "/images/hobbies/reading.jpg", alt: "A cat peering over a copy of Pride and Prejudice" },
    ],
  },
  {
    number: "03",
    name: "Motorbiking",
    images: [
      { src: "/images/hobbies/motorbiking-1.jpg", alt: "Claire in motorcycle gear beside two motorbikes" },
      { src: "/images/hobbies/motorbiking-2.png", alt: "Claire with a blue Suzuki motorbike" },
    ],
  },
  {
    number: "04",
    name: "Sewing",
    images: [
      { src: "/images/hobbies/sewing-3.png", alt: "A dark blue dress made by Claire" },
      { src: "/images/hobbies/sewing-2.jpg", alt: "A cat supervising Claire's sewing machine" },
      { src: "/images/hobbies/sewing-1.jpg", alt: "Claire sewing dark blue fabric with an overlocker" },
    ],
  },
  {
    number: "05",
    name: "Gaming",
    previewClass: "is-game-grid",
    images: [
      { src: "/images/hobbies/games/gta-v.jpg", alt: "Grand Theft Auto V" },
      { src: "/images/hobbies/games/planet-zoo.jpg", alt: "Planet Zoo" },
      { src: "/images/hobbies/games/planet-zoo-2.jpg", alt: "Planet Zoo 2" },
      { src: "/images/hobbies/games/teardown.jpg", alt: "Teardown" },
      { src: "/images/hobbies/games/7-days-to-die.jpg", alt: "7 Days to Die" },
    ],
  },
];

export default function Home() {
  return (
    <PageWrapper>
      {/* HERO */}
      <section id="top" className="home-hero">
        <div className="home-hero-copy">
        <p className="home-hero-eyebrow">
          UI Engineer & Product Designer
        </p>

        <h1 className="home-hero-title">
          <span className="home-hero-title-lead">I design complex products</span>
          <span className="home-hero-title-tail">and build the systems that bring them to life.</span>
        </h1>

        <p className="home-hero-intro">
          I’m Claire Stranack, a designer and front-end engineer specialising in
          enterprise products, design systems and reusable UI. I turn complex
          workflows into clear experiences, then help teams deliver them in code.
        </p>

        <div className="home-hero-actions">
          <a href="#work" className="home-hero-primary">
            Explore design & engineering work
          </a>

          <a href="#about" className="home-hero-secondary">
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
          </div>
        </div>

        <div className="about-hobbies">
          <div className="about-hobbies-heading">
            <span>Beyond the screen</span>
            <h3>I’ve got an odd mix of hobbies.</h3>
            <p>Talk to me about…</p>
          </div>
          <div className="about-hobby-list">
            {hobbies.map((hobby) => (
              <article key={hobby.name} tabIndex={0}>
                <div className={`about-hobby-preview${hobby.images.length > 1 ? ` is-collage is-${hobby.images.length}` : ""}${"previewClass" in hobby ? ` ${hobby.previewClass}` : ""}`}>
                  {hobby.images.length ? hobby.images.map((photo, index) => (
                    <div className="about-hobby-photo" key={photo.src} style={{ "--photo-index": index } as CSSProperties}>
                      <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 560px) 42vw, 230px" />
                    </div>
                  )) : (
                    <div className="about-hobby-game">
                      <span>PLAYER 01</span>
                      <div><i /><i /><i /><i /></div>
                      <strong>READY?</strong>
                    </div>
                  )}
                </div>
                <span>{hobby.number}</span>
                <strong>{hobby.name}</strong>
                <i className="about-hobby-orbit" />
              </article>
            ))}
          </div>
        </div>
      </section>


    </PageWrapper>
  );
}
