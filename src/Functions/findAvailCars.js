import Parse from "parse";
import Table from "../Components/Table";

// fucntion design to find the available cars based on current location and desired car group
// based on Parse documentation [ https://bit.ly/3piE9GO ]

export default async function findAvailCars(location, carGroup) {

    const IDsOfReadyCars=[]

    const Car = Parse.Object.extend("Car");
    const query = new Parse.Query(Car);

    query.equalTo("CurrentLocation", location);
    query.equalTo("Group", carGroup);

    query.equalTo("CarState", "Ready");

    const carsAtLocation = await query.find()

    for (let i = 0; i < carsAtLocation.length; i++) {
        const object = carsAtLocation[i];
        IDsOfReadyCars.push(object.id)
        console.log(object.get('LicensePlate') +' '+ object.get('CarState'));
    }
    console.log(IDsOfReadyCars);

  return carsAtLocation

}