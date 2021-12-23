import React, { useEffect, useState } from "react";
import getAllCustomers from "../Data/customerData";
import Table from "../Components/Table";
import addRandomCustomer from "../Functions/NewCustomer";
import './Customer.css';

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);

  const customerColumns = React.useMemo(
    () => [
        
      { Header: "Name", accessor: "fullName" },
      { Header: "E-Mail", accessor: "email"},
      { Header: "Car Group", accessor: "lastCarGroup"},
      { Header: "Total Bookings", accessor: "totalBookings"},
      { Header: "Internal ID", accessor : "id"}
    ],
    []
  );

  useEffect(() => {
        async function fetchData() {
          const customerDataTemp = await getAllCustomers();
          setCustomerData(customerDataTemp);
        }
        fetchData();
    },[])

  return (
    <div>
    <div className = "customercontainer"/>
      <Table columns={customerColumns} data={customerData} color={"#B4C3F4"} page={"customer"} />
      <button className = "larsButton" onClick={()=>addRandomCustomer() }> Developer: Add a new Customer</button><br/>
    </div>
  )
};

export default CustomerTable;
