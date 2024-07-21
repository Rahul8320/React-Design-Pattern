import { LargePersonListItem } from "./components/people/LargePersonListItem";
import { SmallPersonListItem } from "./components/people/SmallPersonListItem";
import { RegularList } from "./components/RegularList";
import { SplitComponent } from "./components/SplitComponent";
import { SplitScreen } from "./components/SplitScreen";
import { people } from "./data/people";

function App() {
  return (
    <>
      <SplitScreen leftWeight={4} rightWeight={5}>
        <SplitComponent name={"Left"} color={"green"} />
        <SplitComponent name={"Right"} color={"red"} />
      </SplitScreen>

      <RegularList
        items={people}
        itemComponent={SmallPersonListItem}
        resourceName={"person"}
      />

      <RegularList
        items={people}
        itemComponent={LargePersonListItem}
        resourceName={"person"}
      />
    </>
  );
}

export default App;
