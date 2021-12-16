//import {newBooking} from "../Data/newBookingData"

/* const createBooking = newBooking();

console.log(createBooking.firstName); */

const APP_ID_KEY = process.env.REACT_APP_APP_KEY
const APP_REST_KEY = process.env.REACT_APP_REST_KEY

export default async function createNewBooking() {

  console.log(APP_ID_KEY)
  console.log(APP_REST_KEY)

  const postData = {
    //LastName: createBooking.lastName,
    //FirstName: createBooking.firstName,

/*  createBooking.set('DoB', new Date());
    createBooking.set('PickUpTime', new Date());
    createBooking.set('ReturnTime', new Date());
    createBooking.set('BookingID', 1);
    createBooking.set('FirstName', 'A string');
    createBooking.set('DriversLicense', 1);
    createBooking.set('LastName', 'A string');
    createBooking.set('ReturnOffice', 'A string');
    createBooking.set('PickUpOffice', 'A string');
    createBooking.set('ReqCarGroup', 'A string'); */
  };

  try {
    const response = await fetch(
      "https://parseapi.back4app.com/classes/Booking",
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
