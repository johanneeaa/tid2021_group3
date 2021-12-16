
import Parse from "parse";

const Booking = Parse.Object.extend("Booking");

export default async function getAllBookings() {

    const allBookingsQuery = new Parse.Query(Booking);
    const allBookings = await allBookingsQuery.find();

    const allBookingsFormatted = allBookings.map((booking) => {

        const pickUpDate = new Date(booking.get("PickUpTime")).toISOString().slice(5,10); // for hours and minutes (slicing on characters from index 0 - 10)
        const pickUpTime = new Date(booking.get("PickUpTime")).toISOString().slice(11,16); // for hours and minutes (slicing on characters from index 0 - 10)

        const returnDate = new Date(booking.get("ReturnTime")).toISOString().slice(5,10);
        const returnTime = new Date(booking.get("ReturnTime")).toISOString().slice(11,16);

        const dob = new Date(booking.get("DoB")).toISOString().slice(0,10);


        return {
            id: booking.id,
            pickUpOffice: booking.get("PickUpOffice"),
            pickUpDate:pickUpDate,
            pickUpTime: pickUpTime,
            returnOffice: booking.get("ReturnOffice"),
            returnDate: returnDate,
            returnTime: returnTime,
            bookingNumber: booking.get("BookingID"),
            fullName: booking.get("LastName") + ", " + booking.get("FirstName"),
            dateOfBirth: dob,
            driversLicense: booking.get("DriversLicense"),
            reqCarGroup: booking.get("ReqCarGroup"),
        }
    })

    return allBookingsFormatted
}