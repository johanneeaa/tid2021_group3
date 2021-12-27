import React, { useEffect, useState } from "react";
import getAllCustomers from "../Data/customerData";
import Table from "../Components/Table";
import addRandomCustomer from "../Functions/newCustomer"
import "./Customer.css";
import Footer from "../Components/Footer";

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);

  const customerColumns = React.useMemo(
    () => [
      { Header: "Name", accessor: "fullName" },
      { Header: "E-Mail", accessor: "email" },
      { Header: "Car Group", accessor: "lastCarGroup" },
      // { Header: "Last Booking", accessor: "lastBooking"},
      { Header: "Total Bookings", accessor: "totalBookings" },
      { Header: "Internal ID", accessor: "id" },
    ],
    []
  );

  useEffect(() => {
    async function fetchData() {
      const customerDataTemp = await getAllCustomers();
      setCustomerData(customerDataTemp);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="topLinecontainer">
        <br />{" "}
      </div>
      <button
        className="newButton"
        onClick={() => {
          window.location.href = "/newbooking";
        }}
      >
        {" "}
        Add a new Customer
      </button>
      <button className = "generateNewCustomer" onClick={()=>addRandomCustomer() }> Auto-generate a new Customer</button><br/>
      <Table columns={customerColumns} data={customerData} color={"#B4C3F4"} page={"customer"} />
      <Footer />
    </div>
  );
};

export default CustomerTable;
