import Parse from "parse";

const Car = Parse.Object.extend("Car");


export default async function getAllCars() {
  const allCarsQuery = new Parse.Query(Car);
  const allCars = await allCarsQuery.find();
  //from Sara: I know your code is in sync with the lecture slides, but question to consider:
  //What happens if find() fails? Or if the returned array is empty? Are you handling this?

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
