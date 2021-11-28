// Textbox component. Takes a title and info, if there is info, the input will "lock".  
// Needs styling as of 28/nov/2021 @lacl

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