import Table from "./Table";
import React, { useState, useEffect } from "react";
import findAvailCars from "../Functions/findAvailCars";


// Could/should be refactored to seperate data from the component.
// Takes a car object and a setTrigger function as props.
// Popup architecture documentation [ https://bit.ly/3H4HMX4 ]

/** 
 * Component to show a table of cars. Has functionality to show available cars.  
 * takes [object.pickUpOffice , object.reqCarGroup , setTrigger] */
function TablePopUp(props) { 

    const columns = 
        [
            { Header: "Model", accessor: "model"},
            { Header: "No. of doors", accessor: "numberOfDoors"}, 
            { Header: "License plate", accessor: "licensePlate"},
            { Header: "Mileage in KM", accessor: "mileage"},
            { Header: "Fuel", accessor: "fuelLevel" },
            { Header: "Notes", accessor: "notes", }, 
            { Header: "Internal ID", accessor: "id", }, 
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
        }   
        fetchData();
    },)
    

    return  (      
        <div className="popup" >
           
            <div className="popup-inner" style={{background: "White"}}> 
            Available Cars: 
            
                <div className="popup-info"> 
                    {isLoaded ? 
                        data[0] ? 
                            <Table columns={columns} data={data} page={"carCheckout"}/> 
                        : "No avail cars on your location [Button to req transfer] [Button to upgrade]" 
                    : "Loading..."}
                </div>
                
                <button className="close-button" onClick={() => props.setTrigger(false)}>X</button>
            </div>
            
        </div>
    ) 

}

export default TablePopUp;