import { faGameConsoleHandheld } from "@fortawesome/sharp-solid-svg-icons";
import {
  Card,
  Section,
  Heading,
<<<<<<< HEAD
  BodyText,
  HR,
  IconButton,
  Tooltip,
  Table,
  List,
  ListItem,
} from "pier-design-system";
import { Fragment } from "react";
import StudySpendTable from "./StudySpendTable";
import DmpTableNew from "./DmpTableNew";
import DmpTableOld from "./DmpTableOld";
=======
  IconButton,
  Tooltip,
} from "pier-design-system";
import { Fragment } from "react";
import DmpTableNew from "./DmpTableN";
>>>>>>> 290fd06 (completed dmp table for data page)

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
      <Card style={{ marginBottom: "1rem" }}>
<<<<<<< HEAD
        <Section padding="lg">
=======
        <Section padding="lg" className="-p-b-11">
>>>>>>> 290fd06 (completed dmp table for data page)
          <div className="-d-flex -justify-content-between">
            <Heading size="md">DMP - {props.dmp.dataType}</Heading>

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

<<<<<<< HEAD
          <div className="-d-flex"></div>
          <DmpTableOld selectedDmp={props.dmp.id} />
=======
          <DmpTableNew selectedDmp={props.dmp.id} />
>>>>>>> 290fd06 (completed dmp table for data page)
        </Section>
      </Card>
    </div>
  );
};

export default DmpCard;
