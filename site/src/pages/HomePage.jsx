import React from "react";
import { projects } from "../../data/projects.mjs";
import { BookingPanel } from "../components/BookingPanel.jsx";
import { ProjectCard } from "../components/ProjectCard.jsx";
import { ContactStrip, Eyebrow, SectionLead } from "../components/Section.jsx";

const specialties = [
  [
    "01",
    "Web applications",
    "Responsive interfaces and full-stack products built around real workflows.",
  ],
  [
    "02",
    "Business systems",
    "ERP, dashboards, and tools that make operations easier to manage.",
  ],
  [
    "03",
    "Mobile & automation",
    "Connected experiences across mobile, desktop, and repetitive processes.",
  ],
];

function Hero() {
  const movePortrait = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mx",
      `${(((event.clientX - box.left) / box.width - 0.5) * 18).toFixed(1)}px`,
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${(((event.clientY - box.top) / box.height - 0.5) * 18).toFixed(1)}px`,
    );
  };
  const resetPortrait = (event) => {
    event.currentTarget.style.setProperty("--mx", "0px");
    event.currentTarget.style.setProperty("--my", "0px");
  };
  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <Eyebrow number="00">Software developer / problem solver</Eyebrow>
          <h1>
            Orion
            <br />
            <span>
              Chowdhury<span className="accent">.</span>
            </span>
          </h1>
          <p className="hero-subline">
            Thoughtful software for problems that refuse to fit in a template.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-light">
              Explore the work <span aria-hidden="true">↘</span>
            </a>
            <a href="/book/" className="button button-outline">
              Let’s talk <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <span className="hero-scroll-line" />
            <span>BASED IN DHAKA · WORKING EVERYWHERE</span>
          </div>
        </div>
        <div
          className="hero-art"
          onPointerMove={movePortrait}
          onPointerLeave={resetPortrait}
        >
          <div className="hero-art-grid" />
          <div className="hero-art-cut" />
          <div className="portrait-frame">
            <img
              className="hero-portrait"
              src="/assets/portrait.jpg"
              alt="Portrait of Orion Chowdhury"
              width="1085"
              height="1200"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <span className="art-vertical">FORM FOLLOWS FUNCTION</span>
        </div>
      </div>
    </section>
  );
}

function MotionRibbon() {
  const phrase = (
    <>
      BUILD WHAT MATTERS <span>✳</span> MAKE IT USEFUL <span>✳</span>{" "}
    </>
  );
  return (
    <div className="motion-ribbon" aria-hidden="true">
      <div className="motion-ribbon-track">
        {phrase}
        {phrase}
        {phrase}
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <MotionRibbon />
      <section className="intro section-pad" id="about">
        <SectionLead
          number="01"
          kicker="The approach"
          title={
            <>
              Build for the
              <br />
              <em>real world.</em>
            </>
          }
          description="I work across interfaces, systems, and automation, connecting complex technical work to experiences people can actually use."
          action={
            <a href="/about/" className="text-link">
              More about me ↗
            </a>
          }
        />
        <div className="manifesto reveal">
          <span>AN IDEA, MADE USEFUL</span>
          <p>
            From operational software to connected products, I care about the
            details that make a system clear, reliable, and worth returning to.
          </p>
        </div>
      </section>
      <section className="expertise-section section-pad" id="expertise">
        <SectionLead
          number="02"
          kicker="What I do"
          title={
            <>
              The work behind
              <br />
              the work.
            </>
          }
          description="Designing the interface is one part. I also build the systems and integrations that make it function."
          action={
            <a href="/expertise/" className="text-link">
              Explore expertise ↗
            </a>
          }
        />
        <div className="expertise-list">
          {specialties.map(([number, title, description]) => (
            <div className="expertise-row reveal" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </section>
      <section className="work-section section-pad" id="work">
        <SectionLead
          number="03"
          kicker="Selected work"
          title={
            <>
              Proof in the
              <br />
              <em>projects.</em>
            </>
          }
          description="A few examples of software built for different environments and different problems."
          action={
            <a href="/projects/" className="text-link">
              All projects ↗
            </a>
          }
        />
        <div className="project-grid">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
      <section className="booking-section section-pad" id="book">
        <SectionLead
          number="04"
          kicker="An open invitation"
          title={
            <>
              Start with a<br />
              <em>conversation.</em>
            </>
          }
          description="A free half-hour to talk through your idea, challenge, or next product move."
        />
        <div className="booking-layout">
          <div className="booking-big-type reveal">
            LET’S
            <br />
            MAKE
            <br />
            <em>IT REAL.</em>
          </div>
          <BookingPanel compact />
        </div>
      </section>
      <ContactStrip
        id="contact"
        kicker="HAVE SOMETHING IN MIND?"
        title="Let’s find the right way forward."
        href="/contact/"
        action="Get in touch ↗"
      />
    </>
  );
}
