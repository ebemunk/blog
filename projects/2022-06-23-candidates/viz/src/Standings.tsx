import { GameResult } from "../../collect/standings";
import { standings } from "./data";
import "chessground/assets/chessground.cburnett.css";

console.log({ standings });

export default function Standings() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Game Results</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standings.map(([name, result], i) => (
            <tr key={name}>
              <td>{i + 1}</td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {name}
              </td>
              <td>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  {result.games.map((game: GameResult) => (
                    <div
                      key={game.endPositionFen}
                      style={{
                        position: "relative",
                        margin: 4,
                        width: "30px",
                        height: "30px",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          top: "0",
                          left: 0,
                          opacity: 0.5,
                          background:
                            game.result === "w"
                              ? "green"
                              : game.result === "l"
                              ? "red"
                              : "gray",
                          position: "absolute",
                        }}
                      >
                        <div
                          className={`${
                            game.isWhite ? "white" : "black"
                          } pawn piece`}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </td>
              <td>{result.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
