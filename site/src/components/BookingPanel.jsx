import React from "react";
import { site } from "../../config.mjs";

const isDeploymentUrl =
  /^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/;

export function BookingPanel({ compact = false }) {
  return (
    <div className={`booking-panel${compact ? " booking-panel-compact" : ""}`}>
      <div className="booking-panel-top">
        <span className="live-indicator" />
        <span>FREE • 30 MINUTES • GOOGLE MEET</span>
      </div>
      <h3>
        One focused conversation.
        <br />
        <em>Zero pressure.</em>
      </h3>
      <p>
        Tell me what you are building or where you are stuck. We can explore the
        problem, the constraints, and a useful next step.
      </p>
      <div className="slot-grid">
        <div>
          <span>01</span>
          <strong>Sunday – Tuesday</strong>
          <small>Weekly availability</small>
        </div>
        <div>
          <span>02</span>
          <strong>8:00 / 8:30 PM</strong>
          <small>Dhaka time (UTC+6)</small>
        </div>
      </div>
      {isDeploymentUrl.test(site.bookingAppUrl) ? (
        <iframe
          className="booking-embed"
          src={site.bookingAppUrl}
          title="Book a free 30-minute call with Orion Chowdhury"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <p className="booking-note">
          Online booking is being connected. For now,{" "}
          <a
            href={`mailto:${site.email}?subject=Free%2030-minute%20conversation`}
          >
            email me to arrange a call ↗
          </a>
        </p>
      )}
    </div>
  );
}
