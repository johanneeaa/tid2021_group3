/*code template reference: https://www.youtube.com/watch?v=i8fAO_zyFAM&t=697s*/

import React from 'react';
import './PopUp.css';

function PopUp(props) {
        return (props.trigger) ? (      //if the trigger is 'true' then the popUp will show, if false it will not
            <div className="popup">
                <div className="popup-inner">
                    <div className="popup-info">
                        <main><b>Booking Details</b></main>
                        <input placeholder="Booking ID"/>
                        <br></br>
                        <input placeholder="First Name"/>
                        <input placeholder="Last Name"/>
                        <br></br>
                        <input placeholder="Driver's license"/>
                        <input placeholder="Date of Birth"/>
                        <br></br><br></br>
                        <input placeholder="Requested Car Group"/>
                        <input placeholder="Appointed Car i.e. license plate number"/>
                        <br></br><br></br>
                        <input placeholder="Pick Up Time"/>
                        <input placeholder="Pick Up Office"/>
                        <br></br>
                        <input placeholder="Mileage"/>
                        <input placeholder="Fuel Level"/>
                        <br></br><br></br>
                        <input placeholder="Return Time"/>
                        <input placeholder="Return Office"/>
                        <br></br>
                        <input placeholder="Mileage"/>
                        <input placeholder="Fuel Level"/>
                    </div>
                    <button className="close-button" onClick={() => props.setTrigger(false)}>X</button>
                    {props.children}
                </div>
            </div>
        ) : "";
}

export default PopUp;