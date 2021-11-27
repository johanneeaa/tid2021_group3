import { style } from "dom-helpers"
import { useState } from "react"
import { Placeholder } from "react-bootstrap"

export default function Textbox4Info(props){


        return (
            <div>
            <h3>{props.title}</h3>
            <div className="inputBox">
            <input 
                placeholder = "..."        
                value = {props.info} 
                // Value will overwrite placeholder if props.info == true
            /> 
            </div>
            
            </div>
        )


}