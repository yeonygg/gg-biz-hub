import React from "react";
import { useMemo, Fragment } from "react";
import designBuckets from "../constants/designbuckets";
import { useTable } from "react-table";
import unitTypes from "../constants/units";
import { Rates } from "../constants/Columns";
import { UUIDV4 } from "../helpers/helpers";
import { isMobile } from "react-device-detect";

const RatesTable = (props) => {
  const columns = useMemo(() => Rates, []);
  const cat = props.rate.value;
  const info = unitTypes.filter((unit) => unit.rateCatergory === cat);

  const cpmRates = info
    .map((a) => {
      return { ...a };
    })
    .map((cpm) => {
      cpm.name = `${cpm.name}`;
      cpm.floorCPM =
        cpm.floorCPM === "TBD"
          ? "TBD"
          : `${"$" + parseFloat(cpm.floorCPM).toFixed(2).toLocaleString()}`;
      cpm.openCPM =
        cpm.openCPM === "TBD"
          ? "TBD"
          : `${"$" + parseFloat(cpm.openCPM).toFixed(2).toLocaleString()}`;
      cpm.floorVCPM =
        cpm.floorVCPM === "TBD"
          ? "TBD"
          : cpm.floorVCPM === "Custom rate"
          ? "Custom rate"
          : cpm.floorVCPM === "N/A"
          ? "N/A"
          : `${"$" + parseFloat(cpm.floorVCPM).toFixed(2).toLocaleString()}`;
      return cpm;
    });

  const data = useMemo(() => cpmRates, [cpmRates]);

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
      </tbody>
    </table>
  );
};

export default RatesTable;
