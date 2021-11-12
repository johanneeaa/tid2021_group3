import React from "react";
import { useAsyncDebounce } from "react-table"; //React table documentaion https://react-table.tanstack.com/

export function GlobalFilter({
  //component that can be put into a table, to add a functioning search bar.
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
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} upcoming rentals...`}
        style={{
          fontSize: "1.1rem",
          border: "1",
          width: 350,
        }}
      />
    </span>
  );
}
