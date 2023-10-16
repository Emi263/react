import React, { useState } from "react";

function Input() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("")
  const [phone, setPhone] = useState();

  function handleNameChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  function handleSurnameChange(e) {
    console.log(e.target.value);
    setSurname(e.target.value)
  }

  function handlePhoneChange(e) {
    console.log(e.target.value);
    setPhone(e.target.value);
  }
  
  return (
    <div>
      <div>
        Name: <input type="text" onChange={handleNameChange} />
      </div>
      <div>
        Surname: <input type="text" onChange={handleSurnameChange} />
      </div>
      <div>
        {" "}
        Phone Number <input type="number" onChange={handlePhoneChange} />
      </div>

      <div>
        <h1>Name: {name}</h1>
        <h2>Surname: {surname}</h2>
        <h3>Phone Number: {phone}</h3>
      </div>
    </div>
  );
}

export default Input;
