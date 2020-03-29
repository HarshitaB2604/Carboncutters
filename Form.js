import React from "react";
import "./bootstrap/node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class Form extends React.Component {
  state = {
    YearOfManufacture: "",
    manufacturer: "",
    model: "",
    mpg: "",
    password: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <input
          name="YearOfManufacture"
          placeHolder="Year of Manufacture"
          value={this.state.YearOfManufacture}
          onChange={e => this.change(e)}
        />

        <br />
        <br />
        <input
          name="manufacturer"
          placeHolder="Manufacturer"
          value={this.state.manufacturer}
          onChange={e => this.change(e)}
        />

        <br />
        <br />
        <input
          name="model"
          placeHolder="Model"
          value={this.state.model}
          onChange={e => this.change(e)}
        />

        <br />
        <br />
        <input
          name="mpg"
          placeHolder="Miles Per Gallon"
          value={this.state.mpg}
          onChange={e => this.change(e)}
        />

        <br />
        <br />
        <button onClick={e => this.onSubmit(e)} size="lg">
          Submit
        </button>
      </form>
    );
  }
}
