import React, { useEffect, useState } from "react";
import Table from "./Components/Table";
import Parse from "parse";

const Car = Parse.Object.extend("Car");


export default () => {
    
    const [carsData, setCarsData] = useState([])
    
    //Missing carGroup for now
    const carsColumns = React.useMemo(
        () => [
            { Header: "ID", accessor: "id" },
            { Header: "Color", accessor: "color" },
            { Header: "Fuel level", accessor: "fuelLevel" },
            { Header: "Fuel type", accessor: "fuelType"},
            { Header: "License plate", accessor: "carGroup"},
            { Header: "Mileage", accessor: "mileage"},
            { Header: "Model", accessor: "model"},
            { Header: "Notes", accessor: "notes"}
            // we create the "localFilter" boolean to make sure only that column gets a Filter on top, as the other gets global"
        ],
        []
    );
        
    useEffect( async () => {
        const carsDataTemp = await getAllCars()
        setCarsData(carsDataTemp)
    },[])

    
    return <Table columns={carsColumns} data={carsData} color={"#a4f7ae"}/>
}


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



