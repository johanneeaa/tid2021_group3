import React from "react";

//snippets from https://react-table.tanstack.com/docs/examples/filtering 

export default function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const options = React.useMemo(() => {
    const options = new Set() // Set is a kin to a hash; only holds unique values - but accesable with keys, not index
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
   const sortedOptions = Array.from(options).sort() // sort aplhabetacally for easier use
   // testing: console.log(sortedOptions);
    return [...sortedOptions.values()]  
  }, [id, preFilteredRows])

  // Render a multi-select box
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