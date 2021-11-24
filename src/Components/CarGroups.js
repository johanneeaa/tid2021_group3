import React, { useEffect, useState } from "react";
import Table from "./Components/Table";
import Parse from "parse";

export default () => {
  const [carGroupsData, setCarGroupsData] = useState([]); //adding the carGroups data - not working yet

  //Trying to implement carGroup table
  const carGroupList = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Car Group", acessor: "GroupID" },
      { Header: "Relations", accessor: "carRelations" },
    ],
    []
  );

  //adding the carGroups data - not working yet
  useEffect(async () => {
    const carGroupsDataTemp = await getCarGroups();
    setCarGroupsData(carGroupsDataTemp);
  }, []);

  return (
    <Table columns={carGroupList} data={carGroupsData} color={"#a4f7ae"} />
  );
};

//trying to add the carGroups data from the relational database - not quite working as intended, hardcoded the group in database for now
async function getCarGroups() {
  const CarGroups = Parse.Object.extend("CarGroups");
  const CarGroupsQuery = new Parse.Query(CarGroups);
  const allCarGroups = await CarGroupsQuery.find();

  const allCarGroupsFormatted = allCarGroups.map((carGroups) => {
    return {
      id: carGroups.id,
      groupID: carGroups.get("GroupID"),
      carRelations: carGroups.get("Cars"),
    };
  });
  return allCarGroupsFormatted;
}
