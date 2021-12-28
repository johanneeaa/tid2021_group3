/**
 * Static data used to create a new booking - see BookingForm.js
 */

export const BookingID = generateRandomBookingID(1520000, 1999999); //generating a random BookingID, ideally it should be unique and increment everytime a new booking is created

function generateRandomBookingID(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const defaultTime = "08:00";  //not currently being used, delete if never used
const defaultCarGroup = "A";  //not currently being used, delete if never used

