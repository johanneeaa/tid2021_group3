import Parse from "parse";

// function to auto request transfers based on thresholds for each location.
// For now, car groups are the same, but the aim is to base this off our statistics.

const carGroups = ["A","B", "C", "D", "E", "F", "G", "H", "I"];

// objects of our locations and threshholds. Start simple with only lower threshholds.
const locations = [
    {name: "AAL", lowerThresh: 1},
    {name: "KST", lowerThresh: 2},
    {name: "KRP", lowerThresh: 3}
]

// the array that should contain our data at the end
const autoTransfers = []

export default async function getNeededTransfers(params) {
    console.log("Started searching for autotransfers");

    const Car = Parse.Object.extend("Car");
    const query = new Parse.Query(Car);

    for (let i = 0; i < locations.length; i++) {

        query.equalTo("CarState", "Ready");
        query.equalTo("CurrentLocation", locations[i].name);

        // find avail cars for a location
        for (let j = 0; j < carGroups.length; j++) {
            query.equalTo("Group", carGroups[j]);
            const carsAtLocation = await query.find()

            // check if avail cars < lower threshold
            if (carsAtLocation.length < locations[i].lowerThresh){

                // if check is true, then create an object to our request array
                autoTransfers.push({
                    group: carGroups[j],
                    fromLocation: "N/A",
                    toLocation: locations[i].name, 
                    type: "Automatic", 
                    status: "Awaits...",
                    eta: "N/A",
                    time: new Date().toLocaleTimeString("en-GB") + " " 
                        + new Date().toLocaleDateString("en-GB"),
                })
            }
        }
        console.log(
        // for break
        );
    }
    console.log("Exited searching for autotransfers");
    return autoTransfers
}


