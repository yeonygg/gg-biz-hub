import {
  InputGroup,
  InputText,
  InputSelect,
  Section,
  InputToggle,
  IconButton,
} from "pier-design-system";

const CreativeRow = () => {
  return (
    <Section padding="sm" className="client-section">
      <div className="client-name-input">
        <InputGroup label="unit type" size="sm" error="" dark={false}>
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
            <option value="2">In-screen Custom</option>
            <option value="3">In-image</option>
            <option value="4">In-image Canvas</option>
            <option value="5">In-screen Frame</option>
            <option value="6">In-screen Expandable</option>
            <option value="7">In-image Expandable</option>
            <option value="8">In-screen Expandable Video</option>
          </InputSelect>
        </InputGroup>
      </div>

      <div className="num-units-input">
        <InputGroup label="number of units" size="sm" error="" dark={false}>
          <InputText size="sm" placeholder="Enter Text" />
        </InputGroup>
      </div>

      <div className="num-units-input">
        <InputGroup label="number of units" size="sm" error="" dark={false}>
          <InputText size="sm" placeholder="Enter Text" />
        </InputGroup>
      </div>

      <div className="toggle-button">
        <InputToggle size="sm" disabled={false} dark={false} error={false}>
          Expedited
        </InputToggle>
        <IconButton
          title="Button"
          icon="far fa-trash"
          size="sm"
          disabled={false}
          dark={false}
          pill={false}
          danger={true}
        />
      </div>
    </Section>
  );
};

export default CreativeRow;
