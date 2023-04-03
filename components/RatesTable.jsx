import React from "react";
import { useMemo, Fragment } from "react";
import designBuckets from "../constants/designbuckets";
import { useTable } from "react-table";
import unitTypes from "../constants/units";
import { Rates } from "../constants/Columns";
<<<<<<< HEAD
const RatesTable = (props) => {
  console.log(props.rate);
  console.log(unitTypes);
  const columns = useMemo(() => Rates, []);
  const cat = props.rate.value;
  const info = unitTypes.filter((unit) => unit.rateCatergory === cat);
  // const rate = () => {
  //const info = []
  // if (props.rate.category === "In-Image") {
  //   for (let i = 0; i < unitTypes.length; i++) {
  //     if (unitTypes[i].rateCatergory === "in-image") {
  //       info.push(unitTypes[i]);
  //     }
  //   }
  // } else if (props.rate.category === "In-Screen") {
  //   for (let i = 0; i < unitTypes.length; i++) {
  //     if (unitTypes[i].rateCatergory === "in-screen") {
  //       info.push(unitTypes[i]);
  //     }
  //   }
  // } else if (props.rate.category === "Enhanced Display/Video") {
  //   for (let i = 0; i < unitTypes.length; i++) {
  //     if (unitTypes[i].rateCatergory === "enhanced display-video") {
  //       info.push(unitTypes[i]);
  //     }
  //   }
  // } else if (props.rate.category === "Skins/Scrollers") {
  //   for (let i = 0; i < unitTypes.length; i++) {
  //     if (unitTypes[i].rateCatergory === "skins-scrollers") {
  //       info.push(unitTypes[i]);
  //     }
  //   }
  // } else if (props.rate.category === "Other - In-Game/Video") {
  //   for (let i = 0; i < unitTypes.length; i++) {
  //     if (unitTypes[i].rateCatergory === "other") {
  //       info.push(unitTypes[i]);
  //     }
  //   }
  // };
  //   return info;
  // };

  // parseFloat(${cpm.floorCPM}).toFixed(2).toLocaleString()
=======
import UUIDV4 from "../helpers/helpers";
const RatesTable = (props) => {
  const columns = useMemo(() => Rates, []);
  const cat = props.rate.value;
  const info = unitTypes.filter((unit) => unit.rateCatergory === cat);
>>>>>>> 290fd06 (completed dmp table for data page)

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
<<<<<<< HEAD
          <tr key={designBuckets.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th key={designBuckets.id} {...column.getHeaderProps}>
=======
          <tr key={UUIDV4()} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th key={UUIDV4()} {...column.getHeaderProps}>
>>>>>>> 290fd06 (completed dmp table for data page)
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
<<<<<<< HEAD
            <tr key={designBuckets.id} {...row.getRowProps}>
              {row.cells.map((cell) => {
                // console.log(cell);
                return (
                  <td key={designBuckets.id} {...cell.getCellProps()}>
=======
            <tr key={UUIDV4()} {...row.getRowProps}>
              {row.cells.map((cell) => {
                // console.log(cell);
                return (
                  <td key={UUIDV4()} {...cell.getCellProps()}>
>>>>>>> 290fd06 (completed dmp table for data page)
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
<<<<<<< HEAD
        <tr></tr>
=======
>>>>>>> 290fd06 (completed dmp table for data page)
      </tbody>
    </table>
  );
};

export default RatesTable;
