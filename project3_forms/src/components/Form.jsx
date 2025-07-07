import { useState } from "react";
import "./Form.css"
function Form() {
    const [ selectedValue, setSelectedValue ] = useState('');
    const handleSelect = (event) => {
        setSelectedValue(event.target.value)
    }
    return ( 
        <div className="container">
            <h1>Form in React</h1>
           <select name="options" value={selectedValue} onChange={handleSelect} >
            <option value="option1">Amazon</option>
            <option value="option2">Flipkart</option>
            <option value="option3">Myntra</option>
           </select>
            <p>This is your selected option: {selectedValue}</p>
        </div>
    )
}
export default Form;