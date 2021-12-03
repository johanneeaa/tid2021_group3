import React, { useEffect, useState } from "react";
import getAllBookings from "../Data/rentalData";
import Table from "../Components/Table";
// import SelectColumnFilter from "../Components/Filters";

const RentalTable = () => {

    const [rentalData, setRentalData] = useState([])

    const rentalColumns = React.useMemo(
    () => [
        
        { Header: "Booking Number", accessor: "bookingNumber"},
        { Header: "Pick Up Office", accessor: "pickUpOffice"}, //, localFilter: true, disableGlobalFilter: true, Filter: SelectColumnFilter},
        { Header: "Pick Up Time", accessor: "pickUpTime"},
        { Header: "Return Office", accessor: "returnOffice"}, //, localFilter: true, disableGlobalFilter: true, Filter: SelectColumnFilter},
        { Header: "Return Time", accessor: "returnTime"},
        { Header: "Customer Name", accessor: "fullName"},
        { Header: "Date of Birth", accessor: "dateOfBirth"},
        { Header: "Drivers License", accessor: "driversLicense"},
        //{ Header: "Requested Car Group", accessor: "requestedCarGroup"},
        ],
        []
    );

    useEffect(async () => {
        const rentalDataTemp = await getAllBookings()
        setRentalData(rentalDataTemp)
    },[])

    return <Table columns={rentalColumns} data={rentalData} color={"#F7E8A4"}/>
};

export default RentalTable