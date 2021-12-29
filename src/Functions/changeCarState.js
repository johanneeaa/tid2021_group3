import Parse from "parse";

// Function to update a cars state, based on a desried toState and the ID of the car

export default async function changeCarState(toState ,idOfCar) {

  const carStates = ["Ready","Rented","Returned","Transfer", "Unavailable"] // should be a global stored  array of acceptable states, not locally.
  if (carStates.indexOf(toState) === -1){
      //if not valid
      console.log("invalid state for DB");
  }

  const Car = Parse.Object.extend("Car");
  const car = new Parse.Query(Car);
  
  await car.get(idOfCar).then((car) => { 
      //if success
    car.set("CarState", toState);
    car.save().then(
        () => alert("Succes! " + car.get("LicensePlate") + " is now checked out") + window.location.reload()
    ) 
  }, (error) =>{ 
      //if error
      console.log("error in changing state of " + idOfCar);
  })
 

}