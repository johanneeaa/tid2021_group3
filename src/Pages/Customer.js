import React, { useEffect, useState } from "react";
import getAllCustomers from "../Data/customerData";
import Table from "../Components/Table";
import InputBox from "../Components/InputBox";
//import addRandomCustomer from "../Functions/NewCustomer";  //removed this, as we now have an inputform for customer
import './Customer.css';

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);

  const customerColumns = React.useMemo(
    () => [
        
      { Header: "Name", accessor: "fullName" },
      { Header: "E-Mail", accessor: "email"},
      { Header: "Car Group", accessor: "lastCarGroup"},
     // { Header: "Last Booking", accessor: "lastBooking"},
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
    <div className = "customercontainer">
      <br/> <button className = "larsButton" onClick={()=>{window.location.href = '/newbooking'}}> Add a new Customer</button>
      {/* <button className = "larsButton" onClick={()=>addRandomCustomer() }> Add a new Customer</button> */}<br/><InputBox/>
      <br/>
      </div>
      <br/>
      <Table columns={customerColumns} data={customerData} color={"#B4C3F4"} />
    </div>
  )
};

export default CustomerTable;
