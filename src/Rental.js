import React from "react";

import makeData from "./Data/dataForTable";
import Table from "./Components/Table";
import SelectColumnFilter from "./Components/Filters";


const RentalTable = () => {

    const rentalData = React.useMemo(() => makeData(30), []);

    const rentalColumns = React.useMemo(
    () => [
        { Header: "When", accessor: "pickupDateTime" },
        { Header: "ID", accessor: "bookingID" },
        { Header: "First name", accessor: "firstName" },
        { Header: "Last name", accessor: "lastName", },
        { Header: "Car Group", accessor: "carGroup", localFilter: true, disableGlobalFilter: true, Filter: SelectColumnFilter},
        // we create the "localFilter" boolean to make sure only that column gets a Filter on top, as the other gets global"
        ],
        []
    );

    return <Table columns={rentalColumns} data={rentalData} color={"#F7E8A4"}/>
}


export default RentalTable