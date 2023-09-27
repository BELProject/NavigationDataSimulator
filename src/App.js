import React from "react";
import Position from "./GPS/Position";
import insPosition from "./INS/insPosition";
import "./index.css";

function App() {
  return (
    <div className="main-frame">
      <div >
        <Position />
        <insPosition />
      </div>
    </div>
  );
}

export default App;