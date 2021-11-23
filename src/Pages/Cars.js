import React, { useEffect, useState } from "react";
import Table from "../Components/Table";
import SelectColumnFilter from "../Components/Filters";
import Parse from "parse";

const Car = Parse.Object.extend("Car");

//look into adding "loading" on while waiting for data, see this stackoverflow: [ https://bit.ly/3xt3IaZ ]

//function that returns a car searchable, filterable table, based on our database (hurray!) 
//- we should work towards seperating the data from the table component
export default () => {
    
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
            { Header: "Notes", accessor: "notes"} 
        ],
        []
    );
        
    useEffect( async () => {
        const carsDataTemp = await getAllCars()
        setCarsData(carsDataTemp)
    },[])

    
    return <Table columns={carsColumns} data={carsData} color={"#a4f7ae"}/>
};

async function getAllCars() {

    const allCarsQuery = new Parse.Query(Car);
    const allCars = await allCarsQuery.find();

    const allCarsFormatted = allCars.map((car) => {
        return {
            id: car.id,
            color: car.get("Color"),
            fuelLevel: car.get("FuelLevel"),
            fuelType: car.get("FuelType"),
            licensePlate: car.get("LicensePlate"),
            mileage: car.get("Mileage"),
            model: car.get("Model"),
            notes: car.get("Notes") ? car.get("Notes") : false
        }
    })

    return allCarsFormatted

}



