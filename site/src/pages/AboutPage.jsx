import React from "react";
import { InnerHero } from "../components/Section.jsx";

export function AboutPage() {
  return (
    <>
      <InnerHero
        number="01"
        kicker="About Orion"
        title={
          <>
            Curiosity, translated
            <br />
            into <em>working systems.</em>
          </>
        }
        description="I’m a software developer focused on making complicated tasks feel simpler for the people who use the result."
      />
      <section className="content-band section-pad">
        <div className="content-grid">
          <span className="side-label">HOW I THINK</span>
          <div className="prose">
            <h2>Start with the problem.</h2>
            <p>
              My work spans full-stack web applications, business software,
              mobile apps, and automation. The common thread is the need to
              understand what is happening in the real world before choosing how
              to build.
            </p>
            <p>
              In an ICT lab, that has meant connecting task management with
              student activity. In a busy food court, it has meant keeping
              orders visible across people doing different jobs. In each case,
              the interface and the underlying system have to work together.
            </p>
            <p>
              I’m interested in projects where technology can remove friction
              and make complex information easier to act on.
            </p>
            <a href="/projects/" className="text-link">
              See the projects ↗
            </a>
          </div>
        </div>
      </section>
      <section className="statement section-pad">
        <p>“The best software makes the difficult parts feel clear.”</p>
      </section>
      <section className="content-band section-pad">
        <div className="content-grid">
          <span className="side-label">NEXT STEP</span>
          <div className="prose">
            <h2>Have a challenge in mind?</h2>
            <p>
              We can use a free 30-minute Google Meet to talk through your goals
              and a practical path forward.
            </p>
            <a href="/book/" className="button button-light">
              Book a free conversation ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
