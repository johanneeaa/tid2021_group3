import Parse from "parse";

// Function to populate newly created "CarState" and "Location" column in back4app instead of hardcoding it.
// Not used after first use

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
    cars[i].save()
 
  }

  window.location.reload(false);
}