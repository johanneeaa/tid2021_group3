import React, { useEffect, useState } from "react";
import Table from "./Components/Table";
import Parse from "parse";

const Car = Parse.Object.extend("Car");
const CarGroups = Parse.Object.extend("CarGroups");


export default () => {
    
    const [carsData, setCarsData] = useState([])
    const [carGroupsData, setCarGroupsData] = useState([]) //adding the carGroups data

    //Missing carGroup for now
    const carsColumns = React.useMemo(
        () => [
            
            //{ Header: "ID", accessor: "id" },
            { Header: "Car Group", acessor: "carGroup"},
            { Header: "License plate", accessor: "licensePlate"},
            { Header: "Model", accessor: "model"},
            { Header: "Color", accessor: "color" },
            { Header: "No. of doors", accessor: "numberOfDoors"}, //added number of doors (according to assignment description)
            { Header: "Notes", accessor: "notes"},
            { Header: "Fuel level", accessor: "fuelLevel" },
            { Header: "Fuel type", accessor: "fuelType"},
            { Header: "Mileage in KM", accessor: "mileage"},
            // we create the "localFilter" boolean to make sure only that column gets a Filter on top, as the other gets global"
        ],
        []
    );
        
    useEffect(async () => {
        const carsDataTemp = await getAllCars()
        setCarsData(carsDataTemp)
    },[])

    //adding the carGroups data
    useEffect(async () => {
        const carGroupsDataTemp = await getCarGroups()
        setCarGroupsData(carGroupsDataTemp)
    },[])

    return <Table columns={carsColumns} data={carsData} color={"#a4f7ae"}/>
}

//adding the carGroups data from the relational database
async function getCarGroups() {

    const CarGroupsQuery = new Parse.Query(CarGroups);
    const allCarGroups = await CarGroupsQuery.find();

    const allCarGroupsFormatted = allCarGroups.map((carGroups) => {
        return {
            id: carGroups.id,
            groupID: carGroups.get("GroupID"),
            carRelations: carGroups.get("Cars")
        }
    })

    return allCarGroupsFormatted
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
            carGroup: car.get('CarGroup'),
            fuelLevel: car.get('FuelLevel'),
            fuelType: car.get('FuelType'),
            licensePlate: car.get('LicensePlate'),
            mileage: car.get('Mileage'),
            model: car.get('Model'),
            notes: car.get('Notes') ? car.get("Notes") : false
        }   
    })

    //console.log(Car.get({ "__type": "Pointer", "className": "1VdPsWWYFZ", "objectId": "car.id"}));

    return allCarsFormatted
}

