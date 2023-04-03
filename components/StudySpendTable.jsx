import React from "react";
import { useMemo, Fragment } from "react";
import designBuckets from "../constants/designbuckets";
import { studySpendTable } from "../constants/Columns";
import { useTable } from "react-table";
import UUIDV4 from "../helpers/helpers";

const StudySpendTable = (props) => {
  const selectedStudy = props.study.studyPartners;
  const columns = useMemo(() => studySpendTable, []);

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
                  <td key={UUIDV4()} {...cell.getCellProps()}>
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

export default StudySpendTable;
