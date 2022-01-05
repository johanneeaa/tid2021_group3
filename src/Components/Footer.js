import { AppContext} from "./AppProvider";
import {useContext} from 'react';
import './Styling/Footer.css';

/* A Footer component. Right now it is a bit static and a work in progress. Would be nice to make it custom to each page */
const Footer = () => {

const {getTheme} = useContext(AppContext)

return(
<div className="footerdiv">
<footer className="footer">
<p style = {{background:getTheme().primary}} className="footerbody"></p>
</footer>
</div>
)
}

export default Footer