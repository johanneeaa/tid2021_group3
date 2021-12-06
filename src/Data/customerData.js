import Parse from "parse";

const Customer = Parse.Object.extend("Customer");

export default async function getAllCustomers() {

    const allCustomersQuery = new Parse.Query(Customer);
    const allCustomers = await allCustomersQuery.find();

    const allCustomersFormatted = allCustomers.map((customer) => {
        return {
            id: customer.id,
            fullName: customer.get('LastName') + ", " + customer.get('FirstName'),
            lastBooking: customer.get('LatestBooking'),
            lastCarGroup: customer.get("LatestCarGroup"),
            totalBookings: customer.get('TotalBookings'),
        }
    })

    return allCustomersFormatted
}