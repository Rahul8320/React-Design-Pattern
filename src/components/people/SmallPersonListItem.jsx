import React from "react";

export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;

  return (
    <div style={{ backgroundColor: "grey", margin: 2 }}>
      <p>
        Name: {name}, Age: {age} years.
      </p>
    </div>
  );
};
