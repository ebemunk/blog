import raw from "../collect/wcc2024.json";
import { processTimeVSEval, WCC_2024_TIME_CONTROL } from "./processing/util";
import { Results } from "./viz/Results/Results";
import { TimeBucketChart } from "./viz/TimeBuckets/TimeBuckets";

function App() {
  const timeBucketData = processTimeVSEval(raw, WCC_2024_TIME_CONTROL, [
    "Gukesh",
    "Ding",
  ]);

  return (
    <div>
      <h1>Done</h1>
      <Results />
      <p></p>
      <TimeBucketChart
        data={timeBucketData}
        evalRange={{ min: -160, max: 50 }}
      />
    </div>
  );
}

export default App;
