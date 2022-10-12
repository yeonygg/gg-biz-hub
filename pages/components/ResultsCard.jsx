import { Card, Section, BodyText, HR, Button } from "pier-design-system";
import SubHeading from "./SubHeading";
import CampaignOutput from "./CampaignOutput";
import ResultTable from "./ResultTable";

const ResultsCard = (props) => {
  const resultHead = "Results";
  const bodyText =
    "Click the Share button to share this information with the client";
  console.log(props.campaign);

  return (
    <Card className="result-card">
      <div className="card-style">
        <SubHeading text={resultHead} body={bodyText} />

        <CampaignOutput campaign={props.campaign} />

        <ResultTable campaign={props.campaign} />
        <Section padding="xs"></Section>
        <HR />

        <div className="buttons-section">
          <Button
            size="sm"
            title="Button"
            icon="fas fa-external-link-alt"
            disabled={false}
            dark={false}
            pill={false}
          >
            Share
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ResultsCard;
