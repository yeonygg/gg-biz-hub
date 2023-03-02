import React from "react";
import { useMemo, Fragment } from "react";
import designBuckets from "../constants/designbuckets";
import { Columns, Generator } from "../constants/Columns";
import { useTable } from "react-table";

const Table = (props) => {
<<<<<<< HEAD
  const rates = [...props.campaign.unitConfig];
=======
  const rates = props.campaign.unitConfig;
>>>>>>> feature/creative-business-rules

  const columns = Generator;
  const data = rates;

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <Fragment>
      <table {...getTableProps()} id="design-buckets">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={designBuckets.id} {...headerGroup.getHeaderGroupProps()}>
<<<<<<< HEAD
              {headerGroup.headers.map((column) => {
                console.log(column);
                return (
                  <th key={column.id} {...column.getHeaderProps}>
                    {column.render("Header")}
                  </th>
                );
              })}
=======
              {headerGroup.headers.map((column) => (
                <th key={designBuckets.id} {...column.getHeaderProps}>
                  {column.render("Header")}
                </th>
              ))}
>>>>>>> feature/creative-business-rules
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr key={designBuckets.id} {...row.getRowProps}>
                {row.cells.map((cell) => {
                  return (
<<<<<<< HEAD
                    <td key={cell.getCellProps().key} {...cell.getCellProps()}>
=======
                    <td key={1} {...cell.getCellProps()}>
>>>>>>> feature/creative-business-rules
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          <tr></tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default Table;
