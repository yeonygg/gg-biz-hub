import { InputGroup, InputText, Section } from "pier-design-system";

const CampaignInfo = () => {
  return (
    <Section padding="sm" className="client-section">
      <InputGroup label="client name" size="sm" error="" dark={false}>
        <InputText size="sm" placeholder="Enter Text" />
      </InputGroup>
      <InputGroup label="campaign name" size="sm" error="" dark={false}>
        <InputText size="sm" placeholder="Enter Text" />
      </InputGroup>
      <InputGroup
        label="campaign budget"
        size="sm"
        error="(optional)"
        dark={false}
      >
        <InputText size="sm" placeholder="Enter Text" />
      </InputGroup>
    </Section>
  );
};

export default CampaignInfo;
