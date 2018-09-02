import * as React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const TimeKeeper = () => {
  render() {
    return (
      var dateCheck = new Date().toLocaleDateString();
      <input value={dateCheck} />
    );
  }
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <TimeKeeper />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
