// funciton for adding a new Customer with "hardcoded" values. Used for testing purposes.
// Next step: generic input

// built on example from TID and [ https://dashboard.back4app.com/apidocs/ ]
import {newCustomer} from "../Data/makeCustomerData"

const randomCustomer = newCustomer()

console.log(randomCustomer.email);

const APP_ID_KEY = process.env.REACT_APP_APP_KEY
const APP_REST_KEY = process.env.REACT_APP_REST_KEY //note - this is the REST API key - and not the JavaScriptKey!

export default async function addRandomCustomer() {

  const postData = {
    FirstName: randomCustomer.firstName,
    LastName: randomCustomer.lastName,
    Email: randomCustomer.email,
    LatestCarGroup: randomCustomer.lastCarGroup,
    Notes: "",
    TotalBookings: randomCustomer.totalBookings,
    //LatestBooking: randomCustomer.lastBookingDate
  };

  try {
    const response = await fetch(
      "https://parseapi.back4app.com/classes/Customer",
      {
        method: "POST",
        headers: {
          "X-Parse-Application-Id": APP_ID_KEY,
          "X-Parse-REST-API-Key": APP_REST_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    );

    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  window.location.reload(false);
}
