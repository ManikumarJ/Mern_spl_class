import React, { useState } from "react";

const ArrState = () => {

  const [fruits, setFruits] = useState(["Apple","Orange", "Mango"]);

  const addFruit = () => { 
    setFruits([ ...fruits, "Banana"]);
  };

  return (
    <>
      <h2>Fruits List</h2>

      {fruits.map((fruit, index) => (
        <p key={index}>
          {fruit}
        </p>
      ))}

      <button onClick={addFruit}>
        Add Fruit
      </button>

    </>
  );
};

export default ArrState;