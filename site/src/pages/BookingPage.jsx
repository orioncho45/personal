import React from "react";
import { BookingPanel } from "../components/BookingPanel.jsx";
import { InnerHero } from "../components/Section.jsx";

export function BookingPage() {
  return (
    <>
      <InnerHero
        number="04"
        kicker="Book a conversation"
        title={
          <>
            Thirty minutes.
            <br />
            <em>A clearer path.</em>
          </>
        }
        description="A free Google Meet to explore your software idea, current challenge, or next step."
      />
      <section className="booking-page section-pad">
        <div className="booking-page-copy">
          <h2>Bring the messy version.</h2>
          <p>
            You do not need a polished brief. Tell me what you want to change,
            what is getting in the way, and what success would look like. We’ll
            use the time to make the next step clearer.
          </p>
          <ul>
            <li>Free, 30-minute conversation</li>
            <li>Sunday, Monday, or Tuesday</li>
            <li>8:00 or 8:30 pm Asia/Dhaka (UTC+6)</li>
            <li>Google Meet link provided after booking</li>
          </ul>
          <p className="fine-print">
            Available times are checked against my Google Calendar. A confirmed
            booking creates an event and sends you an invitation.
          </p>
        </div>
        <BookingPanel />
      </section>
      <section className="faq section-pad">
        <h2>Before we talk</h2>
        <div className="faq-grid">
          <div>
            <h3>Is it really free?</h3>
            <p>Yes. The first 30-minute conversation is free.</p>
          </div>
          <div>
            <h3>What should I prepare?</h3>
            <p>
              A short description of your idea or problem is enough. Links or
              examples are useful if you have them.
            </p>
          </div>
          <div>
            <h3>What time zone is shown?</h3>
            <p>
              The two listed slots are in Dhaka time. The booking form also
              shows visitors their local time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
