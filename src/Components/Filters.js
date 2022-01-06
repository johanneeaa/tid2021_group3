import React from "react";
import { useAsyncDebounce } from "react-table"; 
import './Styling/Filters.css';

// Filter components for use in our tables:
// GlobalTableSearch used for all tables, but disabled for certain columns
// SortOnClick used for columns with mostly unique values
// SelectionColumnFilter used for columns standardized values

// Documentation:
// useTable [ https://bit.ly/3HF73r3 ] 
// table-filters [ https://bit.ly/3qVZTYD ] 
// useSortBy [ https://bit.ly/3F1zE8v ]

/** Full table search bar component, default setting: on, coloumns can disable. Documentation: [ https://bit.ly/3JOdH0c ]  */
export function GlobalTableSearch({ 
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>  
      <br/>
      Search:{" "}
      <input className = "inputfield"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search through ${count} elements`} 
      />
    </span>
  );
}

/** Returns a span based on sorting of the clicked column. Takes {column} prop 
 * The logic of toggle sorting is useSortBy from useTable [ https://bit.ly/3F1zE8v ]
*/
export function SortOnClick(props){ 
return(                 
  <span>
    {props.column.isSorted ? props.column.isSortedDesc ? ' ▼ ' : ' ▲ ' : ''}
  </span>)
}


/** Returns a multi-select box in the column header, containing all available values */
export default function SelectColumnFilter({ 
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const options = React.useMemo(() => {
    const options = new Set() // Set() kinda like a hash; only holds unique values - but accesable with keys, not index

    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })

    const sortedOptions = Array.from(options).sort() // sort the selection box aplhabetacally

    return [...sortedOptions.values()]  
  }, [id, preFilteredRows]) // because of useMemo this will only re-render if values in last array [ID or preFilteredRows] change.

  // render a multi-select box for the header to contain
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}