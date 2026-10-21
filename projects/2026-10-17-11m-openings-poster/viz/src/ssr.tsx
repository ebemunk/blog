import { renderToString } from "react-dom/server";
import { StageFigure } from "./StageFigure";
import { type StageId, stages } from "./stages";

/** Fill every empty stage mount in the template with its server-rendered figure. */
export function renderTemplate(template: string): { html: string; rendered: StageId[] } {
  const ids = new Set<string>(stages.map((s) => s.id));
  const rendered: StageId[] = [];
  const html = template.replace(
    /<div data-openings-stage="([^"]+)"><\/div>/g,
    (mount, id: string) => {
      if (!ids.has(id)) return mount;
      rendered.push(id as StageId);
      const figure = renderToString(<StageFigure stageId={id as StageId} />);
      return `<div data-openings-stage="${id}">${figure}</div>`;
    },
  );
  return { html, rendered };
}
