import React from 'react'
import { useTable, useGlobalFilter } from 'react-table' //React table documentaion https://react-table.tanstack.com/
import { GlobalFilter } from './GlobalFilter'
import { TableRow } from './TableRow'

export default function Table({ columns, data }) {
    // Table component logic and UI come here
    const rentalTable = useTable({ columns, data }, useGlobalFilter)
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
  // now we can use the react-table functions!

  return (
    <div>
      <table {...getTableProps()} style={{ 
        border: 'solid 10px #F7E8A4',
        }}
        >        
        <thead>
          <th colSpan={visibleColumns.length}
            style={{
            textAlign: 'left',
          }}>
            
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
            
          </th>

          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                  
                    borderBottom: 'solid 5px black',
                    background: '#F7E8A4',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                > 
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <TableRow subject = "TableRow"/> 

        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps() }>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '15px',
                        border: 'solid 1px gray',
                        
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
        
      </table>
    </div>
  )

    }