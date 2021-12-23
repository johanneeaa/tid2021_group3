// funciton for adding a new Customer with "hardcoded" values. Used for testing purposes.
// Next step: generic input

// built on example from TID and [ https://dashboard.back4app.com/apidocs/ ]
import {newCustomer} from "../Data/makeCustomerData"

const randomCustomer = newCustomer()

console.log(randomCustomer.email);

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
          "X-Parse-Application-Id": "AgzfzDrOFClmY4jztxiZnNa3dlEN8fbiDAsWV6lf",
          "X-Parse-REST-API-Key": "ljeZr2KM6A4n3PyvZE2pOS8R4BbKyLULGVq8mhXI",
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
