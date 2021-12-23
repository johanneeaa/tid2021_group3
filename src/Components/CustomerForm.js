//this form should render if button 'create new customer' is clicked in BookingForm OR it

import React from "react";
import "./CustomerForm.css";

const APP_ID_KEY = process.env.REACT_APP_APP_KEY;
const APP_REST_KEY = process.env.REACT_APP_REST_KEY;

const LatestCarGroup = "N/A";  //this needs functionality to change once a customer has been connected to a booking
const TotalBookings = 0;      //this needs functionality to increment everytime a customer is registered on a new booking

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: props.firstname,
      lastname: props.lastname,
      email: props.email,
      notes: props.notes,
      LatestCarGroup,
      TotalBookings
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  //this part here decides the data being parsed to the database - matches the named input fields with the actual input
  //https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  //https://stackoverflow.com/questions/50630846/react-passing-value-through-state-on-handle-change
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    alert("A new customer has been created: " + this.state);

    try {
      fetch("https://parseapi.back4app.com/classes/Customer", {
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
      });
    } finally {
      event.preventDefault();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
            className="button_newB"
            type="submit"
            value="Save new customer"
          ></input>
        </div>
      </form>
    );
  }
}
