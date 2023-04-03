import React from "react";
import { useMemo, Fragment } from "react";
import designBuckets from "../constants/designbuckets";
import { Columns, Generator } from "../constants/Columns";
import { useTable } from "react-table";
import { UUIDV4 } from "../helpers/helpers";

const Table = (props) => {
  const budget = props.campaign.campaignBudget;
  const budgetTiers = [0, 25000, 50000, 75000, 100000, 125000, 200000, 300000];
  const currentTier = 0;
  budgetTiers.forEach((tier) => {
    if (budget >= tier) currentTier = tier;
  });

  ///sloppy deep-copy, this needs fixing
  const baseRates = JSON.parse(JSON.stringify(props.campaign.unitConfig)); //[...props.campaign.unitConfig];

  const computeUpcharges = () => {
    const studies = [...props.campaign.studyConfig];
    const dmps = [...props.campaign.dmpConfig];
    //compute study upcharge - these are additive!
    let studyUpcharge = 0;
    studies.forEach((study) => {
      if (study.cpmUpcharge != null) {
        studyUpcharge += study.cpmUpcharge[currentTier];
      }
    });

    //compute dmp upcharge - this finds the largest one and applies it
    //for some reason dmps are set to null sometimes when selected and it's driving me insane.
    let dmpUpcharge =
      dmps.length > 0
        ? Math.max(
            ...dmps.map((dmp) =>
              dmp.cpmUpcharge === null ? 0 : dmp.cpmUpcharge[currentTier]
            )
          )
        : 0;
    console.log(dmpUpcharge);

    //apply upcharges to each unit rate
    const finalRates = [
      ...baseRates.map((rate) => {
        rate.floorVCPM = `${
          "$" + parseFloat(rate.floorVCPM).toFixed(2).toLocaleString()
        }`;
        rate.floorCPM = `${
          "$" +
          parseFloat((rate.floorCPM += studyUpcharge + dmpUpcharge))
            .toFixed(2)
            .toLocaleString()
        }`;
        rate.openCPM = `${
          "$" +
          parseFloat((rate.openCPM += studyUpcharge + dmpUpcharge))
            .toFixed(2)
            .toLocaleString()
        }`;
        return rate;
      }),
    ];

    return finalRates;
  };

  const rates = [...computeUpcharges()];
  const columns = Generator;
  const data = rates; //useMemo(() => rates, baseRates);

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
            <tr key={UUIDV4()} {...headerGroup.getHeaderGroupProps()}>
              >>>>>>> 290fd06 (completed dmp table for data page)
              {headerGroup.headers.map((column) => {
                // console.log(column);
                return (
                  <th key={UUIDV4()} {...column.getHeaderProps}>
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr key={UUIDV4()} {...row.getRowProps}>
                >>>>>>> 290fd06 (completed dmp table for data page)
                {row.cells.map((cell) => {
                  return (
                    <td key={cell.getCellProps().key} {...cell.getCellProps()}>
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
