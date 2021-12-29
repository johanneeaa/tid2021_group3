import Parse from "parse";

// 

export default async function changeCarState(toState ,idOfCar) {



  const carStates = ["Ready","Rented","Returned","Transfer", "Unavailable"]
  if (carStates.indexOf(toState) === -1){
      //if not valid
  }

  const Car = Parse.Object.extend("Car");
  const car = new Parse.Query(Car);
  
  await car.get(idOfCar).then((car) => { 
      //if success
    car.set("CarState", toState);
    car.save().then(
        () => window.location.reload()
    ) 
  }, (error) =>{ 
      //if error
      console.log("error in changing state of " + idOfCar);
  })
 

}