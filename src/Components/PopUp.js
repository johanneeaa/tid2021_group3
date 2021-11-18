/*code template reference: https://www.youtube.com/watch?v=i8fAO_zyFAM&t=697s

Added the object to access information from the clicked row where the popup arrives from
Maybe the "onClick" should be defined in here, instead of in our table.
*/

import React from 'react';
import './PopUp.css';

function PopUp(props) {

    //console.log(props.object);
   var rowInfo = props.object; // use rowInfo.cellName to get the value of the desired cell

        return (props.trigger) ? (      //if the trigger is 'true' then the popUp will show, if false it will not
            <div className="popup">
                <div className="popup-inner">
                    <div className="popup-info">
                        <main><b>Booking Details</b></main>
                        <br></br>
                        <input placeholder={rowInfo.firstName}/>
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
        ) : null;
}

export default PopUp;