//this form should render if button 'create new customer' is clicked in BookingForm OR it

import React from "react";
import "./Styling/CustomerForm.css";

/**
 * Reference: https://reactjs.org/docs/forms.html
 * The CustomerForm is used to create a new customer in the system, it takes all the inputs given by user and adds it as a Customer in the database.
 *
 * The inputfields in the form takes both dates, numbers, texts and select inputs as props, and in order to parse as an object to
 * the database stringify the state of the object and then POST it to the database.
 *
 * Missing functionalities:
 * 1. const TotalBookings is static, it needs functionality to increment when customer makes new booking
 * 2. const LatestCarGroup is static, it needs functionality to update upon rental pick-up
 * TotalBookings cannot be implemented before we can add an existing customer to a new booking,
 * and LatestCarGroup needs a pick-up window in order to update value
 *
 * Status: Works as intended,
 * However, consider re-factoring into a pop-up which can then be called with 'onClick' on the two buttons we have for 'create new customer'
 */

const APP_ID_KEY = process.env.REACT_APP_APP_KEY;
const APP_REST_KEY = process.env.REACT_APP_REST_KEY;

const LatestCarGroup = " "; //this needs functionality to update car group value once a customer has rented a car
const TotalBookings = 0; //starts on zero on purpose, as a new customer will not have any bookings yet

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: props.firstname,
      lastname: props.lastname,
      email: props.email,
      notes: props.notes,
      LatestCarGroup,
      TotalBookings,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //this part here decides the data being parsed to the database - matches the named input fields with the actual input
  //https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  //https://stackoverflow.com/questions/50630846/react-passing-value-through-state-on-handle-change
  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  //made a few changes from original code to make it an async function - and the alert box does not pop up before the object has finished parsing
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch("https://parseapi.back4app.com/classes/Customer", {
        method: "POST",
        headers: {
          "X-Parse-Application-Id": APP_ID_KEY,
          "X-Parse-REST-API-Key": APP_REST_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      }).then((Customer) => {
        console.log(Customer);
        return Customer.json();
      })
    } finally {
        alert("A new customer has been created!")};
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="outercontainercustomer">
          <div className="inputcontainercustomer">
            <h1>Create new customer</h1>

            <label className="labelcustomer">
              First Name:
              <input
                className="input"
                type="text"
                name="FirstName" //this needs to be the same uppercase/lowercase letters as in the database - this references the the 'Header' column
                value={this.state.firstname}
                onChange={this.handleChange}
                required
              />
            </label>

            <label className="labelcustomer">
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

            <label className="labelcustomer">E-mail:</label>
            <input
              className="input"
              type="email"
              name="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label className="labelcustomer">Notes:</label>
            <input
              className="input"
              type="text"
              name="Notes"
              value={this.state.notes}
              onChange={this.handleChange}
              //required  -- removing this as notes should not be a required field
            />
            <br />
            <input
              className="button_cancel"
              type="button"
              value=" Cancel"
              onClick={() => {
                window.location.href = "/customer";
              }}
            ></input>
            <span> </span>
            <input
              className="button_newC"
              type="submit"
              value="Save new customer"
              onClick={() => {
                window.location.href = "/customer";
              }}
            ></input>
          </div>
        </div>
      </form>
    );
  }
}
