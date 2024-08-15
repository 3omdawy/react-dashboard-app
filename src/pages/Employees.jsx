import React, { useState } from "react";
import Header from "../components/Header";

import { employeesGrid, employeesData } from "../data/dummy";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";

import "primereact/resources/themes/lara-light-indigo/theme.css";

function Employees() {
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const columns = Object.keys(employeesData[0]);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const header = () => {
    return (
      <div>
        <input
          className="flex w-full p-2"
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Keyword Search"
        />
      </div>
    );
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Employees" category="Page" />
      <div className="card">
        <DataTable
          value={employeesData}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25, 50]}
          filters={filters}
          globalFilterFields={columns}
          header={header}
          emptyMessage="No entries found."
        >
          {employeesGrid.map((column) => (
            <Column
              key={column.headerText}
              header={column.headerText}
              body={column.template}
              align={column.textAlign}
              alignHeader={column.textAlign}
              style={{ width: column.width }}
              field={column.field}
            ></Column>
          ))}
        </DataTable>
      </div>
    </div>
  );
}

export default Employees;
