import { AppContext} from "./AppProvider";
import {useContext} from 'react';
import './Footer.css';


const Footer = () => {

const {getTheme} = useContext(AppContext)

return(
<div className="footerdiv">
<footer className="footer">
<p style = {{background:getTheme().primary}} className="footerbody"></p>
Here goes the button
</footer>
</div>
)
}

export default Footer