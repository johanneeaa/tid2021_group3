import Table from "./Table";
import React, { useState, useEffect } from "react";
import findAvailCars from "../Functions/findAvailCars";

// Popup architecture lifted from [ https://bit.ly/3ss2nAz & https://bit.ly/3H4HMX4 ]

// we want 
function TablePopUp(props) {

    const columns = 
        [
            { Header: "Model", accessor: "model"},
            { Header: "No. of doors", accessor: "numberOfDoors"}, 
            { Header: "Mileage in KM", accessor: "mileage"},
            { Header: "License plate", accessor: "licensePlate"},
            { Header: "Fuel level", accessor: "fuelLevel" },
            { Header: "Notes", accessor: "notes", }, 
        ]

    const [data, setData] = useState([])
    const [isLoaded, setIsLoaded] = useState()
    
    const location = props.object.pickUpOffice
    const reqCarGroup = props.object.reqCarGroup
    //const data = [{notes: "yes", model: "model"},{tester:"tester",notes: "no"}]
    //const data = findAvailCars("KRP", "A")
    console.log(location + reqCarGroup);

    useEffect(() => {
        async function fetchData() {
            const carsDataTemp = await findAvailCars(location, reqCarGroup)
            setData(carsDataTemp)
            setIsLoaded(true)
            //console.log("finished parse query on cars");
        }
        fetchData();
    },[])
    

    return  (      //if the trigger is 'true' then the popUp will show, if false it will not
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