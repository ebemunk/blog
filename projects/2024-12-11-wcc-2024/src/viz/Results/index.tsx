import { color, scaleLinear, scalePoint } from "d3";
import { Fragment } from "react/jsx-runtime";
import results from "../../../data/results.json";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const colorGukesh = "#9bc1bc";
const colorDing = "#ed6a5a";
const colorBg = "#fff6e9";

export function Results() {
  const width = 400;
  const height = 750;
  const margin = {
    top: 100,
    bottom: 60,
    left: 30,
    right: 30,
  };

  const scalePoints = scaleLinear(
    [0, 7.5],
    [height - margin.bottom, 0 + margin.top]
  );
  const scalePlayer = scalePoint(
    ["Ding, Liren", "Gukesh D"],
    [0 + margin.left, width - margin.right]
  ).padding(0.1);

  const [data, setData] = useState<typeof results>(results.slice(0, 1));
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    if (!playing) {
      return;
    }
    const t = setTimeout(() => {
      if (data.length === results.length) {
        setData(results.slice(0, 1));
      } else {
        setData((s) => results.slice(0, s.length + 1));
      }
    }, 1200);

    return () => clearTimeout(t);
  }, [data, playing]);

  return (
    <>
      <button
        onClick={() => {
          setPlaying((s) => !s);
        }}
        style={{ display: "block", marginBottom: "1rem" }}
      >
        {!playing ? "▶️" : "⏸️"}
      </button>
      <svg
        width={width}
        height={height}
        style={{
          border: "1px solid black",
          fontFamily: "Roboto Mono",
          background: colorBg,
        }}
      >
        <text
          textAnchor="middle"
          alignmentBaseline="hanging"
          y={22}
          x={width / 2}
          fontSize={18}
        >
          World Chess Championship 2024
        </text>
        <text
          textAnchor="middle"
          alignmentBaseline="hanging"
          y={48}
          x={width / 2}
          fontSize={14}
        >
          25 Nov - 12 Dec, 2024
        </text>
        <text
          x={scalePlayer("Gukesh D")}
          textAnchor="end"
          fontSize={20}
          y={height - 30}
          fill={colorGukesh}
          fontWeight="bold"
        >
          GUKESH D.
        </text>
        <text
          x={scalePlayer("Ding, Liren")}
          textAnchor="start"
          fontSize={20}
          y={height - 30}
          fill={colorDing}
          fontWeight="bold"
        >
          DING LIREN
        </text>
        {data.map((result, i) => {
          if (i === 0) return null;
          const prevR = results[i - 1];
          const toAdd: {
            player: keyof typeof result;
            points: number;
            prev: number;
            opponent: number;
            isEqual: boolean;
          }[] = [];

          const ding = result["Ding, Liren"] - prevR["Ding, Liren"];
          const gukesh = result["Gukesh D"] - prevR["Gukesh D"];
          if (ding > 0) {
            toAdd.push({
              player: "Ding, Liren",
              points: ding,
              prev: prevR["Ding, Liren"],
              opponent: prevR["Gukesh D"] + gukesh,
              isEqual: false,
            });
          }
          if (gukesh > 0) {
            toAdd.push({
              player: "Gukesh D",
              points: gukesh,
              prev: prevR["Gukesh D"],
              opponent: prevR["Ding, Liren"] + ding,
              isEqual: ding === gukesh,
            });
          }

          if (toAdd.length === 2) {
            toAdd[0].opponent -= ding;
          }

          function getOpponent(player: keyof typeof result) {
            return player === "Ding, Liren" ? "Gukesh D" : "Ding, Liren";
          }

          function getFillColor(
            player: Omit<keyof typeof result, "white">,
            white: Omit<keyof typeof result, "white">
          ) {
            if (player === white) {
              if (player === "Ding, Liren") {
                return color(colorDing)?.brighter(1).formatHex();
              } else {
                return color(colorGukesh)?.brighter(1).formatHex();
              }
            } else {
              if (player === "Ding, Liren") {
                return color(colorDing)?.darker(1).formatHex();
              } else {
                return color(colorGukesh)?.darker(1).formatHex();
              }
            }
          }

          return toAdd.map(({ player, points, prev, opponent, isEqual }) => {
            return (
              <Fragment key={player}>
                <motion.polygon
                  points={[
                    `${scalePlayer(player)},${scalePoints(prev)}`,
                    `${scalePlayer(player)},${scalePoints(prev)}`,
                    `${scalePlayer(getOpponent(player))},${scalePoints(
                      isEqual
                        ? opponent -
                            (result[getOpponent(player)] -
                              prevR[getOpponent(player)])
                        : opponent
                    )}`,
                  ].join(" ")}
                  animate={{
                    points: [
                      `${scalePlayer(player)},${scalePoints(points + prev)}`,
                      `${scalePlayer(player)},${scalePoints(prev)}`,
                      `${scalePlayer(getOpponent(player))},${scalePoints(
                        opponent
                      )}`,
                    ].join(" "),
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "linear",
                  }}
                  fill={getFillColor(player, result.white!)}
                  stroke={colorBg}
                  strokeWidth={2}
                />
              </Fragment>
            );
          });
        })}
        {data?.[data.length - 1] ? (
          <Fragment>
            <motion.text
              x={scalePlayer("Ding, Liren")}
              dx={-4}
              initial={{
                y: scalePoints(0),
              }}
              animate={{
                y: scalePoints(data[data.length - 1]["Ding, Liren"]),
              }}
              transition={{
                duration: 0.6,
                ease: "linear",
              }}
              fontSize={24}
              fontWeight="bold"
              textAnchor="end"
              dominantBaseline="middle"
              fill={colorDing}
            >
              {data[data.length - 1]["Ding, Liren"]
                .toString()
                .replace(".5", "½")}
            </motion.text>
            <motion.text
              x={scalePlayer("Gukesh D")}
              dx={4}
              initial={{
                y: scalePoints(0),
              }}
              animate={{
                y: scalePoints(data[data.length - 1]["Gukesh D"]),
              }}
              transition={{
                duration: 0.6,
                ease: "linear",
              }}
              fontSize={24}
              fontWeight="bold"
              textAnchor="start"
              dominantBaseline="middle"
              fill={colorGukesh}
            >
              {data[data.length - 1]["Gukesh D"]
                .toString()
                .replace(".5", "½")
                .replace("0½", "½")}
            </motion.text>
          </Fragment>
        ) : null}
        <line
          x1={margin.left}
          y1={scalePoints(7)}
          x2={width - margin.right}
          y2={scalePoints(7)}
          stroke="black"
          strokeDasharray="5, 5"
        />
        <text
          fontSize={12}
          textAnchor="start"
          x={margin.left}
          y={scalePoints(7)}
          dy={-4}
        >
          First to 7 points wins
        </text>
      </svg>
    </>
  );
}
