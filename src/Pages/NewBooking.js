import BookingForm from "../Components/BookingForm";
import CustomerForm from "../Components/CustomerForm";

function CreateBooking() {

    return (
    <div>
    <BookingForm>Create New Booking</BookingForm>
    <CustomerForm>Create New Customer</CustomerForm>
    <button className = "cancelButton" /* onClick={window.location.href = '/rental'} */> Return to Rental overview</button><br/>
    </div>
    )
}

export default CreateBooking;
