import React, { useState } from "react";
import { site } from "../../config.mjs";

const navigation = [
  ["/", "Home"],
  ["/about/", "About"],
  ["/expertise/", "Expertise"],
  ["/projects/", "Projects"],
  ["/book/", "Book a call"],
  ["/contact/", "Contact"],
];

export function Header({ currentPath }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-shell">
          <a href="/" className="brand" aria-label="Orion Chowdhury — home">
            <img
              src="/assets/logo-transparent.png"
              alt=""
              width="70"
              height="70"
            />
            <span className="brand-monogram">
              OC<span className="brand-dot">.</span>
            </span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav
            id="site-nav"
            className={`site-nav${open ? " is-open" : ""}`}
            aria-label="Main navigation"
          >
            {navigation.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className={currentPath === href ? "is-current" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-identity">
          <img
            src="/assets/logo-transparent.png"
            alt="Orion Chowdhury's personal logo"
            width="140"
            height="168"
            loading="lazy"
          />
          <span className="footer-mark">
            OC<span>.</span>
          </span>
        </div>
        <div>
          <p>
            Have a complex problem?
            <br />
            <strong>Let's make it clear.</strong>
          </p>
          <a href="/book/" className="text-link">
            Book a free conversation ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getUTCFullYear()} {site.name}
        </span>
        <span>Designed and built for the web.</span>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>
    </footer>
  );
}
