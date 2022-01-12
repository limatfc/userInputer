import React from "react";
import "./DataList.css";

const DataList = (props) => {
  console.log(props.UserAndAge);
  return (
    <div className="BottomWrapper">
      {props.UserAndAge.map((item) => (
        <div className="test">
          <p>
            {item.user}({item.age} Years Old)
          </p>
        </div>
      ))}
    </div>
  );
};

export default DataList;
