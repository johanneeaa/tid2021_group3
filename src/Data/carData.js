import Parse from "parse";

const Car = Parse.Object.extend("Car");


export default async function getAllCars() {

    const allCarsQuery = new Parse.Query(Car);
    const allCars = await allCarsQuery.find();

    const allCarsFormatted = allCars.map((car) => {
        return {
            id: car.id,
            group: car.get('Group'),
            color: car.get("Color"),
            numberOfDoors: car.get('NumberOfDoors'),
            fuelLevel: car.get("FuelLevel"),
            fuelType: car.get("FuelType"),
            licensePlate: car.get("LicensePlate"),
            mileage: car.get("Mileage"),
            model: car.get("Model"),
            carSate: car.get("CarState"),
            currentLocation: car.get("CurrentLocation"),
            notes: car.get("Notes") ? car.get("Notes") : false,
            office: 'KST' //hardcoded, column does not currently exist in the database
        }
    })

    return allCarsFormatted
}