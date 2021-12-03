
import Parse from "parse";

const Booking = Parse.Object.extend("Booking");

export default async function getAllBookings() {

    const allBookingsQuery = new Parse.Query(Booking);
    const allBookings = await allBookingsQuery.find();

    const allBookingsFormatted = allBookings.map((booking) => {
        return {
            id: booking.id,
            pickUpOffice: booking.get("PickUpOffice"),
            pickUpTime: booking.get("PickUpTime"),
            returnOffice: booking.get("ReturnOffice"),
            returnTime: booking.get("ReturnTime"),
            bookingNumber: booking.get("BookingID"),
            fullName: booking.get("LastName") + " " + booking.get("FirstName"),
            dateOfBirth: booking.get("DoB"),
            driversLicense: booking.get("DriversLicense"),
            //requestedCarGroup: booking.get("RequestedCarGroup"), //this won't work (only for show), but I still haven't found a solution for accessing the pointer values in the database
        }
    })

    return allBookingsFormatted
}