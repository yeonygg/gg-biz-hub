import { InputGroup, InputText, Section } from "pier-design-system";

const CampaignInfo = (props) => {
  return (
    <Section padding="sm" className="client-section">
      <div className="client-name-input">
        <InputGroup label="client name" size="sm" error="" dark={false}>
          <InputText
            size="sm"
            placeholder="Enter Text"
            // value={props.clientname}
          />
        </InputGroup>
      </div>

      <div className="campaign-name-input">
        <InputGroup label="campaign name" size="sm" error="" dark={false}>
          <InputText
            size="sm"
            placeholder="Enter Text"
            // value={props.campaignname}
          />
        </InputGroup>
      </div>

      <div className="campaign-budget-input">
        <InputGroup
          label="campaign budget"
          size="sm"
          error="(optional)"
          dark={false}
        >
          <InputText
            size="sm"
            value={props.campaignbudget}
            placeholder="Enter Text"
          />
        </InputGroup>
      </div>
    </Section>
  );
};

export default CampaignInfo;
