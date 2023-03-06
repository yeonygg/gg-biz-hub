import CustomAdd from "./CustomAdd";
import unitTypes from "../constants/units";
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

const AddStudyRow = (props) => {
  const customUnitIndex = props.config.customFeatures;

  const handleChange = (event, field) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const checkCustomizable = unitTypes.map((obj) => obj.name).indexOf(value);
    if (field === "unitCount" || field === "versionCount") value = ~~value;
    props.changeHandler(props.index, value, field);

    if (field === "unitType") {
      // console.log(checkCustomizable);
      props.changeHandler(
        props.index,
        unitTypes[checkCustomizable].floorCPM,
        "floorCPM"
      );
      props.changeHandler(
        props.index,
        unitTypes[checkCustomizable].openCPM,
        "openCPM"
      );
      props.changeHandler(
        props.index,
        unitTypes[checkCustomizable].turnaroundTime,
        "turnaroundTime"
      );
      props.changeHandler(
        props.index,
        unitTypes[checkCustomizable].customFeatures,
        "customFeatures"
      );
      props.changeHandler(
        props.index,
        unitTypes[checkCustomizable].minSpend,
        "minSpend"
      );
      props.changeHandler(
        props.index,
        unitTypes[checkCustomizable].floorVCPM,
        "floorVCPM"
      );
      props.changeHandler(
        props.index,
        unitTypes[checkCustomizable].highImpact,
        "highImpact"
      );
      if (checkCustomizable) {
        props.changeHandler(
          props.index,
          unitTypes[checkCustomizable].customizable,
          "isCustomizable"
        );
      }
      if (checkCustomizable) {
        props.changeHandler(
          props.index,
          unitTypes[checkCustomizable].isSkin,
          "isSkin"
        );
      }
      if (checkCustomizable) {
        props.changeHandler(
          props.index,
          unitTypes[checkCustomizable].cesRequired,
          "cesRequired"
        );
      }
    }
    if (field === "customOn") {
      if (event.target.checked === true) {
        props.changeHandler(props.index, true, "customOn");
      } else {
        props.changeHandler(props.index, false, "customOn");
      }
    }

    if (field === "customUnit") {
      const custIndex = customFeatures.map((obj) => obj.name).indexOf(value);
      props.changeHandler(
        props.index,
        customFeatures[custIndex].turnaroundTime,
        "customTurnaroundTime"
      );

      const ceTurnaround = customFeatures[custIndex].cesRequired
        ? customFeatures[custIndex].cesTurnaroundTime
        : 1;
      customFeatures[custIndex].cesRequired &&
        props.changeHandler(props.index, ceTurnaround, "cesTurnaroundTime");

      props.changeHandler(
        props.index,
        customFeatures[custIndex].floorCPM,
        "customFloorCPM"
      );
      props.changeHandler(
        props.index,
        customFeatures[custIndex].openCPM,
        "customOpenCPM"
      );
      props.changeHandler(
        props.index,
        customFeatures[custIndex].minSpend,
        "customMinSpend"
      );
      props.changeHandler(
        props.index,
        customFeatures[custIndex].cesTurnaroundTime,
        "cesTurnaroundTime"
      );
      props.changeHandler(
        props.index,
        customFeatures[custIndex].cesRequired,
        "cesRequired"
      );
    }
  };

  const handleDelete = (event) => {
    props.deleteHandler(props.index);
  };

  return (
    <div>
      <div className="-d-flex">
        <InputGroup
          label="unit type"
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
              handleChange(event, "unitType");
            }}
          >
            <option>Select Unit type</option>
            {unitTypes.map((unit) => (
              <option key={unit.id}>{unit.name}</option>
            ))}
          </InputSelect>
        </InputGroup>
        <InputGroup
          label="unit type"
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
              handleChange(event, "unitType");
            }}
          >
            <option>Select Unit type</option>
            {unitTypes.map((unit) => (
              <option key={unit.id}>{unit.name}</option>
            ))}
          </InputSelect>
        </InputGroup>
        <InputGroup label="unit type" size="sm" error="" dark={false}>
          <InputSelect
            size="sm"
            disabled={false}
            dark={false}
            error={false}
            capleft={false}
            required=""
            onChange={(event) => {
              handleChange(event, "unitType");
            }}
          >
            <option>Select Unit type</option>
            {unitTypes.map((unit) => (
              <option key={unit.id}>{unit.name}</option>
            ))}
          </InputSelect>
        </InputGroup>
        {props.total === props.index && (
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
                onClick={handleDelete}
              />
            </Tooltip>
          </div>
        )}
        {props.total != props.index && (
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

export default AddStudyRow;
