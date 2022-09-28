import {
  InputGroup,
  InputText,
  InputSelect,
  Section,
  InputToggle,
  IconButton,
} from "pier-design-system";

const CustomAdd = () => {
  return (
    <Section padding="xs" className="add-on-section">
      <div className="plus-alignment">
        <IconButton
          title="Button"
          icon="fas fa-plus"
          size="sm"
          disabled={true}
          dark={false}
          pill={false}
        />
      </div>

      <div className="add-on-input">
        <InputGroup label="custom add on" size="sm" error="" dark={false}>
          <InputSelect
            size="sm"
            disabled={false}
            dark={false}
            error={false}
            capleft={false}
            required=""
          >
            <option value="">Select your add on</option>
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
    </Section>
  );
};

export default CustomAdd;
