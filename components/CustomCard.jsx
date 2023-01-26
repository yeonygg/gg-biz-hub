import { Card, Section, Heading, BodyText, HR } from "pier-design-system";
import unitTypes from "../constants/units";

const CustomCard = (props) => {
  // for (let i = 0; i < unitTypes.length; i++) {
  //   for (let j = 0; j < unitTypes[i].customFeatures.length; j++) {
  //     console.log(unitTypes.customFeatures);
  //   }
  // }
  const icon = () => {
    let iconCode = "";
    const programmatic = props.custom.key.programmatic;
    if (programmatic == "Feasible") {
      return (iconCode = (
        <i
          className="fas fa-check"
          style={{ marginRight: "10px", color: "#08D18B" }}
        ></i>
      ));
    } else {
      iconCode = (
        <i
          className="fas fa-question"
          style={{ marginRight: "10px", color: "#25B9EF" }}
        ></i>
      );
    }
    return iconCode;
  };

  const cesTime = () => {
    let time = "";
    const cesTime = props.custom.key.cesTurnaroundTime;
    if (cesTime <= 1) {
      time = cesTime + " Business Day";
    } else {
      time = cesTime + " Business Days";
    }
    return time;
  };

  const minSpend = () => {
    const spend = props.custom.key.minSpend;
    let minimum = "";
    if (spend > 0) {
      minimum = "$" + spend.toLocaleString("en-US");
    } else {
      minimum = "";
    }
    return minimum;
  };
  return (
    <div>
      <Card>
        <Section padding="lg">
          <Heading>{props.custom.key.name}</Heading>
          <div className="-d-flex">
            <div className="custom-card-description-box">
              <div style={{ marginBottom: "2rem" }}>
                <BodyText size="md" style={{ fontWeight: "bold" }}>
                  Description
                </BodyText>
                <BodyText size="xs">{props.custom.key.description}</BodyText>
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <BodyText size="md" style={{ fontWeight: "bold" }}>
                  Objective
                </BodyText>
                <BodyText size="xs">{props.custom.key.objective}</BodyText>
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <BodyText size="md" style={{ fontWeight: "bold" }}>
                  Best Practices
                </BodyText>
                <BodyText size="xs">{props.custom.key.bestPractices}</BodyText>
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <BodyText size="md" style={{ fontWeight: "bold" }}>
                  Client Requirements and Assets Needed
                </BodyText>
                <BodyText size="xs">
                  {props.custom.key.clientRequirements}
                </BodyText>
              </div>
            </div>
            <div className="custom-sla-info-wrapper">
              <div
                className="-d-flex -justify-content-between"
                style={{ paddingBottom: "1rem" }}
              >
                <BodyText size="sm" style={{ fontWeight: "bold" }}>
                  Programmatic
                </BodyText>

                <BodyText size="sm">
                  {icon()}
                  {props.custom.key.programmatic}
                </BodyText>
              </div>
              <HR />
              <div
                className="-d-flex -justify-content-between"
                style={{ paddingBottom: "1rem", paddingTop: "2rem" }}
              >
                <BodyText size="sm" style={{ fontWeight: "bold" }}>
                  Design Timeline
                </BodyText>

                <BodyText size="sm">
                  {props.custom.key.turnaroundTime} Business Days
                </BodyText>
              </div>
              <HR />

              <div
                className="-d-flex -justify-content-between"
                style={{ paddingBottom: "1rem", paddingTop: "2rem" }}
              >
                <BodyText size="sm" style={{ fontWeight: "bold" }}>
                  Engineering Timeline
                </BodyText>

                <BodyText size="sm">{cesTime()}</BodyText>
              </div>
              <HR />

              <div
                className="-d-flex -justify-content-between"
                style={{ paddingBottom: "1rem", paddingTop: "2rem" }}
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
                style={{ paddingBottom: "1rem", paddingTop: "2rem" }}
              >
                <BodyText size="sm" style={{ fontWeight: "bold" }}>
                  CPM Upcharge
                </BodyText>

                <BodyText size="sm">${props.custom.key.floorCPM}.00</BodyText>
              </div>
              <HR />
              <div
                className=""
                style={{ paddingBottom: "1rem", paddingTop: "2rem" }}
              >
                <BodyText size="sm" style={{ fontWeight: "bold" }}>
                  Applicable Unit Types
                </BodyText>

                <BodyText size="sm">{props.custom.key.floorCPM}</BodyText>
              </div>
            </div>
          </div>

          <Section></Section>
        </Section>
      </Card>
    </div>
  );
};

export default CustomCard;
