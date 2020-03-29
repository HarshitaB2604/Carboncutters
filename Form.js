import React from "react";
import "./bootstrap/node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class Form extends React.Component {
  state = {
    phoneNumber: "",
    YearOfManufacture: "",
    manufacturer: "",
    model: "",
    mpg: ""
  };

  //object for storing all final info about the car
  //let carData = {};

  //
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
        <label>
          Phone Number:
          <br />
          <input
            name="phoneNumber"
            placeHolder="XXXXXXXXXX"
            value={this.state.phoneNumber}
            onChange={e => this.change(e)}
          />
        </label>

        <br />
        <br />
        <label>
          Year of Manufacture:
          <br />
          <input
            name="YearOfManufacture"
            placeHolder="Year of Manufacture"
            value={this.state.YearOfManufacture}
            onChange={e => this.change(e)}
          />
        </label>

        <br />
        <br />
        <label>
          Manufacture:
          <br />
          <input
            name="manufacturer"
            placeHolder="Manufacturer"
            value={this.state.manufacturer}
            onChange={e => this.change(e)}
          />
        </label>

        <br />
        <br />
        <label>
          Model:
          <br />
          <input
            name="model"
            placeHolder="Model"
            value={this.state.model}
            onChange={e => this.change(e)}
          />
        </label>

        <br />
        <br />
        <label>
          Miles Per Gallon:
          <br />
          <input
            name="mpg"
            placeHolder="Miles Per Gallon"
            value={this.state.mpg}
            onChange={e => this.change(e)}
          />
        </label>

        <br />
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
