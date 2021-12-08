import { useState } from 'react';
import deleteCostumerByID from '../Functions/DeleteCostumer';

export default function InputBox(props) {

    const [input, setInput] = useState('');

    function removeAndRefresh(input) {
        deleteCostumerByID(input)
        window.location.reload(false)
    }

    return (
        <div>
            <label>Enter costumer ID for deletion: </label>
            <input value={input} onInput={e => setInput(e.target.value)}/>
            <button onClick={()=>deleteCostumerByID(input)}> Remove the costumer with this ID </button> 
        </div>
    );
}
