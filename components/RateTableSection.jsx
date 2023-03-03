import {
  Card,
  Section,
  BodyText,
  HR,
  Button,
  Heading,
  Tooltip,
} from "pier-design-system";
import SubHeading from "./SubHeading";
import Table from "./Table";

const RateTableSection = (props) => {
  const resultHead = "Rate Breakdown";

  return (
    <div className="-p-t-6 -p-l-6" style={{ width: "100%" }}>
      <SubHeading text={resultHead} />
      <Table campaign={props.campaign} />
    </div>
  );
};

export default RateTableSection;
