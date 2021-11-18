import React from "react";
import makeData from "./Data/dataForTable";
import Table from "./Components/Table";

function App() {
  const rentalData = React.useMemo(() => makeData(30), []);

  const rentalColumns = React.useMemo(
    () => [
      { Header: "When", accessor: "pickupDateTime" },
      { Header: "ID", accessor: "bookingID" },
      { Header: "First name", accessor: "firstName" },
      { Header: "Last name", accessor: "lastName" },
      { Header: "Car Group", accessor: "carGroup" },
    ],
    []
  );

  return <Table columns={rentalColumns} data={rentalData}/>;
}

export default App;
