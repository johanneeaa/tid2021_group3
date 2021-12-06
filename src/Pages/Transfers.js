import React, { useEffect, useState } from "react";
import getAllCars from "../Data/carData";
import Table from "../Components/Table";
//import SelectColumnFilter from "../Components/Filters";

const TransferTable = () => {
  const [transferData, setTransferData] = useState([]);

  const transferColumns = React.useMemo(
    () => [
        
        { Header: "Model", accessor: "model"},
        { Header: "Rental Office", accessor: "office"}, //this is hardcoded - not from database, if we want if from database we need to add a new column + data
        { Header: "Color", accessor: "color"}, 
        { Header: "Car Group", accessor: "group"},
    ],
    []
  );

  useEffect(() => {
    async function fetchData() {
      const transferDataTemp = await getAllCars();
      setTransferData(transferDataTemp);
    }
    fetchData();
  },[])

  return <Table columns={transferColumns} data={transferData} color={"#F790CE"} />;
};

export default TransferTable;
