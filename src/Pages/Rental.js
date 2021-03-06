import React, { useEffect, useState } from "react";
import getAllBookings from "../Data/rentalData";
import Table from "../Components/Table";
import SelectColumnFilter from "../Components/Filters";
import "./Styling/Rental.css";
import Footer from "../Components/Footer";
import DefaultButton from "../Components/Button";

/** Returns a table of upcoming rentals along with a button leading to "create new booking" and a footer. */
const RentalTable = () => {

  const [rentalData, setRentalData] = useState([]);

  // useMemo is used, as it is required later on for useTable not to keep re-rendering, documentation: [ https://bit.ly/3HF73r3 ]
  const rentalColumns = React.useMemo(
    () => [
      { Header: "Booking Number", accessor: "bookingNumber" },
      { Header: "Pick Up Office",
        accessor: "pickUpOffice",
        localFilter: true,
        disableGlobalFilter: true,
        Filter: SelectColumnFilter,},
      { Header: "Pick Up Date", accessor: "pickUpDate" },
      { Header: "Pick Up Time", accessor: "pickUpTime" },
      { Header: "Return Office",
        accessor: "returnOffice",
        localFilter: true,
        disableGlobalFilter: true,
        Filter: SelectColumnFilter,},
      { Header: "Return Date", accessor: "returnDate" },
      { Header: "Return Time", accessor: "returnTime" },
      { Header: "Customer Name", accessor: "fullName" },
      { Header: "Birth Year", accessor: "dateOfBirth"},
      { Header: "Drivers License", accessor: "driversLicense" },
      { Header: "Req. Car Group", accessor: "reqCarGroup" },
    ],[]
    
  );

  useEffect(() => {
    async function fetchData() {
      const rentalDataTemp = await getAllBookings();
      setRentalData(rentalDataTemp);
    }
    fetchData();
  }, []);

  const btnText = "New Booking";

  return (
    <div>   
      <Table columns={rentalColumns} data={rentalData} page={"rental"}/>
      <Footer/>
      <DefaultButton onClick={() => {window.location.href = "/newbooking";}} buttonText = {btnText}/>
    </div>
  );
};

export default RentalTable;
