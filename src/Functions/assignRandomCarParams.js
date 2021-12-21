import getAllCars from "../Data/carData"
import Parse from "parse";
import React, { useEffect, useState } from "react";


export default async function getCars() {
  
  const allCarsObject = await getAllCars()
  const carStates = ["Ready","Rented","Returned","Transfer", "Unavailable"]
  const allCarsIDs = []

  for (let i = 0; i < allCarsObject.length; i++) {
    allCarsIDs.push(allCarsObject[i].id)
  }

  const decideCarState = () =>{
    function simpleWeightedRandom(min, max) { // from stackoverflow [https://bit.ly/3EhaYbu]
      return Math.floor(max / (Math.random() * max + min));
    }
    return carStates[simpleWeightedRandom(1,5)]
  }

  for (let i = 0; i < allCarsIDs.length; i++) {
    console.log(allCarsIDs[i] + " "+ i);
    
  }


}

// Could make this function by maths and weighted distribution, but this is faster, and it's "just" for testing.





  
const randomWeightedCarState = null;
const randomLocation = null;
