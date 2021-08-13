import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
export default function Table(props) {
  // console.log("table data ============>", props.data.campaigns);
  return (
    <>
      <BootstrapTable data={props.data.campaigns} version="4">
        <TableHeaderColumn isKey dataField="id">
          ID
        </TableHeaderColumn>
        <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="bloggers_count">
          Influencers
        </TableHeaderColumn>
        <TableHeaderColumn dataField="total_reach">
          Total Reach
        </TableHeaderColumn>

        <TableHeaderColumn dataField="progress_in_percent">
          Progress Percent
        </TableHeaderColumn>
      </BootstrapTable>
      ,
    </>
  );
}
