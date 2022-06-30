import { range } from "d3";
import { Chessground } from "chessground";
import { useEffect, useRef } from "react";

import "chessground/assets/chessground.base.css";
import "chessground/assets/chessground.brown.css";
import "chessground/assets/chessground.cburnett.css";

export default function Chessboard({
  width = 80,
  fen = "start",
  orientation = "white",
}: {
  width?: number;
  fen?: string;
  orientation?: "white" | "black";
}) {
  // const pieces = read(fen);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    Chessground(ref.current, {
      fen,
      orientation,
    });
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: `${width}px`,
        height: `${width}px`,
      }}
    />
    // <div style={{ position: "relative" }}>
    //   <Base width={width} />
    //   <div>
    //     {Array.from(pieces).map(([key, piece]) => {
    //       const [x, y] = key2pos(key);
    //       return (
    //         <div
    //           key={key}
    //           style={{
    //             position: "absolute",
    //             left: `${x * width}px`,
    //             top: `${y * width}px`,
    //           }}
    //         >
    //           {piece.role.at(0)}
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
}

export function Base({ width }: { width: number }) {
  return (
    <svg height={width} width={width} viewBox="0,0 80,80">
      {range(64).map((i) => {
        const x = i % 8;
        const y = Math.floor(i / 8);
        return (
          <rect
            key={i}
            x={x * 10}
            y={y * 10}
            width={10}
            height={10}
            fill={x % 2 === y % 2 ? "white" : "black"}
          />
        );
      })}
    </svg>
  );
}
