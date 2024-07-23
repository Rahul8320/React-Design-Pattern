export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {items.map((item, index) => (
        <>
          <h3>{index + 1}</h3>
          <ItemComponent key={index} {...{ [resourceName]: item }} />
        </>
      ))}
    </div>
  );
};
