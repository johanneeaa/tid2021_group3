import BookingForm from "../Components/BookingForm";
import CustomerForm from "../Components/CustomerForm";

function CreateBooking() {
  return (
    <div>
      <button className = "returnButton" onClick={() => { window.location.href = '/rental'}} > Return to Rental overview</button><br/>
      <BookingForm>Create New Booking</BookingForm>
      <CustomerForm>Create New Customer</CustomerForm>
      
    </div>
  );
}

export default CreateBooking;
