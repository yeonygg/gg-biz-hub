import {
  InputGroup,
  InputText,
  InputSelect,
  Section,
  InputToggle,
  IconButton,
  Tooltip,
} from "pier-design-system";
import { useState, Segment } from "react";

const CreativeRow = (props) => {
  console.log("creative row");
  const config = { ...props };
  console.log(config);

  const setUnitType = (event) => {
    const unitType = event.target.value;
    console.log(unitType);
    config.unitType = unitType;
    if (unitType.contains("custom")) {
      config.isCustom = true;
    }
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
              onChange={setUnitType}
            >
              <option value="">Select your creative</option>
              <option value="In-Screen">In-screen</option>
              <option value="In-Screen Custom">In-screen Custom</option>
              <option value="In-Image">In-image</option>
              <option value="4">In-image Canvas</option>
              <option value="5">In-screen Frame</option>
              <option value="6">In-screen Expandable</option>
              <option value="7">In-image Expandable</option>
              <option value="8">In-screen Expandable Video</option>
            </InputSelect>
          </InputGroup>
        </div>

        <div className="num-units-input">
          <InputGroup label="number of units" size="sm" error="" dark={false}>
            <InputText size="sm" placeholder="Enter Text" />
          </InputGroup>
        </div>

        <div className="num-units-input">
          <InputGroup
            label="number of versions"
            size="sm"
            error=""
            dark={false}
          >
            <InputText size="sm" placeholder="Enter Text" />
          </InputGroup>
        </div>

        <div className="toggle-button">
          <InputToggle size="sm" disabled={false} dark={false} error={false}>
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
            />
          </Tooltip>
        </div>
      </Section>
      {/*config.isCustom && ({/*put custom row here */}
    </div>
  );
};

export default CreativeRow;
