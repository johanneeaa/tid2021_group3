// lacl 21/dec/2021 comment: this page needs more info to meet requirement. Where is transfer from/to? At what date? 

import React, { useEffect, useState } from "react";
import getAllCars from "../Data/carData";
import Table from "../Components/Table";
import Footer from "../Components/Footer";
import carsOnLocation from "../Functions/autoRequestTransfer";
//import SelectColumnFilter from "../Components/Filters";

const TransferTable = () => {
  const [transferData, setTransferData] = useState([]);

  const transferColumns = React.useMemo(
    () => [
      { Header: "Model", accessor: "model" },
      { Header: "Rental Office", accessor: "office" }, //this is hardcoded - not from database, if we want if from database we need to add a new column + data
      { Header: "Color", accessor: "color" },
      { Header: "Car Group", accessor: "group" },
    ],
    []
  );

  useEffect(() => {
    async function fetchData() {
      const transferDataTemp = await getAllCars();
      setTransferData(transferDataTemp);
    }
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={()=> carsOnLocation() }> Button</button>
      <Table columns={transferColumns} data={transferData} color={"#F790CE"} />
      <Footer />
    </div>
  );
};

export default TransferTable;
