
/**Textbox component. Takes a title and info, if there is info, the input will "lock". */ 
export default function Textbox4Info(props){

        return (
            <div>
                <h6 style = {{cursor: "default"}}>
                    <b>{props.title}</b>
                </h6>
                <input 
                    style = {{cursor: "default"}} // Cursor style overwritten for clarity: the user can't edit the fields 
                    placeholder = "..." 
                    defaultValue= {props.info} 
                /> 
            </div>
        )

}