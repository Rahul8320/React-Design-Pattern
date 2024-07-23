import { NumberedList } from "./components/NumberedList";
import { LargePersonListItem } from "./components/people/LargePersonListItem";
import { SmallPersonListItem } from "./components/people/SmallPersonListItem";
import { LargeProductListItem } from "./components/product/LargeProductListItem";
import { SmallProductListItem } from "./components/product/SmallProductListItem";
import { RegularList } from "./components/RegularList";
import { SplitComponent } from "./components/SplitComponent";
import { SplitScreen } from "./components/SplitScreen";
import { people } from "./data/people";
import { products } from "./data/products";

function App() {
  return (
    <>
      <SplitScreen leftWeight={4} rightWeight={5}>
        <SplitComponent name={"Left"} color={"green"} />
        <SplitComponent name={"Right"} color={"red"} />
      </SplitScreen>

      {/* Regular List  */}
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

      {/* Numbered List */}
      <NumberedList
        items={products}
        itemComponent={SmallProductListItem}
        resourceName={"product"}
      />
      <NumberedList
        items={products}
        itemComponent={LargeProductListItem}
        resourceName={"product"}
      />
    </>
  );
}

export default App;
