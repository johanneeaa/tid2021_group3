//import { useEffect, useState } from "react";
import Parse from "parse";

const Car = Parse.Object.extend("Car");


export default function Cars() {

    const query = new Parse.Query(Car);

    const getCarID = () =>{
        query.find().then(clickedCar => {    
            return clickedCar.id 
        })
    }
    
    query.get(getCarID).then((specificCar) => {
        
        const color = specificCar.get("Color")
        
        console.log("id number " + specificCar.id + " has the color " + color);
    }, (error) => {
        console.log({error} + 'Cant get specific car');
        // error is a Parse.Error with an error code and message.
    });
    
    const carsss = getAllCars()

    console.log(carsss)


    return <>The cars tabbed is here</>
}


async function getAllCars() {

    const allCarsQuery = new Parse.Query(Car);
    const allCars = await allCarsQuery.find();

    console.log(allCars)


    for (let i = 0; i < allCars.length; i++) {
        const car = allCars[i]

        var id =            car.id
        var carGroup =      car.get("CarGroup") //Car group is another object, so this doesn't return correctly.
        var color =         car.get("Color")
        var fuelLevel =     car.get("FuelLevel")
        var fuelType =      car.get("FuelType")
        var licensePlate =  car.get("LicensePlate")
        var mileage =       car.get("Mileage")
        var model =         car.get("Model")
        var notes =         car.get("Notes")
        
        console.log("Car with id \"" + id + "\" has the following attributes: \n Cargroup = " + carGroup + " \n Color = " + color + " \n Fuel level = " + fuelLevel + " \n Fuel type = " + fuelType + " \n License plate = " + licensePlate + " \n Milage = " + mileage + " \n Model = " + model)

        if (notes != "undefined") {
            console.log(notes)
        }


    }



}


