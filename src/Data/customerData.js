import Parse from "parse";

const Customer = Parse.Object.extend("Customer");

export default async function getAllCustomers() {
  
    const allCustomersQuery = new Parse.Query(Customer);
    const allCustomers = await allCustomersQuery.find();
    //from Sara: I know your code is in sync with the lecture slides, but question to consider:
    //What happens if find() fails? Or if the returned array is empty? Are you handling this?

    const allCustomersFormatted = allCustomers.map((customer) => {
      return {
        id: customer.id,
        fullName: customer.get("LastName") + ", " + customer.get("FirstName"),
        lastBooking: customer.get("LatestBooking"),
        email: customer.get("Email"),
        lastCarGroup: customer.get("LatestCarGroup"),
        totalBookings: customer.get("TotalBookings"),
      };
    });

    return allCustomersFormatted;
}
