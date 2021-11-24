import React, { useState } from "react";
import PopUp from "./PopUp";
import { useTable, useGlobalFilter, useFilters, useSortBy } from "react-table"; 
import { GlobalFilter, DefaultColumnFilter, SortOnClick } from "./Filters";

// Created a table based on input. Used in our pages.
// We've split it into Table and TableRow to make it easier to manage. Could still be more optimized however.
// Most styling still in here, need to create a functioning stylesheet.

// Code based on react-table [https://react-table.tanstack.com/] 
// & table-filters [https://react-table.tanstack.com/docs/examples/filtering]

export default function Table({ columns, data, color }) {   

  const filterTypes = React.useMemo( 
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )

  const defaultColumn = React.useMemo( 
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const rentalTable = useTable({ columns, data, defaultColumn, filterTypes}, useGlobalFilter,useFilters,useSortBy, PopUp);
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
  } = rentalTable 

  function TableRow(props) { //TableRow component, no table without it, so made in here. 
    
    const [clickedRowObject, setClickedRowObject] = useState(0);

    const [onCLickRowPopUp, setOnclickRowPopUp] = useState(false); 
    //added the onClick functionality for the PopUp component, not for sorting as it is handeled differently

    return ( 
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              style={props.rowStyle} 
              onClick={
                () => setOnclickRowPopUp(true) +
                + setClickedRowObject(row.values)
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
          ); // Goal for next sprint: generic and more "effective" PopUp component - but this works for now. 
        })}
        <PopUp object={clickedRowObject} trigger={onCLickRowPopUp} setTrigger={setOnclickRowPopUp}></PopUp>
      </tbody>
    );
  }

  return ( // ##
    <div>
      <table
        {...getTableProps()}
        style={{
          border: `solid 10px ${color}`,
        }}
      >
        <thead>
          <th
            colSpan={visibleColumns.length}
            style={{
              textAlign: "left",
              backgroundColor: color
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
                  {...column.getHeaderProps( column.localFilter ? console.log ("Local filter on " + column.id) : column.getSortByToggleProps()) }
                  style={{
                    borderBottom: "solid 5px black",
                    background: color,
                    color: "black",
                    fontWeight: "bold",
                  }} // header style - move to stylesheet
                >
                  
                  <SortOnClick column={column}/>
                  {column.render("Header")}
                  <div>{column.localFilter ? column.render('Filter') : null}</div> 
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <TableRow
          subject="TableRow"
          cellStyle={{
            padding: "5px",
            border: "solid 1px gray",
            textAlign: "left"
          }}
          rowStyle={{
            background: "white",
          }} 
        />
      </table>
    </div>
  );
}
