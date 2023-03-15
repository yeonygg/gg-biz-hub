import { faGameConsoleHandheld } from "@fortawesome/sharp-solid-svg-icons";
import {
  Card,
  Section,
  Heading,
  BodyText,
  HR,
  IconButton,
  Tooltip,
} from "pier-design-system";
import unitTypes from "../constants/units";
import RatesTable from "./RatesTable";

const RatesCard = (props) => {
  const disabled = () => {
    let disable = false;
    if (props.array.length === 1) {
      disable = true;
    } else if (props.toggleAll === true) {
      disable = true;
    } else {
      disable = false;
    }
    return disable;
  };

  console.log(props.rate);

  const removeTooltip = () => {
    let tooltip = "Remove Card";
    if (disabled() === true) {
      tooltip = "";
    }
    return tooltip;
  };

  // console.log(props.custom.hidden);

  const handleDelete = (event) => {
    props.removeCustom(props.index);
  };

  return (
    <div>
      <Card style={{ marginBottom: "1rem" }}>
        <Section padding="lg">
          <div className="custom-card-heading-wrapper">
            <Heading>{props.rate.category}</Heading>
            <Tooltip text={removeTooltip()}>
              <IconButton
                onClick={handleDelete}
                title="Button"
                icon="fas fa-times"
                size="sm"
                disabled={disabled()}
                dark={false}
                pill={false}
              />
            </Tooltip>
          </div>
          <RatesTable rate={props.rate} />

          <Section></Section>
        </Section>
      </Card>
    </div>
  );
};

export default RatesCard;
