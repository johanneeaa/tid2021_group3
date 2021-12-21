import Textbox4Info from './TextBox4Info';
import React from 'react';
import deleteCustomerByID from '../Functions/DeleteCustomer';
import './PopUp.css';

// Popup made with a trigger to show/hide. 
// This way caused problems, as we wanted the popup to inherit from the clicked row. 
// But if we havent clicked a row yet, it would error us - so we check [ if(props.rowHeaders) ] to begin as a fix

// Popup code template reference: https://www.youtube.com/watch?v=i8fAO_zyFAM&t=697s
// Example for making .map or for loop of JSX elements: [ https://flaviocopes.com/react-how-to-loop/ ]

function PopUp(props) { if (props.rowHeaders) {

    // save ID in a const for utilie later
    const ID = props.object.id; 

    // we need array to access the object by index instead of key
    var rowInfoArray = [] 
    for (var key in props.object) {
        if (props.object.hasOwnProperty(key)) {
            rowInfoArray.push(props.object[key])
        }
    }

    // create an array of JSX elements "TextBox4Info" utilizing our array from the object & inherited rowHeaders from the click.
    // we call this array of JSX in the return
    const contentBoxes = [] 
    var i = 0 
    for(const header of props.rowHeaders){
        contentBoxes.push(<Textbox4Info title={header} info={rowInfoArray[i]}/>)
        i++
    }

    return (props.trigger) ? (      //if the trigger is 'true' then the popUp will show, if false it will not
        <div className="popup" >
            <div className="popup-inner" style={{background: props.color}}>
                <div className="popup-info"> 
                    {contentBoxes}          
                </div>
                <button className="close-button" onClick={() => props.setTrigger(false)}>X</button>
                <button onClick={() => deleteCustomerByID(ID)}>DELETE</button>
            </div>
        </div>
    ) : null;

}}

export default PopUp;