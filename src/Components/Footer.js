import { AppContext} from "./AppProvider";
import {useContext} from 'react';
import './Styling/Footer.css';

/** Simple Footer that adjusts color according to theme and size according to screen */
const Footer = () => {

const {getTheme} = useContext(AppContext)

return(       
    <div style = {{background:getTheme().primary}} className="footerdiv"/>
)
}

export default Footer