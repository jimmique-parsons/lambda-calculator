import React from "react";

const SpecialButton = (props) => {
  return (
    <span className="button special">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.special}
    </span>
  );
};

export default SpecialButton;