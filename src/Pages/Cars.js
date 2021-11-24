import React, { useEffect, useState } from "react";
import Table from "../Components/Table";
import SelectColumnFilter from "../Components/Filters";
import getAllCars from "../Data/carData";

// Our page for overview of cars. Returns a table with columns matching the ones from backend. 
// Calls getAllCars() from "../Data/carData" to retreive the data from backend, which is mapped into the table.
// no "fake" data (hurray!) 

const CarTable = () => {
    
    const [carsData, setCarsData] = useState([])
    
    //Missing carGroup for now
    const carsColumns = React.useMemo(
        () => [
            { Header: "ID", accessor: "id" },
            { Header: "Model", accessor: "model"},
            { Header: "Color", accessor: "color", localFilter: true, disableGlobalFilter: true, Filter: SelectColumnFilter}, 
        // maybe we need the filters to be multiple checkboxes if you want to search more than one color at once?
        //  { Header: "License plate", accessor: "carGroup"}, // no data on theese yet
            { Header: "Mileage", accessor: "mileage"},
            { Header: "Fuel level", accessor: "fuelLevel" },
            { Header: "Fuel type", accessor: "fuelType", localFilter: true, disableGlobalFilter: true, Filter: SelectColumnFilter},
            { Header: "Notes", accessor: "notes", } 
        ],
        []
    );
        
    useEffect(async () => {
        const carsDataTemp = await getAllCars()
        setCarsData(carsDataTemp)
    },[])
    //look into adding "loading" on while waiting for data, see this stackoverflow for how-to: [ https://bit.ly/3xt3IaZ ]
    
    return <Table columns={carsColumns} data={carsData} color={"#a4f7ae"}/>
};

export default CarTable


