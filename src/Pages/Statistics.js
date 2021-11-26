import React from "react"
import Parse from "parse";



export default function placeHolder() {

    Statistics()

    return <>temporayplaceholdertext</>
}


async function Statistics() {

    const helloFunction = await Parse.Cloud.run("hello");
    console.log(helloFunction)

}


/* Parse.Cloud.define("averageMileage", async (request) => {

        const query = new Parse.Query("Car");

        console.log(query)
        
        query.equalTo("car", request.params.car);
        const results = await query.find();
        let sum = 0;
        for (let i = 0; i < results.length; ++i) {
          sum += results[i].get("mileage");
        }

        console.log("Total kms = " + sum)
        console.log("Avg kms = " + sum / results.length)

        return sum / results.length;
      }); */
