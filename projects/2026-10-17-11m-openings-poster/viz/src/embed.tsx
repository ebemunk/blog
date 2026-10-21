import { createRoot, hydrateRoot } from "react-dom/client";
import { StageFigure } from "./StageFigure";
import { type StageId, stages } from "./stages";
import "./embed.css";

const ids = new Set(stages.map((s) => s.id));

function mount() {
  document.querySelectorAll<HTMLElement>("[data-openings-stage]").forEach((el) => {
    const id = el.dataset.openingsStage as StageId;
    if (!ids.has(id)) return;
    const figure = <StageFigure stageId={id} />;
    // Prerendered by scripts/ssr.mjs: attach to the existing markup, no redraw.
    if (el.firstElementChild) hydrateRoot(el, figure);
    else createRoot(el).render(figure);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
