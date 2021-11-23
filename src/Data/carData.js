import React, { useEffect, useState } from "react";
import Table from "../Components/Table";
import SelectColumnFilter from "../Components/Filters";
import Parse from "parse";

const Car = Parse.Object.extend("Car");

export default async function getAllCars() {

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