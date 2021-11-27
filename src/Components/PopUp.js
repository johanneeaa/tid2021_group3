/*code template reference: https://www.youtube.com/watch?v=i8fAO_zyFAM&t=697s

Added the object to access information from the clicked row where the popup arrives from
Maybe the "onClick" should be defined in here, instead of in our table. -> I think that would be nice, but I couldn't make it work :)

Needs to be more "generic" instead of hardcoded for rental only.
*/

import Textbox4Info from './TextBox4Info';
import React from 'react';
import './PopUp.css';

function PopUp(props) {

    var rowInfo = props.object; // use rowInfo.cellName to get the value of the desired cell

    console.log(props.rowHeaders);

        return (props.trigger) ? (      //if the trigger is 'true' then the popUp will show, if false it will not
            <div className="popup">
 
                <div className="popup-inner" style={{background: props.color}}>
                <main><h1>Booking ID {rowInfo.bookingID}</h1></main>

                    <div className="popup-info"> 


                         <Textbox4Info title={props.rowHeaders} info ="hest"/>

                      

                    </div>
                    <button className="close-button" onClick={() => props.setTrigger(false)}>X</button>
                    {props.children}
                </div>
            </div>
        ) : null;
}

export default PopUp;