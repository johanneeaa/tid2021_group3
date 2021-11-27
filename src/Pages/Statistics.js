import React from "react"
import Parse from "parse";


export default function statistics() {

    const avgMileage = avgMileageStats()
    const mostPopCG = mostPopularCargroupStats()
    
    return (
      <div>Stats page</div>
    )
}

async function avgMileageStats() {

  const avgMileage = await Parse.Cloud.run("averageMileage");
  console.log("The average mileage of a car in the fleet is: " + avgMileage)
  return avgMileage
}
async function mostPopularCargroupStats() {

  const mostPopularCargroup = await Parse.Cloud.run("mostPopularCargroup");
  console.log("The most popular cargroup in the fleet is: " + mostPopularCargroup)
  return mostPopularCargroup
}