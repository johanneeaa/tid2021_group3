import BookingForm from "../Components/BookingForm";
import CustomerForm from "../Components/CustomerForm"; 

//preferably we can move CustomerForm into a pop-up component, which can then be called on both CustomerPage and via the button on 'Create new Booking'
//temporary page to view forms - in Figma we have 'create booking' as its own window, perhaps we should keep it that way? b

function CreateBooking() {
  return (
    <div>
      <BookingForm>Create New Booking</BookingForm>
      <CustomerForm>Create New Customer</CustomerForm>
    </div>
  );
}

export default CreateBooking;
