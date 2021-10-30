import React from 'react'
import { useTable } from 'react-table'
import makeData from './dataForTable'

function App() {
 
  const data = React.useMemo(() => makeData(30), [])

  const columns = React.useMemo(
    ()=>[
      {Header: 'When', accessor: 'pickupDateTime'},
      {Header: 'ID', accessor: 'bookingID'},
      {Header:'First name', accessor: 'firstName'},
      {Header:'Last name', accessor: 'lastName'},
      {Header:'Car Group', accessor: 'carGroup'},
    ],[]
  ) 
  
  const tableInstance = useTable({ columns, data })
  // with this we can now hook onto a table that utilize our colums and data
  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance 
  // now we can use the react-table functions!

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
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
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
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
  )
}
export default App
