import { InputGroup, InputText, Section, Heading } from "pier-design-system";

const CampaignNames = () => {
  return (
    <Section padding="sm" className="client-section">
      <div className="client-name">
        <Heading size="xs">Client Name</Heading>
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
