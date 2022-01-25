import Parse from "parse";

const Car = Parse.Object.extend("Car");

/** Returns array of all car objects from DB, built on Parse documentation: [ https://bit.ly/3zyu24n ] */
export default async function getAllCars() {
  const allCarsQuery = new Parse.Query(Car).limit(200);  //changed the limit to 200, default is set to 100 for query
  const allCars = await allCarsQuery.find().catch(error => {
    console.log(error);
  });

    const allCarsFormatted = allCars.map((car) => {
        return {
            id: car.id,
            currentState: car.get('CarState'),
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
        }
    })

    return allCarsFormatted
}
