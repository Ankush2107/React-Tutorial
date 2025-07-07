// Conditional Rendering: According to the condition the ui will render
// Short-circuiting
import { useState } from "react";
function Home() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(true);
    const messages = 2 ;
    return (
        <div>
            <h1>{isLoggedIn ? "Welcome to the Home Page" : "Sorry you are logged out"}</h1>
            { messages > 0 && <p>You have {messages} unread messages</p> }
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                { isLoggedIn ? "logout" : "login" }
            </button>
        </div>
    ) 
}

export default Home;