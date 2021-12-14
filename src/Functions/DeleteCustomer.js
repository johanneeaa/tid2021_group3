// Deleting a Customer based off an input in the form of an ID
// built on example from TID and [ https://dashboard.back4app.com/apidocs/ ]

const APP_ID_KEY = process.env.REACT_APP_APP_KEY
const APP_JS_KEY = process.env.REACT_APP_JS_KEY

export default async function deleteCustomerByID(ID) {
  try {
    const response = await fetch(
      "https://parseapi.back4app.com/classes/Customer/" + ID,
      {
        method: "DELETE",
        headers: {
          "X-Parse-Application-Id": APP_ID_KEY, //Getting key from .env
          "X-Parse-REST-API-Key": APP_JS_KEY, //Getting key from .env
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