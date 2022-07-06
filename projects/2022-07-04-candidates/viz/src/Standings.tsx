import { GameResult } from "../../collect/standings";
import { standings } from "./data";
import "chessground/assets/chessground.cburnett.css";

console.log({ standings });

export default function Standings() {
  return (
    <>
      <table
        style={{
          margin: "2rem auto",
          borderCollapse: "collapse",
          // width: "960px",
        }}
      >
        <thead
          style={{
            borderBottom: "1px solid white",
            borderWidth: "medium",
          }}
        >
          <tr
            style={{
              fontFamily: "Libre Baskerville",
            }}
          >
            <th>Rank</th>
            <th>Player</th>
            <th>Game Results</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standings.map(([name, result], i) => (
            <tr
              key={name}
              style={
                i === 0
                  ? {
                      background: "#ef9b20",
                      color: "black",
                      fontWeight: "bold",
                    }
                  : {}
              }
            >
              <td
                style={{
                  textAlign: "center",
                }}
              >
                {i + 1}
              </td>
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
                    justifyContent: "space-evenly",
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
                          // opacity: 0.5,
                          background:
                            game.result === "w"
                              ? "#87bc45"
                              : game.result === "l"
                              ? "#ea5545"
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
              <td
                style={{
                  textAlign: "center",
                }}
              >
                {result.games[result.games.length - 1].points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
