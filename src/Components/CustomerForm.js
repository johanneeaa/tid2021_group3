import React from "react";
import "./CustomerForm.css";

const APP_ID_KEY = process.env.REACT_APP_APP_KEY;
const APP_REST_KEY = process.env.REACT_APP_REST_KEY;

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: props.firstname,
      lastname: props.lastname,
      email: props.email,
      notes: props.notes,
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
    alert("A new customer has been created: " + this.state.firstname);

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
        <div className="inputcontainer">
          <h1>Create new customer</h1>

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

          <label className="label">E-mail:</label>
          <input
            className="input"
            type="email"
            name="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label className="label">Notes:</label>
          <input
            className="input"
            type="text"
            name="Notes"
            value={this.state.notes}
            onChange={this.handleChange}
            required
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
