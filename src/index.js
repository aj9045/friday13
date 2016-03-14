import React, { Component } from "react";
import ReactDOM from "react-dom";
import DateButton from "./components/ShowDateButton";
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