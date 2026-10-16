import React from "react";
import { site } from "../../config.mjs";
import { InnerHero } from "../components/Section.jsx";

export function ContactPage() {
  return (
    <>
      <InnerHero
        number="05"
        kicker="Contact"
        title={
          <>
            Good projects
            <br />
            start <em>somewhere.</em>
          </>
        }
        description="Tell me what you are working on. A brief note is enough to start."
      />
      <section className="contact-page section-pad">
        <div>
          <h2>Reach out directly.</h2>
          <p>
            For project enquiries or collaboration, email me or choose a free
            call.
          </p>
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email} ↗
          </a>
          <div className="contact-options">
            <a href="tel:+8801984316591">+880 1984 316591</a>
            <a
              href="https://wa.me/8801614316591"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ↗
            </a>
          </div>
        </div>
        <div className="contact-callout">
          <span>AN EASIER FIRST STEP</span>
          <h3>Prefer to talk?</h3>
          <p>
            Pick a 30-minute Google Meet slot and we can discuss the details
            together.
          </p>
          <a href="/book/" className="button button-light">
            Book a free call ↗
          </a>
        </div>
      </section>
    </>
  );
}
