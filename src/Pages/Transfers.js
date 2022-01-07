// lacl 21/dec/2021 comment: this page needs more info to meet requirement. Where is transfer from/to? At what date? 

import React, { useEffect, useState } from "react";
import Loadscreen from "../Components/Loadscreen";
import Table from "../Components/Table";
import Footer from "../Components/Footer";
import getNeededTransfers from "../Functions/autoRequestTransfer";
//import SelectColumnFilter from "../Components/Filters";

const TransferTable = () => {
  const [transferData, setTransferData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  const transferColumns = React.useMemo(
    () => [
      { Header: "From", accessor: "fromLocation" }, //this is hardcoded - not from database, if we want if from database we need to add a new column + data
      { Header: "Destination", accessor: "toLocation" },
      { Header: "Car Group", accessor: "group" },
      { Header: "Status", accessor: "status" },
      { Header: "ETA", accessor: "eta" },
      { Header: "Time of Request", accessor: "timedate" },
      { Header: "Type of Request ", accessor: "type" },
    ],
    []
  );

  useEffect(() => {
    async function fetchData() {
      const transferDataTemp = await getNeededTransfers();
      setTransferData(transferDataTemp);
      setIsLoaded(true)
    }
    fetchData();
  }, []);

  return (
    <div>
      {isLoaded ? <Table columns={transferColumns} data={transferData} color={"#F790CE"} /> : <Loadscreen/>
  }
      <Footer />
    </div>
  );
};

export default TransferTable;
