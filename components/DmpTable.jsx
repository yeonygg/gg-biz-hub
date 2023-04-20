import React from "react";
import { useMemo, Fragment } from "react";
import designBuckets from "../constants/designbuckets";
import { Dmp, DmpNew } from "../constants/Columns";
import { useTable } from "react-table";
import dmp from "../constants/dmps";
import { UUIDV4 } from "../helpers/helpers";
const DmpTable = (props) => {
  const columns = useMemo(() => DmpNew, []);
  const dmpId = props.selectedDmp;
  const selectedDmpArray = dmp[dmpId].info;

  const dpmRates = selectedDmpArray
    .map((a) => {
      return { ...a };
    })
    .map((dmp) => {
      dmp.spend = `${dmp.spend}`;
      dmp.locked = `${dmp.locked}`;
      dmp.cpmUpcharge =
        dmp.cpmUpcharge === "N/A"
          ? "N/A"
          : `${"$" + parseFloat(dmp.cpmUpcharge).toFixed(2).toLocaleString()}`;
      return dmp;
    });

  const data = useMemo(() => dpmRates, [dpmRates]);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()} id="design-buckets" className="-m-b-6">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={UUIDV4()} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th key={UUIDV4()} {...column.getHeaderProps}>
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
            <tr key={UUIDV4()} {...row.getRowProps}>
              {row.cells.map((cell) => {
                // console.log(cell);
                return (
                  <td
                    key={UUIDV4()}
                    {...cell.getCellProps()}
                    data-title={cell.column.Header}
                  >
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
