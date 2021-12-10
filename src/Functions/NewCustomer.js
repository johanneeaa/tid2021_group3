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
          "X-Parse-Application-Id": "iQDmAaMFGOGaZCqW5DiVEhRrY7jhCG5hdFHdyybL",
          "X-Parse-REST-API-Key": "vxMVWv38VwCeNy8wU3h8e83w5ad7zGGMp5QgEuZv",
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
