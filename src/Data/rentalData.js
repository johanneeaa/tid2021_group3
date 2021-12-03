
import Parse from "parse";

const Booking = Parse.Object.extend("Booking");

export default async function getAllBookings() {

    const allBookingsQuery = new Parse.Query(Booking);
    const allBookings = await allBookingsQuery.find();

    //const date = new Date(yourvariable).toISOstring();

    const allBookingsFormatted = allBookings.map((booking) => {
        return {
            id: booking.id,
            pickUpOffice: booking.get("PickUpOffice"),
            pickUpTime: new Date(booking.get("PickUpTime")).toISOString().slice(5,10) + " ETA: " + new Date(booking.get("PickUpTime")).toISOString().slice(11,16),
            returnOffice: booking.get("ReturnOffice"),
            returnTime: new Date(booking.get("ReturnTime")).toISOString().slice(5,10) + " ETA: " + new Date(booking.get("ReturnTime")).toISOString().slice(11,16),
            bookingNumber: booking.get("BookingID"),
            fullName: booking.get("LastName") + ", " + booking.get("FirstName"),
            dateOfBirth: new Date(booking.get("DoB")).toISOString().slice(0,10), // for hours and minutes (slicing on characters from index 0 - 10)
            driversLicense: booking.get("DriversLicense"),
            //requestedCarGroup: booking.get("RequestedCarGroup"), //this won't work (only for show), but I still haven't found a solution for accessing the pointer values in the database
        }
    })

    return allBookingsFormatted
}