import {newCustomer} from "../Data/makeCustomerData"

// Funciton for adding a new Customer with random, plausible, values imported from ../Data/makeCustomerData
// Made with REST calls, instead of parse, as required by client (course manager)
// Used for testing, to avoid hard coding them in the DB. next step; utlizing user input

// built on example from [ TID course Fall 2021 @ IT University of Copenhagen ] and [ https://dashboard.back4app.com/apidocs/ ]

const randomCustomer = newCustomer() //grab a random customer

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
