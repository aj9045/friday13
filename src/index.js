import React, { Component } from "react";
import ReactDOM from "react-dom";
import DateButton from "./components/DateButton";
import DateBox from "./components/DateBox";

class App extends Component {
  render() {
    return (
      <div>
        <DateButton />
        <DateBox />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));