/*code reference: https://www.youtube.com/watch?v=i8fAO_zyFAM&t=697s*/

import React from 'react';
import './PopUp.css';

function PopUp(props) {
        return (props.trigger) ? (      //if the trigger is 'true' then the popUp will show, if false it will not
            <div className="popup">
                <div className="popup-inner">
                    <button className="close-button" onClick={() => props.setTrigger(false)}>X</button>
                    {props.children}
                </div>
            </div>
        ) : "";
}

export default PopUp;