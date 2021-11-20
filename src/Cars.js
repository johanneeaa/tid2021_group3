//import { useEffect, useState } from "react";
import Parse from "parse";

const Car = Parse.Object.extend("Car");


export default function Cars() {

    const query = new Parse.Query(Car);

    const getCarID = () =>{
        query.find().then(clickedCar => {    
            return clickedCar.id 
        })
    }

    query.get(getCarID).then((specificCar) => {

        const color = specificCar.get("Color")

        console.log("id number " + specificCar.id + " has the color " + color);
      }, (error) => {
          console.log({error} + 'Cant get specific car');
        // error is a Parse.Error with an error code and message.
      });

    return <>The cars tabbed is here</>
}



