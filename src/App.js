import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">

      <my-component
        first="A"
        middle="Stencil"
        last="Component"></my-component>

      <bicycle-avatar url="bicycle.jpg"></bicycle-avatar>

    </div>
  );
}

export default App;
