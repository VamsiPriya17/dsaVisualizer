import React from "react";
import "../App.css";
function Bar({ value, color }) {
  return (
    <div
      className="Bar"
      color={color}
      style={{ height: value * 5, backgroundColor: color, color : "black"}}
    >{value}</div>
  );
}

export default Bar;
