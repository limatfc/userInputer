import React, { useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");

  const nameHandler = (event) => {
    setUser(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.length === 0 || age.length === 0) {
      alert("Sorry, you need to fill in the form.");
    }
    if (age < 0) {
      alert("Sorry, your age must be a valid number.");
    }
    const dataEntered = {
      userInputed: user,
      ageInputed: age,
    };

    props.onInputedData(dataEntered);
    setAge("");
    setUser("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="TopWrapper">
        <div className="Input1">
          <div className="InnerDiv">
            <label className="label">User</label>
          </div>
          <input onChange={nameHandler} value={user} type="text"></input>
        </div>
        <div className="Input2">
          <div className="InnerDiv">
            <label className="label">Age (Years)</label>
          </div>
          <input onChange={ageHandler} value={age} type="number"></input>
        </div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
