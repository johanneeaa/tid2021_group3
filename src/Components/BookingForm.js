import React from 'react';
import './BookingForm.css';

export default class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booking: {
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
        driverslicense: props.driverslicense,
        pickupoffice: props.pickupoffice,
        pickuptime: props.pickuptime,
        returnoffice: props.returnoffice,
        returntime: props.returnoffice,
        notes: props.notes,
        cargroup: props.cargroup
      }
    }
  }

  render() {
    return (
      <div class= "inputcontainer">
        <h1>Create new booking</h1>
        <label class="label">
          First Name: 
        </label>
        <input class="input" type="text" value={this.state.booking.firstName}/>
        <label class="label">
          Last Name:
        </label >
        <input class="input" type="text" value={this.state.booking.lastName}/>
        <br/>
        <label class="label">
          E-mail:
        </label>
        <input class="input" type="email" value={this.state.booking.email}/>
        <label class="label">
          Drivers License No.:
        </label>
        <input class="input" type="text" value={this.state.booking.driverslicense}/>
        <br/>
        <label class="label">
          Pick Up Office:
        </label>
        <input class="input" type="text" value={this.state.booking.pickupoffice}/>
        <label class="label">
          Pick Up Time:
        </label>
        <input class="input" type="datetime-local" value={this.state.booking.pickuptime}/>
        <br/>
        <label class="label">
          Return Office:
        </label>
        <input class="input" type="text" value={this.state.booking.returnoffice}/>
        <label class="label">
          Return Time:
        </label>
        <input class="input" type="datetime-local" value={this.state.booking.returntime}/>
        <br/>
        <label class="label">
          Notes:
        </label>
        <input class="input" type="text" value={this.state.booking.notes}/>
        <label class="label">
          Select Car Group:
        </label>
        <select class="input" value={this.state.booking.cargroup}>
          <option value="A">
            A
          </option>
          <option value="B">
            B
            </option>
          <option value="C">
            C
            </option>
          <option value="D">
          D
          </option>
          <option value="E">
          E
          </option>
          <option value="F">
          F
          </option>
          <option value="G">
          G
          </option>
          <option value="H">
          H
          </option>
          <option value="I">
          I
          </option>
        </select>
        <br/><br/>
        <input class="button_newB" type="submit" value="Confirm booking"></input>
        <input class="button_newB" type="button" value="Cancel booking"></input>
      </div>
    );
  }
}