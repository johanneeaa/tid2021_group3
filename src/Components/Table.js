import React, { useState } from "react";
import PopUp from "./PopUp";
import { useTable, useGlobalFilter, useFilters, useSortBy } from "react-table"; 
import { GlobalFilter, DefaultColumnFilter, SortOnClick } from "./Filters";
import './Table.css';

// Created a table based on input. Used in our pages.
// We've split it into Table and TableRow to make it easier to manage. Could still be more optimized however.
// Most styling still in here, need to create a functioning stylesheet.

// Code based on react-table [https://react-table.tanstack.com/] 
// & table-filters [https://react-table.tanstack.com/docs/examples/filtering]

export default function Table({ columns, data, color}) {   
  
  const myHeaders =[]

  columns.forEach(columns => {
    myHeaders.push(columns.Header)
  }); 
// myHeaders is created to gain acces to "nice" headers instead of accessors

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

  /* It's important that we're using React.useMemo here to ensure that our data isn't recreated on every render ( https://bit.ly/3xSqtVD )*/

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

  function TableRow(props) { 
    
    const [clickedRowObject, setClickedRowObject] = useState(0);
    const [onCLickRowPopUp, setOnclickRowPopUp] = useState(false); 
  
    return ( 
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className = "tablerow"
              {...row.getRowProps()}
              style={props.rowStyle} 
              onClick={
                () => setOnclickRowPopUp(true) +
                + setClickedRowObject(row.values)
              }
              >
              {row.cells.map((cell) => {
                return (
                  <td className = "tablecell" {...cell.getCellProps()} style={props.cellStyle}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          ); // Goal for next sprint: generic and more "effective" PopUp component - but this works for now. 
        })}
        <PopUp 
          object={clickedRowObject}
          rowHeaders ={myHeaders}
          color={color}
          trigger={onCLickRowPopUp} 
          setTrigger={setOnclickRowPopUp}
        />    
      </tbody>
    );
  } 
  return ( 
    <div className = "container">
      <table className = "table"
        {...getTableProps()}
      >
        <thead>
          <th className = "th"
            colSpan={visibleColumns.length}
            style={{
              background: color,
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
                <th className = "th2"
                  {...column.getHeaderProps( column.localFilter ? console.log ("Local filter on " + column.id) : column.getSortByToggleProps()) }
                  style={{
                    background: color,
                  }} 
                >
                  
                  <SortOnClick column={column}/>
                  {column.render("Header")}
                  <div>{column.localFilter ? column.render('Filter') : null}</div> 
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <TableRow/>
      </table>
    </div>
  );
}
