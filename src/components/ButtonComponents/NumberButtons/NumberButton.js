import React from "react";

const NumberButton = (props) => {
  return (
    <span className="button number">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </span>
  );
};

export default NumberButton;