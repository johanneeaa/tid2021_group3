import React, { useEffect, useState } from "react";
import getAllCustomers from "../Data/customerData";
import Table from "../Components/Table";
import addRandomCustomer from "../Functions/createRandomCustomer"
import "./Customer.css";
import Footer from "../Components/Footer";
import DefaultButton from "../Components/Button";

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);

  const customerColumns = React.useMemo(
    () => [
      { Header: "Name", accessor: "fullName" },
      { Header: "E-Mail", accessor: "email" },
      { Header: "Latest Car Group", accessor: "lastCarGroup" },
      // { Header: "Last Booking", accessor: "lastBooking"},  //functionality that would be nice to implement at a later stage
      { Header: "Total Bookings", accessor: "totalBookings" },
      { Header: "Internal ID", accessor: "id",  }, //we need to have this visible in order to DELETE customer
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
      <DefaultButton
        className="newButton"
        onClick={() => {
          window.location.href = "/newbooking";
        }}
      >
        {" "}
        Add a new Customer
      </DefaultButton>
      <DefaultButton className = "generateNewCustomer" onClick={()=>addRandomCustomer() }> Auto-generate a new Customer</DefaultButton><br/>
      <Table columns={customerColumns} data={customerData} color={"#B4C3F4"} page={"customer"} />
      <Footer />
    </div>
  );
};

export default CustomerTable;
