import React, { useContext } from "react";
import { AppContext } from "./AppProvider";
import './Styling/Button.css';

// Button styled more-or-less accourding to design guide. 
// Grabs theme from AppContext in ./AppProvider

/** Dynamic size and color button. Takes an onClick & buttonText props.*/ 
const DefaultButton = (props) => {
  const { onClick, buttonText } = props;
  const { getTheme } = useContext(AppContext);

  return (
    <button
      className="dflt-btn"
      style={{ background: getTheme().primary }}
      onClick={onClick}
    >
      <div>{buttonText}</div>
    </button>
  );
};

export default DefaultButton;
