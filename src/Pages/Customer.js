import React, { useEffect, useState } from "react";
import getAllCustomers from "../Data/customerData";
import Table from "../Components/Table";
import InputBox from "../Components/InputBox";
import addALars from "../Functions/NewCostumer";
//import SelectColumnFilter from "../Components/Filters";

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);

  const customerColumns = React.useMemo(
    () => [
        
      { Header: "Name", accessor: "fullName" },
      { Header: "E-Mail", accessor: "email"},
      { Header: "Car Group", accessor: "lastCarGroup"},
      { Header: "Last Booking", accessor: "lastBooking"},
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
      <Table columns={customerColumns} data={customerData} color={"#B4C3F4"} />
      <button onClick={()=>addALars() }> For Testing: Add new "Lars" costumer</button><br/>
      <InputBox/>
    </div>
  )
};

export default CustomerTable;
