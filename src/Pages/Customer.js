import React, { useEffect, useState } from "react";
import getAllCustomers from "../Data/customerData";
import Table from "../Components/Table";
//import SelectColumnFilter from "../Components/Filters";

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([]);

  const customerColumns = React.useMemo(
    () => [
        
      { Header: "Name", accessor: "fullName" },
      { Header: "Last Booking", accessor: "lastBooking"},
      { Header: "Car Group", accessor: "lastCarGroup"},
      { Header: "Total Bookings", accessor: "totalBookings"},
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

  return <Table columns={customerColumns} data={customerData} color={"#B4C3F4"} />;
};

export default CustomerTable;
