import React from "react";
import { useMemo, Fragment } from "react";
import designBuckets from "../constants/designbuckets";
import { Dmp, DmpNew } from "../constants/Columns";
import { useTable } from "react-table";
import dmp from "../constants/dmps";
import dmpspends from "../constants/dmpspends";
import { BodyText } from "pier-design-system";

const DmpTableNew = (props) => {
  let array = [];
  for (let i = 0; i < dmp.length; i++) {
    if (dmp[i].id === props.selectedDmp) {
      array.push(dmp[i]);
    }
  }

  console.log(array[0].spendTiers);

  return (
    <Fragment>
      {" "}
      <BodyText size="sm" style={{ fontWeight: "bold" }}>
        Spend Tiers
      </BodyText>
      <div>{array[0].spendTiers}</div>
    </Fragment>
  );
};

export default DmpTableNew;
