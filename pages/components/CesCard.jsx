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
    let none = 0;
    let sla = [];
    const custom = [];

    for (let i = 0; i < campaign.length; i++) {
      const ces = campaign[i].cesRequired;

      if (campaign[i].customOn === true && campaign[i].cesRequired === true) {
        custom.push(Math.max(1, campaign[i].cesTurnaroundTime));
      }
      if (ces === false) {
        none = 0;
      } else if (ces === true && campaign[i].customOn === false) {
        sla.push(1);
      }
    }

    const slaSum = sla.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    const customSLA = Math.max(...custom);
    if (custom.length > 0) {
      return Math.max(slaSum, customSLA);
    } else if (sla.length > 0) {
      return slaSum;
    } else {
      return none;
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
