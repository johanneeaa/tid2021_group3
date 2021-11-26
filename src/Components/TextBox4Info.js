import { useState } from "react"

export default function Textbox4Info(props){

    const [myInfo, setMyInfo] = useState(0)


    return (
        <div>
        <h3>{props.title}</h3>
        <div className="inputBox">
        <input        
        placeholder={props.info}
        /> 
        </div>
        
        </div>
    )

}