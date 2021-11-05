import React from 'react'
import { useTable, useGlobalFilter, useAsyncDebounce } from 'react-table' //React table documentaion https://react-table.tanstack.com/
import makeData from './dataForTable'

/*

*/

function GlobalFilter({ //component that can be put into a table, to add a functioning search bar.
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} upcoming rentals...`}
        style={{
          fontSize: '1.1rem',
          border: '1',
          width: 350,
        }}
      />
    </span>
  )
}
function onRowClick(row) {
  console.log(row.original);
  console.log(row.style);

}

const rowStyle = {
  background : 'white'
}

function App() { // our table component should soon be seperated from our App()
  
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
                 
                  borderBottom: 'solid 30px black',
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
      
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps() } style={rowStyle} onClick={() => onRowClick(row)}>
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
  )
}
export default App
