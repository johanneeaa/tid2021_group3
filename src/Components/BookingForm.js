import React from "react";
//import Parse from "parse";
//import { useState } from "react";
import "./BookingForm.css";

const APP_ID_KEY = process.env.REACT_APP_APP_KEY
const APP_REST_KEY = process.env.REACT_APP_REST_KEY


export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booking: {
        FirstName: props.firstName,
        LastName: props.lastName,
        DriversLicense: props.driverslicense,
        DoB:props.dob,
        Email:props.email,
        PickUpOffice: props.pickupoffice,
        PickUpTime:props.pickuptime,
        ReturnOffice:props.returnoffice,
        ReturnTime:props.returntime,
        Notes:props.notes,
        Cargroup:props.cargroup
      },

      //this is to be used once we have been able to split up the parsing and the form - then we should be able to parse a booking and a customer from the same form
      customer: {
        firstname: props.firstName,
        lastname: props.lastName,
        email: props.email,
        notes: props.notes
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //this part here decides the data being parsed to the database
  //https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  handleChange(event, field) {
    this.setState({[field]: event.target.value});
  }
  
  handleSubmit(event) {
    alert('A new booking was submitted: ' + this.state.booking);

 /*    (async () => {
      const myNewObject = new Parse.Object('Booking');
      myNewObject.set('DoB', new Date());
      myNewObject.set('PickUpTime', new Date());
      myNewObject.set('ReturnTime', new Date());
      myNewObject.set('BookingID', Math.floor(Math.random(10)*10));
      myNewObject.set('FirstName', this.state.Booking.firstname);
      myNewObject.set('DriversLicense', 1);
      myNewObject.set('LastName', this.state.Booking.lastname);
      myNewObject.set('ReturnOffice', 'A string');
      myNewObject.set('PickUpOffice', 'A string');
      myNewObject.set('ReqCarGroup', 'A string');
      try {
        const result = await myNewObject.save();
        // Access the Parse Object attributes using the .GET method
        console.log('Booking created', result);
      } catch (error) {
        console.error('Error while creating Booking: ', error);
      }
    })(); */
    
    try{
    fetch("https://parseapi.back4app.com/classes/Booking",{
          method: "POST",
          headers: {
            "X-Parse-Application-Id": APP_ID_KEY,
            "X-Parse-REST-API-Key": APP_REST_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.booking.FirstName),
        }).then(booking => {
          console.log(booking)
          return booking.json();
        });
     } finally {event.preventDefault();}
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
              name="firstName"
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
              name="lastName"
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
            name="email"
            value={this.state.booking.email} //change to customer later
            onChange={this.handleChange}
            required
          />
          <label className="label">Drivers License No.:</label>
          <input
            className="input"
            type="number"
            name="driverslicense"
            value={this.state.booking.driverslicense}
            onChange={this.handleChange}
            required
          />
          <label className="label">Date of Birth:</label>
          <input
            className="input"
            type="date"
            name="dob"
            value={this.state.booking.dob}
            onChange={this.handleChange}
            required
          />
          <br />
          <label className="label">Pick Up Office:</label>
          <input
            className="input"
            type="text"
            name="pickupoffice"
            value={this.state.booking.pickupoffice}
            onChange={this.handleChange}
            required
          />
          <label className="label">Pick Up Time:</label>
          <input
            className="input"
            type="datetime-local"
            name="pickuptime"
            value={this.state.booking.pickuptime}
            onChange={this.handleChange}
            required
          />
          <br />
          <label className="label">Return Office:</label>
          <input
            className="input"
            type="text"
            name="returnoffice"
            value={this.state.booking.returnoffice}
            onChange={this.handleChange}
            required
          />
          <label className="label">Return Time:</label>
          <input
            className="input"
            type="datetime-local"
            name="returntime"
            value={this.state.booking.returntime}
            onChange={this.handleChange}
            required
          />
          <br />
          <label className="label">Notes:</label>
          <input
            className="input"
            type="text"
            name="notes"
            value={this.state.booking.notes}
            onChange={this.handleChange}
            required
          />
          <label className="label">Select Car Group:</label>
          <select
            className="input"
            name="cargroup"
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
