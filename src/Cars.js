import { useEffect } from "react";
import Parse from "parse";

export default function Cars() {
    useEffect(() => {
        const Car = Parse.Object.extend("Car");
        const query = new Parse.Query(Car);

        const cars = query.find().then((cars) => {
            console.log(cars);
        }); 
    }, []);

    console.log("testing");
    return <>Lets see them cars!</>;
}

