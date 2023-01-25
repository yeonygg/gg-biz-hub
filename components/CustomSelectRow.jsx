import { InputSelect, IconButton, Tooltip } from "pier-design-system";
import customFeatures from "../constants/custom";

const CustomSelectRow = (props) => {
  const handleChange = (e, field) => {
    const value = e.target.value;
    const index = props.index;
    props.changeHandler(e, value, index);
  };
  return (
    <div className="custom-select-wrapper">
      <InputSelect
        onChange={(e) => {
          handleChange(e);
        }}
        size="sm"
        disabled={false}
        dark={false}
        error={false}
        capleft={false}
        defaultValue=""
        required=""
        value={props.value}
      >
        <option disabled={true} selected value="">
          Select your Custom Add On
        </option>

        {customFeatures.map((custom) => (
          <option key={custom.id} value={custom.id}>{custom.name}</option>
        ))}
      </InputSelect>
      <Tooltip text="Add Custom Creative">
        <IconButton
          onClick={props.addCustom}
          style={{ marginLeft: "1rem" }}
          className="plus-button"
          title="Button"
          icon="far fa-plus"
          size="sm"
          disabled={false}
          dark={false}
          pill={false}
          hero={true}
        />
      </Tooltip>
    </div>
  );
};

export default CustomSelectRow;
