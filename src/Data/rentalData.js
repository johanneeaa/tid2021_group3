
import Parse from "parse";

const Booking = Parse.Object.extend("Booking");

export default async function getAllBookings() {

    const allBookingsQuery = new Parse.Query(Booking);
    const allBookings = await allBookingsQuery.find();

    //const date = new Date(yourvariable).toISOstring();

    const allBookingsFormatted = allBookings.map((booking) => {

        const pickUpInfo = booking.get("PickUpTime").toISOString()
        const pickUpDate = pickUpInfo.slice(5,10)
        const pickUpHour = pickUpInfo.slice(11,16)

        const returnInfo = booking.get("ReturnTime").toISOString()
        const returnDate = returnInfo.slice(5,10)
        const returnHour = returnInfo.slice(11,16)

        return {
            id: booking.id,
            pickUpOffice: booking.get("PickUpOffice"),
            pickUpTime: pickUpDate + " ETA: " + pickUpHour,
            returnOffice: booking.get("ReturnOffice"),
            returnTime: returnDate + " ETA: " + returnHour,
            bookingNumber: booking.get("BookingID"),
            fullName: booking.get("LastName") + ", " + booking.get("FirstName"),
            dateOfBirth: new Date(booking.get("DoB")).toISOString().slice(0,10), // for hours and minutes (slicing on characters from index 0 - 10)
            driversLicense: booking.get("DriversLicense"),
            //requestedCarGroup: booking.get("RequestedCarGroup"), //this won't work (only for show), but I still haven't found a solution for accessing the pointer values in the database
        }
    })

    return allBookingsFormatted
}