import { IconButton, Tooltip } from "pier-design-system";

const CustomIconButtons = () => {
  return (
    <div>
      <Tooltip text="Add Custom Creative">
        <IconButton
          //   onClick={props.addCustom}
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

      <Tooltip text="Delete Custom Creative">
        <IconButton
          //   onClick={props.removeCustom}
          style={{ marginLeft: "1rem" }}
          className="trash-button"
          title="Button"
          icon="far fa-trash"
          size="sm"
          disabled={false}
          dark={false}
          pill={false}
          hero={false}
          secondary={true}
        />
      </Tooltip>
    </div>
  );
};
export default CustomIconButtons;
