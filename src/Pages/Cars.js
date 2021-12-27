import React, { useEffect, useState } from "react";
import Table from "../Components/Table";
import SelectColumnFilter from "../Components/Filters";
import getAllCars from "../Data/carData";
import Footer from "../Components/Footer";

// Our page for overview of cars. Returns a table with columns matching the ones from backend.
// Calls getAllCars() from "../Data/carData" to retreive the data from backend, which is mapped into the table.
// no "fake" data (hurray!)

const CarTable = () => {
  const [carsData, setCarsData] = useState([]);

  const carsColumns = React.useMemo(
    () => [
      {
        Header: "Car Group",
        accessor: "group",
        localFilter: true,
        disableGlobalFilter: true,
        Filter: SelectColumnFilter,
      },
      { Header: "License plate", accessor: "licensePlate" },
      { Header: "Model", accessor: "model" },
      {
        Header: "Color",
        accessor: "color",
        localFilter: true,
        disableGlobalFilter: true,
        Filter: SelectColumnFilter,
      },
      { Header: "No. of doors", accessor: "numberOfDoors" },
      { Header: "Mileage in KM", accessor: "mileage" },
      { Header: "Fuel level", accessor: "fuelLevel" },
      {
        Header: "Fuel type",
        accessor: "fuelType",
        localFilter: true,
        disableGlobalFilter: true,
        Filter: SelectColumnFilter,
      },
      { Header: "Notes", accessor: "notes" },
    ],
    []
  );

  useEffect(() => {
    async function fetchData() {
      const carsDataTemp = await getAllCars();
      setCarsData(carsDataTemp);
    }
    fetchData();
  }, []);

  //look into adding "loading" on while waiting for data, see this stackoverflow for how-to: [ https://bit.ly/3xt3IaZ ]

  return (
    <div>
      <Table columns={carsColumns} data={carsData} />
      <Footer />
    </div>
  );
};

export default CarTable;
