import { Results } from "./viz/Results";
import { Time } from "./viz/Time";
import { TimeVSEval } from "./viz/TimeVSEval";
import raw from "../collect/wcc2024.json";

function App() {
  return (
    <>
      {/* <Time /> */}
      <TimeVSEval 
        data={raw} 
        players={["Gukesh", "Ding"]} 
      />
    </>
  );
}

export default App;
