import Parse from "parse";

const createBooking = new Parse.Object('Booking');

export default async function newBooking() {
 
  createBooking.set('DoB', new Date().props);
  createBooking.set('PickUpTime', new Date().props);
  createBooking.set('ReturnTime', new Date().props);
  createBooking.set('BookingID', 1);
  createBooking.set('FirstName', 'A string');
  createBooking.set('DriversLicense', 1);
  createBooking.set('LastName', 'A string');
  createBooking.set('ReturnOffice', 'A string');
  createBooking.set('PickUpOffice', 'A string');
  createBooking.set('ReqCarGroup', 'A string');
    try {
      const result = await newBooking.save();
      // Access the Parse Object attributes using the .GET method
      console.log('Booking created', result);
    } catch (error) {
      console.error('Error while creating Booking: ', error);
    }

  return createBooking;
};

/* export const newbooking = () => { 
  return {
    bookingID: Math.floor(Math.random(10)*10),
    firstName: ,
    lastName: 
  };
}; */