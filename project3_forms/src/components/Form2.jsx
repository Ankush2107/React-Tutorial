import { useState } from "react";
function Form2() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [topic, setTopic] = useState("feedback");
    const [agree, setAgree] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !topic || !agree) {
            alert("Fill all the input boxes")
        }
        alert("Your form is successfully Submitted...")
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <label>Email: </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label>message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            <br />
            <label>Topic: </label>
            <select value={topic} onChange={(e) => setTopic(e.target.value)} >
                <option value="feedback">Feedback</option>
                <option value="support">Support</option>
                <option value="general">General</option>
            </select>
            <br />
            <label>
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                I agree to the term & condition
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}
export default Form2;