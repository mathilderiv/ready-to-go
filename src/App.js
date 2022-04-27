import "./App.css";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(0);
  const [noway, setNoway] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Ready To Go</h1>
      </header>

      <div className="all-buttons">
        <div className="button1">
          <button
            // style={{ backgroundColor: active ? "#5C48D3" : "grey"  }}
            onClick={() => {
              setActive();
            }}
          >
            OFF
          </button>

          <button
            onClick={() => {
              setActive();
            }}
          >
            ON
          </button>
        </div>
        <div className="button2">
          <button
            onClick={() => {
              setActive();
            }}
          >
            OFF
          </button>

          <button
            onClick={() => {
              setActive();
            }}
          >
            ON
          </button>
        </div>

        <div className="button3">
          <button
            onClick={() => {
              setActive();
            }}
          >
            OFF
          </button>

          <button
            onClick={() => {
              setActive();
            }}
          >
            ON
          </button>
        </div>
      </div>

      <div className="Noway">
        <button
          onClick={() => {
            setNoway();
          }}
        >
          No way !
        </button>
      </div>
    </div>
  );
}

export default App;
