import CustomAdd from "./CustomAdd";
import { unitTypes, customFeatures } from "../constants/constants";
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

const CreativeRow = (props) => {
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
      <Section padding="xs" className="client-section">
        <div className="client-name-input">
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
        </div>

        <div className="toggle-button">
          <InputCheckbox
            size="sm"
            disabled={props.config.isCustomizable ? false : true}
            dark={false}
            error={false}
            partial={false}
            onChange={(event) => {
              handleChange(event, "customOn");
            }}
          >
            Custom
          </InputCheckbox>
        </div>

        <div className="num-units-input">
          <InputGroup label="Version Count" size="sm" error="" dark={false}>
            <InputText
              size="sm"
              placeholder="Enter Number"
              onChange={(event) => {
                handleChange(event, "versionCount");
              }}
            />
          </InputGroup>
        </div>

        <div className="toggle-button">
          <div></div>
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
      </Section>
      {props.config.customOn && (
        <div>
          {" "}
          <Section padding="xs" className="add-on-section">
            <div className="plus-alignment">
              <IconButton
                title="Button"
                icon="fas fa-plus"
                size="sm"
                disabled={true}
                dark={false}
                pill={false}
              />
            </div>

            <div className="add-on-input">
              <InputGroup label="custom add on" size="sm" error="" dark={false}>
                <InputSelect
                  size="sm"
                  disabled={false}
                  dark={false}
                  error={false}
                  capleft={false}
                  required=""
                  onChange={(event) => {
                    handleChange(event, "customUnit");
                  }}
                >
                  <option disabled={true} selected={true} value="">
                    Select your add on
                  </option>
                  {customUnitIndex.map(function (customIndex) {
                    const custom = customFeatures[customIndex];
                    return <option key={custom.id}>{custom.name}</option>;
                  })}
                </InputSelect>
              </InputGroup>
            </div>
          </Section>
        </div>
      )}
    </div>
  );
};

export default CreativeRow;
