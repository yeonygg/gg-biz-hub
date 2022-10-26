import {
  Card,
  Section,
  BodyText,
  HR,
  Button,
  Heading,
} from "pier-design-system";
import SubHeading from "./SubHeading";

const CesCard = (props) => {
  const resultHead = "Engineering SLA";
  const bodyText = "Business Days";

  const cesSLA = () => {
    const campaign = props.campaign.unitConfig;
    let standard = 1;
    let versions = [];
    const custom = [];

    for (let i = 0; i < campaign.length; i++) {
      const ces = campaign[i].cesRequired;
      const units = campaign[i].versionCount;

      if (campaign[i].customOn === true && campaign[i].cesRequired === true) {
        custom.push(Math.max(1, campaign[i].cesTurnaroundTime));
      }
      versions.push(units);
    }

    const totalUnits = versions.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    const customSLA = Math.max(...custom);
    if (custom.length > 0 && totalUnits > 0) {
      return Math.max(standard, customSLA);
    } else if (totalUnits > 0) {
      return standard;
    } else {
      return 0;
    }
  };

  const plural = () => {
    if (cesSLA() > 1) {
      return "Business Days";
    } else {
      return "Business Day";
    }
  };

  return (
    <Card className="design-card" style={{ marginRight: 0 }}>
      <div className="card-style">
        <SubHeading text={resultHead} />
        <Heading style={{ color: "#25B9EF" }} className="sla-heading">
          {cesSLA()}
        </Heading>
        <BodyText>{plural()}</BodyText>
        <Section padding="xs"></Section>
      </div>
    </Card>
  );
};

export default CesCard;
