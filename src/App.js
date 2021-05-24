import React, { Component } from "react";
import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      min: "",
      max: "",
      number: 0
    };
  }
  minChange = (event) => {
    this.setState({ min: event.target.value });
  };
  maxChange = (event) => {
    this.setState({ max: event.target.value });
  };

  getInput = (e) => {
    const { min, max } = this.state;

    if (min && max && max > min) {
      let randomNumber = Math.floor(
        Math.random() * (Number(max) - Number(min) + 1) + Number(min)
      );
      this.setState({ number: randomNumber });
    } else {
      alert("enter valid value");
    }
  };

  deleteAll = () => {
    this.setState({ min: "", max: "", number: "" });
  };
  render() {
    const { min, max, number } = this.state;
    return (
      <div className="container">
        <p>{number}</p>
        <div className="card">
          <label>Lower Limit</label>
          <input
            className="min"
            type="number"
            value={min}
            onChange={this.minChange}
          />
          <br />
          <label>Upper Limit</label>
          <input
            className="max"
            type="number"
            value={max}
            onChange={this.maxChange}
          />
          <br />
          <button className="generate" type="submit" onClick={this.getInput}>
            Generate
          </button>
          <button className="clear" type="submit" onClick={this.deleteAll}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default App;
