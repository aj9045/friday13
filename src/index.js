import React, { Component } from "react";
import ReactDOM from "react-dom";
import DateBox from "./components/DateBox";

class App extends Component {
  render() {
    return (
      <div>
        <DateBox />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));