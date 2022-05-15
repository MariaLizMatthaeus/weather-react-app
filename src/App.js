import React from "react";
import "./Weather";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Mary from react here now.</p>
        <Weather city="Berlin" />
      </header>
    </div>
  );
}

export default App;
