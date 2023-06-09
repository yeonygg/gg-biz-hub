import CustomAdd from "./CustomAdd";
import unitTypes from "../constants/units";
import studies from "../constants/studies";
import dmp from "../constants/dmps";
import customFeatures from "../constants/custom";
import { useState } from "react";

import {
  InputGroup,
  InputText,
  InputSelect,
  Section,
  InputToggle,
  IconButton,
  Tooltip,
  InputCheckbox,
} from "pier-design-system";

const AddDmpRow = (props) => {
  const handleChange = (event, field) => {
    const value = event.target.value;
    // props.changeHandler(props.index, value, field);

    console.log(value);
    if (field === "dmpType") {
      const index = dmp.findIndex((dmp) => dmp.dataType === value);
      props.changeHandler([
        {
          field: "dmpType",
          key: props.index,
          value: value,
        },
        {
          field: "minSpend",
          key: props.index,
          value: dmp[index].minSpend,
        },
        {
          field: "cpmUpcharge",
          key: props.index,
          value: dmp[index].cpmUpcharge,
        },
      ]);
    }
  };

  const handleAdd = (event) => {
    props.addHandler(props.index);
  };

  const handleDelete = (event) => {
    props.deleteHandler(props.index);
  };

  return (
    <div>
      <div className="-d-flex -m-b-6">
        <InputGroup label="data type" size="sm" error="" dark={false}>
          <InputSelect
            size="sm"
            disabled={false}
            dark={false}
            error={false}
            capleft={false}
            required=""
            // value={props.value != null ? props.value : ""}
            onChange={(event) => {
              handleChange(event, "dmpType");
            }}
          >
            <option disabled={true} value="">
              Select DMP type
            </option>
            {dmp.map((dmp) => (
              <option key={dmp.id} value={dmp.dataType}>
                {dmp.dataType}
              </option>
            ))}
          </InputSelect>
        </InputGroup>

        {props.total === props.id + 1 && (
          <div className="toggle-button">
            <Tooltip text="Add DMP">
              <IconButton
                title="Button"
                icon="far fa-plus"
                size="sm"
                disabled={false}
                dark={false}
                pill={false}
                hero={true}
                onClick={handleAdd}
              />
            </Tooltip>
          </div>
        )}
        {props.total != props.id + 1 && (
          <div className="toggle-button">
            <Tooltip text="Delete DMP">
              <IconButton
                title="Button"
                icon="far fa-trash"
                size="sm"
                disabled={false}
                dark={false}
                pill={false}
                danger={true}
                onClick={handleDelete}
              />
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddDmpRow;
