import BookingForm from "../Components/BookingForm";

function CreateBooking() {

    return (
    <div>
    <BookingForm>Create New Booking</BookingForm>
    <button className = "cancelButton" onClick={window.location.href = '/rental'}> Return to Rental overview</button><br/>
    </div>
    )
}

export default CreateBooking;
