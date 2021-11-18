/* code template for a popup window with a X buttom reference: https://www.youtube.com/watch?v=i8fAO_zyFAM&t=697s

Added the object to access information from the clicked row where the popup arrives from
Maybe the "onClick" should be defined in here, instead of in our table.

*/

import './PopUp.css';

function PopUp(props) {
    
   //console.log(props.object);
   var rowInfo = props.object; // use rowInfo.cellName to get the value of the desired cell

        return (props.trigger) ? (      //if the trigger is 'true' then the popUp will show, if false it will not
            <div className="popup">
                <div className="popup-inner">
                    <br/>
                    <main>
                        <b>{props.headerText}
                        </b>
                    </main>
                    <br/>
                    <button className="close-button" onClick={() => props.setTrigger(false)}>
                        X
                    </button>
                    The clicked row contains first name: {rowInfo.firstName} !
                    {// example of how to use the object we gain to extract cell information
                    }
                </div>
            </div>
        ) : null;
}

export default PopUp;