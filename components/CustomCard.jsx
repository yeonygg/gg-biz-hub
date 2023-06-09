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
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

const CustomCard = (props) => {
  // for (let i = 0; i < unitTypes.length; i++) {
  //   for (let j = 0; j < unitTypes[i].customFeatures.length; j++) {
  //     console.log(unitTypes.customFeatures);
  //   }
  // }

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
  const icon = () => {
    let iconCode = "";
    const programmatic = props.feature.programmatic;
    if (programmatic == "Feasible") {
      return (iconCode = (
        <i
          className="pier-button-icon__icon fas fa-check"
          style={{ marginRight: "10px", color: "#08D18B" }}
        ></i>
      ));
    } else if (programmatic == "TBD") {
      iconCode = (
        <i
          className="pier-button-icon__icon fas fa-question"
          style={{ marginRight: "10px", color: "#25B9EF" }}
        ></i>
      );
    } else {
      iconCode = (
        <i
          className="pier-button-icon__icon fas fa-times"
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
    if (props.feature.cesRequired === false) {
      time = "1 Business Day";
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
    if (props.feature.name == "Scrollable Text") {
      minimum = "Minimum spend + $25,000";
    } else if (spend > 0) {
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
    const separator = ", ";

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
      <Card>
        <Section className="section-style">
          <div className="custom-card-heading-wrapper">
            <Heading className="heading-style">{props.feature.name}</Heading>
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

          <div className="custom-card-wrapper">
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
              {props.feature.demo != null && (
                <div className="demo-link-wrapper">
                  <a
                    href={props.feature.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BodyText
                      size="md"
                      style={{
                        color: "#25B9EF",
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      Demo
                    </BodyText>
                  </a>
                </div>
              )}
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
                </BodyText>{" "}
                <BodyText size="sm" style={{ textAlign: "right" }}>
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

                <BodyText className="-text-a-right" size="sm">
                  {designTime()}
                </BodyText>
              </div>
              <HR />

              <div
                className="-d-flex -justify-content-between"
                style={{ paddingBottom: "0.75rem", paddingTop: "1.75rem" }}
              >
                <BodyText size="sm" style={{ fontWeight: "bold" }}>
                  Engineering Timeline
                </BodyText>

                <BodyText className="-text-a-right" size="sm">
                  {cesTime()}
                </BodyText>
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

                <BodyText
                  size="sm"
                  className="-text-a-right"
                  style={{ fontWeight: "bold" }}
                >
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
        </Section>
      </Card>
    </div>
  );
};

export default CustomCard;
