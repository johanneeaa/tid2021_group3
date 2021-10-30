import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'
function App() {
 
  const data = React.useMemo( // .useMemo is to "memorize" the data so we dont re-render it
    () => [
      {col1: 'Today', col2: 'Rahim Sterling'}, // colX is a "key" we need to identify the column
      {col1: 'Today', col2: 'Grethe Østerby', col3: 'Citroen'},
      {col1: 'Torrow', col2: 'Hans Svendsen'},
    ],[] // the [] is added to avoid infinite loop
  )
  const columns = React.useMemo(
    ()=>[
      {Header: 'When', accessor: 'col1'},
      {Header:'Customer', accessor: 'col2'},
      {Header:'Car', accessor: 'col3'}
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
