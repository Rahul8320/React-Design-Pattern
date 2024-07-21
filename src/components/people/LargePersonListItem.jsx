import React from "react";

export const LargePersonListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person;

  return (
    <div
      style={{
        border: "2px solid grey",
        margin: 5,
        paddingLeft: 10,
        borderRadius: 8,
      }}
    >
      <h3>{name}</h3>
      <p>Age: {age} years.</p>
      <p>Hair Color: {hairColor}.</p>
      <h4>Hobbies:</h4>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
