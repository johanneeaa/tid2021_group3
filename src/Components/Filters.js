import React from "react";
import { useAsyncDebounce } from "react-table"; 
import './Filters.css';

// Filter components for use in our tables
// Snippets from table-filters [ https://react-table.tanstack.com/docs/examples/filtering ]

// component that can be put into a table, to add a functioning search bar.
export function GlobalFilter({ 
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

export function DefaultColumnFilter({ 

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

export function SortOnClick(props){ 
return(                 
  <span>
    {props.column.isSorted ? props.column.isSortedDesc ? ' ▼ ' : ' ▲ ' : ''}
  </span>)
}

export default function SelectColumnFilter({ 
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const options = React.useMemo(() => {
    const options = new Set() // Set() kinda like a hash; only holds unique values - but accesable with keys, not index
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
   const sortedOptions = Array.from(options).sort() // sort aplhabetacally for easier use
   
    return [...sortedOptions.values()]  
  }, [id, preFilteredRows])

  // render a multi-select box 
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