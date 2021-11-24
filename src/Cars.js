import React, { useEffect, useState } from "react";
import Table from "./Components/Table";
import Parse from "parse";
import SelectColumnFilter from "./Components/Filters";

export default () => {
    
    const [carsData, setCarsData] = useState([])

    const carsColumns = React.useMemo(
        () => [
            
            { Header: "Car Group", accessor: "group", localFilter: true, disableGlobalFilter: true, Filter: SelectColumnFilter}, // we create the "localFilter" boolean to make sure only that column gets a Filter on top, as the other gets global"
            { Header: "License plate", accessor: "licensePlate"},
            { Header: "Model", accessor: "model"},
            { Header: "Color", accessor: "color" },
            { Header: "No. of doors", accessor: "numberOfDoors"}, //added number of doors (according to assignment description)
            { Header: "Notes", accessor: "notes"},
            { Header: "Fuel level", accessor: "fuelLevel" },
            { Header: "Fuel type", accessor: "fuelType"},
            { Header: "Mileage in KM", accessor: "mileage"},
            
        ],
        []
    );
        
    useEffect(async () => {
        const carsDataTemp = await getAllCars()
        setCarsData(carsDataTemp)
    },[])

    return <Table columns={carsColumns} data={carsData} color={"#a4f7ae"}/>
}

async function getAllCars() {
    const Car = Parse.Object.extend('Car');
    const allCarsQuery = new Parse.Query(Car);
    const allCars = await allCarsQuery.find();
   
    const allCarsFormatted = allCars.map((car) => {
        return {
            id: car.id,
            color: car.get('Color'),
            numberOfDoors: car.get('NumberOfDoors'), //added
            group: car.get('Group'), //added
            fuelLevel: car.get('FuelLevel'),
            fuelType: car.get('FuelType'),
            licensePlate: car.get('LicensePlate'),
            mileage: car.get('Mileage'),
            model: car.get('Model'),
            notes: car.get('Notes') ? car.get("Notes") : false
        }   
    })

    return allCarsFormatted
}

