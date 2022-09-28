import {
  InputGroup,
  InputText,
  InputSelect,
  Section,
} from "pier-design-system";

const CreativeRow = () => {
  return (
    <Section padding="sm" className="client-section">
      <div className="client-name-input">
        <InputGroup label="client name" size="sm" error="" dark={false}>
          <InputText size="sm" placeholder="Enter Text" />
        </InputGroup>
      </div>

      <div className="campaign-name-input">
        <InputGroup label="campaign name" size="sm" error="" dark={false}>
          <InputText size="sm" placeholder="Enter Text" />
        </InputGroup>
      </div>

      <div className="campaign-budget-input">
        <InputGroup
          label="campaign budget"
          size="sm"
          error="(optional)"
          dark={false}
        >
          <InputText size="sm" placeholder="Enter Text" />
        </InputGroup>
      </div>
    </Section>
  );
};

export default CreativeRow;
