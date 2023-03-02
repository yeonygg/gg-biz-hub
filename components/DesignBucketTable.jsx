import React from "react";
import { useMemo, Fragment } from "react";
import designBuckets from "../constants/designbuckets";
import { Columns } from "../constants/Columns";
import { useTable } from "react-table";

const DesignBucketTable = (props) => {
<<<<<<< HEAD
  const isExpedited = props.isExpedited;
  const offset = isExpedited ? 1 : 0;

  //create deep copy of designBuckets and apply transformations to relevant data if expedited.
  const buckets = designBuckets.map(a => {return {...a}}).map((bucket) => {
    bucket.standardUnits = `${bucket.standardUnits - offset} Days`;
    bucket.highImpact = `${bucket.highImpact - offset} Days`;
    bucket.skins = bucket.skins === null ? 'N/A' : `${bucket.skins - offset} Days`;
    bucket.inVideoMin = bucket.inVideoMin === null ? 'N/A' : `${bucket.inVideoMin - offset} Days`;
    return bucket;
  });
  
  const columns = useMemo(() => Columns, []);
  // the dependencies parameter tells it what value changing should trigger a re-render of the data.
  //In this case buckets or isExpedited changing would work
  const data = useMemo(() => buckets, [isExpedited]);

=======
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => designBuckets, []);
>>>>>>> feature/creative-business-rules
  const tableInstance = useTable({
    columns,
    data,
  });

<<<<<<< HEAD
=======
  const expedited = () => {
    let days = "";

    if (designBuckets[0].isExpedited === false) {
      days = designBuckets[0].standardUnits - 1;
    }
  };

  expedited();

>>>>>>> feature/creative-business-rules
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance;
<<<<<<< HEAD

  return (
=======
  return (
    <Fragment>
>>>>>>> feature/creative-business-rules
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
<<<<<<< HEAD
                  // console.log(cell);
=======
>>>>>>> feature/creative-business-rules
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
<<<<<<< HEAD
=======
    </Fragment>
>>>>>>> feature/creative-business-rules
  );
};

export default DesignBucketTable;
