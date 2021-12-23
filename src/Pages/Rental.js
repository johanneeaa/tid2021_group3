import React, { useEffect, useState } from "react";
import getAllBookings from "../Data/rentalData";
import Table from "../Components/Table";
import SelectColumnFilter from "../Components/Filters";
//import createNewBooking from "../Functions/NewBooking";
import "./Rental.css";

const RentalTable = () => {
  const [rentalData, setRentalData] = useState([]);

  const rentalColumns = React.useMemo(
    () => [
      { Header: "Booking Number", accessor: "bookingNumber" },
      {
        Header: "Pick Up Office",
        accessor: "pickUpOffice",
        localFilter: true,
        disableGlobalFilter: true,
        Filter: SelectColumnFilter,
      },
      { Header: "Pick Up Date", accessor: "pickUpDate" },
      { Header: "Pick Up Time", accessor: "pickUpTime" },
      {
        Header: "Return Office",
        accessor: "returnOffice",
        localFilter: true,
        disableGlobalFilter: true,
        Filter: SelectColumnFilter,
      },
      { Header: "Return Date", accessor: "returnDate" },
      { Header: "Return Time", accessor: "returnTime" },
      { Header: "Customer Name", accessor: "fullName" },
      { Header: "Date of Birth", accessor: "dateOfBirth" },
      { Header: "Drivers License", accessor: "driversLicense" },
      { Header: "Requested Car Group", accessor: "reqCarGroup" },
    ],
    []
  );

  useEffect(() => {
    async function fetchData() {
      const rentalDataTemp = await getAllBookings();
      setRentalData(rentalDataTemp);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="bookingcontainer">
        <br />{" "}
        <div>
          <button
            className="createNewBookingButton"
            onClick={() =>{
              (window.location.href = "/newbooking")
            }} //this is making problems - maybe we can make a button component instead
          >
            {" "}
            Create new Booking
          </button>
          <br />
        </div>
      </div>
      <br />
      <Table columns={rentalColumns} data={rentalData} />
    </div>
  );
};

export default RentalTable;
