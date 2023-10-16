import React, { useState } from "react";

function Data() {
  const [data, setData] = useState({
    name: "Ben",
    age: 20,
  });

  function changeName() {
    setData({
      name: "John",
      age: 20,
    });
  }

  return (
    <div>
      <h1>Name: {data.name} </h1>
      <p>Age: {data.age}</p>

      <button onClick={changeName}>Change name</button>
    </div>
  );
}

export default Data;
