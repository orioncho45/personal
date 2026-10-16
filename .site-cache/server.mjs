// site/src/Document.jsx
import React3 from "react";

// site/config.mjs
var site = {
  url: process.env.SITE_URL || "",
  bookingAppUrl: process.env.BOOKING_APP_URL || "https://script.google.com/macros/s/AKfycbzT5BWM2VJARkPzOXsZUIYJYu3Pd_sKu4Vx5NIjcKqExOONgw_vKdy6wnBR-qdnwxWkkQ/exec",
  name: "Orion Chowdhury",
  email: "orioncho45@gmail.com",
  timezone: "Asia/Dhaka"
};

// site/src/App.jsx
import React2, { useEffect } from "react";

// site/src/components/Layout.jsx
import React, { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var navigation = [
  ["/", "Home"],
  ["/about/", "About"],
  ["/expertise/", "Expertise"],
  ["/projects/", "Projects"],
  ["/book/", "Book a call"],
  ["/contact/", "Contact"]
];
function Header({ currentPath }) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("a", { className: "skip-link", href: "#main", children: "Skip to content" }),
    /* @__PURE__ */ jsx("header", { className: "site-header", children: /* @__PURE__ */ jsxs("div", { className: "nav-shell", children: [
      /* @__PURE__ */ jsxs("a", { href: "/", className: "brand", "aria-label": "Orion Chowdhury \u2014 home", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/assets/logo-transparent.png",
            alt: "",
            width: "70",
            height: "70"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "brand-monogram", children: [
          "OC",
          /* @__PURE__ */ jsx("span", { className: "brand-dot", children: "." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "menu-toggle",
          type: "button",
          "aria-expanded": open,
          "aria-controls": "site-nav",
          "aria-label": open ? "Close menu" : "Open menu",
          onClick: () => setOpen(!open),
          children: [
            /* @__PURE__ */ jsx("span", {}),
            /* @__PURE__ */ jsx("span", {}),
            /* @__PURE__ */ jsx("span", {})
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "nav",
        {
          id: "site-nav",
          className: `site-nav${open ? " is-open" : ""}`,
          "aria-label": "Main navigation",
          children: navigation.map(([href, label]) => /* @__PURE__ */ jsx(
            "a",
            {
              href,
              className: currentPath === href ? "is-current" : void 0,
              onClick: () => setOpen(false),
              children: label
            },
            href
          ))
        }
      )
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "site-footer", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-top", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer-identity", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/assets/logo-transparent.png",
            alt: "Orion Chowdhury's personal logo",
            width: "140",
            height: "168",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "footer-mark", children: [
          "OC",
          /* @__PURE__ */ jsx("span", { children: "." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Have a complex problem?",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("strong", { children: "Let's make it clear." })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "/book/", className: "text-link", children: "Book a free conversation \u2197" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getUTCFullYear(),
        " ",
        site.name
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Designed and built for the web." }),
      /* @__PURE__ */ jsx("a", { href: `mailto:${site.email}`, children: site.email })
    ] })
  ] });
}

// site/src/App.jsx
import { Fragment as Fragment2, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function usePageMotion() {
  useEffect(() => {
    const elements = [...document.querySelectorAll(".reveal")];
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries)
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
        },
        { threshold: 0.08, rootMargin: "0px 0px 40px 0px" }
      );
      elements.forEach((element) => observer.observe(element));
      return () => observer.disconnect();
    }
    elements.forEach((element) => element.classList.add("is-visible"));
  }, []);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${available > 0 ? window.scrollY / available * 100 : 0}%`
      );
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
function App({ route }) {
  usePageMotion();
  const { Component, props } = route;
  return /* @__PURE__ */ jsxs2(Fragment2, { children: [
    /* @__PURE__ */ jsx2(Header, { currentPath: route.path }),
    /* @__PURE__ */ jsx2("main", { id: "main", children: /* @__PURE__ */ jsx2(Component, { ...props }) }),
    /* @__PURE__ */ jsx2(Footer, {})
  ] });
}

// site/src/Document.jsx
import { Fragment as Fragment3, jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function schemaFor(route, origin) {
  if (!origin) return null;
  if (route.schema === "person")
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: site.name,
      url: origin,
      jobTitle: "Software Developer",
      email: site.email
    };
  if (route.schema === "project")
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: route.props.project.title,
      description: route.description,
      url: origin + route.path,
      creator: { "@type": "Person", name: site.name },
      image: route.image ? origin + route.image : void 0
    };
  return null;
}
function Document({ route }) {
  const origin = site.url.replace(/\/$/, "");
  const canonical = origin ? origin + route.path : null;
  const schema = schemaFor(route, origin);
  return /* @__PURE__ */ jsxs3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs3("head", { children: [
      /* @__PURE__ */ jsx3("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx3("meta", { name: "theme-color", content: "#070707" }),
      /* @__PURE__ */ jsx3("meta", { name: "color-scheme", content: "dark" }),
      /* @__PURE__ */ jsx3("title", { children: route.title }),
      /* @__PURE__ */ jsx3("meta", { name: "description", content: route.description }),
      canonical && /* @__PURE__ */ jsxs3(Fragment3, { children: [
        /* @__PURE__ */ jsx3("link", { rel: "canonical", href: canonical }),
        /* @__PURE__ */ jsx3("meta", { property: "og:url", content: canonical })
      ] }),
      /* @__PURE__ */ jsx3("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx3("meta", { property: "og:title", content: route.title }),
      /* @__PURE__ */ jsx3("meta", { property: "og:description", content: route.description }),
      origin && /* @__PURE__ */ jsxs3(Fragment3, { children: [
        /* @__PURE__ */ jsx3(
          "meta",
          {
            property: "og:image",
            content: origin + (route.image || "/assets/logo.jpg")
          }
        ),
        /* @__PURE__ */ jsx3("meta", { name: "twitter:card", content: "summary_large_image" })
      ] }),
      /* @__PURE__ */ jsx3("link", { rel: "icon", type: "image/png", href: "/assets/logo-transparent.png" }),
      /* @__PURE__ */ jsx3("link", { rel: "stylesheet", href: "/assets/styles.css" }),
      /* @__PURE__ */ jsx3(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: "document.documentElement.classList.add('js-motion')"
          }
        }
      ),
      schema && /* @__PURE__ */ jsx3(
        "script",
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: {
            __html: JSON.stringify(schema).replace(/</g, "\\u003c")
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs3("body", { className: route.bodyClass || void 0, children: [
      /* @__PURE__ */ jsx3("div", { id: "root", children: /* @__PURE__ */ jsx3(App, { route }) }),
      /* @__PURE__ */ jsx3("script", { type: "module", src: "/assets/site.js" })
    ] })
  ] });
}

// site/data/projects.mjs
var projects = [
  {
    slug: "whueo-io",
    title: "Whueo?.io",
    category: "Multiplayer gaming",
    summary: "A real-time multiplayer drawing and social deduction game built for interactive group play.",
    story: "Whueo?.io is a browser-based multiplayer game that combines collaborative drawing, social deduction, and real-time interaction. Players join shared lobbies, participate in drawing rounds, communicate through live chat, identify imposters, and vote on outcomes. Built with a focus on responsive gameplay, synchronized player states, and seamless multiplayer experiences.",
    role: "Full-stack development & game architecture",
    tags: [
      "React",
      "Redux",
      "Material UI",
      "PartyKit",
      "Real-time",
      "Multiplayer"
    ],
    actions: [{ label: "Play now", url: "http://whueoio.com", newTab: true }],
    media: [
      {
        type: "image",
        src: "/assets/projects/whueo-hero.png",
        alt: "Whueo.io multiplayer drawing gameplay"
      },
      {
        type: "image",
        src: "/assets/projects/whueo-gameplay.png",
        alt: "Whueo.io multiplayer drawing gameplay"
      },
      // {
      //   type: 'video',
      //   src: '/assets/projects/whueo-demo.mp4',
      //   title: 'Whueo.io multiplayer gameplay demonstration'
      // },
      {
        type: "image",
        src: "/assets/projects/whueo-lobby.png",
        alt: "Whueo.io multiplayer lobby and player list"
      },
      {
        type: "image",
        src: "/assets/projects/whueo-voting.png",
        alt: "Whueo.io social deduction and voting interface"
      }
    ]
  },
  {
    slug: "modern-erp",
    title: "Modern ERP",
    category: "Business systems",
    summary: "A custom ERP for Amity International, a multipurpose distribution company.",
    story: "A custom enterprise resource planning system built around the needs of a multipurpose distribution business. The project focuses on making complex operational information easier to work with.",
    role: "Full-stack development",
    tags: ["ERP", "Business software"],
    media: [{ type: "image", src: "/assets/projects/erp.png", alt: "Modern ERP interface preview" }]
  },
  {
    slug: "lab-software",
    title: "Lab Software",
    category: "Education technology",
    summary: "Student activity monitoring and task management for an ICT lab.",
    story: "A private high school needed a clearer way to manage work in its ICT lab. This desktop system helps staff assign tasks and monitor student computer activity during lab sessions.",
    role: "Desktop software development",
    tags: ["Desktop", "Task management", "Education"],
    media: [{ type: "image", src: "/assets/projects/ndc.png", alt: "Lab Software preview" }]
  },
  {
    slug: "food-court-technology",
    title: "Food Court Technology",
    category: "Operations",
    summary: "Real-time food court orders and inventory tracking.",
    story: "A real-time communication system connecting the cashier, preparation team, and customers in a busy food court. Orders and inventory stay visible as work moves between teams.",
    role: "Full-stack development",
    tags: ["React", "Node.js", "PHP", "Real-time"],
    media: [
      { type: "image", src: "/assets/projects/food.png", alt: "Food Court Technology interface preview" },
      { type: "video", src: "/assets/projects/food.mp4", title: "Food Court Technology demonstration" }
    ]
  },
  {
    slug: "mobilemart-check-manager",
    title: "MobileMart Check Manager",
    category: "Desktop software",
    summary: "A desktop-based check management system designed to streamline financial recordkeeping and business operations.",
    story: "MobileMart Check Manager is a desktop application developed to simplify the organization and management of business checks. Built with Electron and an Express.js backend, the system brings structured recordkeeping into a dedicated desktop environment. Prisma ORM supports database operations, while the application focuses on efficient workflows, accessible records, and a practical user experience for day-to-day business management.",
    role: "Full-stack desktop application development",
    tags: [
      "Electron",
      "Node.js",
      "Express.js",
      "Prisma",
      "Desktop"
    ],
    media: [
      {
        type: "image",
        src: "/assets/projects/mobilemart-dashboard.png",
        alt: "MobileMart Check Manager desktop dashboard"
      },
      {
        type: "image",
        src: "/assets/projects/mobilemart-settings.png",
        alt: "MobileMart Check Manager app settings"
      },
      {
        type: "image",
        src: "/assets/projects/mobilemart-report.png",
        alt: "MobileMart Check Manager customizded reports"
      }
    ]
  },
  {
    slug: "malenia",
    title: "Malenia",
    category: "E-commerce",
    summary: "A modern e-commerce platform with a dynamic storefront, product management, and a dedicated administration system.",
    story: "Malenia is a full-stack e-commerce platform designed to deliver a seamless online shopping experience while simplifying business operations. The platform combines a responsive Next.js storefront with a separate React-based administration dashboard for managing products, orders, and store operations. Powered by a PostgreSQL database through Supabase and Prisma ORM, the system focuses on scalability, maintainability, and a smooth experience for both customers and administrators.",
    role: "Full-stack development & system architecture",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Supabase"
    ],
    media: [
      {
        type: "image",
        src: "/assets/projects/malenia-home.png",
        alt: "Malenia e-commerce storefront homepage"
      },
      {
        type: "image",
        src: "/assets/projects/malenia-product.png",
        alt: "Malenia product details and shopping interface"
      },
      {
        type: "image",
        src: "/assets/projects/malenia-admin.png",
        alt: "Malenia administration dashboard"
      },
      {
        type: "image",
        src: "/assets/projects/malenia-order.png",
        alt: "Malenia Order Processed"
      }
    ]
  },
  {
    slug: "project-aura",
    title: "Project Aura",
    category: "Connected devices",
    summary: "A mobile app for a home automation and wireless power project.",
    story: "An Android and iOS mobile app for home automation, developed for an ongoing wireless power transmission project.",
    role: "Mobile app development",
    tags: ["React Native", "Node.js", "Android", "IoT"],
    media: [
      { type: "image", src: "/assets/projects/aura.png", alt: "Project Aura mobile app preview" },
      { type: "video", src: "/assets/projects/aura.mp4", title: "Project Aura demonstration" }
    ]
  },
  {
    slug: "website-automation-bot",
    title: "Website Automation Bot",
    category: "Automation",
    summary: "Web scraping and automation software for BD Trippers.",
    story: "A software project for BD Trippers focused on web scraping and automating repetitive website work.",
    role: "Automation development",
    tags: ["Automation", "Web scraping"],
    media: [{ type: "image", src: "/assets/projects/bd.png", alt: "Website Automation Bot preview" }]
  }
];

// site/src/pages/HomePage.jsx
import React7 from "react";

// site/src/components/BookingPanel.jsx
import React4 from "react";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var isDeploymentUrl = /^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/;
function BookingPanel({ compact = false }) {
  return /* @__PURE__ */ jsxs4("div", { className: `booking-panel${compact ? " booking-panel-compact" : ""}`, children: [
    /* @__PURE__ */ jsxs4("div", { className: "booking-panel-top", children: [
      /* @__PURE__ */ jsx4("span", { className: "live-indicator" }),
      /* @__PURE__ */ jsx4("span", { children: "FREE \u2022 30 MINUTES \u2022 GOOGLE MEET" })
    ] }),
    /* @__PURE__ */ jsxs4("h3", { children: [
      "One focused conversation.",
      /* @__PURE__ */ jsx4("br", {}),
      /* @__PURE__ */ jsx4("em", { children: "Zero pressure." })
    ] }),
    /* @__PURE__ */ jsx4("p", { children: "Tell me what you are building or where you are stuck. We can explore the problem, the constraints, and a useful next step." }),
    /* @__PURE__ */ jsxs4("div", { className: "slot-grid", children: [
      /* @__PURE__ */ jsxs4("div", { children: [
        /* @__PURE__ */ jsx4("span", { children: "01" }),
        /* @__PURE__ */ jsx4("strong", { children: "Sunday \u2013 Tuesday" }),
        /* @__PURE__ */ jsx4("small", { children: "Weekly availability" })
      ] }),
      /* @__PURE__ */ jsxs4("div", { children: [
        /* @__PURE__ */ jsx4("span", { children: "02" }),
        /* @__PURE__ */ jsx4("strong", { children: "8:00 / 8:30 PM" }),
        /* @__PURE__ */ jsx4("small", { children: "Dhaka time (UTC+6)" })
      ] })
    ] }),
    isDeploymentUrl.test(site.bookingAppUrl) ? /* @__PURE__ */ jsx4(
      "iframe",
      {
        className: "booking-embed",
        src: site.bookingAppUrl,
        title: "Book a free 30-minute call with Orion Chowdhury",
        loading: "lazy",
        referrerPolicy: "strict-origin-when-cross-origin"
      }
    ) : /* @__PURE__ */ jsxs4("p", { className: "booking-note", children: [
      "Online booking is being connected. For now,",
      " ",
      /* @__PURE__ */ jsx4(
        "a",
        {
          href: `mailto:${site.email}?subject=Free%2030-minute%20conversation`,
          children: "email me to arrange a call \u2197"
        }
      )
    ] })
  ] });
}

// site/src/components/ProjectCard.jsx
import React5 from "react";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function ProjectCard({ project, index }) {
  const cover = project.media.find((item) => item.type === "image");
  return /* @__PURE__ */ jsx5("article", { className: "project-card reveal", children: /* @__PURE__ */ jsxs5(
    "a",
    {
      href: `/projects/${project.slug}/`,
      className: "project-card-link",
      "aria-label": `Explore ${project.title}`,
      children: [
        /* @__PURE__ */ jsxs5("div", { className: "project-image-frame", children: [
          cover && /* @__PURE__ */ jsx5(
            "img",
            {
              src: cover.src,
              alt: cover.alt || project.title,
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsx5("span", { className: "card-index", children: String(index + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsx5("span", { className: "card-arrow", "aria-hidden": "true", children: "\u2197" })
        ] }),
        /* @__PURE__ */ jsxs5("div", { className: "project-card-meta", children: [
          /* @__PURE__ */ jsx5("span", { children: project.category }),
          /* @__PURE__ */ jsx5("span", { children: "Case study \u2197" })
        ] }),
        /* @__PURE__ */ jsx5("h3", { children: project.title }),
        /* @__PURE__ */ jsx5("p", { children: project.summary })
      ]
    }
  ) });
}

// site/src/components/Section.jsx
import React6 from "react";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function Eyebrow({ number, children }) {
  return /* @__PURE__ */ jsxs6("p", { className: "eyebrow", children: [
    /* @__PURE__ */ jsx6("span", { children: number }),
    " / ",
    children
  ] });
}
function SectionLead({ number, kicker, title, description, action }) {
  return /* @__PURE__ */ jsxs6("div", { className: "section-lead reveal", children: [
    /* @__PURE__ */ jsx6(Eyebrow, { number, children: kicker }),
    /* @__PURE__ */ jsxs6("div", { className: "section-lead-grid", children: [
      /* @__PURE__ */ jsx6("h2", { children: title }),
      /* @__PURE__ */ jsxs6("div", { children: [
        /* @__PURE__ */ jsx6("p", { children: description }),
        action
      ] })
    ] })
  ] });
}
function InnerHero({ number, kicker, title, description }) {
  return /* @__PURE__ */ jsxs6("section", { className: "inner-hero section-pad", children: [
    /* @__PURE__ */ jsx6(Eyebrow, { number, children: kicker }),
    /* @__PURE__ */ jsx6("h1", { children: title }),
    /* @__PURE__ */ jsx6("p", { className: "inner-intro", children: description })
  ] });
}
function ContactStrip({ id, kicker, title, href, action }) {
  return /* @__PURE__ */ jsxs6("section", { className: "contact-strip", id, children: [
    /* @__PURE__ */ jsx6("span", { children: kicker }),
    /* @__PURE__ */ jsx6("h2", { children: title }),
    /* @__PURE__ */ jsx6("a", { href, className: "button button-outline", children: action })
  ] });
}

// site/src/pages/HomePage.jsx
import { Fragment as Fragment4, jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
var specialties = [
  [
    "01",
    "Web applications",
    "Responsive interfaces and full-stack products built around real workflows."
  ],
  [
    "02",
    "Business systems",
    "ERP, dashboards, and tools that make operations easier to manage."
  ],
  [
    "03",
    "Mobile & automation",
    "Connected experiences across mobile, desktop, and repetitive processes."
  ]
];
function Hero() {
  const movePortrait = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mx",
      `${(((event.clientX - box.left) / box.width - 0.5) * 18).toFixed(1)}px`
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${(((event.clientY - box.top) / box.height - 0.5) * 18).toFixed(1)}px`
    );
  };
  const resetPortrait = (event) => {
    event.currentTarget.style.setProperty("--mx", "0px");
    event.currentTarget.style.setProperty("--my", "0px");
  };
  return /* @__PURE__ */ jsx7("section", { className: "hero", id: "home", children: /* @__PURE__ */ jsxs7("div", { className: "hero-grid", children: [
    /* @__PURE__ */ jsxs7("div", { className: "hero-copy", children: [
      /* @__PURE__ */ jsx7(Eyebrow, { number: "00", children: "Software developer / problem solver" }),
      /* @__PURE__ */ jsxs7("h1", { children: [
        "Orion",
        /* @__PURE__ */ jsx7("br", {}),
        /* @__PURE__ */ jsxs7("span", { children: [
          "Chowdhury",
          /* @__PURE__ */ jsx7("span", { className: "accent", children: "." })
        ] })
      ] }),
      /* @__PURE__ */ jsx7("p", { className: "hero-subline", children: "Thoughtful software for problems that refuse to fit in a template." }),
      /* @__PURE__ */ jsxs7("div", { className: "hero-actions", children: [
        /* @__PURE__ */ jsxs7("a", { href: "#work", className: "button button-light", children: [
          "Explore the work ",
          /* @__PURE__ */ jsx7("span", { "aria-hidden": "true", children: "\u2198" })
        ] }),
        /* @__PURE__ */ jsxs7("a", { href: "/book/", className: "button button-outline", children: [
          "Let\u2019s talk ",
          /* @__PURE__ */ jsx7("span", { "aria-hidden": "true", children: "\u2197" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs7("div", { className: "hero-bottom", children: [
        /* @__PURE__ */ jsx7("span", { children: "SCROLL TO EXPLORE" }),
        /* @__PURE__ */ jsx7("span", { className: "hero-scroll-line" }),
        /* @__PURE__ */ jsx7("span", { children: "BASED IN DHAKA \xB7 WORKING EVERYWHERE" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs7(
      "div",
      {
        className: "hero-art",
        onPointerMove: movePortrait,
        onPointerLeave: resetPortrait,
        children: [
          /* @__PURE__ */ jsx7("div", { className: "hero-art-grid" }),
          /* @__PURE__ */ jsx7("div", { className: "hero-art-cut" }),
          /* @__PURE__ */ jsx7("div", { className: "portrait-frame", children: /* @__PURE__ */ jsx7(
            "img",
            {
              className: "hero-portrait",
              src: "/assets/portrait.jpg",
              alt: "Portrait of Orion Chowdhury",
              width: "1085",
              height: "1200",
              fetchPriority: "high",
              decoding: "async"
            }
          ) }),
          /* @__PURE__ */ jsx7("span", { className: "art-vertical", children: "FORM FOLLOWS FUNCTION" })
        ]
      }
    )
  ] }) });
}
function MotionRibbon() {
  const phrase = /* @__PURE__ */ jsxs7(Fragment4, { children: [
    "BUILD WHAT MATTERS ",
    /* @__PURE__ */ jsx7("span", { children: "\u2733" }),
    " MAKE IT USEFUL ",
    /* @__PURE__ */ jsx7("span", { children: "\u2733" }),
    " "
  ] });
  return /* @__PURE__ */ jsx7("div", { className: "motion-ribbon", "aria-hidden": "true", children: /* @__PURE__ */ jsxs7("div", { className: "motion-ribbon-track", children: [
    phrase,
    phrase,
    phrase
  ] }) });
}
function HomePage() {
  return /* @__PURE__ */ jsxs7(Fragment4, { children: [
    /* @__PURE__ */ jsx7(Hero, {}),
    /* @__PURE__ */ jsx7(MotionRibbon, {}),
    /* @__PURE__ */ jsxs7("section", { className: "intro section-pad", id: "about", children: [
      /* @__PURE__ */ jsx7(
        SectionLead,
        {
          number: "01",
          kicker: "The approach",
          title: /* @__PURE__ */ jsxs7(Fragment4, { children: [
            "Build for the",
            /* @__PURE__ */ jsx7("br", {}),
            /* @__PURE__ */ jsx7("em", { children: "real world." })
          ] }),
          description: "I work across interfaces, systems, and automation, connecting complex technical work to experiences people can actually use.",
          action: /* @__PURE__ */ jsx7("a", { href: "/about/", className: "text-link", children: "More about me \u2197" })
        }
      ),
      /* @__PURE__ */ jsxs7("div", { className: "manifesto reveal", children: [
        /* @__PURE__ */ jsx7("span", { children: "AN IDEA, MADE USEFUL" }),
        /* @__PURE__ */ jsx7("p", { children: "From operational software to connected products, I care about the details that make a system clear, reliable, and worth returning to." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs7("section", { className: "expertise-section section-pad", id: "expertise", children: [
      /* @__PURE__ */ jsx7(
        SectionLead,
        {
          number: "02",
          kicker: "What I do",
          title: /* @__PURE__ */ jsxs7(Fragment4, { children: [
            "The work behind",
            /* @__PURE__ */ jsx7("br", {}),
            "the work."
          ] }),
          description: "Designing the interface is one part. I also build the systems and integrations that make it function.",
          action: /* @__PURE__ */ jsx7("a", { href: "/expertise/", className: "text-link", children: "Explore expertise \u2197" })
        }
      ),
      /* @__PURE__ */ jsx7("div", { className: "expertise-list", children: specialties.map(([number, title, description]) => /* @__PURE__ */ jsxs7("div", { className: "expertise-row reveal", children: [
        /* @__PURE__ */ jsx7("span", { children: number }),
        /* @__PURE__ */ jsx7("h3", { children: title }),
        /* @__PURE__ */ jsx7("p", { children: description }),
        /* @__PURE__ */ jsx7("span", { "aria-hidden": "true", children: "\u2197" })
      ] }, number)) })
    ] }),
    /* @__PURE__ */ jsxs7("section", { className: "work-section section-pad", id: "work", children: [
      /* @__PURE__ */ jsx7(
        SectionLead,
        {
          number: "03",
          kicker: "Selected work",
          title: /* @__PURE__ */ jsxs7(Fragment4, { children: [
            "Proof in the",
            /* @__PURE__ */ jsx7("br", {}),
            /* @__PURE__ */ jsx7("em", { children: "projects." })
          ] }),
          description: "A few examples of software built for different environments and different problems.",
          action: /* @__PURE__ */ jsx7("a", { href: "/projects/", className: "text-link", children: "All projects \u2197" })
        }
      ),
      /* @__PURE__ */ jsx7("div", { className: "project-grid", children: projects.slice(0, 4).map((project, index) => /* @__PURE__ */ jsx7(ProjectCard, { project, index }, project.slug)) })
    ] }),
    /* @__PURE__ */ jsxs7("section", { className: "booking-section section-pad", id: "book", children: [
      /* @__PURE__ */ jsx7(
        SectionLead,
        {
          number: "04",
          kicker: "An open invitation",
          title: /* @__PURE__ */ jsxs7(Fragment4, { children: [
            "Start with a",
            /* @__PURE__ */ jsx7("br", {}),
            /* @__PURE__ */ jsx7("em", { children: "conversation." })
          ] }),
          description: "A free half-hour to talk through your idea, challenge, or next product move."
        }
      ),
      /* @__PURE__ */ jsxs7("div", { className: "booking-layout", children: [
        /* @__PURE__ */ jsxs7("div", { className: "booking-big-type reveal", children: [
          "LET\u2019S",
          /* @__PURE__ */ jsx7("br", {}),
          "MAKE",
          /* @__PURE__ */ jsx7("br", {}),
          /* @__PURE__ */ jsx7("em", { children: "IT REAL." })
        ] }),
        /* @__PURE__ */ jsx7(BookingPanel, { compact: true })
      ] })
    ] }),
    /* @__PURE__ */ jsx7(
      ContactStrip,
      {
        id: "contact",
        kicker: "HAVE SOMETHING IN MIND?",
        title: "Let\u2019s find the right way forward.",
        href: "/contact/",
        action: "Get in touch \u2197"
      }
    )
  ] });
}

// site/src/pages/AboutPage.jsx
import React8 from "react";
import { Fragment as Fragment5, jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
function AboutPage() {
  return /* @__PURE__ */ jsxs8(Fragment5, { children: [
    /* @__PURE__ */ jsx8(
      InnerHero,
      {
        number: "01",
        kicker: "About Orion",
        title: /* @__PURE__ */ jsxs8(Fragment5, { children: [
          "Curiosity, translated",
          /* @__PURE__ */ jsx8("br", {}),
          "into ",
          /* @__PURE__ */ jsx8("em", { children: "working systems." })
        ] }),
        description: "I\u2019m a software developer focused on making complicated tasks feel simpler for the people who use the result."
      }
    ),
    /* @__PURE__ */ jsx8("section", { className: "content-band section-pad", children: /* @__PURE__ */ jsxs8("div", { className: "content-grid", children: [
      /* @__PURE__ */ jsx8("span", { className: "side-label", children: "HOW I THINK" }),
      /* @__PURE__ */ jsxs8("div", { className: "prose", children: [
        /* @__PURE__ */ jsx8("h2", { children: "Start with the problem." }),
        /* @__PURE__ */ jsx8("p", { children: "My work spans full-stack web applications, business software, mobile apps, and automation. The common thread is the need to understand what is happening in the real world before choosing how to build." }),
        /* @__PURE__ */ jsx8("p", { children: "In an ICT lab, that has meant connecting task management with student activity. In a busy food court, it has meant keeping orders visible across people doing different jobs. In each case, the interface and the underlying system have to work together." }),
        /* @__PURE__ */ jsx8("p", { children: "I\u2019m interested in projects where technology can remove friction and make complex information easier to act on." }),
        /* @__PURE__ */ jsx8("a", { href: "/projects/", className: "text-link", children: "See the projects \u2197" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx8("section", { className: "statement section-pad", children: /* @__PURE__ */ jsx8("p", { children: "\u201CThe best software makes the difficult parts feel clear.\u201D" }) }),
    /* @__PURE__ */ jsx8("section", { className: "content-band section-pad", children: /* @__PURE__ */ jsxs8("div", { className: "content-grid", children: [
      /* @__PURE__ */ jsx8("span", { className: "side-label", children: "NEXT STEP" }),
      /* @__PURE__ */ jsxs8("div", { className: "prose", children: [
        /* @__PURE__ */ jsx8("h2", { children: "Have a challenge in mind?" }),
        /* @__PURE__ */ jsx8("p", { children: "We can use a free 30-minute Google Meet to talk through your goals and a practical path forward." }),
        /* @__PURE__ */ jsx8("a", { href: "/book/", className: "button button-light", children: "Book a free conversation \u2197" })
      ] })
    ] }) })
  ] });
}

// site/src/pages/ExpertisePage.jsx
import React9 from "react";
import { Fragment as Fragment6, jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
var expertise = [
  [
    "Frontend development",
    "React, TypeScript, responsive interfaces, and accessible interaction."
  ],
  [
    "Backend development",
    "Node.js, Python, APIs, and application architecture."
  ],
  ["Business software", "ERP systems, dashboards, and workflow tools."],
  ["Data and databases", "PostgreSQL, MySQL, MongoDB, and schema design."],
  [
    "Mobile and desktop",
    "Applications designed for iOS, Android, Windows, and macOS."
  ],
  [
    "Automation and IoT",
    "Connected devices and software that reduces repetitive work."
  ]
];
function ExpertisePage() {
  return /* @__PURE__ */ jsxs9(Fragment6, { children: [
    /* @__PURE__ */ jsx9(
      InnerHero,
      {
        number: "02",
        kicker: "Expertise",
        title: /* @__PURE__ */ jsxs9(Fragment6, { children: [
          "Many disciplines.",
          /* @__PURE__ */ jsx9("br", {}),
          /* @__PURE__ */ jsx9("em", { children: "One clear outcome." })
        ] }),
        description: "The right solution may be a website, a workflow, a dashboard, a mobile app, or a combination of them."
      }
    ),
    /* @__PURE__ */ jsx9("section", { className: "expertise-page section-pad", children: /* @__PURE__ */ jsx9("div", { className: "numbered-grid", children: expertise.map(([title, description], index) => /* @__PURE__ */ jsxs9("article", { className: "numbered-item reveal", children: [
      /* @__PURE__ */ jsx9("span", { children: String(index + 1).padStart(2, "0") }),
      /* @__PURE__ */ jsx9("h2", { children: title }),
      /* @__PURE__ */ jsx9("p", { children: description })
    ] }, title)) }) }),
    /* @__PURE__ */ jsx9(
      ContactStrip,
      {
        kicker: "READY TO DISCUSS THE DETAILS?",
        title: "Let\u2019s shape the right system.",
        href: "/book/",
        action: "Book a free call \u2197"
      }
    )
  ] });
}

// site/src/pages/ProjectsPage.jsx
import React10 from "react";
import { Fragment as Fragment7, jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
function ProjectsPage() {
  return /* @__PURE__ */ jsxs10(Fragment7, { children: [
    /* @__PURE__ */ jsx10(
      InnerHero,
      {
        number: "03",
        kicker: "Selected work",
        title: /* @__PURE__ */ jsxs10(Fragment7, { children: [
          "Ideas made",
          /* @__PURE__ */ jsx10("br", {}),
          /* @__PURE__ */ jsx10("em", { children: "useful." })
        ] }),
        description: "Each project starts with a different constraint. Explore what the software was built to do."
      }
    ),
    /* @__PURE__ */ jsx10("section", { className: "work-section section-pad", children: /* @__PURE__ */ jsx10("div", { className: "project-grid", children: projects.map((project, index) => /* @__PURE__ */ jsx10(ProjectCard, { project, index }, project.slug)) }) })
  ] });
}

// site/src/pages/ProjectDetailPage.jsx
import React13 from "react";

// site/src/components/ProjectActions.jsx
import React11 from "react";
import { jsx as jsx11, jsxs as jsxs11 } from "react/jsx-runtime";
function ProjectActions({ actions }) {
  if (!actions?.length) {
    return /* @__PURE__ */ jsx11("a", { href: "/book/", className: "text-link", children: "Discuss a similar challenge \u2197" });
  }
  return /* @__PURE__ */ jsx11("div", { className: "project-actions", children: actions.map(({ label, url, newTab }) => /* @__PURE__ */ jsxs11(
    "a",
    {
      href: url,
      className: "button button-outline",
      target: newTab ? "_blank" : void 0,
      rel: newTab ? "noopener noreferrer" : void 0,
      children: [
        label,
        " ",
        /* @__PURE__ */ jsx11("span", { "aria-hidden": "true", children: "\u2197" })
      ]
    },
    `${label}-${url}`
  )) });
}

// site/src/components/ProjectViewer.jsx
import React12, { useState as useState2 } from "react";
import { jsx as jsx12, jsxs as jsxs12 } from "react/jsx-runtime";
function VimeoFrame({ item }) {
  if (!/^\d+$/.test(String(item.id))) return /* @__PURE__ */ jsx12("p", { children: "Video unavailable." });
  const url = new URL(`https://player.vimeo.com/video/${item.id}`);
  if (item.hash && /^[a-zA-Z0-9]+$/.test(item.hash))
    url.searchParams.set("h", item.hash);
  url.searchParams.set("dnt", "1");
  return /* @__PURE__ */ jsx12(
    "iframe",
    {
      src: url.toString(),
      title: item.title || "Project video on Vimeo",
      allow: "autoplay; fullscreen; picture-in-picture",
      allowFullScreen: true,
      loading: "lazy"
    }
  );
}
function Media({ item }) {
  switch (item.type) {
    case "image":
      return /* @__PURE__ */ jsx12("img", { src: item.src, alt: item.alt || "Project image" });
    case "video":
      return /* @__PURE__ */ jsx12(
        "video",
        {
          src: item.src,
          controls: true,
          playsInline: true,
          preload: "metadata",
          "aria-label": item.title || "Project video"
        }
      );
    case "vimeo":
      return /* @__PURE__ */ jsx12(VimeoFrame, { item });
    default:
      return /* @__PURE__ */ jsx12("p", { children: "Media unavailable." });
  }
}
function ProjectViewer({ media }) {
  const [index, setIndex] = useState2(0);
  if (!media.length) return null;
  const select = (next) => setIndex((next + media.length) % media.length);
  return /* @__PURE__ */ jsxs12(
    "div",
    {
      className: "viewer",
      onKeyDown: (event) => {
        if (event.key === "ArrowLeft") select(index - 1);
        if (event.key === "ArrowRight") select(index + 1);
      },
      children: [
        /* @__PURE__ */ jsx12("div", { className: "viewer-stage", children: /* @__PURE__ */ jsx12(Media, { item: media[index] }, index) }),
        /* @__PURE__ */ jsxs12("div", { className: "viewer-controls", children: [
          /* @__PURE__ */ jsx12("div", { className: "viewer-thumbs", children: media.map((item, position) => /* @__PURE__ */ jsx12(
            "button",
            {
              type: "button",
              className: "viewer-thumb",
              "aria-label": `Show media ${position + 1}: ${item.title || item.alt || item.type}`,
              "aria-pressed": position === index,
              onClick: () => select(position),
              children: item.type === "image" ? /* @__PURE__ */ jsx12("img", { src: item.src, alt: "", loading: "lazy" }) : /* @__PURE__ */ jsx12("span", { children: item.type === "vimeo" ? "VIMEO \u2197" : "PLAY \u25B6" })
            },
            position
          )) }),
          /* @__PURE__ */ jsxs12("div", { className: "viewer-arrows", children: [
            /* @__PURE__ */ jsx12(
              "button",
              {
                type: "button",
                "aria-label": "Previous media",
                onClick: () => select(index - 1),
                children: "\u2190"
              }
            ),
            /* @__PURE__ */ jsxs12("span", { children: [
              String(index + 1).padStart(2, "0"),
              " /",
              " ",
              String(media.length).padStart(2, "0")
            ] }),
            /* @__PURE__ */ jsx12(
              "button",
              {
                type: "button",
                "aria-label": "Next media",
                onClick: () => select(index + 1),
                children: "\u2192"
              }
            )
          ] })
        ] })
      ]
    }
  );
}

// site/src/pages/ProjectDetailPage.jsx
import { Fragment as Fragment8, jsx as jsx13, jsxs as jsxs13 } from "react/jsx-runtime";
function ProjectDetailPage({ project }) {
  return /* @__PURE__ */ jsxs13(Fragment8, { children: [
    /* @__PURE__ */ jsxs13("section", { className: "detail-hero section-pad", children: [
      /* @__PURE__ */ jsx13(Eyebrow, { number: "03", children: project.category }),
      /* @__PURE__ */ jsxs13("div", { className: "detail-title-row", children: [
        /* @__PURE__ */ jsx13("h1", { children: project.title }),
        /* @__PURE__ */ jsxs13("span", { children: [
          "PROJECT / ",
          project.slug.toUpperCase().replaceAll("-", " ")
        ] })
      ] }),
      /* @__PURE__ */ jsx13("p", { children: project.summary })
    ] }),
    /* @__PURE__ */ jsx13("section", { className: "detail-media section-pad", children: /* @__PURE__ */ jsx13(ProjectViewer, { media: project.media }) }),
    /* @__PURE__ */ jsxs13("section", { className: "detail-body section-pad", children: [
      /* @__PURE__ */ jsxs13("div", { className: "detail-facts", children: [
        /* @__PURE__ */ jsxs13("div", { children: [
          /* @__PURE__ */ jsx13("span", { children: "ROLE" }),
          /* @__PURE__ */ jsx13("strong", { children: project.role })
        ] }),
        /* @__PURE__ */ jsxs13("div", { children: [
          /* @__PURE__ */ jsx13("span", { children: "FOCUS" }),
          /* @__PURE__ */ jsx13("strong", { children: project.category })
        ] }),
        /* @__PURE__ */ jsxs13("div", { children: [
          /* @__PURE__ */ jsx13("span", { children: "TOOLS / AREAS" }),
          /* @__PURE__ */ jsx13("strong", { children: project.tags.join(" \xB7 ") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs13("div", { className: "detail-story", children: [
        /* @__PURE__ */ jsx13("span", { className: "side-label", children: "THE PROJECT" }),
        /* @__PURE__ */ jsxs13("div", { children: [
          /* @__PURE__ */ jsx13("h2", { children: "What it was built to do." }),
          /* @__PURE__ */ jsx13("p", { children: project.story }),
          /* @__PURE__ */ jsx13(ProjectActions, { actions: project.actions })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx13(
      ContactStrip,
      {
        kicker: "MORE TO EXPLORE",
        title: "See the rest of the work.",
        href: "/projects/",
        action: "All projects \u2197"
      }
    )
  ] });
}

// site/src/pages/BookingPage.jsx
import React14 from "react";
import { Fragment as Fragment9, jsx as jsx14, jsxs as jsxs14 } from "react/jsx-runtime";
function BookingPage() {
  return /* @__PURE__ */ jsxs14(Fragment9, { children: [
    /* @__PURE__ */ jsx14(
      InnerHero,
      {
        number: "04",
        kicker: "Book a conversation",
        title: /* @__PURE__ */ jsxs14(Fragment9, { children: [
          "Thirty minutes.",
          /* @__PURE__ */ jsx14("br", {}),
          /* @__PURE__ */ jsx14("em", { children: "A clearer path." })
        ] }),
        description: "A free Google Meet to explore your software idea, current challenge, or next step."
      }
    ),
    /* @__PURE__ */ jsxs14("section", { className: "booking-page section-pad", children: [
      /* @__PURE__ */ jsxs14("div", { className: "booking-page-copy", children: [
        /* @__PURE__ */ jsx14("h2", { children: "Bring the messy version." }),
        /* @__PURE__ */ jsx14("p", { children: "You do not need a polished brief. Tell me what you want to change, what is getting in the way, and what success would look like. We\u2019ll use the time to make the next step clearer." }),
        /* @__PURE__ */ jsxs14("ul", { children: [
          /* @__PURE__ */ jsx14("li", { children: "Free, 30-minute conversation" }),
          /* @__PURE__ */ jsx14("li", { children: "Sunday, Monday, or Tuesday" }),
          /* @__PURE__ */ jsx14("li", { children: "8:00 or 8:30 pm Asia/Dhaka (UTC+6)" }),
          /* @__PURE__ */ jsx14("li", { children: "Google Meet link provided after booking" })
        ] }),
        /* @__PURE__ */ jsx14("p", { className: "fine-print", children: "Available times are checked against my Google Calendar. A confirmed booking creates an event and sends you an invitation." })
      ] }),
      /* @__PURE__ */ jsx14(BookingPanel, {})
    ] }),
    /* @__PURE__ */ jsxs14("section", { className: "faq section-pad", children: [
      /* @__PURE__ */ jsx14("h2", { children: "Before we talk" }),
      /* @__PURE__ */ jsxs14("div", { className: "faq-grid", children: [
        /* @__PURE__ */ jsxs14("div", { children: [
          /* @__PURE__ */ jsx14("h3", { children: "Is it really free?" }),
          /* @__PURE__ */ jsx14("p", { children: "Yes. The first 30-minute conversation is free." })
        ] }),
        /* @__PURE__ */ jsxs14("div", { children: [
          /* @__PURE__ */ jsx14("h3", { children: "What should I prepare?" }),
          /* @__PURE__ */ jsx14("p", { children: "A short description of your idea or problem is enough. Links or examples are useful if you have them." })
        ] }),
        /* @__PURE__ */ jsxs14("div", { children: [
          /* @__PURE__ */ jsx14("h3", { children: "What time zone is shown?" }),
          /* @__PURE__ */ jsx14("p", { children: "The two listed slots are in Dhaka time. The booking form also shows visitors their local time." })
        ] })
      ] })
    ] })
  ] });
}

// site/src/pages/ContactPage.jsx
import React15 from "react";
import { Fragment as Fragment10, jsx as jsx15, jsxs as jsxs15 } from "react/jsx-runtime";
function ContactPage() {
  return /* @__PURE__ */ jsxs15(Fragment10, { children: [
    /* @__PURE__ */ jsx15(
      InnerHero,
      {
        number: "05",
        kicker: "Contact",
        title: /* @__PURE__ */ jsxs15(Fragment10, { children: [
          "Good projects",
          /* @__PURE__ */ jsx15("br", {}),
          "start ",
          /* @__PURE__ */ jsx15("em", { children: "somewhere." })
        ] }),
        description: "Tell me what you are working on. A brief note is enough to start."
      }
    ),
    /* @__PURE__ */ jsxs15("section", { className: "contact-page section-pad", children: [
      /* @__PURE__ */ jsxs15("div", { children: [
        /* @__PURE__ */ jsx15("h2", { children: "Reach out directly." }),
        /* @__PURE__ */ jsx15("p", { children: "For project enquiries or collaboration, email me or choose a free call." }),
        /* @__PURE__ */ jsxs15("a", { className: "contact-email", href: `mailto:${site.email}`, children: [
          site.email,
          " \u2197"
        ] }),
        /* @__PURE__ */ jsxs15("div", { className: "contact-options", children: [
          /* @__PURE__ */ jsx15("a", { href: "tel:+8801984316591", children: "+880 1984 316591" }),
          /* @__PURE__ */ jsx15(
            "a",
            {
              href: "https://wa.me/8801614316591",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "WhatsApp \u2197"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs15("div", { className: "contact-callout", children: [
        /* @__PURE__ */ jsx15("span", { children: "AN EASIER FIRST STEP" }),
        /* @__PURE__ */ jsx15("h3", { children: "Prefer to talk?" }),
        /* @__PURE__ */ jsx15("p", { children: "Pick a 30-minute Google Meet slot and we can discuss the details together." }),
        /* @__PURE__ */ jsx15("a", { href: "/book/", className: "button button-light", children: "Book a free call \u2197" })
      ] })
    ] })
  ] });
}

// site/src/routes.jsx
var routes = [
  {
    path: "/",
    Component: HomePage,
    bodyClass: "home-page",
    schema: "person",
    title: "Orion Chowdhury | Software Developer & Digital Problem Solver",
    description: "Orion Chowdhury builds web applications, business software, mobile experiences, and automation. Explore selected projects and book a free 30-minute conversation."
  },
  {
    path: "/about/",
    Component: AboutPage,
    schema: "person",
    title: "About Orion Chowdhury | Software Developer",
    description: "Learn how Orion Chowdhury approaches web applications, business systems, mobile products, and practical software problem solving."
  },
  {
    path: "/expertise/",
    Component: ExpertisePage,
    title: "Expertise | Orion Chowdhury",
    description: "Explore Orion Chowdhury\u2019s work in frontend and backend development, business software, mobile apps, databases, automation, and IoT."
  },
  {
    path: "/projects/",
    Component: ProjectsPage,
    title: "Projects & Case Studies | Orion Chowdhury",
    description: "Explore selected projects by Orion Chowdhury, including ERP software, education technology, food court operations, home automation, and web automation."
  },
  {
    path: "/book/",
    Component: BookingPage,
    title: "Book a Free 30-Minute Google Meet | Orion Chowdhury",
    description: "Book a free 30-minute conversation with Orion Chowdhury. Available Sunday through Tuesday at 8:00 or 8:30 pm Asia/Dhaka, subject to calendar availability."
  },
  {
    path: "/contact/",
    Component: ContactPage,
    title: "Contact Orion Chowdhury | Software Projects",
    description: "Contact Orion Chowdhury about web applications, ERP systems, mobile apps, automation, and software collaboration."
  },
  ...projects.map((project) => ({
    path: `/projects/${project.slug}/`,
    Component: ProjectDetailPage,
    props: { project },
    schema: "project",
    title: `${project.title} | Project by Orion Chowdhury`,
    description: project.summary,
    image: project.media.find((item) => item.type === "image")?.src
  }))
];
export {
  Document,
  routes
};
