import React from "react";
import "./BookingForm.css";

const APP_ID_KEY = process.env.REACT_APP_APP_KEY
const APP_REST_KEY = process.env.REACT_APP_REST_KEY


export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    //for some reason the state values are not properly parsed to the database...
    this.state = {
      //Booking: { //must be without Booking - otherwise a Booking object will be created in the database
        //BookingID: Math.floor(Math.random(10)*1000), --  Number value! 
        firstname: props.firstname,
        lastname: props.lastname,
        //driverslicense: props.driverslicense, -- Number value!
        //dob:props.dob, -- Date() value
        //email:props.email, -- this parses fine as a string - but it belongs to customer
        pickupoffice: props.pickupoffice,
        pickuptime: props.pickuptime, //-- Date() value
        returnoffice:props.returnoffice,
        //returntime:props.returntime, -- Date() value
        //notes:props.notes, -- this parses fine as a string - but it belongs to customer
        cargroup:props.cargroup
    //},

      //this is to be used once we have been able to split up the parsing and the form - then we should be able to parse a booking and a customer from the same form
      /*customer: {
        firstname: props.firstname,
        lastname: props.lastname,
        email: props.email,
        notes: props.notes
      } */
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInt = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //this part here decides the data being parsed to the database - matches the named input fields with the actual input
  //https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  //https://stackoverflow.com/questions/50630846/react-passing-value-through-state-on-handle-change
  handleChange(event) {
    this.setState({
      [event.target.name]: JSON.stringify(event.target.value)
    });
  }

  handleChangeInt(event){
    this.setState({
      [event.target.name]: parseInt(event.target.value)
    });
  }

/*   jsonParsing(event) {
    if ([event.target.type] === "text" || "email") {
      JSON.stringify(this.state.Booking)
    }
    if ([event.target.type] === "number") {
      parseInt(this.state.Booking)
    }
    if ([event.target.type] === "date") {
      
    }
    if ([event.target.type] === "datetime-local") {
      
    }
  } */
  
  handleSubmit(event) {
    alert('A new booking was submitted: ' + this.state);
    
    try{
    fetch("https://parseapi.back4app.com/classes/Booking",{
          method: "POST",
          headers: {
            "X-Parse-Application-Id": APP_ID_KEY,
            "X-Parse-REST-API-Key": APP_REST_KEY,
            "Content-Type": "application/json",
          },
          //body: this.state,  //-- trying to see if we can parse it as JSON with different values - stringify only works on the string values
          body: JSON.stringify(this.state), //has to be this.state in order to parse - still need to find a solution to parse numbers and Date()
        }).then(Booking => {
          console.log(Booking)
          return Booking.json();
        });
     } 
     finally {event.preventDefault();}
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
            value={this.state.email} //change to customer later
            onChange={this.handleChange}
            //required
          />
          <label className="label">Drivers License No.:</label>
          <input
            className="input"
            type="number"
            name="DriversLicense"
            value={this.state.driverslicense}
            onChange={this.handleChangeInt}
            //required
          />
          <label className="label">Date of Birth:</label>
          <input
            className="input"
            type="date"
            name="DoB"
            value={this.state.dob}
            onChange={this.handleChange}
            //required
          />
          <br />
          <label className="label">Pick Up Office:</label>
          <input
            className="input"
            type="text"
            name="PickUpOffice"
            value={this.state.pickupoffice}
            onChange={this.handleChange}
            required
          />
          <label className="label">Pick Up Time:</label>
          <input
            className="input"
            type="datetime-local"
            name="PickUpTime"
            value={this.state.pickuptime}
            onChange={this.handleChange}
            //required
          />
          <br />
          <label className="label">Return Office:</label>
          <input
            className="input"
            type="text"
            name="ReturnOffice"
            value={this.state.returnoffice}
            onChange={this.handleChange}
            required
          />
          <label className="label">Return Time:</label>
          <input
            className="input"
            type="datetime-local"
            name="ReturnTime"
            value={this.state.returntime}
            onChange={this.handleChange}
            //required
          />
          <br />
          <label className="label">Notes:</label>
          <input
            className="input"
            type="text"
            name="Notes"
            value={this.state.notes}
            onChange={this.handleChange}
            //required
          />
          <label className="label">Select Car Group:</label>
          <select
            className="input"
            type="text"
            name="CarGroup"
            value={this.state.cargroup}
            onChange={this.handleChange}
            //required
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
