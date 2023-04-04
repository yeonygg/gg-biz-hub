import { InputSelect, IconButton, Tooltip } from "pier-design-system";
import customFeatures from "../constants/custom";
import { unitTypes, rateCatergories } from "../constants/units";
import { UUIDV4 } from "../helpers/helpers";

const RatesRow = (props) => {
  const handleChange = (e, field) => {
    const value = e.target.value;
    const index = props.index;
    props.changeHandler(e, value, index);
  };

  const disabled = () => {
    let disable = false;
    if (props.array === 1) {
      disable = true;
    } else if (props.toggleAll === true) {
      disable = true;
    }

    return disable;
  };

  const handleDelete = (event) => {
    props.removeCustom(props.index);
  };

  return (
    <div className="custom-select-wrapper">
      <InputSelect
        onChange={handleChange}
        size="sm"
        disabled={disabled()}
        dark={false}
        error={false}
        capleft={false}
        required=""
        value={props.value != null ? props.value : ""}
      >
        <option disabled={true} value="">
          Select your Unit
        </option>

        {rateCatergories.map((rateCatergory, index) => (
          <option key={UUIDV4()} value={index}>
            {rateCatergory.category}
          </option>
        ))}
      </InputSelect>

      {props.total === props.index && (
        <Tooltip text="Add Custom Creative">
          <IconButton
            onClick={props.addCustom}
            style={{ marginLeft: "1rem" }}
            icon="far fa-plus"
            className="plus-button"
            title="Button"
            disabled={disabled()}
            dark={false}
            pill={false}
            hero={true}
          />
        </Tooltip>
      )}

      {props.total != props.index && (
        <Tooltip text="Remove Custom Creative">
          <IconButton
            onClick={handleDelete}
            style={{ marginLeft: "1rem" }}
            className="trash-button"
            title="Button"
            icon="far fa-trash"
            size="sm"
            disabled={disabled()}
            dark={false}
            pill={false}
            hero={false}
            secondary={true}
          />
        </Tooltip>
      )}
    </div>
  );
};

export default RatesRow;
