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
          <InputSelect
            size="sm"
            disabled={false}
            dark={false}
            error={false}
            capleft={false}
            required=""
          >
            <option value="">Select your creative</option>
            <option value="1">In-screen</option>
            <option value="2">In-image</option>
            <option value="3">In-image Canvas</option>
            <option value="4">In-screen Frame</option>
            <option value="5">In-screen Expandable</option>
            <option value="5">In-image Expandable</option>
            <option value="5">In-screen Expandable Video</option>
          </InputSelect>
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
