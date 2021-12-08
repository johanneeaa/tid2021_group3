import React, { useState, useEffect } from "react";
import Parse from "parse";

// This is the statisics page, containing the functions to fetch cloud computing statistics.
// Statistics is a const in itself, so we can return something before the "await" promises return.
//

const Statistics = () => {
  const [avrgMilage, setAvrgMilage] = useState("loading...");
  const [mostPopCG, setMostPopCG] = useState("loading...");

  useEffect(() => {
    async function getCloudData() {
      setAvrgMilage(await avgMileageStats());
      setMostPopCG(await mostPopularCargroupStats());
    }
    getCloudData();
  }, []);

  return (
    <div>
      <h1>Statistics from the cloud</h1>
      Average mileage on cars: {Math.floor(avrgMilage)} kilometers
      <br />
      Most popular car group right now: {mostPopCG}
    </div>
  );
};

export default Statistics;

// functions to run the cloud computation written in back4app
async function avgMileageStats() {
  const avgMileage = await Parse.Cloud.run("averageMileage");
  console.log("The average mileage of a car in the fleet is: " + avgMileage);
  return avgMileage;
}
async function mostPopularCargroupStats() {
  const mostPopularCargroup = await Parse.Cloud.run("mostPopularCargroup");
  console.log(
    "The most popular cargroup in the fleet is: " + mostPopularCargroup
  );
  return mostPopularCargroup;
}
