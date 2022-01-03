import { useState } from "react";
import deleteCustomerByID from "../Functions/deleteCustomerById";
import './Styling/InputBox.css';

export default function InputBox(props) {
  const [input, setInput] = useState("");

  return (
    <div>
      <input className= "inputDelete" placeholder = {"Enter objectID to delete"} value={input} onInput={(e) => setInput(e.target.value)} />
      <button className = "removeButton" onClick={() => deleteCustomerByID(input)}> Remove Customer</button>
    </div>
  );
}
