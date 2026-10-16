import React from "react";
import { site } from "../config.mjs";
import { App } from "./App.jsx";

function schemaFor(route, origin) {
  if (!origin) return null;
  if (route.schema === "person")
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: site.name,
      url: origin,
      jobTitle: "Software Developer",
      email: site.email,
    };
  if (route.schema === "project")
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: route.props.project.title,
      description: route.description,
      url: origin + route.path,
      creator: { "@type": "Person", name: site.name },
      image: route.image ? origin + route.image : undefined,
    };
  return null;
}

export function Document({ route }) {
  const origin = site.url.replace(/\/$/, "");
  const canonical = origin ? origin + route.path : null;
  const schema = schemaFor(route, origin);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#070707" />
        <meta name="color-scheme" content="dark" />
        <title>{route.title}</title>
        <meta name="description" content={route.description} />
        {canonical && (
          <>
            <link rel="canonical" href={canonical} />
            <meta property="og:url" content={canonical} />
          </>
        )}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={route.title} />
        <meta property="og:description" content={route.description} />
        {origin && (
          <>
            <meta
              property="og:image"
              content={origin + (route.image || "/assets/logo.jpg")}
            />
            <meta name="twitter:card" content="summary_large_image" />
          </>
        )}
        <link rel="icon" type="image/png" href="/assets/logo-transparent.png" />
        <link rel="stylesheet" href="/assets/styles.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js-motion')",
          }}
        />
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
            }}
          />
        )}
      </head>
      <body className={route.bodyClass || undefined}>
        <div id="root">
          <App route={route} />
        </div>
        <script type="module" src="/assets/site.js" />
      </body>
    </html>
  );
}
