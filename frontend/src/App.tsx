import React, { useState } from 'react';
import './App.css';

const ws = new WebSocket("ws://localhost:8080");

// On message received, create new list element with message
// and insert at beginning of list
ws.addEventListener("message", (event) => {
  let item = document.createElement('li')
  item.textContent = event.data
  item.classList.add('App-li')
  let ul = document.querySelector('ul')
  ul.insertBefore(item, ul.firstChild)
})

function App() {
  let [msgLength, setMsgLength] = useState(0);

  // On submit, validate and send message
  const handleSubmit = (event) => {
    // Prevents page reload
    event.preventDefault();

    // Get message and send it through websocket
    let msg = document.querySelector('input').value;
    if (msg.length > 0 && msg.length <= 128) {
      ws.send(msg);
      document.querySelector('input').value = "";
    } else {
      // If invalid, pop up alert saying why
      if (msg.length === 0) {
        alert("Cannot send an empty message")
      } else if (msg.length > 128) {
        alert("Message too long! Maximum of 128 characters")
      }
    }
    // Handle length of message changing after getting cleared
    handleMessageChange(event);
  }

  // Handles message changing for character counter
  const handleMessageChange = (event) => {
    setMsgLength(document.querySelector('input').value.length)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form className="App-form" onSubmit={handleSubmit}>
          <input className="App-input" type="text" 
            placeholder="Type here..." onChange={handleMessageChange}/>
          <p className="App-message-length">{msgLength}/128</p>
          <button className="App-submit" type="submit">Send</button>
        </form>
        <nav className="App-ul-nav">
          <ul className="App-ul">
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
