import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: "",
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get("/api/values/current");
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get("/api/values/all");
    this.setState({ seenIndexes: seenIndexes.data });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { values, index } = this.state;
    axios.post("/api/values", { index: index });
    this.setState({ index: "" });
  };

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(", ");
  }
  renderValues() {
    const enteries = [];
    for (let key in this.state.values) {
      enteries.push(
        <div key={key}>
          For index {key} the values calculated is {this.state.values[key]}
        </div>
      );
    }
    return enteries;
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index</label>
          <input
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
        </form>
        <h3>Indexes I have seen</h3>
        {this.renderSeenIndexes()}
        <h3>Calculated Values</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
