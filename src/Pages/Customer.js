import React, { useEffect, useState } from "react";
import getAllCustomers from "../Data/customerData";
import Table from "../Components/Table";
import "./Styling/Customer.css";
import Footer from "../Components/Footer";
import DefaultButton from "../Components/Button";

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);

  const customerColumns = React.useMemo(
    () => [
      { Header: "Name", accessor: "fullName" },
      { Header: "E-Mail", accessor: "email" },
      { Header: "Latest Car Group", accessor: "lastCarGroup" },
      { Header: "Total Bookings", accessor: "totalBookings" },
      { Header: "Internal ID", accessor: "id",  }, //we need to have this visible in order to DELETE customer
    ],
    []
  );

  const newCustText = "New Customer";

  useEffect(() => {
    async function fetchData() {
      const customerDataTemp = await getAllCustomers();
      setCustomerData(customerDataTemp);
    }
    fetchData();
  }, []);

  return (
    <div>     
      <Table columns={customerColumns} data={customerData} color={"#B4C3F4"} page={"customer"} />
      <Footer/>
      <DefaultButton onClick={() => {
          window.location.href = "/newbooking";
        }}
        buttonText = {newCustText}
      />
    </div>
  );
};

export default CustomerTable;
