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
  console.log(props.config);

  let handleCustomChange = (e) => {
    setCustom(e.target.value);
  };

  const setCustomIndex = () => {
    // const customFeaturesArray = unitTypes[].customFeatures;
  };
  setCustomIndex();

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
            onChange={handleCustomChange}
          >
            <option value="">Select your add on</option>
            {customFeatures.map(function (custom) {
              //get the value of the unit type selected
              return <option key={custom.id}>{custom.name}</option>;
            })}
          </InputSelect>
        </InputGroup>
      </div>
    </Section>
  );
};

export default CustomAdd;
