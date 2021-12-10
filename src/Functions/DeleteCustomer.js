// Deleting a Customer based off an input in the form of an ID
// built on example from TID and [ https://dashboard.back4app.com/apidocs/ ]

export default async function deleteCustomerByID(ID) {
  try {
    const response = await fetch(
      "https://parseapi.back4app.com/classes/Customer/" + ID,
      {
        method: "DELETE",
        headers: {
          "X-Parse-Application-Id": "iQDmAaMFGOGaZCqW5DiVEhRrY7jhCG5hdFHdyybL",
          "X-Parse-REST-API-Key": "vxMVWv38VwCeNy8wU3h8e83w5ad7zGGMp5QgEuZv",
        },
      }
    );

    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log("Removed object! " + data);
  } catch (error) {
    console.log(error);
  }

  window.location.reload(false);
}
