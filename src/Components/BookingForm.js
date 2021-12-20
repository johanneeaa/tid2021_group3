import React from "react";
//import { useState } from "react";
import "./BookingForm.css";

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booking: {
        firstName: props.firstName,
        lastName: props.lastName,
        driverslicense: props.driverslicense,
        pickupoffice: props.pickupoffice,
        pickuptime: props.pickuptime,
        returnoffice: props.returnoffice,
        returntime: props.returnoffice,
        cargroup: props.cargroup,
      },
      customer: {
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
        dob: props.dob,
        notes: props.notes,
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    alert('A new booking was submitted: ' + this.state.value);
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="inputcontainer">
          <h1>Create new booking</h1>

          <label className="label">
            First Name:
            <input
              className="input"
              type="text"
              value={this.state.booking.firstname}
              onChange={this.handleChange}
              required
            />
          </label>

          <label className="label">
            Last Name:
            <input
              className="input"
              type="text"
              value={this.state.booking.lastname}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />

          <label className="label">E-mail:</label>
          <input
            className="input"
            type="email"
            value={this.state.customer.email}
            onChange={this.handleChange}
            required
          />
          <label className="label">Drivers License No.:</label>
          <input
            className="input"
            type="number"
            value={this.state.customer.driverslicense}
            onChange={this.handleChange}
            required
          />
          <label className="label">Date of Birth:</label>
          <input
            className="input"
            type="date"
            value={this.state.customer.dob}
            onChange={this.handleChange}
            required
          />
          <br />
          <label className="label">Pick Up Office:</label>
          <input
            className="input"
            type="text"
            value={this.state.booking.pickupoffice}
            onChange={this.handleChange}
            required
          />
          <label className="label">Pick Up Time:</label>
          <input
            className="input"
            type="datetime-local"
            value={this.state.booking.pickuptime}
            onChange={this.handleChange}
            required
          />
          <br />
          <label className="label">Return Office:</label>
          <input
            className="input"
            type="text"
            value={this.state.booking.returnoffice}
            onChange={this.handleChange}
            required
          />
          <label className="label">Return Time:</label>
          <input
            className="input"
            type="datetime-local"
            value={this.state.booking.returntime}
            onChange={this.handleChange}
            required
          />
          <br />
          <label className="label">Notes:</label>
          <input
            className="input"
            type="text"
            value={this.state.booking.notes}
            onChange={this.handleChange}
            required
          />
          <label className="label">Select Car Group:</label>
          <select
            className="input"
            value={this.state.booking.cargroup}
            onChange={this.handleChange}
            required
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="H">H</option>
            <option value="I">I</option>
          </select>
          <br />
          <br />
          <input
            className="button_newB"
            type="submit"
            value="Confirm booking"
          ></input>
          <input
            className="button_newB"
            type="button"
            value="Cancel booking"
          ></input>
        </div>
      </form>
    );
  }
}
