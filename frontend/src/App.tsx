import React from 'react';
import './App.css';

const ws = new WebSocket("ws://localhost:8080");

ws.addEventListener("message", (event) => {
  let item = document.createElement('li')
  item.textContent = event.data
  document.querySelector('ul').appendChild(item)
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(event) => {
          event.preventDefault();
          let msg = document.querySelector('input').value;
          console.log("Input message: %s", msg)
          ws.send(msg);
        }}>
          <input type="text" placeholder="Type here..."/>
          <button type="submit">Submit</button>
        </form>
        <ul>
        </ul>
      </header>
    </div>
  );
}

export default App;
