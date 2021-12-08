import { useState } from "react";
import deleteCostumerByID from "../Functions/DeleteCostumer";
import './InputBox.css';

export default function InputBox(props) {
  const [input, setInput] = useState("");

  return (
    <div>
      <input className= "inputdelete" placeholder = {"Enter objectID to delete"} value={input} onInput={(e) => setInput(e.target.value)} />
      <button className = "removeButton" onClick={() => deleteCostumerByID(input)}> Remove costumer</button>
    </div>
  );
}
