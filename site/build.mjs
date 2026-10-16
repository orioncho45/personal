import { copyFile, cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build as bundle, transform } from "esbuild";
import React from "react";
import { renderToString } from "react-dom/server";
import { site } from "./config.mjs";

const source = dirname(fileURLToPath(import.meta.url));
const clientRoot = resolve(source, "..");
const output = resolve(clientRoot, "dist");
const cache = resolve(clientRoot, ".site-cache");
if (
  !output.startsWith(clientRoot + sep) ||
  !cache.startsWith(clientRoot + sep)
) {
  throw new Error("Build paths must stay inside client/");
}

// JSX is bundled for Node to render HTML, and separately for browser hydration.
await mkdir(cache, { recursive: true });
await bundle({
  entryPoints: [join(source, "src", "server.jsx")],
  outfile: join(cache, "server.mjs"),
  bundle: true,
  packages: "external",
  platform: "node",
  format: "esm",
  jsx: "automatic",
});
const { Document, routes } = await import(
  `${pathToFileURL(join(cache, "server.mjs")).href}?build=${Date.now()}`
);

await rm(output, { recursive: true, force: true });
await mkdir(join(output, "assets"), { recursive: true });
await bundle({
  entryPoints: [join(source, "src", "client.jsx")],
  outfile: join(output, "assets", "site.js"),
  bundle: true,
  platform: "browser",
  format: "esm",
  jsx: "automatic",
  minify: true,
  define: {
    "process.env.SITE_URL": JSON.stringify(process.env.SITE_URL || ""),
    "process.env.BOOKING_APP_URL": JSON.stringify(
      process.env.BOOKING_APP_URL || "",
    ),
  },
});

const paths = new Set();
for (const route of routes) {
  if (paths.has(route.path)) throw new Error(`Duplicate route: ${route.path}`);
  paths.add(route.path);
  const file = join(output, route.path.slice(1), "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(
    file,
    `<!doctype html>${renderToString(React.createElement(Document, { route }))}`,
    "utf8",
  );
}
await writeFile(
  join(cache, "routes.json"),
  JSON.stringify(routes.map(({ path }) => path)),
);

const styleFiles = [
  "01-foundation.css",
  "02-shared.css",
  "03-hero.css",
  "04-sections.css",
  "05-projects.css",
  "06-booking.css",
  "07-contact-strip.css",
  "08-footer.css",
  "09-pages.css",
  "10-responsive.css",
  "11-motion.css",
  "12-customization.css",
];
const cssSource = (
  await Promise.all(
    styleFiles.map((file) => readFile(join(source, "styles", file), "utf8")),
  )
).join("\n");
const css = await transform(cssSource, { loader: "css", minify: true });
await writeFile(join(output, "assets", "styles.css"), css.code);
await cp(
  join(source, "assets", "projects"),
  join(output, "assets", "projects"),
  { recursive: true },
);
for (const filename of ["logo.jpg", "logo-transparent.png", "portrait.jpg"]) {
  await copyFile(
    join(source, "assets", filename),
    join(output, "assets", filename),
  );
}

const origin = site.url.replace(/\/$/, "");
await writeFile(
  join(output, "robots.txt"),
  `User-agent: *\nAllow: /\n${origin ? `Sitemap: ${origin}/sitemap.xml\n` : ""}`,
);
if (origin) {
  const xmlEscape = (value) =>
    value.replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&apos;",
        })[char],
    );
  const urls = routes
    .map((route) => `<url><loc>${xmlEscape(origin + route.path)}</loc></url>`)
    .join("");
  await writeFile(
    join(output, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
  );
}
console.log(
  `Built ${routes.length} static React pages in ${output}${origin ? " with sitemap" : " (set SITE_URL for canonical URLs and sitemap)"}`,
);
