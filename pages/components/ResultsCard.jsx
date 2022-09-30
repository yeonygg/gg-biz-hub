import { Card, Section, BodyText } from "pier-design-system";
import SubHeading from "./SubHeading";
import CampaignNames from "./CampaignNames";
import ResultTable from "./ResultTable";

const ResultsCard = () => {
  const resultHead = "Results";
  const bodyText =
    "Click the Share button to share this information with the client";

  return (
    <Card className="result-card">
      <div className="card-style">
        <SubHeading text={resultHead} body={bodyText} />
        <CampaignNames />
        <ResultTable />
      </div>
    </Card>
  );
};

export default ResultsCard;
