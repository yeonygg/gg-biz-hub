import React from "react";
import { useMemo, Fragment } from "react";
import designBuckets from "../constants/designbuckets";
import { Dmp } from "../constants/Columns";
import { useTable } from "react-table";
import dmp from "../constants/dmps";

const DmpTable = () => {
  const populateFunctions = () => {
    for (let i = 0; i < dmp.length; i++) {}
  };
  populateFunctions();
  const columns = useMemo(() => Dmp, []);
  const data = useMemo(() => dmp, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()} id="design-buckets">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={designBuckets.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th key={designBuckets.id} {...column.getHeaderProps}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr key={designBuckets.id} {...row.getRowProps}>
              {row.cells.map((cell) => {
                // console.log(cell);
                return (
                  <td key={designBuckets.id} {...cell.getCellProps()}>
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
  );
};

export default DmpTable;
