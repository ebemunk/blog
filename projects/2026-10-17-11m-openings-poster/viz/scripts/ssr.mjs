// Prerender stage figures into the blog post, like the playmates post does.
// Edit content/<post>/tpl.md; this writes content/<post>/index.md.
// --watch: re-render whenever tpl.md or anything under src/ changes.
import { readFileSync, watch, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const post = new URL("../../../../content/2026-10-17-11m-openings-poster/", import.meta.url);
const watchMode = process.argv.includes("--watch");

const vite = await createServer({
  configFile: false,
  logLevel: "error",
  server: { middlewareMode: true, hmr: false, ws: false },
  appType: "custom",
});

async function render() {
  const { renderTemplate } = await vite.ssrLoadModule("/src/ssr.tsx");
  const template = readFileSync(new URL("tpl.md", post), "utf-8");
  const { html, rendered } = renderTemplate(template);
  writeFileSync(new URL("index.md", post), html);
  console.log(`prerendered ${rendered.length} stages: ${rendered.join(", ")}`);
}

if (!watchMode) {
  try {
    await render();
  } finally {
    await vite.close();
  }
} else {
  let timer;
  const schedule = (why) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(`[${new Date().toLocaleTimeString()}] ${why}`);
      render().catch((err) => console.error(err));
    }, 100);
  };

  await render();

  // Watch the folder, not the file: editors often save by replacing tpl.md.
  watch(fileURLToPath(post), (_, name) => {
    if (name === "tpl.md") schedule("tpl.md changed");
  });
  // Vite drops changed modules from its graph, so the next ssrLoadModule is fresh.
  const src = fileURLToPath(new URL("../src/", import.meta.url));
  vite.watcher.on("change", (file) => {
    if (file.startsWith(src)) schedule(`src/${file.slice(src.length)} changed`);
  });

  console.log("watching tpl.md and src/ (ctrl-c to stop)");
}
