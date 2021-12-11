// funciton for adding a new Customer with "hardcoded" values. Used for testing purposes.
// Next step: generic input

// built on example from TID and [ https://dashboard.back4app.com/apidocs/ ]
import {newCustomer} from "../Data/makeCustomerData"

const randomCustomer = newCustomer()

console.log(randomCustomer.email);

const APP_ID_KEY = process.env.REACT_APP_APP_KEY
const APP_JS_KEY = process.env.REACT_APP_JS_KEY

export default async function addRandomCustomer() {

  console.log(APP_ID_KEY)
  console.log(APP_JS_KEY)

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
          "X-Parse-REST-API-Key": APP_JS_KEY, //Getting key from .env
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
