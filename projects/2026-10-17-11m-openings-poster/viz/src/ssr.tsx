import { renderToString } from "react-dom/server";
import { StageFigure } from "./StageFigure";
import { SkeletonContext } from "./Sunburst";
import { type StageId, stages } from "./stages";

/**
 * Fill every empty stage mount in the template with its server-rendered figure.
 * Mounts marked `data-openings-lazy` get a skeleton (empty SVGs at full size) so the page
 * doesn't shift; embed.tsx draws them near the viewport.
 */
export function renderTemplate(template: string): { html: string; rendered: StageId[] } {
  const ids = new Set<string>(stages.map((s) => s.id));
  const rendered: StageId[] = [];
  const html = template.replace(
    /<div data-openings-stage="([^"]+)"( data-openings-lazy)?><\/div>/g,
    (mount, id: string, lazy?: string) => {
      if (!ids.has(id)) return mount;
      rendered.push(id as StageId);
      const figure = renderToString(
        <SkeletonContext.Provider value={Boolean(lazy)}>
          <StageFigure stageId={id as StageId} />
        </SkeletonContext.Provider>,
      );
      return `<div data-openings-stage="${id}"${lazy ?? ""}>${figure}</div>`;
    },
  );
  return { html, rendered };
}
