import { SplitScreen } from "./components/SplitScreen";

const LeftComponent = () => {
  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>Left Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati porro
        eligendi, fugit non minus tempora nihil consequatur cumque hic, itaque
        quia aliquam et illo sapiente, aut iure officiis veniam cum.
      </p>
    </div>
  );
};

const RightComponent = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>Right Component</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        voluptatem corrupti beatae, libero perspiciatis illum, hic quae ipsa
        enim excepturi dolore? Sit sequi eos cupiditate iusto quo optio cum
        similique.
      </p>
    </div>
  );
};

function App() {
  return (
    <SplitScreen
      left={LeftComponent}
      right={RightComponent}
      leftWeight={1}
      rightWeight={3}
    />
  );
}

export default App;
