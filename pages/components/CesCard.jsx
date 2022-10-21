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
    let sla = 0;
    const custom = [];

    for (let i = 0; i < campaign.length; i++) {
      const ces = campaign[i].cesRequired;

      if (campaign[i].customOn === true && campaign[i].cesRequired === true) {
        custom.push(Math.max(1, campaign[i].cesTurnaroundTime));
      }
      if (ces === false) {
        sla = 0;
      } else if (ces === true && campaign[i].customOn === false) {
        sla = 1;
      }
    }

    const customSLA = Math.max(...custom);
    if (custom.length > 0) {
      return Math.max(sla, customSLA);
    } else {
      return sla;
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
