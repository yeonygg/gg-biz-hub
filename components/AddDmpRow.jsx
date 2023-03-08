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
    const index = value;
    props.changeHandler(props.index, value, field);

    if (field === "dmpType") {
      // console.log(checkCustomizable);
      props.changeHandler(props.index, dmp.dataType, "dmpType");
    }
  };

  const handleDelete = (event) => {
    props.deleteHandler(props.index);
  };

  const handleAdd = (event) => {
    props.addHandler(props.index);
  };

  return (
    <div>
      <div className="-d-flex -m-b-6">
        <InputGroup
          label="data type"
          size="sm"
          error=""
          dark={false}
          className="-m-r-4"
        >
          <InputSelect
            size="sm"
            disabled={false}
            dark={false}
            error={false}
            capleft={false}
            required=""
            onChange={(event) => {
              handleChange(event, "dmpType");
            }}
          >
            <option>Select DMP type</option>
            {dmp.map((dmp) => (
              <option key={dmp.id} value={dmp.id}>
                {dmp.dataType}
              </option>
            ))}
          </InputSelect>
        </InputGroup>

        {props.total && (
          <div className="toggle-button">
            <Tooltip text="Add Study">
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
        {props.total && (
          <div className="toggle-button">
            <Tooltip text="Delete creative">
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
