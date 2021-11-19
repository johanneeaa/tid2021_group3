import React from "react";
import makeData from "./Data/dataForTable";
import Table from "./Components/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar";
import Cars from "./Cars";

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
  return (
    <>
    <NavigationBar />

      <BrowserRouter>
        <Routes>
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </BrowserRouter>


    <Table columns={rentalColumns} data={rentalData} />;
  </>
  );

  return <Table columns={rentalColumns} data={rentalData} />;
}

export default App;
