import Parse from "parse";

// function design to find the available cars based on a location and a desired car group

/** 
returns array of car objects with desired location and cargroup
based on Parse documentation [ https://bit.ly/3piE9GO ] */
export default async function findAvailCars(location, carGroup) {

    const IDsOfReadyCars=[]

    const Car = Parse.Object.extend("Car");
    const query = new Parse.Query(Car).limit(200); //settng new limit for query, as defult is limited to 100
    

    query.equalTo("CurrentLocation", location);
    query.equalTo("CarState", "Ready");
    
    if (carGroup !== ""){  //not currently used, but was intended for if we want to check out a car in a different car group (e.i. upgrade in the check out process)
      query.equalTo("Group", carGroup);
    }

    const carsAtLocation = await query.find().catch(error => {
      console.log("error: "+ error +" ccoured in finding cars at location");
    });
    
    for (let i = 0; i < carsAtLocation.length; i++) {  //not currently used
        const object = carsAtLocation[i];
        IDsOfReadyCars.push(object.id)
    }

    const carsFoundMapped = query.map((car)=>{
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

  return carsFoundMapped

}