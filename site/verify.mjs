import { readFile, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const clientRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const root = join(clientRoot, "dist");
const routes = JSON.parse(
  await readFile(join(clientRoot, ".site-cache", "routes.json"), "utf8"),
);
const errors = [];
const titles = new Set();
for (const route of routes) {
  const html = await readFile(join(root, route.slice(1), "index.html"), "utf8");
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  if (!title || titles.has(title))
    errors.push(`${route}: missing or repeated title`);
  titles.add(title);
  if (!/<meta\s+name="description"\s+content="[^"]+"\s*\/?\s*>/.test(html))
    errors.push(`${route}: missing description`);
  const h1Count = [...html.matchAll(/<h1(?:\s[^>]*)?>/g)].length;
  if (h1Count !== 1) errors.push(`${route}: expected one H1, found ${h1Count}`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    const target = match[1];
    const file = target.endsWith("/")
      ? join(root, target.slice(1), "index.html")
      : join(root, target.slice(1));
    try {
      await stat(file);
    } catch {
      errors.push(`${route}: broken local target ${target}`);
    }
  }
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Verified ${routes.length} static pages, unique titles, H1s, descriptions, and local targets.`,
  );
}
