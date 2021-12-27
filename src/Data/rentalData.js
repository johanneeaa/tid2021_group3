import Parse from "parse";

const Booking = Parse.Object.extend("Booking");

export default async function getAllBookings() {
  const allBookingsQuery = new Parse.Query(Booking);
  const allBookings = await allBookingsQuery.find();

  const allBookingsFormatted = allBookings.map((booking) => {

    return {
      id: booking.id,
      pickUpOffice: booking.get("PickUpOffice"),
      pickUpDate: booking.get("PickUpDate"),
      pickUpTime: booking.get("PickUpTime2"),
      returnOffice: booking.get("ReturnOffice"),
      returnDate: booking.get("ReturnDate"),
      returnTime: booking.get("ReturnTime2"),
      bookingNumber: booking.get("BookingID"),
      fullName: booking.get("LastName") + ", " + booking.get("FirstName"),
      dateOfBirth: booking.get("DoB2"),
      driversLicense: booking.get("DLicense"),
      reqCarGroup: booking.get("ReqCarGroup"),
    };
  });

  return allBookingsFormatted;
}
