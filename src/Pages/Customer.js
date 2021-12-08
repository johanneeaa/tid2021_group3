import React, { useEffect, useState } from "react";
import getAllCustomers from "../Data/customerData";
import Table from "../Components/Table";
import InputBox from "../Components/InputBox";
import addALars from "../Functions/NewCostumer";
import './Customer.css';

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);

  const customerColumns = React.useMemo(
    () => [
        
      { Header: "Name", accessor: "fullName" },
      { Header: "E-Mail", accessor: "email"},
      { Header: "Car Group", accessor: "lastCarGroup"},
      { Header: "Last Booking", accessor: "lastBooking"},
      { Header: "Total Bookings", accessor: "totalBookings"},
      //{ Header: "Internal ID", accessor : "id"} - //keeping this hidden to protect the database, the delete functionality works if we take the objectID from the database
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
    <div className = "customercontainer">
      <br/>
      <button className = "larsButton" onClick={()=>addALars() }> Add a new "Lars" costumer</button><br/><InputBox/>
      <br/>
      </div>
      <br/>
      <Table columns={customerColumns} data={customerData} color={"#B4C3F4"} />
    </div>
  )
};

export default CustomerTable;
