import { SplitScreen } from "./components/SplitScreen";

const MyComponent = ({ name, color }) => {
  return (
    <div style={{ backgroundColor: color }}>
      <h1>{name} Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati porro
        eligendi, fugit non minus tempora nihil consequatur cumque hic, itaque
        quia aliquam et illo sapiente, aut iure officiis veniam cum.
      </p>
    </div>
  );
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <MyComponent name={"Left"} color={"green"} />
      <MyComponent name={"Right"} color={"red"} />
    </SplitScreen>
  );
}

export default App;
