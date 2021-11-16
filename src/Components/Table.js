import React, { useState } from "react";
import { useTable, useGlobalFilter } from "react-table"; //React table documentation https://react-table.tanstack.com/
import { GlobalFilter } from "./GlobalFilter";
import PopUp from "./PopUp";

export default function Table({ columns, data }) {
  // Table component logic and UI come here

  const rentalTable = useTable({ columns, data }, useGlobalFilter, PopUp); //added the PopUp component
  // with this we can now hook onto a table that utilize our colums and data

  const {
    getTableProps,
    getTableBodyProps,
    visibleColumns,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    state,
    setGlobalFilter,
  } = rentalTable;
  // now we can use the react-table functions!

  function TableRow(props) {
    //TableRow component, no table without it, so made in here.
    const [testCount, setTestCount] = useState(0);
    const [onCLickRowPopUp, setOnclickRowPopUp] = useState(false); //added the onClick functionality for the PopUp component

    return (
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              style={props.rowStyle} 
              onClick={() => setOnclickRowPopUp(true) +
                setTestCount(testCount + 1) +
                console.log("testing row click " + testCount)
              }
              >
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} style={props.cellStyle}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          ); //below is the new PopUp component initialized - not sure if this is the best place, but it compiles here :)
        })}<PopUp trigger={onCLickRowPopUp} setTrigger={setOnclickRowPopUp}></PopUp>
      </tbody>
    );
  }

  return (
    <div>
      <table
        {...getTableProps()}
        style={{
          border: "solid 10px #F7E8A4",
        }}
      >
        <thead>
          <th
            colSpan={visibleColumns.length}
            style={{
              textAlign: "left",
            }}
          >
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </th>

          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 5px black",
                    background: "#F7E8A4",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <TableRow
          subject="TableRow"
          cellStyle={{
            padding: "15px",
            border: "solid 1px gray",
          }}
          rowStyle={{
            background: "white",
          }}
        />
      </table>
    </div>
  );
}
