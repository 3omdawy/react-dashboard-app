import React from "react";
import Header from "../components/Header";

import { ordersGrid, ordersData } from "../data/dummy";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primereact/resources/themes/lara-light-indigo/theme.css";

function Orders() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Orders" category="Page" />
      <div className="card">
        <DataTable
          value={ordersData}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          id="gridcomp"
        >
          {ordersGrid.map((column) => (
            <Column
              key={column.headerText}
              header={column.headerText}
              body={column.template}
              align={column.textAlign}
              alignHeader={column.textAlign}
              style={{ width: column.width }}
              field={column.field}
              sortable
            ></Column>
          ))}
        </DataTable>
      </div>
    </div>
  );
}

export default Orders;
