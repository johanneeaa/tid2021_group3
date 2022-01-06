import Parse from "parse";

const Booking = Parse.Object.extend("Booking");

export default async function getAllBookings() {
  const allBookingsQuery = new Parse.Query(Booking);
  const allBookings = await allBookingsQuery.find().catch(error => {
    console.log(error);
  });;

  const allBookingsFormatted = allBookings.map((booking) => {


    //const pickUp = booking.get("PickUpDate");

    //trying to format date input - perhaps make it its own function for reuseabaility, once it is working that is
/*     function DateFormatting(string){
      if(string.slice(6,7) === "01") {
        return string.slice(8,10) + " Jan";
      }
    }; */  //this is not working!

    return {
      id: booking.id,
      pickUpOffice: booking.get("PickUpOffice"),
      pickUpDate: booking.get("PickUpDate").slice(5,10), // DateFormatting(pickUp),//booking.get("PickUpDate").slice(5,10), //would be nicer if we could should the months, but haven't found a solution for this yet
      pickUpTime: booking.get("PickUpTime2"),
      returnOffice: booking.get("ReturnOffice"),
      returnDate: booking.get("ReturnDate").slice(5,10), //would be nicer if we could should the months, but haven't found a solution for this yet
      returnTime: booking.get("ReturnTime2"),
      bookingNumber: booking.get("BookingID"),
      fullName: booking.get("LastName") + ", " + booking.get("FirstName"),
      dateOfBirth: booking.get("DoB2").slice(0,4),
      driversLicense: booking.get("DLicense"),
      reqCarGroup: booking.get("ReqCarGroup"),
    };
  });

  return allBookingsFormatted;
}
