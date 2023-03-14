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

const RatesCard = (props) => {
  // for (let i = 0; i < unitTypes.length; i++) {
  //   for (let j = 0; j < unitTypes[i].customFeatures.length; j++) {
  //     console.log(unitTypes.customFeatures);
  //   }
  // }

  console.log(props.feature);

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
            <Heading>{props.feature.category}</Heading>
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

          <Section></Section>
        </Section>
      </Card>
    </div>
  );
};

export default RatesCard;
