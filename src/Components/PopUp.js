import Textbox4Info from './TextBox4Info';
import React, { useState } from 'react';
import deleteCustomerByID from '../Functions/DeleteCustomer';
import './PopUp.css';
import TablePopUp from './TablePopUp';

// Popup component, to show info of a pressed object. 
// takes props [ object, rowHeaders, color, trigger & setTrigger ]
// built upon [ https://bit.ly/3sqflPn ] & [ https://bit.ly/3eiOZq9 ]

function PopUp(props) { 
    const [checkoutTrigger, setCheckoutTrigger] = useState(false)
    
    // only "activate" if rowHeaders exists, otherwise we get error on page load.
    if (props.rowHeaders){

        const ID = props.object.id; 

        // array to access the object by index instead of key
        var rowInfoArray = [] 
        for (var key in props.object) {
            if (props.object.hasOwnProperty(key)) {
                rowInfoArray.push(props.object[key])
            }
        }

        // array of JSX elements "TextBox4Info" utilizing our array from the object & inherited rowHeaders from the click.
        const contentBoxes = [] 
        var i = 0 
        for(const header of props.rowHeaders){
            contentBoxes.push(<Textbox4Info title={header} info={rowInfoArray[i]}/>)
            i++
        }

        return (    
            <div className="popup" >
                <div className="popup-inner" style={{background: props.color}}>
                    <div className="popup-info"> 
                        {contentBoxes}          
                    </div>
                    <button className="close-button" onClick={() => props.setTrigger(false)}>X</button>
                    {props.page === "rental" ? 
                        <button onClick={() => setCheckoutTrigger(true)}>Checkout</button> :null 
                    }
                    {checkoutTrigger ? 
                        <TablePopUp 
                            object={props.object}
                            trigger={props.trigger} 
                            setTrigger={props.setTrigger}
                        /> : null}    
                    {props.page === "customer" ? 
                        <button onClick={() => deleteCustomerByID(ID)}>DELETE</button> : null
                    }           
                </div>
            </div>
        ) 

}}

export default PopUp;