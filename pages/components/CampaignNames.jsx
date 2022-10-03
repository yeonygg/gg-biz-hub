import { useContext } from "react";
import { InputGroup, InputText, Section, Heading } from "pier-design-system";
import { InputsContext } from "../Contexts/InputsContext";

const CampaignNames = (props) => {
  const { clientName } = useContext(InputsContext);
  return (
    <Section padding="sm" className="client-section">
      <div className="client-name">
        <Heading size="xs">{clientName}</Heading>
      </div>

      <div className="campaign-name">
        <Heading size="xs">Campaign Name</Heading>
      </div>

      <div className="campaign-budget">
        <Heading size="xs">Campaign Budget</Heading>
      </div>
    </Section>
  );
};

export default CampaignNames;
