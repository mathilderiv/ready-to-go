import "./App.css";
import { useState } from "react";

function App() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>Ready To Go</h1>
      </header>

      <div className="all-buttons">
        <div className="button1">
          <button
            style={{
              backgroundColor: active1 === false ? "#5C48D3" : "grey",
            }}
            onClick={() => {
              setActive1(false);
            }}
          >
            OFF
          </button>

          <button
            style={{ backgroundColor: active1 === false ? "grey" : "#5C48D3" }}
            onClick={() => {
              setActive1(true);
            }}
          >
            ON
          </button>
        </div>

        <div className="button2">
          <button
            style={{ backgroundColor: active2 === false ? "#5C48D3" : "grey" }}
            onClick={() => {
              setActive2(false);
            }}
          >
            OFF
          </button>

          <button
            style={{ backgroundColor: active2 === false ? "grey" : "#5C48D3" }}
            onClick={() => {
              setActive2(true);
            }}
          >
            ON
          </button>
        </div>

        <div className="button3">
          <button
            style={{ backgroundColor: active3 === false ? "#5C48D3" : "grey" }}
            onClick={() => {
              setActive3(false);
            }}
          >
            OFF
          </button>

          <button
            style={{ backgroundColor: active3 === false ? "grey" : "#5C48D3" }}
            onClick={() => {
              setActive3(true);
            }}
          >
            ON
          </button>
        </div>
      </div>

      <div className="Noway">
        {active1 && active2 && active3 === true ? (
          <span style={{ backgroundColor: "green" }}> GO !</span>
        ) : (
          <span style={{ backgroundColor: "red" }}> NO WAY !</span>
        )}
      </div>

      <div className="allButtonOnOff">
        <button
          onClick={() => {
            setActive1(false);
            setActive2(false);
            setActive3(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
