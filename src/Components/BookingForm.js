import React from "react";
import {BookingID} from "../Data/newBookingData"
import './Styling/BookingForm.css';

/**
 * Reference: https://reactjs.org/docs/forms.html
 * The BookingForm is used to create a new booking in the system, it takes all the inputs given by user and adds it as a Booking in the database.
 *
 * In order to simulate a real order creating, we have implemented a auto-generated bookingID, using random numbers
 * within a given interval to visualize a new booking being created - see alert in handleSubmit.
 *
 * The inputfields in the form takes both dates, numbers, texts and select inputs as props, and in order to parse as an object to
 * the database stringify the state of the object and then POST it to the database.
 *
 * Known bugs & defect:
 * 1. The BookingID does not prevent duplicate numbers from being created, ideally this needs to be an increment method
 *    adding +1 to the latest bookingID added to the database.
 */

const APP_ID_KEY = process.env.REACT_APP_APP_KEY;
const APP_REST_KEY = process.env.REACT_APP_REST_KEY;

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

  //this part here decides the data being parsed to the database - matches the named input fields with the actual input
  //https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  //https://stackoverflow.com/questions/50630846/react-passing-value-through-state-on-handle-change
  handleChange = async (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    alert(
      "A new booking was submitted with BookingID: " + this.state.BookingID
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
      event.target.reset(); //clears the input fields upon submission
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="inputcontainer">
          <h1 className="header">  Create new booking</h1>
          <input
            className="button_addCustomer" //this buttons do not have any functionality yet
            type="button"
            value=" Add Existing Customer "
          ></input>{" "}
          <span></span>
          <input
            className="newCustomerButton" //this buttons do not have any functionality yet
            type="button"
            value=" Create a new Customer "
          ></input>
          <br />
          <div className="driverContainer">
          <label className="driversLabel">
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
          <label className="driversLabel">
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
          </div>
          <br />
          <div className="driverContainer2">
          <label className="driversLabel">Drivers License No.:</label>
          <input
            className="input"
            placeholder="e.g. 12345678"
            type="number" //input is numbers, but when parsed it is converted to a string
            name="DLicense"
            value={this.state.driverslicense}
            onChange={this.handleChange}
            required
          />
          <label className="driversLabel">Date of Birth:</label>
          <input
            className="input"
            type="date"
            name="DoB2"
            value={this.state.dob}
            onChange={this.handleChange}
            required
          />
          </div>
          <br />
          <div className="pickUpContainer">
            <h4 className="pickuph4">Pick Up</h4>
          <label className="pickupLabel">Office:</label>
          <input
            className="pickUpInput"
            placeholder="e.g. KRP"
            type="text"
            name="PickUpOffice"
            value={this.state.pickupoffice}
            onChange={this.handleChange}
            required
          />
          <br />
          <label className="pickupLabel">Date:</label>
          <input
            className="pickUpInput"
            type="date"
            name="PickUpDate"
            value={this.state.pickupdate}
            onChange={this.handleChange}
            required
          />
          <label className="pickupLabel">Time:</label>
          <select
            required
            className="pickUpInput"
            type="text"
            name="PickUpTime2"
            value={this.state.pickuptime}
            onChange={this.handleChange}
          >
            <option value="">Select</option> {/* leaving the value empty here, gives us the desired 'required' functionality */}
            <option value="8:00">08:00</option>
            <option value="10:00">10:00</option>
            <option value="12:00">12:00</option>
            <option value="14:00">14:00</option>
            <option value="16:00">16:00</option>
            <option value="18:00">18:00</option>
            <option value="20:00">20:00</option>
          </select>{" "}
          <span></span>
          </div>
          <br />
          <div className="returnContainer">
            <h4 className="rentalh4">Return</h4>
          <label className="returnLabel">Office:</label>
          <input
            className="returnInput"
            placeholder="e.g. AAL"
            type="text"
            name="ReturnOffice"
            value={this.state.returnoffice}
            onChange={this.handleChange}
            required
          />
          <br />
          <label className="returnLabel">Date:</label>
          <input
            className="returnInput"
            type="date"
            name="ReturnDate"
            value={this.state.returndate}
            onChange={this.handleChange}
            required
          />
          <label className="returnLabel">Time:</label>
          <select
            required
            className="returnInput"
            type="text"
            name="ReturnTime2"
            value={this.state.returntime}
            onChange={this.handleChange}
          >
            <option value="">Select</option>
            <option value="8:00">08:00</option>
            <option value="10:00">10:00</option>
            <option value="12:00">12:00</option>
            <option value="14:00">14:00</option>
            <option value="16:00">16:00</option>
            <option value="18:00">18:00</option>
            <option value="20:00">20:00</option>
          </select>{" "}
          <span></span>
          </div>
          <br />
          <div className="carGroupSelect">
          <label className="label">Select Car Group:</label>
          <select
          required
            className="input"
            type="text"
            name="ReqCarGroup"
            value={this.state.reqcargroup}
            onChange={this.handleChange}
          >
            <option value="">Select</option>
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
          </div>
          <span></span>
          <input
            className="confirmButton"
            type="submit"
            value=" Confirm booking "
          ></input>{" "}
          <span></span>
          <input
            className="cancelButton"
            type="button"
            value=" Cancel booking "
            onClick={() => {
              window.location.href = "/rental";
            }}
          ></input>
        </div>
      </form>
    );
  }
}
