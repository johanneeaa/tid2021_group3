import React, { useContext } from "react";
import { AppContext } from "./AppProvider";
import "./Button.css";

const Loadscreen = (props) => {

  const { getTheme } = useContext(AppContext);

  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
        <img src="https://pakhuset-odder.dk/oh_booking_frontend/static/img/loading.gif" alt="Loading" style={{ align: 'center' }}/>   
        <h1>Fetching data...</h1>
    </div>
  );
};
export default Loadscreen;
