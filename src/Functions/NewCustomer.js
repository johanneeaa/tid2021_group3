import {newCustomer} from "../Data/makeCustomerData"

// Funciton for adding a new Customer with random, plausible, values imported from ../Data/makeCustomerData
// Used for testing, next step; utlizing user input

// built on example from TID course and [ https://dashboard.back4app.com/apidocs/ ]

const APP_ID_KEY = process.env.REACT_APP_APP_KEY
const REACT_APP_REST_KEY = process.env.REACT_APP_REST_KEY

const randomCustomer = newCustomer() //grab a random customer

export default async function addRandomCustomer() {

  const postData = {
    LastName: randomCustomer.lastName,
    FirstName: randomCustomer.firstName,
    LatestCarGroup: randomCustomer.lastCarGroup,
    Email: randomCustomer.email,
    TotalBookings: randomCustomer.totalBookings,
    //LatestBooking: randomCustomer.lastBookingDate
  };

  try {
    const response = await fetch(
      "https://parseapi.back4app.com/classes/Customer",
      {
        method: "POST",
        headers: {
          "X-Parse-Application-Id": APP_ID_KEY, //Getting key from .env
          "X-Parse-REST-API-Key": REACT_APP_REST_KEY, //Getting key from .env
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
