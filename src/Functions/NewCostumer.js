

// funciton for adding a new costumer with "hardcoded" values. Used for testing purposes.
// Next step: generic input

// built on example from TID and [ https://dashboard.back4app.com/apidocs/ ]
export default async function addALars() {
    
  const postData = { 
    LastName: "Clausen", 
    FirstName: "Lars", 
    Notes: "none", 
    Email: "larsTheMan@gmail.com",
  }; 

  try { 
    const response = await fetch("https://parseapi.back4app.com/classes/Customer", 
  { 
      method: "POST", 
      headers: { 
        "X-Parse-Application-Id": "AgzfzDrOFClmY4jztxiZnNa3dlEN8fbiDAsWV6lf", 
        "X-Parse-REST-API-Key": "ljeZr2KM6A4n3PyvZE2pOS8R4BbKyLULGVq8mhXI", 
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(postData), 
    }); 

    if (!response.ok) { 
      throw new Error(response.status); 
    } 
    const data = await response.json(); 
    console.log(data); 

  } catch (error) { 
    console.log(error); 
  }
}
