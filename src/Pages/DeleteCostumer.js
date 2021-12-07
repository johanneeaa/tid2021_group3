
// Deleting 

export default async function deleteCostumerByID(ID) {
    
      try { 
        const response = await fetch("https://parseapi.back4app.com/classes/Customer/" + ID, 
      { 
          method: "DELETE", 
          headers: { 
            "X-Parse-Application-Id": "AgzfzDrOFClmY4jztxiZnNa3dlEN8fbiDAsWV6lf", 
            "X-Parse-REST-API-Key": "ljeZr2KM6A4n3PyvZE2pOS8R4BbKyLULGVq8mhXI", 
          }, 
        }); 
    
        if (!response.ok) { 
          throw new Error(response.status); 
        } 
        const data = await response.json(); 
        console.log("Removed object! "+data); 
    
      } catch (error) { 
        console.log(error); 
      }

}