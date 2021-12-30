import Parse from "parse";

// Function generate X amount of cars for our table. Used for testing scaleability of our code.
// Could be improved by fecthing existing data to validate the mock data, but for now hardcoding the values once in array is good enough.

export default async function makeMockCars(numOfCars) {

  const colors = ["Black", "Red", "Silver", "Blue", "Green", "White", "Yellow", "Teal", "Grey", "Dark Grey"]
  const numberOfDoors = [5,3,5]
  const models = ["Renault Megane", "Peugeot 3008", "Subaru Outback", "Ford Edge", "Ford Focus", "Hyundai Sonata", "Volvo XC40","Renault Scenic", "Citroën C3", "Renault Captur","Skoda Fabia","Nissan Juke", "Kia Optima"]
  const carStates = ["Ready","Ready","Rented","Returned","Transfer", "Unavailable"]
  const locations = ["AAL","KRP","KST"]
  const carGroups = ["A", "A" ,"B","B", "C", "D", "E", "F", "G", "H", "I"];
  const fuelTypes = ["Petrol", "Petrol", "Diesel"]
  const charsForLicenseplate = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ');
  
  function randomInRage(min, max) { 
    return Math.floor(Math.random() * (max - min) + min )
  }
  function randomFromArray(array) { 
    return array[Math.floor(Math.random()*array.length)];
  }
  const decideColor = () =>{
    return randomFromArray(colors)
  }
  const decideFuelLevel = () =>{
    return randomInRage(95,100)
  }
  const decideFuelType = () => {
    return randomFromArray(fuelTypes)
  }
  const decideNumOfDoors = () =>{
    return randomFromArray(numberOfDoors)
  }
  const decideModel = () =>{
    return randomFromArray(models)
  }
  const decideCarState = () =>{
    return randomFromArray(carStates)
  }
  const decideLocation = () =>{
    return randomFromArray(locations)
  }
  const decideCarGroup = () =>{
    return randomFromArray(carGroups)
  }
  const decideMilage = () =>{
    return randomInRage(100,30000)
  }
  const decideLicenseplate = () =>{
    return randomFromArray(charsForLicenseplate)+randomFromArray(charsForLicenseplate) + " " + randomInRage(10,99) + " " + randomInRage(100,999)
  }
 /* for (let i = 0; i < numOfCars; i++) {
  console.log(decideModel(), decideCarGroup(), decideCarState(),decideColor(),decideLicenseplate(), decideLocation(),decideMilage(),decideNumOfDoors(),decideFuelLevel(),decideFuelType() );
  }*/

  const Car = Parse.Object.extend("Car");
  
  for (let i = 0; i < numOfCars; i++) {
    const car = new Car();
    car.set("Color", decideColor())
    car.set("NumberOfDoors", decideNumOfDoors())
    car.set("Model", decideModel())
    car.set("Mileage", decideMilage())
    car.set("FuelLevel", decideFuelLevel())
    car.set("FuelType", decideFuelType())
    car.set("LicensePlate", decideLicenseplate())
    car.set("Group", decideCarGroup())
    car.set("CarState", decideCarState())
    car.set("CurrentLocation", decideLocation())
    await car.save()
    console.log("Car " + (i+1) + " of " + numOfCars + " saved to database");
  }
  
}