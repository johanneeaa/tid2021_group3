//this is not being used, should be deleted before hand-in

/* import Parse from "parse";
import {booking, customer} from "../Components/BookingForm";

const createBooking = new Parse.Object('Booking');
const createCustomer = new Parse.Object('Customer');

export default async function newBooking() {
 
  //booking data
  createBooking.set('PickUpTime', booking.pickuptime);
  createBooking.set('ReturnTime', booking.returntime);
  createBooking.set('BookingID', Math.floor(Math.random(10)*10));
  createBooking.set('FirstName', booking.firstname);
  createBooking.set('LastName', booking.lastname);
  createBooking.set('DoB', booking.dob);
  createBooking.set('ReturnOffice', booking.returnoffice);
  createBooking.set('PickUpOffice', booking.pickupoffice);
  createBooking.set('ReqCarGroup', booking.cargroup);
  
  //customer data
  createCustomer.set('FirstName', customer.firstname);
  createCustomer.set('LastName', customer.lastname);
  createCustomer.set('DriversLicense', customer.driverslicense);
  createCustomer.set('Notes', customer.notes);

    try {
      const result = await newBooking.save();
      // Access the Parse Object attributes using the .GET method
      console.log('New Booking created', result);
    } catch (error) {
      console.error('Error while creating Booking: ', error);
    }

  return createBooking;
}; */

/* 
export const newbooking = () => { 
  return {
    bookingID: Math.floor(Math.random(10)*10),
    firstName: ,
    lastName: 
  };
}; */