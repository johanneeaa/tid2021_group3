import React, { useContext } from "react";
import { AppContext } from "./AppProvider";
import './Styling/Button.css';

/* A general Button for consistency throughout layout. Takes an onClick & buttonText props. Right now the buttonTexxt is not 
implemented fully am working on this.*/ 

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
