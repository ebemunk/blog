import { createRoot, hydrateRoot } from "react-dom/client";
import { StageFigure } from "./StageFigure";
import { type StageId, stages } from "./stages";
import "./embed.css";

const ids = new Set(stages.map((s) => s.id));

// Lazy mounts are drawn this far ahead of the viewport, so they're ready before you get there.
const lazyMargin = "1500px 0px";

function mount() {
  const lazy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        lazy.unobserve(entry.target);
        const el = entry.target as HTMLElement;
        createRoot(el).render(<StageFigure stageId={el.dataset.openingsStage as StageId} />);
      }
    },
    { rootMargin: lazyMargin },
  );

  document.querySelectorAll<HTMLElement>("[data-openings-stage]").forEach((el) => {
    const id = el.dataset.openingsStage as StageId;
    if (!ids.has(id)) return;
    // Lazy: the prerendered skeleton holds the space until createRoot replaces it.
    if (el.hasAttribute("data-openings-lazy")) lazy.observe(el);
    // Prerendered by scripts/ssr.mjs: attach to the existing markup, no redraw.
    else if (el.firstElementChild) hydrateRoot(el, <StageFigure stageId={id} />);
    else createRoot(el).render(<StageFigure stageId={id} />);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
