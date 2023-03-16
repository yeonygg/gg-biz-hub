import React from "react";
import { useMemo, Fragment } from "react";
import designBuckets from "../constants/designbuckets";
import { useTable } from "react-table";
import unitTypes from "../constants/units";
import { Rates } from "../constants/Columns";
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

  const cpmRates = info
    .map((a) => {
      return { ...a };
    })
    .map((cpm) => {
      console.log("floor cpm: " + cpm.floorCPM);
      cpm.name = `${cpm.name}`;
      cpm.floorCPM = `${
        "$" + parseFloat(cpm.floorCPM).toFixed(2).toLocaleString()
      }`;
      return cpm;
    });

  const data = useMemo(() => info, [info]);

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

export default RatesTable;
