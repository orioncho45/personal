// Set SITE_URL before publishing. BOOKING_APP_URL can override this public
// Google Apps Script deployment URL when moving to a different deployment.
export const site = {
  url: process.env.SITE_URL || "",
  bookingAppUrl:
    process.env.BOOKING_APP_URL ||
    "https://script.google.com/macros/s/AKfycbzT5BWM2VJARkPzOXsZUIYJYu3Pd_sKu4Vx5NIjcKqExOONgw_vKdy6wnBR-qdnwxWkkQ/exec",
  name: "Orion Chowdhury",
  email: "orioncho45@gmail.com",
  timezone: "Asia/Dhaka",
};
