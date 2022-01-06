/**
 * Static data used to create a new booking - see BookingForm.js
 * 
 * Exports the following: BookingID, todaysDate, timeOptionBoxes, carGroupBoxes, rentalOfficeBoxes
 */

export const BookingID = generateRandomBookingID(1520000, 1999999); //generating a random BookingID, ideally it should be unique and increment everytime a new booking is created

function generateRandomBookingID(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
if (day < 10) {  //adding a zero to the numbers 1-9, to ensure the correct day syntax
  day = '0'+ day
} 
if (month < 10) { //adding a zero to the numbers 1-9, to ensure the correct month syntax
  month = '0' + month
}

/**
 * The const todaysDate have been created to prevent any bookings being created with a pick-up or return date back in time.
 * reference: https://www.codegrepper.com/code-examples/javascript/html+max+date+minus+1+day
 */
export const todaysDate = year + '-'+ month + '-' + day;

/**
 * The const maxBirthDate have been created to prevent anyone below 18 years from booking a car.
 * reference: https://www.codegrepper.com/code-examples/javascript/html+max+date+minus+1+day
 */
export const maxBirthDate = (year-18) + '-'+ month + '-' + day;

const timeSlots = [
  "", //the empty slot is needed for the required functionality
  "08:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
];
export const timeOptionBoxes = [];
timeSlots.forEach((element) => {
  timeOptionBoxes.push(<option> {element} </option>);
});

// Available carGroups for BookingForm:
const carGroups = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I"];
export const carGroupBoxes = [];
carGroups.forEach((element) => {
  carGroupBoxes.push(<option> {element} </option>);
});

// Available 37 rental offices for BookingForm:
const rentalOffices = [
  "",
  "AAL",
  "AL2",
  "AAR",
  "AR2",
  "BLL",
  "BL2",
  "BYR",
  "BY2",
  "CNL",
  "COP",
  "CO1",
  "CO2",
  "CO3",
  "EBJ",
  "EB2",
  "FAN",
  "FRD",
  "GIV",
  "HER",
  "HOL",
  "KRP",
  "KST",
  "ME2",
  "MRW",
  "ODE",
  "OD2",
  "PLM",
  "RKE",
  "RNN",
  "SGD",
  "SKS",
  "SQW",
  "STA",
  "TED",
  "TXR",
  "UBB",
  "YNL",
];

export const rentalOfficeBoxes = [];
rentalOffices.forEach((element) => {
  rentalOfficeBoxes.push(<option> {element} </option>);
});

