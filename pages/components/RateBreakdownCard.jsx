import { Card, Section, BodyText, HR, Button } from "pier-design-system";
import SubHeading from "./SubHeading";
import CampaignOutput from "./CampaignOutput";
import ResultTable from "./ResultTable";
import LaunchTimeline from "./LaunchTimeline";

const RateBreakdownCard = (props) => {
  const resultHead = "Rate Breakdown";
  const bodyText =
    "Click the Share button to share this information with the client";
  // console.log(props.campaign);

  return (
    <Card className="result-card">
      <div className="card-style">
        <SubHeading text={resultHead} body={bodyText} />

        <CampaignOutput campaign={props.campaign} />

        <ResultTable campaign={props.campaign} />
        <HR className="-m-b-3" />
        <LaunchTimeline campaign={props.campaign}/>
        <HR/>
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

export default RateBreakdownCard;
