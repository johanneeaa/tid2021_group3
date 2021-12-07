import InputBox from "../Components/InputBox"
import addALars from "../Functions/NewCostumer"

// testing tab, moved functionality to front page to avoid clutter.

export default function TestingTab() {

    return (
        <div>
            <button onClick={()=>addALars()}> For Testing: Add new "Lars" costumer</button>
            <InputBox/>
        </div>
    )
}