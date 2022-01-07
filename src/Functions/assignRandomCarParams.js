import Parse from "parse";

// DISABLED DECEMBER 2021 by LACL/LPJC
// Function to populate newly created "CarState" and "Location" column in back4app instead of hardcoding values.

/** Function that assigns random states and loacitons to cars in the DB, favours "ready" car state */
export default async function setRandomCarProps() {

  const carStates = ["Ready","Ready","Rented","Returned","Transfer", "Unavailable"]
  const locations = ["AAL","KRP","KST"]

  const decideCarState = () =>{
    function simpleWeightedRandom(min, max) { // from stackoverflow [https://bit.ly/3EhaYbu]
      return Math.floor(max / (Math.random() * max + min));
    }
    return carStates[simpleWeightedRandom(1,6)]
  }

  const randomLocation = () =>{
    return locations[Math.floor(Math.random()*locations.length)];
  }

  const Car = Parse.Object.extend("Car");
  const car = new Parse.Query(Car);
  
  var cars= await car.find();

  for (var i = 0; i < cars.length; i++) {
    cars[i].set("CarState", decideCarState());
    cars[i].set("CurrentLocation", randomLocation());
    
    console.log(cars[i].get("CarState"));
    await cars[i].save()
  }

  window.location.reload(false);
}