import { useState } from "react";
import axios from "axios";


function App() {

    const[message, setMessage] = useState("");
    const[response, setResponse] = useState("");

    const sendMessage = async () => {

        if(!message.trim()){
          return;
        }

        try{

          const result = await axios.get(
              `http://localhost:8080/api/ai/${encodeURIComponent(message)}`
          );

          setResponse(result.data.response);

        } catch (error) {
          console.error(error);
          setResponse("Something went wrong!");
        }
    };

    return (
      <div>
          <h1>AI Chat</h1>

          <input 
            type="text"
            placeholder="Ask something..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={sendMessage}>Send</button>

          <h3>AI Response : </h3>

          <p>{response}</p>
      </div>
    );
}

export default App;