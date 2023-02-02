import { InputSelect, IconButton, Tooltip } from "pier-design-system";
import customFeatures from "../constants/custom";

const CustomSelectRow = (props) => {
  const handleChange = (e, field) => {
    const value = e.target.value;
<<<<<<< HEAD
    const index = props.index;
    props.changeHandler(e, value, index);
=======
    const index = props.index; //customFeatures.map((obj) => obj.name).indexOf(value);

    props.changeHandler(e, value, index);
    console.log(props.config);
>>>>>>> 15e60ac (updated functions for custom creative page)
  };
  return (
    <div className="custom-select-wrapper">
      <InputSelect
        onChange={(e) => {
<<<<<<< HEAD
          handleChange(e);
=======
          handleChange(e, "customType");
>>>>>>> 15e60ac (updated functions for custom creative page)
        }}
        size="sm"
        disabled={false}
        dark={false}
        error={false}
        capleft={false}
<<<<<<< HEAD
        defaultValue=""
        required=""
        value={props.value}
      >
        <option disabled={true} selected value="">
          Select your Custom Add On
        </option>

        {customFeatures.map((custom) => (
          <option key={custom.id} value={custom.id}>{custom.name}</option>
=======
        required=""
      >
        <option disabled={true} selected={true} value="">
          Select your Custom Add On
        </option>
        {/* customFeatures.map(function (customIndex) {
                const custom = customFeatures[customIndex];
                return <option key={custom.id}>{custom.name}</option>;
              }) */}

        {customFeatures.map((custom) => (
          <option key={custom.id}>{custom.name}</option>
>>>>>>> 15e60ac (updated functions for custom creative page)
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
