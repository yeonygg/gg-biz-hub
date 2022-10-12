import {
  InputGroup,
  InputText,
  InputSelect,
  Section,
  InputToggle,
  IconButton,
} from "pier-design-system";
import { unitTypes, customFeatures } from "../constants/constants";
import { useState } from "react";

const CustomAdd = (props) => {
  let [custom, setCustom] = useState("");

  let handleCustomChange = (event, field) => {
    setCustom(event.target.value);
    const customIndex = customFeatures
      .map((obj) => obj.name)
      .indexOf(event.target.value);
    if (field === "testing") {
      // props.changeHandler(
      //   props.index,
      //   customFeatures[customIndex].floorCPM,
      //   "floorCPM"
      // );
    }
  };
  const customUnitIndex = props.config.customFeatures;

  return (
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
              handleCustomChange(event, "testing");
            }}
          >
            <option value="">Select your add on</option>
            {customUnitIndex.map(function (customIndex) {
              const custom = customFeatures[customIndex];
              return <option key={custom.id}>{custom.name}</option>;
            })}
          </InputSelect>
        </InputGroup>
      </div>
    </Section>
  );
};

export default CustomAdd;
