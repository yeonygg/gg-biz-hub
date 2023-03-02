import { InputSelect, IconButton, Tooltip } from "pier-design-system";
<<<<<<< HEAD
import spendTiers from "../constants/spends";
=======
import designSpendTiers from "../constants/designspends";
>>>>>>> feature/creative-business-rules

const SpendThresholdRow = (props) => {
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
        defaultValue=""
        required=""
        value={props.value}
      >
        <option disabled={true} selected value="">
          Select your Threshold
        </option>

<<<<<<< HEAD
        {spendTiers.map((threshold) => (
=======
        {designSpendTiers.map((threshold) => (
>>>>>>> feature/creative-business-rules
          <option key={threshold.id} value={threshold.id}>
            {threshold.title}
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

export default SpendThresholdRow;
