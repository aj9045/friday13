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
    var nextDate = this._getNextFriday13();
    this.setState({nextDate: nextDate});
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

  _getCurrentDateInfo() {
    var date = new Date;
    var currentDate = this._getFullDate(date);
    var month = date.getMonth() + 1;
    var numberDate = date.getDate();
    this.setState({currentDate: currentDate});
    return {
      date: date,
      month: month,
      numberDate: numberDate
    };
  }

  _getNewMonthName(monthIndex) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
  }

  _getFullDate(date) {
    var month = this._getNewMonthName(date.getMonth());
    var day = date.getDate();
    var year = date.getFullYear();
    return (month + " " + day + ", " + year);
  };


_getNextFriday13() {
  var currentDate = this._getCurrentDateInfo();
  var date = currentDate.date;
  var month = currentDate.month;
  var numberDate = currentDate.numberDate;

  while (date.getDay() !== 5 ) {
    if (numberDate < 13) {
      date.setDate(13);
      numberDate = 13;
    }
    else {
      date.setMonth(month, 13);
      month += 1;
    }
  }

  return this._getFullDate(date);
};


}

ReactDOM.render(<App />, document.querySelector(".container"));