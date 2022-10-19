import { Card, Section, BodyText, HR, Button } from "pier-design-system";
import SubHeading from "./SubHeading";

const SpendCard = (props) => {
  const resultHead = "Minimum Spend";
  const bodyText =
    "Click the Share button to share this information with the client";
  // console.log(props.campaign);

  return (
    <Card className="spend-card">
      <div className="card-style">
        <SubHeading text={resultHead} />

        <Section padding="xs"></Section>
      </div>
    </Card>
  );
};

export default SpendCard;
