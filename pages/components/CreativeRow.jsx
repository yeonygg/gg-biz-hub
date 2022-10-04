import CustomAdd from "./CustomAdd";

import {
  InputGroup,
  InputText,
  InputSelect,
  Section,
  InputToggle,
  IconButton,
  Tooltip,
} from "pier-design-system";

const CreativeRow = (props) => {

  const handleChange = (event, field) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    if(field === 'unitCount' || field === 'versionCount') value = ~~value;
    props.changeHandler(props.index, value, field);
    if(field === 'unitType') {
      if(value.includes("Custom")) {
        props.changeHandler(props.index, true, 'isCustom');
      } else {
        props.changeHandler(props.index, false, 'isCustom');
      }
    }
  }

  const handleDelete = (event) => {
    props.deleteHandler(props.index);
  }

  return (
    <div>
      <Section padding="xs" className="client-section">
        <div className="client-name-input">
          <InputGroup label="unit type" size="sm" error="" dark={false}>
            <InputSelect
              size="sm"
              disabled={false}
              dark={false}
              error={false}
              capleft={false}
              required=""
              onChange={(event) => {handleChange(event, 'unitType')} }
            >
              <option value="">Select your creative</option>
              <option value="In-Screen">In-Screen</option>
              <option value="In-Screen Custom">In-Screen Custom</option>
              <option value="In-Image">In-Image</option>
              <option value="In-Image Custom">In-Image Custom</option>
              <option value="In-Image Canvas">In-Image Canvas</option>
              <option value="In-Screen Frame">In-Screen Frame</option>
              <option value="In-Screen Expandable">In-Screen Expandable</option>
              <option value="In-Image Expandable">In-Image Expandable</option>
              <option value="In-Screen Expandable Video">In-Screen Expandable Video</option>
            </InputSelect>
          </InputGroup>
        </div>

        <div className="num-units-input">
          <InputGroup label="Unit Count" size="sm" error="" dark={false}>
            <InputText size="sm" placeholder="Enter Number" 
              onChange={(event) => {handleChange(event, 'unitCount')} }/>
          </InputGroup>
        </div>

        <div className="num-units-input">
          <InputGroup label="Version Count" size="sm" error="" dark={false}>
            <InputText size="sm" placeholder="Enter Number" 
              onChange={(event) => {handleChange(event, 'versionCount')} }/>
          </InputGroup>
        </div>

        <div className="toggle-button">
          <InputToggle size="sm" disabled={false} dark={false} error={false} className="-m-r-5"
              onChange={(event) => {handleChange(event, 'isExpedited')} }>
            Expedited
          </InputToggle>
          <Tooltip text="Delete creative">
            <IconButton
              title="Button"
              icon="far fa-trash"
              size="sm"
              disabled={false}
              dark={false}
              pill={false}
              danger={true}
              onClick={handleDelete}
            />
          </Tooltip>
        </div>
      </Section>
      {props.config.isCustom && ( <CustomAdd config={props.config} />)}
    </div>
  );
};

export default CreativeRow;
