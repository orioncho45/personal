import { projects } from "../data/projects.mjs";
import { HomePage } from "./pages/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { ExpertisePage } from "./pages/ExpertisePage.jsx";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";
import { ProjectDetailPage } from "./pages/ProjectDetailPage.jsx";
import { BookingPage } from "./pages/BookingPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";

// Every route is generated as a real HTML file. Add content here when adding
// a page; project detail routes are generated from data/projects.mjs.
export const routes = [
  {
    path: "/",
    Component: HomePage,
    bodyClass: "home-page",
    schema: "person",
    title: "Orion Chowdhury | Software Developer & Digital Problem Solver",
    description:
      "Orion Chowdhury builds web applications, business software, mobile experiences, and automation. Explore selected projects and book a free 30-minute conversation.",
  },
  {
    path: "/about/",
    Component: AboutPage,
    schema: "person",
    title: "About Orion Chowdhury | Software Developer",
    description:
      "Learn how Orion Chowdhury approaches web applications, business systems, mobile products, and practical software problem solving.",
  },
  {
    path: "/expertise/",
    Component: ExpertisePage,
    title: "Expertise | Orion Chowdhury",
    description:
      "Explore Orion Chowdhury’s work in frontend and backend development, business software, mobile apps, databases, automation, and IoT.",
  },
  {
    path: "/projects/",
    Component: ProjectsPage,
    title: "Projects & Case Studies | Orion Chowdhury",
    description:
      "Explore selected projects by Orion Chowdhury, including ERP software, education technology, food court operations, home automation, and web automation.",
  },
  {
    path: "/book/",
    Component: BookingPage,
    title: "Book a Free 30-Minute Google Meet | Orion Chowdhury",
    description:
      "Book a free 30-minute conversation with Orion Chowdhury. Available Sunday through Tuesday at 8:00 or 8:30 pm Asia/Dhaka, subject to calendar availability.",
  },
  {
    path: "/contact/",
    Component: ContactPage,
    title: "Contact Orion Chowdhury | Software Projects",
    description:
      "Contact Orion Chowdhury about web applications, ERP systems, mobile apps, automation, and software collaboration.",
  },
  ...projects.map((project) => ({
    path: `/projects/${project.slug}/`,
    Component: ProjectDetailPage,
    props: { project },
    schema: "project",
    title: `${project.title} | Project by Orion Chowdhury`,
    description: project.summary,
    image: project.media.find((item) => item.type === "image")?.src,
  })),
];

export function getRoute(path) {
  return routes.find((route) => route.path === path);
}
