import React, { useContext, useState } from "react";
import PopUp from "./PopUp";
import { useTable, useGlobalFilter, useFilters, useSortBy } from "react-table"; 
import { GlobalTableSearch, SortOnClick } from "./Filters";
import './Styling/Table.css';
import { AppContext } from "./AppProvider";
import styled from "styled-components"
import changeCarState from '../Functions/changeCarState';

// Created a table based on input. Used in our pages.
// We've split it into Table and TableRow to make it easier to manage. Could still be more optimized however.
// The component has started to clutter, see if we can refactor further

// Code based on react-table [https://react-table.tanstack.com/] 
// & table-filters [https://react-table.tanstack.com/docs/examples/filtering]

export default function Table({columns, data, style, page}) {   
  
  //AppContext is used to access the state of the app and to get the theme.
  const {getTheme} = useContext(AppContext)

  //Style rows to theme of page
  const Row = styled.tr`
  &:nth-child(odd) {
    background-color: ${getTheme().disabled};
  }
  &:hover {
    background-color: ${getTheme().highlight};
    transition: all .3s ease-in-out
  }`

  // myHeaders array is created to allow functions/components acces to "nice" headers instead of the accessors in the data, without hardcoding them.
  const myHeaders =[]
  columns.forEach(columns => {
    myHeaders.push(columns.Header)
  }); 

  // filterTypes not touched by us, part of react UseTable & table-filters.
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

  // create a generic table, myTable with useTable
  const myTable = useTable({ columns, data, filterTypes, style}, useGlobalFilter,useFilters,useSortBy, PopUp);
  
  // using myTable, create the table object
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
  } = myTable 

  // table row seperated from table for easier access
  function TableRow(props) { 
    
    const [clickedRowObject, setClickedRowObject] = useState(0);
    const [popUpTrigger, setPopUpTrigger] = useState(false); 
  
    return ( 
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Row className = "tablerow"
              {...row.getRowProps()}
              onClick={() => 
                (page === "carCheckout" ? changeCarState("Rented",row.values.id) : setPopUpTrigger(true))
                + setClickedRowObject(row.values) 
              }
            >
              {row.cells.map((cell) => {
                return (
                  <td className = "tablecell" {...cell.getCellProps()} style={
                    {backgroundColor : cell.value ===  "Ready" ? "#25CF6D" : null }
                    // this is not right place for the styling, figure out how/where to move!
                  }>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </Row>
          ); 
        })} 
        {popUpTrigger ? 
          <tr>
            <td>
              <PopUp 
            object={clickedRowObject}
            rowHeaders ={myHeaders}
            color={getTheme().primary}
            trigger={popUpTrigger} 
            page={page}
            setTrigger={setPopUpTrigger}
              />
            </td>
          </tr> : null

        // Popup starting to get messy by diffrentiating between Rental and other tabs.
        // The popup was designed to be same for all tables, but shouldn't be. 
        // 
        // Workoaround: give it page prop to behave differently depending on what page it inherits from
        
        } 
      </tbody>
    );
  } 

  return ( 
    <div className = "container">
      <table className = "table" {...getTableProps()}>
        <thead>
          <tr>
            <th 
              className = "th"
              colSpan={visibleColumns.length}
              style={{background: getTheme().primary}}
            >
              <GlobalTableSearch
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>

          {headerGroups.map((headerGroup) => (
          
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className = "th2"
                {...column.getHeaderProps(
                  column.localFilter ? console.log ("Local filter on: " + column.id) : column.getSortByToggleProps()) 
                }
                style={{background: getTheme().primary}} 
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
