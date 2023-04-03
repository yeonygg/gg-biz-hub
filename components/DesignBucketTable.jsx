import React from "react";
import { useMemo, Fragment } from "react";
import designBuckets from "../constants/designbuckets";
import { Columns } from "../constants/Columns";
import { useTable } from "react-table";
import { UUIDV4 } from "../helpers/helpers";

const DesignBucketTable = (props) => {
  const isExpedited = props.isExpedited;
  const offset = isExpedited ? 1 : 0;
  const key = Math.floor(Math.random() * 1000000);

  //create deep copy of designBuckets and apply transformations to relevant data if expedited.
  const buckets = designBuckets
    .map((a) => {
      return { ...a };
    })
    .map((bucket) => {
      bucket.standardUnits = `${bucket.standardUnits - offset} Days`;
      bucket.highImpact = `${bucket.highImpact - offset} Days`;
      bucket.skins =
        bucket.skins === null ? "N/A" : `${bucket.skins - offset} Days`;
      bucket.inVideoMin =
        bucket.inVideoMin === null
          ? "N/A"
          : `${bucket.inVideoMin - offset} Days`;
      return bucket;
    });

  const columns = useMemo(() => Columns, []);
  // the dependencies parameter tells it what value changing should trigger a re-render of the data.
  //In this case buckets or isExpedited changing would work
  const data = useMemo(() => buckets, [buckets]);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table key={UUIDV4()} {...getTableProps()} id="design-buckets">
      <thead key={UUIDV4()}>
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
      <tbody {...getTableBodyProps()} key={UUIDV4()}>
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

export default DesignBucketTable;
