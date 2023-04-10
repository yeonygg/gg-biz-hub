import {
  Card,
  Section,
  Heading,
  IconButton,
  Tooltip,
} from "pier-design-system";
import { Fragment } from "react";
import DmpTable from "./DmpTable";

const DmpCard = (props) => {
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

  const handleDelete = (event) => {
    props.removeDmp(props.index);
  };

  return (
    <div>
      <Card>
        <Section className="section-style">
          <div className="-d-flex -justify-content-between">
            <Heading className="heading-style">
              DMP - {props.dmp.dataType}
            </Heading>

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

          <DmpTable selectedDmp={props.dmp.id} />
        </Section>
      </Card>
    </div>
  );
};

export default DmpCard;
