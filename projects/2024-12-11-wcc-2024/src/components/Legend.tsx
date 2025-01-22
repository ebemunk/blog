import { playerColorScale } from "../processing/util";
import { theme } from "../theme";

interface LegendProps {
  players: string[];
}

export function Legend({ players }: LegendProps) {
  const legendSpacing = 100;
  const legendRadius = 4;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        margin: "20px 0",
      }}
    >
      {players.map((player, i) => (
        <div
          key={player}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <svg width={legendRadius * 2} height={legendRadius * 2}>
            <circle
              cx={legendRadius}
              cy={legendRadius}
              r={legendRadius}
              fill={playerColorScale(player)}
              opacity={0.6}
            />
          </svg>
          <span style={{ color: theme.colors.text }}>{player}</span>
        </div>
      ))}
    </div>
  );
}
