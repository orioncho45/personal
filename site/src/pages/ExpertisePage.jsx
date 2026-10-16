import React from "react";
import { ContactStrip, InnerHero } from "../components/Section.jsx";

const expertise = [
  [
    "Frontend development",
    "React, TypeScript, responsive interfaces, and accessible interaction.",
  ],
  [
    "Backend development",
    "Node.js, Python, APIs, and application architecture.",
  ],
  ["Business software", "ERP systems, dashboards, and workflow tools."],
  ["Data and databases", "PostgreSQL, MySQL, MongoDB, and schema design."],
  [
    "Mobile and desktop",
    "Applications designed for iOS, Android, Windows, and macOS.",
  ],
  [
    "Automation and IoT",
    "Connected devices and software that reduces repetitive work.",
  ],
];

export function ExpertisePage() {
  return (
    <>
      <InnerHero
        number="02"
        kicker="Expertise"
        title={
          <>
            Many disciplines.
            <br />
            <em>One clear outcome.</em>
          </>
        }
        description="The right solution may be a website, a workflow, a dashboard, a mobile app, or a combination of them."
      />
      <section className="expertise-page section-pad">
        <div className="numbered-grid">
          {expertise.map(([title, description], index) => (
            <article className="numbered-item reveal" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactStrip
        kicker="READY TO DISCUSS THE DETAILS?"
        title="Let’s shape the right system."
        href="/book/"
        action="Book a free call ↗"
      />
    </>
  );
}
