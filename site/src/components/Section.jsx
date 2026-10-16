import React from "react";

export function Eyebrow({ number, children }) {
  return (
    <p className="eyebrow">
      <span>{number}</span> / {children}
    </p>
  );
}

export function SectionLead({ number, kicker, title, description, action }) {
  return (
    <div className="section-lead reveal">
      <Eyebrow number={number}>{kicker}</Eyebrow>
      <div className="section-lead-grid">
        <h2>{title}</h2>
        <div>
          <p>{description}</p>
          {action}
        </div>
      </div>
    </div>
  );
}

export function InnerHero({ number, kicker, title, description }) {
  return (
    <section className="inner-hero section-pad">
      <Eyebrow number={number}>{kicker}</Eyebrow>
      <h1>{title}</h1>
      <p className="inner-intro">{description}</p>
    </section>
  );
}

export function ContactStrip({ id, kicker, title, href, action }) {
  return (
    <section className="contact-strip" id={id}>
      <span>{kicker}</span>
      <h2>{title}</h2>
      <a href={href} className="button button-outline">
        {action}
      </a>
    </section>
  );
}
