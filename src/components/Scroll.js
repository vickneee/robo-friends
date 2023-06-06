import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "3px solid #2bff88",
        height: "485px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
