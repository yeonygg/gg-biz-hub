import CustomAdd from "./CustomAdd";
import { unitTypes } from "../constants/constants";
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

console.log(unitTypes);
const CreativeRow = (props) => {
  let [unit, setUnit] = useState("");
  const [disable, setDisable] = useState(false);

  const handleChange = (event, field) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    console.log(event.target.value);
    if (field === "unitCount" || field === "versionCount") value = ~~value;
    props.changeHandler(props.index, value, field);
    if (field === "unitType") {
      ///search unitTypes array for object contianing property matching value of unitType field and return object
      const check = unitTypes.map((obj) => obj.name).indexOf(value);
      console.log(check);
      //if that object's customizable property is true:
      //set customizable state to true
      props.changeHandler(
        props.index,
        unitTypes[check].customizable,
        "isCustomizable"
      );

      if (event.target.checked === true) {
        props.changeHandler(props.index, true, "isCustom");
      } else {
        props.changeHandler(props.index, false, "isCustom");
      }
    }

    setUnit(event.target.value);
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
              {unitTypes.map(function (unit) {
                if (unit.isCustom === false) {
                  return <option key={unit.id}>{unit.name}</option>;
                }
              })}
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
              handleChange(event, "unitType");
            }}
          >
            Custom
          </InputCheckbox>
        </div>

        <div className="num-units-input">
          <InputGroup label="Unit Count" size="sm" error="" dark={false}>
            <InputText
              size="sm"
              placeholder="Enter Number"
              onChange={(event) => {
                handleChange(event, "unitCount");
              }}
            />
          </InputGroup>
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
          <InputToggle
            size="sm"
            disabled={false}
            dark={false}
            error={false}
            className="-m-r-5"
            onChange={(event) => {
              handleChange(event, "isExpedited");
            }}
          >
            Expedited
          </InputToggle>
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
      {props.config.isCustom && <CustomAdd config={props.config} />}
    </div>
  );
};

export default CreativeRow;
