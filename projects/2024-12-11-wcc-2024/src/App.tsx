import { Results } from "./viz/Results";
import { Time } from "./viz/Time";
import { TimeVSEval } from "./viz/TimeVSEval";
import raw from "../collect/wcc2024.json";
import { theme } from "./theme";

function App() {
  return (
    <div>
      {/* <Time /> */}
      <TimeVSEval data={raw} players={["Gukesh", "Ding"]} />
    </div>
  );
}

export default App;
