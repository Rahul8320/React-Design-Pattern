import { SplitComponent } from "./components/SplitComponent";
import { SplitScreen } from "./components/SplitScreen";

function App() {
  return (
    <SplitScreen leftWeight={4} rightWeight={5}>
      <SplitComponent name={"Left"} color={"green"} />
      <SplitComponent name={"Right"} color={"red"} />
    </SplitScreen>
  );
}

export default App;
