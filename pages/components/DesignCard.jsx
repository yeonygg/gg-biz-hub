import { Card, Section, BodyText, HR, Button } from "pier-design-system";
import SubHeading from "./SubHeading";

const DesignCard = (props) => {
  const resultHead = "Design SLA";
  const bodyText = "Business Days";
  // console.log(props.campaign);

  return (
    <Card className="design-card">
      <div className="card-style">
        <SubHeading text={resultHead} />

        <Section padding="xs"></Section>
      </div>
    </Card>
  );
};

export default DesignCard;
