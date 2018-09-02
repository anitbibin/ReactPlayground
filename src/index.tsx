import * as React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class TimeKeeper extends React.Component {
  state = {
    dateCheck: new Date().toLocaleDateString()
  };

  render() {
    return <input value={this.state.dateCheck} />;
  }
}

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <TimeKeeper />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
