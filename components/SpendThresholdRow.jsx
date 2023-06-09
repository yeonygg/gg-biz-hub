import { InputSelect, IconButton, Tooltip } from "pier-design-system";
import designSpendTiers from "../constants/designspends";

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

  const filteredThresholds = designSpendTiers.filter(tier => tier.id === props.value || !props.exclude.includes( tier.id ));

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
          Select your Threshold
        </option>

        {filteredThresholds.map((threshold) => (
          <option key={threshold.id} value={threshold.id}>
            {threshold.title}
          </option>
        ))}
      </InputSelect>

      {props.total === props.index && (
        <Tooltip text="Add Spend Threshold">
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
        <Tooltip text="Remove Spend Threshold">
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
