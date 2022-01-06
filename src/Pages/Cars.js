import React, { useEffect, useState } from "react";
import Table from "../Components/Table";
import SelectColumnFilter from "../Components/Filters";
import getAllCars from "../Data/carData";
import setRandomCarProps from "../Functions/assignRandomCarParams";
import makeMockCars from "../Data/mockCarData";
import Footer from "../Components/Footer";


// Our page for overview of cars. Returns a table with columns matching the ones from backend.
// Calls getAllCars() from "../Data/carData" to retreive the data from backend, which is mapped into the table.
// no "fake" data (hurray!)

const CarTable = () => {
    
    const [carsData, setCarsData] = useState([])
    

    // order is important for the user!
    const carsColumns = React.useMemo(
        () => [
            { Header: "Car Group", accessor: "group", localFilter: true, disableGlobalFilter: true, Filter: SelectColumnFilter},
            { Header: "Location", accessor: "currentLocation",localFilter: true,  Filter: SelectColumnFilter}, 

            { Header: "State", accessor: "currentState",getProps: (state,cellInfo, cell) =>{return {style:{ background: "blue"}}},
            localFilter: true,  Filter: SelectColumnFilter}, 

            { Header: "Model", accessor: "model"},
            { Header: "Color", accessor: "color", localFilter: true, disableGlobalFilter: true, Filter: SelectColumnFilter}, 
            { Header: "No. of doors", accessor: "numberOfDoors"}, 
            { Header: "Mileage in KM", accessor: "mileage"},
            { Header: "License plate", accessor: "licensePlate"},
            { Header: "Fuel level", accessor: "fuelLevel" },
            { Header: "Fuel type", accessor: "fuelType", localFilter: true, disableGlobalFilter: true, Filter: SelectColumnFilter},
            { Header: "Notes", accessor: "notes", }, 
        ],
        []
    );
        
    useEffect(() => {
        async function fetchData() {
            const carsDataTemp = await getAllCars()
            setCarsData(carsDataTemp)
        }
        fetchData();
    },[])
    
    //look into adding "loading" on while waiting for data, see this stackoverflow for how-to: [ https://bit.ly/3xt3IaZ

    return (
        <div>
        <Table columns={carsColumns} data={carsData}/>
        <Footer/>
        {/* Buttons for testing purposes, disabled for final delivery
        <button className = "larsButton" onClick={()=>setRandomCarProps() }> For testing: Generate carStates & location to DB </button>
        <button className = "larsButton" onClick={()=>makeMockCars(1) }> For testing: Make mock cars to DB </button>
        */}
        </div>
    )
};

export default CarTable;
