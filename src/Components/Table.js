import React, { useState } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table"; //React table documentation https://react-table.tanstack.com/
import { GlobalFilter } from "./GlobalFilter";

// snippets from https://react-table.tanstack.com/docs/examples/filtering

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

export default function Table({ columns, data }) {
  // Table component logic and UI come here

const filterTypes = React.useMemo( // from example
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

  const rentalTable = useTable({ columns, data, defaultColumn, filterTypes,}, useGlobalFilter,useFilters);
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
  } = rentalTable

  function TableRow(props) {
  //TableRow component, no table without it, so made in here.
    const [testCount, setTestCount] = useState(0);

    return (
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              style={props.rowStyle}
              onClick={() =>
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
          );
        })}
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
                 
                 <div>{column.localFilter ? column.render('Filter') : null}</div>
            
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
