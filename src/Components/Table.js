import React, { useState } from "react";
import PopUp from "./PopUp";
import { useTable, useGlobalFilter, useFilters, useSortBy } from "react-table"; //React table documentation https://react-table.tanstack.com/
import { GlobalFilter, DefaultColumnFilter, SortOnClick } from "./Filters";

// functions marked # are snippets from https://react-table.tanstack.com/docs/examples/filtering without modifications
// functions marked ## are snippets with our own modifications
// functions marked ### are OC 

export default function Table({ columns, data }) {   // ##
  // Table component logic and UI come here

  const filterTypes = React.useMemo( //#
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

  const defaultColumn = React.useMemo( //#
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const rentalTable = useTable({ columns, data, defaultColumn, filterTypes}, useGlobalFilter,useFilters,useSortBy, PopUp);
  // with this we can now hook onto a table that utilize our colums and data
  // ####

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
  } = rentalTable //##

  function TableRow(props) {
    //TableRow component, no table without it, so made in here.
    const [clickedRowObject, setClickedRowObject] = useState(0);
    const [onCLickRowPopUp, setOnclickRowPopUp] = useState(false); //added the onClick functionality for the PopUp component
  //TableRow component, no table without it, so made in Table component.
  // ##

    const [testCount, setTestCount] = useState(0);

    return ( // ##
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              style={props.rowStyle} 
              onClick={() => setOnclickRowPopUp(true) +
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
          ); //below is the new PopUp component initialized - not sure if this is the best place, but it compiles here :)
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
                  {...column.getHeaderProps( column.localFilter ? console.log ("Loocal filter on " + column.id) : column.getSortByToggleProps()) }
                  style={{
                    borderBottom: "solid 5px black",
                    background: "#F7E8A4",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  <div>{column.localFilter ? column.render('Filter') : null}</div> 
                  <SortOnClick column={column}/>
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
