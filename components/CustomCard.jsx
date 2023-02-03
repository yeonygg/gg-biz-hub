<<<<<<< HEAD

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

const CustomCard = (props) => {
  // for (let i = 0; i < unitTypes.length; i++) {
  //   for (let j = 0; j < unitTypes[i].customFeatures.length; j++) {
  //     console.log(unitTypes.customFeatures);
  //   }
  // }

  const disabled = () => {
    let disable = false;
    console.log(props.array.length);
    if (props.array.length === 1) {
      console.log(props.array);
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
  const icon = () => {
    let iconCode = "";
    const programmatic = props.feature.programmatic;
    if (programmatic == "Feasible") {
      return (iconCode = (
        <i
          className="fas fa-check"
          style={{ marginRight: "10px", color: "#08D18B" }}
        ></i>
      ));
    } else if (programmatic == "TBD") {
      iconCode = (
        <i
          className="fas fa-question"
          style={{ marginRight: "10px", color: "#25B9EF" }}
        ></i>
      );
    } else {
      iconCode = (
        <i
          className="fas fa-times"
          style={{ marginRight: "10px", color: "#E24550" }}
        ></i>
      );
    }
    return iconCode;
  };

  const designTime = () => {
    let time = "";
    const dsTime = props.feature.turnaroundTime;
    if (dsTime <= 1) {
      time = dsTime + " Business Day";
    } else if (dsTime === "TBD") {
      time = "TBD";
    } else {
      time = dsTime + " Business Days";
    }
    return time;
  };

  const cesTime = () => {
    let time = "";
    const cesTime = props.feature.cesTurnaroundTime;
    if (cesTime <= 1) {
      time = cesTime + " Business Day";
    } else if (cesTime === "TBD") {
      time = "TBD";
    } else {
      time = cesTime + " Business Days";
    }
    return time;
  };

  const minSpend = () => {
    const spend = props.feature.minSpend;
    let minimum = "";
    if (spend > 0) {
      minimum = "$" + spend.toLocaleString("en-US");
    } else if (spend === "TBD") {
      minimum = "TBD";
    } else {
      minimum = "";
    }
    return minimum;
  };

  const units = () => {
    const selectedUnitIndex = props.feature.id;
    let units = [];
    for (let i = 0; i < unitTypes.length; i++) {
      if (unitTypes[i].hasOwnProperty("customFeatures")) {
        for (let j = 0; j < unitTypes[i].customFeatures.length; j++) {
          if (unitTypes[i].customFeatures[j] === selectedUnitIndex) {
            units.push(unitTypes[i].name);
          }
        }
      }
    }
    const separator = "," + "\n";

    return units.join(separator);
  };

  // console.log(props.custom.hidden);
  const objective = () => {
    const object = props.feature.objective;
    // console.log(object.hasOwnProperty("primary"));
    let objective = [];
    const separator = "\n";
    if (object.hasOwnProperty("primary")) {
      objective.push(`Primary: ${props.feature.objective.primary}`);
    }

    if (object.hasOwnProperty("secondary")) {
      objective.push(`Secondary: ${props.feature.objective.secondary}`);
    }

    if (object.hasOwnProperty("recommendedMetrics")) {
      objective.push(
        `Recommended Metrics: ${props.feature.objective.recommendedMetrics}`
      );
    }

    return objective.join(separator);
  };

  const handleDelete = (event) => {
    props.removeCustom(props.index);
  };

  return (
    <div>
     <Card style={{ marginBottom: "1rem" }}>
        <Section padding="lg">
          <div className="custom-card-heading-wrapper">
            <Heading>{props.feature.name}</Heading>
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

          <div className="-d-flex">
            <div className="custom-card-description-box">
              <div style={{ marginBottom: "2rem" }}>
                <BodyText size="md" style={{ fontWeight: "bold" }}>
                  Description
                </BodyText>
                <BodyText size="xs">{props.feature.description}</BodyText>
              </div>
              <div style={{ marginBottom: "2rem", whiteSpace: "pre" }}>
                <BodyText size="md" style={{ fontWeight: "bold" }}>
                  Objective
                </BodyText>
                <BodyText size="xs">{objective()}</BodyText>
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <BodyText size="md" style={{ fontWeight: "bold" }}>
                  Best Practices
                </BodyText>
                <BodyText size="xs">{props.feature.bestPractices}</BodyText>
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <BodyText size="md" style={{ fontWeight: "bold" }}>
                  Client Requirements and Assets Needed
                </BodyText>
                <BodyText size="xs">
                  {props.feature.clientRequirements}
                </BodyText>
              </div>
            </div>
            <div className="custom-sla-info-wrapper">
              <div
                className="-d-flex -justify-content-between"
                style={{ paddingBottom: "1rem" }}
              >
                <BodyText
                  size="sm"
                  style={{ fontWeight: "bold", width: "55%" }}
                >
                  Programmatic
                </BodyText>

                <BodyText size="sm">
                  {icon()}
                  {props.feature.programmatic}
                </BodyText>
              </div>
              <HR />
              <div
                className="-d-flex -justify-content-between"
                style={{ paddingBottom: "0.75rem", paddingTop: "1.75rem" }}
              >
                <BodyText size="sm" style={{ fontWeight: "bold" }}>
                  Design Timeline
                </BodyText>

                <BodyText size="sm">{designTime()}</BodyText>
              </div>
              <HR />

              <div
                className="-d-flex -justify-content-between"
                style={{ paddingBottom: "0.75rem", paddingTop: "1.75rem" }}
              >
                <BodyText size="sm" style={{ fontWeight: "bold" }}>
                  Engineering Timeline
                </BodyText>

                <BodyText size="sm">{cesTime()}</BodyText>
              </div>
              <HR />

              <div
                className="-d-flex -justify-content-between"
                style={{ paddingBottom: "0.75rem", paddingTop: "1.75rem" }}
              >
                <BodyText
                  size="sm"
                  style={{ fontWeight: "bold", color: "#08D18B" }}
                >
                  Minimum Spend
                </BodyText>

                <BodyText size="sm" style={{ fontWeight: "bold" }}>
                  {minSpend()}
                </BodyText>
              </div>
              <HR />
              <div
                className="-d-flex -justify-content-between"
                style={{ paddingBottom: "0.75rem", paddingTop: "1.75rem" }}
              >
                <BodyText size="sm" style={{ fontWeight: "bold" }}>
                  CPM Upcharge
                </BodyText>

                <BodyText size="sm">${props.feature.floorCPM}.00</BodyText>
              </div>
              <HR />
              <div
                className=""
                style={{ paddingBottom: "0.75rem", paddingTop: "1.75rem" }}
              >
                <BodyText size="sm" style={{ fontWeight: "bold" }}>
                  Applicable Unit Types
                </BodyText>

                <BodyText size="xs">{units()}</BodyText>
              </div>
            </div>
          </div>

          <Section></Section>

          </Section>

          </Card>
    
    </div>

=======
import { Card, Section, Heading } from "pier-design-system";

const CustomCard = (props) => {
  return (
    <div>
      <Card>
        <Section padding="lg">
          <Heading>{props.custom.name}</Heading>
        </Section>
      </Card>
    </div>
>>>>>>> 20d30b9 (updated custom page)
  );
};

export default CustomCard;
