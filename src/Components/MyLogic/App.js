import React, { useState } from "react";
import "./App.css";
import UserForm from "./UserForm";
import DataList from "./DataList";

function App() {
  let Mock_Data = [
    { user: "jenny@mail.com", age: 45 },
    { user: "maximillan@mail.com", age: 78 },
  ];
  const [data, setData] = useState(Mock_Data);

  const handleDataInputed = (UserAndAge) => {
    if (
      UserAndAge.userInputed.length > 0 &&
      UserAndAge.ageInputed.length > 0 &&
      UserAndAge.ageInputed > 0
    ) {
      setData((prevData) => {
        return [
          { user: UserAndAge.userInputed, age: UserAndAge.ageInputed },
          ...prevData,
        ];
      });
    }
  };
  return (
    <div className="outerDiv">
      <UserForm onInputedData={handleDataInputed} />
      <DataList UserAndAge={data} />
    </div>
  );
}

export default App;
