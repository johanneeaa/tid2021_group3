import Parse from "parse";

const Customer = Parse.Object.extend("Customer");

/** Returns array of all customer objects from DB, built on Parse documentation: [ https://bit.ly/3zyu24n ] */
export default async function getAllCustomers() {
  const allCustomersQuery = new Parse.Query(Customer);
  const allCustomers = await allCustomersQuery.find().catch(error => {
    console.log(error);
  });

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
