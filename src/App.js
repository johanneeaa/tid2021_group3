import React from "react";
import makeData from "./Data/dataForTable";
import Table from "./Components/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar";
import Cars from "./Cars";
import SelectColumnFilter from "./Components/Filters";

// functions marked # are snippets from https://react-table.tanstack.com/docs/examples/filtering without modifications
// functions marked ## are snippets with our own modifications
// functions marked ### are OC 

function App() { // ###
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
}

export default App;
