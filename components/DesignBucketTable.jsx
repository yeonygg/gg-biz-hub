import React from "react";
import { useMemo, Fragment } from "react";
import designBuckets from "../constants/designbuckets";
import { Columns } from "../constants/Columns";
import { useTable } from "react-table";

const DesignBucketTable = (props) => {
  const isExpedited = props.isExpedited;
  const offset = isExpedited ? 1 : 0;

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

export default DesignBucketTable;
