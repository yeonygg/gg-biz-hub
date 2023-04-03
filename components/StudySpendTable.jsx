import React from "react";
import { useMemo, Fragment } from "react";
import designBuckets from "../constants/designbuckets";
import { studySpendTable } from "../constants/Columns";
import { useTable } from "react-table";
<<<<<<< HEAD
import dmp from "../constants/dmps";
import studies from "../constants/studies";
=======
import UUIDV4 from "../helpers/helpers";
>>>>>>> 290fd06 (completed dmp table for data page)

const StudySpendTable = (props) => {
  const selectedStudy = props.study.studyPartners;
  const columns = useMemo(() => studySpendTable, []);

<<<<<<< HEAD
  console.log(selectedStudy);

=======
>>>>>>> 290fd06 (completed dmp table for data page)
  //   const minSpend = selectedStudy.map((study) => {
  //     study.table[0].column1 = `(<i style={{ color: "#08D18B" }} className="fas fa-check"></i>) &nbsp;
  //  ${study.table[0].column1}`;
  //     study.table[1].column2 = `<i style={{ color: "#08D18B" }} className="fas fa-check"></i> &nbsp;
  //  ${study.table[1].column2}`;

  //     return study;
  //   });
  const data = useMemo(() => selectedStudy, [selectedStudy]);

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

export default StudySpendTable;
