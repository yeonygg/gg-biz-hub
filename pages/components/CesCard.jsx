import { Card, Section, BodyText, HR, Button } from "pier-design-system";
import SubHeading from "./SubHeading";

const CesCard = (props) => {
  const resultHead = "Engineering SLA";
  const bodyText = "Business Days";
  // console.log(props.campaign);

  return (
    <Card className="ces-card">
      <div className="card-style">
        <SubHeading text={resultHead} />

        <Section padding="xs"></Section>
      </div>
    </Card>
  );
};

export default CesCard;
