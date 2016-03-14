import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: "",
      nextDate: "",
    };
  }

  componentWillMount() {
    var currentDate = this._getFullDate(new Date);
    var nextDate = this._getNextFriday13();
    this.setState({
      currentDate: currentDate,
      nextDate: nextDate
    });
  }

  render() {
    if (!this.state.nextDate) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div>Today's Date: {this.state.currentDate}</div><div style={{display:"none"}}>'</div>
        <div>Next Friday the 13th: {this.state.nextDate}</div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector(".container"));