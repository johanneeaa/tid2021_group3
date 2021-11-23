/*code template reference: https://www.youtube.com/watch?v=i8fAO_zyFAM&t=697s

Added the object to access information from the clicked row where the popup arrives from
Maybe the "onClick" should be defined in here, instead of in our table. -> I think that would be nice, but I couldn't make it work :)

Needs to be more "generic" instead of hardcoded for rental only.
*/

import React from 'react';
import './PopUp.css';

function PopUp(props) {

    //console.log(props.object);
   var rowInfo = props.object; // use rowInfo.cellName to get the value of the desired cell

   //at the moment I just made placeholders to show the data, but we need something unmodifiable..

        return (props.trigger) ? (      //if the trigger is 'true' then the popUp will show, if false it will not
            <div className="popup">
                <div className="popup-inner">
                    <div className="popup-info"> 
                        <main><b>Booking ID {rowInfo.bookingID}</b></main>
                        <br></br>
                        <input placeholder={rowInfo.firstName}/> 
                        <input placeholder={rowInfo.lastName}/>
                        <br></br>
                        <input placeholder="Driver's license"/>
                        <input placeholder="Date of Birth"/>
                        <br></br><br></br>
                        <input placeholder={rowInfo.carGroup}/>
                        <input placeholder="Appointed Car i.e. license plate number"/>
                        <br></br><br></br>
                        <input placeholder={rowInfo.pickupDateTime}/>
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