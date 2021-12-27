import React, { useContext } from "react";
import { AppContext} from "./AppProvider";
import './Button.css';

const DefaultButton = (props) => {

  const {onClick} = props;

  const {getTheme} = useContext (AppContext)

  return (
    <button className = "dflt-btn" style = {{background:getTheme().primary}}
    onClick = {onClick}>
      <div>Create New Booking</div>
    </button>
  );
}
export default DefaultButton

