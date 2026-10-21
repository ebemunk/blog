import { useMemo, useState } from "react";
import { type Frame, Sunburst } from "./Sunburst";
import { sourceTree } from "./source";
import { type Inset, type StageId, stages } from "./stages";
import { prepareTree, treeStats } from "./tree";

type Props = {
  stageId: StageId;
};

function insetFrame(inset: Inset, width: number): Frame {
  const r = (inset.radius * width) / 2;
  const cx = r * Math.sin(inset.angle);
  const cy = -r * Math.cos(inset.angle);
  return { x: cx - inset.size / 2, y: cy - inset.size / 2, size: inset.size };
}

export function StageFigure({ stageId }: Props) {
  const stage = stages.find((s) => s.id === stageId);
  const [knobs, setKnobs] = useState(stage?.knobs);
  const [modeId, setModeId] = useState(stage?.defaultMode ?? stage?.modes?.[0]?.id);

  const tree = useMemo(() => {
    if (!knobs) return sourceTree;
    return prepareTree(sourceTree, knobs);
  }, [knobs]);

  const stats = useMemo(() => treeStats(tree), [tree]);

  if (!stage || !knobs) return null;

  const dark = knobs.background === "dark";
  const controls = stage.controls ?? [];
  const frame = stage.inset ? insetFrame(stage.inset, knobs.width) : undefined;
  const modes = stage.modes ?? [];
  const mode = modes.find((m) => m.id === modeId);

  function pickMode(id: string) {
    const next = modes.find((m) => m.id === id);
    if (!next || !knobs) return;
    setModeId(id);
    setKnobs({ ...knobs, ...next.knobs });
  }

  return (
    <div
      className={`openings-stage${dark ? " openings-stage-dark" : ""}${
        stage.panels ? " openings-stage-wide" : ""
      }`}
    >
      <div className="viz-title">{stage.caption}</div>
      <div className="viz-subtitle">{stage.blurb}</div>
      {modes.length > 0 && (
        <div className="openings-segmented" role="group" aria-label={stage.caption}>
          {modes.map((m) => (
            <button
              key={m.id}
              type="button"
              aria-pressed={m.id === modeId}
              className={m.id === modeId ? "active" : ""}
              onClick={() => pickMode(m.id)}
            >
              {m.label}
            </button>
          ))}
        </div>
      )}
      {stage.panels ? (
        <div className="openings-panels">
          {stage.panels.map((p) => (
            <figure key={p.id} className="openings-panel">
              <figcaption className="openings-panel-label">{p.label}</figcaption>
              <Sunburst data={tree} knobs={{ ...knobs, ...p.knobs }} crop={p.crop} />
              <figcaption className="openings-panel-note">{p.note}</figcaption>
            </figure>
          ))}
        </div>
      ) : frame ? (
        <div className="openings-with-inset">
          <Sunburst data={tree} knobs={knobs} highlight={frame} />
          <figure className="openings-inset">
            <Sunburst
              data={tree}
              knobs={knobs}
              crop={frame}
              className="openings-sunburst openings-sunburst-inset"
            />
            <figcaption>
              outer edge, ×{Math.round(knobs.width / frame.size)}
            </figcaption>
          </figure>
        </div>
      ) : (
        <Sunburst data={tree} knobs={knobs} />
      )}
      {mode && (
        <div className="openings-mode-note">{mode.note}</div>
      )}
      {controls.length > 0 && (
        <div className="openings-controls">
          {controls.includes("ply") && (
            <label>
              ply {knobs.maxPly}
              <input
                type="range"
                min={1}
                max={10}
                value={knobs.maxPly}
                onChange={(e) =>
                  setKnobs({ ...knobs, maxPly: Number(e.target.value) })
                }
              />
            </label>
          )}
          {controls.includes("prune") && (
            <label>
              extra prune {(knobs.pruneFraction * 100).toFixed(2)}%
              <input
                type="range"
                min={0}
                max={50}
                value={Math.round(knobs.pruneFraction * 1000)}
                onChange={(e) =>
                  setKnobs({
                    ...knobs,
                    pruneFraction: Number(e.target.value) / 1000,
                  })
                }
              />
            </label>
          )}
          {controls.includes("hole") && (
            <label>
              hole {knobs.hole}
              <input
                type="range"
                min={0}
                max={160}
                value={knobs.hole}
                onChange={(e) =>
                  setKnobs({ ...knobs, hole: Number(e.target.value) })
                }
              />
            </label>
          )}
        </div>
      )}
      <div className="viz-meta">
        {stats.nodes} nodes · {stats.leaves} leaves · depth {stats.maxDepth} ·
        2,197,113-game tree
      </div>
    </div>
  );
}
