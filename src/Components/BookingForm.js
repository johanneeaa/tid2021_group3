import React from "react";
import "./BookingForm.css";
//import { FormControl } from '@mui/material';

/**
 * The BookingForm is used to create a new booking in the system, it takes all the inputs given by user and adds it as a booking in the database.
 * In order to simulate a real order creating, we have implemented a auto-generated bookingID, we have used random numbers within a given interval.
 * 
 * Known bugs & defect: 
 * 1. The BookingID does not prevent duplicate numbers from being created, ideally this needs to be an increment method adding +1 to the latest bookingID added to the database.
 *    Challenges: concurrency issues, might need to be an atomic integer which would slow down app responsiveness
 * 2. if ANY the dropdown menues: pickuptime, returntime and reqcargroup is not selected, then there will be a data breakage with the table rendering on the pages receiving data from the database as there will be empty data fields
 * blocking the rendering.
 * 
 * Current status: trying to fix the dropdown menu defect, as it is the most vital
 */

const APP_ID_KEY = process.env.REACT_APP_APP_KEY;
const APP_REST_KEY = process.env.REACT_APP_REST_KEY;

const BookingID = generateRandomBookingID(1520000, 1999999); //generating a random BookingID, ideally it should be unique and increment everytime a new booking is created

function generateRandomBookingID(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const DefaultTime = "08:00";
const DefaultCarGroup = "A";

//const DriversLicense = 12495626; used for testing parsing of numbers - static numbers works, however numbers 'input' does not work since state is stringified!

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      BookingID,
      firstname: props.firstname,
      lastname: props.lastname,
      driverslicense: props.driverslicense,
      dob: props.dob,
      pickupoffice: props.pickupoffice,
      pickupdate: props.pickupdate,
      pickuptime: props.pickuptime,
      returnoffice: props.returnoffice,
      returndate: props.returndate,
      returntime: props.pickuptime,
      reqcargroup: props.reqcargroup,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //trying to create a method to set data to first value if nothing is selected in dropdown menus
  handleDefaultSelect = async event => {
    if (this.pickuptime == null) {
    this.setState.pickuptime = DefaultTime;}
    if (this.reqcargroup == null) {
    this.setState.reqcargroup = DefaultCarGroup; 
    }
  }

  //this part here decides the data being parsed to the database - matches the named input fields with the actual input
  //https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  //https://stackoverflow.com/questions/50630846/react-passing-value-through-state-on-handle-change
  handleChange = async event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = async event => {
      alert(
        "A new booking was submitted with BookingID: " +
          this.state.BookingID
      );

      try {
        fetch("https://parseapi.back4app.com/classes/Booking", {
          method: "POST",
          headers: {
            "X-Parse-Application-Id": APP_ID_KEY,
            "X-Parse-REST-API-Key": APP_REST_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state),
        }).then((Booking) => {
          console.log(Booking);
          return Booking.json();
        });
      } finally {
        event.preventDefault(); 
      } 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="inputcontainer">
          <h1>Create new booking</h1>
          <input
            className="button_addCustomer" //this buttons do not have any functionality yet
            type="button"
            value=" Add Existing Customer "
          ></input>{" "}
          <span></span>
          <input
            className="button_addCustomer" //this buttons do not have any functionality yet
            type="button"
            value=" Create a new Customer "
          ></input>
          <br />
          <label className="label">
            First Name:
            <input
              className="input"
              type="text"
              name="FirstName" //this needs to be the same uppercase/lowercase letters as in the database - this is the 'header' column
              value={this.state.firstname}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className="label">
            Last Name:
            <input
              className="input"
              type="text"
              name="LastName"
              value={this.state.lastname}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <label className="label">Drivers License No.:</label>
          <input
            className="input"
            type="number" //input is numbers, but when parsed it is converted to a string
            name="DLicense"
            value={this.state.driverslicense}
            onChange={this.handleChange}
            required
          />
          <label className="label">Date of Birth:</label>
          <input
            className="input"
            type="date"
            name="DoB2"
            value={this.state.dob}
            onChange={this.handleChange}
            required
          />
          <br />
          <h4>Pick Up</h4>
          <label className="label">Office:</label>
          <input
            className="input"
            type="text"
            name="PickUpOffice"
            value={this.state.pickupoffice}
            onChange={this.handleChange}
            required
          />
          <br />
          <label className="label">Date:</label>
          <input
            className="input"
            type="date"
            name="PickUpDate"
            value={this.state.pickupdate}
            onChange={this.handleChange}
            required
          />
          <label className="label">Time:</label>
          <select
            className="input"
            type="text"
            name="PickUpTime2"
            value={this.state.pickuptime}
            onChange={this.handleChange}
            data="08:00"
          > 
            <option value="Not Selected">Select</option>
            <option value="8:00">08:00</option>
            <option value="10:00">10:00</option>
            <option value="12:00">12:00</option>
            <option value="14:00">14:00</option>
            <option value="16:00">16:00</option>
            <option value="18:00">18:00</option>
            <option value="20:00">20:00</option>
          </select>{" "}
          <span></span>
          <br />
          <h4>Return</h4>
          <label className="label">Office:</label>
          <input
            className="input"
            type="text"
            name="ReturnOffice"
            value={this.state.returnoffice}
            onChange={this.handleChange}
            required
          />
          <br />
          <label className="label">Date:</label>
          <input
            className="input"
            type="date" //need to find a way to parse this value to DB
            name="ReturnDate"
            value={this.state.returndate}
            onChange={this.handleChange}
            required
          />
          <label className="label">Time:</label>
          <select
            className="input"
            type="text"
            name="ReturnTime2"
            value={this.state.returntime}
            onChange={this.handleChange}
            required
          >
            <option value="Not Selected">Select</option>
            <option value="8:00">08:00</option>
            <option value="10:00">10:00</option>
            <option value="12:00">12:00</option>
            <option value="14:00">14:00</option>
            <option value="16:00">16:00</option>
            <option value="18:00">18:00</option>
            <option value="20:00">20:00</option>
          </select>{" "}
          <span></span>
          <br />
          <label className="label">Select Car Group:</label>
          <select
            className="input"
            type="text"
            name="ReqCarGroup"
            value={this.state.reqcargroup}
            onChange={this.handleChange}
          >
            <option value="Not Selected">Select</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="H">H</option>
            <option value="I">I</option>
          </select>{" "}
          <span></span>
          <input
            className="button_newB"
            type="submit"
            value=" Confirm booking "
          ></input>{" "}
          <span></span>
          <input
            className="button_newB"
            type="button"
            value=" Cancel booking "
            onClick={() => { window.location.href = '/rental'}}
          ></input>
        </div>
      </form>
    );
  }
}
