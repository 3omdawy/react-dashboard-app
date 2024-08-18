import React, { useState } from "react";
import Header from "../components/Header";

import { customersGrid, customersData } from "../data/dummy";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";

import "primereact/resources/themes/lara-light-indigo/theme.css";

function Customers() {
  const [selectedProducts, setSelectedProducts] = useState(null);

  const onCellEditComplete = (e) => {
    let { rowData, newValue, field } = e;
    rowData[field] = newValue;
  };

  const cellEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
        onKeyDown={(e) => e.stopPropagation()}
      />
    );
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Customers" category="Page" />
      <div className="card">
        {/* CustomerID is the column name containing the ID in the data */}
        <DataTable
          value={customersData}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          selectionMode="checkbox"
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="CustomerID"
          editMode="cell"
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3rem" }}
          ></Column>
          {customersGrid.map((column) => (
            <Column
              key={column.headerText}
              header={column.headerText}
              body={column.template}
              align={column.textAlign}
              alignHeader={column.textAlign}
              style={{ width: column.width }}
              field={column.field}
              sortable
              editor={(options) => cellEditor(options)}
              onCellEditComplete={onCellEditComplete}
            ></Column>
          ))}
        </DataTable>
      </div>
    </div>
  );
}

export default Customers;
