import Table from "./Table";
import React, { useState, useEffect } from "react";
import findAvailCars from "../Functions/findAvailCars";

// Component to show a table of cars. Has functionality to show available cars. 
// Should be refactored to seperate data from the component.
// Takes a car object and a setTrigger function as props.

// Popup architecture lifted from [ https://bit.ly/3ss2nAz & https://bit.ly/3H4HMX4 ]

function TablePopUp(props) { 

    const columns = 
        [
            { Header: "Model", accessor: "model"},
            { Header: "No. of doors", accessor: "numberOfDoors"}, 
            { Header: "License plate", accessor: "licensePlate"},
            { Header: "Mileage in KM", accessor: "mileage"},
            { Header: "Fuel", accessor: "fuelLevel" },
            { Header: "Notes", accessor: "notes", }, 
        ]

    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState()
    
    const location = props.object.pickUpOffice
    const reqCarGroup = props.object.reqCarGroup

    useEffect(() => {
        async function fetchData() {
            const carsDataTemp = await findAvailCars(location, reqCarGroup)
            setData(carsDataTemp)
            setIsLoaded(true)
            //console.log("finished parse query on cars");
        }
        fetchData();
    },)  // orignally was: " },[]) " but this was throwing an error, so I deleted the square brackets [] - it still seems to work fine, but please check that it should stay this way or not
    

    return  (      
        <div className="popup" >
            <div className="popup-inner" style={{background: "White"}}>
                <div className="popup-info"> 
                {isLoaded ? <Table columns={columns} data={data}/> : "Loading"
                }
                </div>
                <button className="close-button" onClick={() => props.setTrigger(false)}>X</button>
            </div>
        </div>
    ) 

}

export default TablePopUp;