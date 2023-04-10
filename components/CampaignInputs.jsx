import { InputGroup, InputText, Section } from "pier-design-system";
const CampaignInputs = (props) => {
  // const { setClientName } = useContext(InputsContext);
  // const [clientName, setClientName] = useState("");

  const handleChange = (event, field) => {
    const value = event.target.value;
    props.changeHandler(value, field);
  };

  return (
    <div className="client-section">
      <div className="campaign-name-input">
        <InputGroup label="client name" size="sm" error="" dark={false}>
          <InputText
            size="sm"
            placeholder="Enter Text"
            data-field="clientName"
            onChange={(event) => {
              handleChange(event, "clientName");
            }}
          />
        </InputGroup>
      </div>

      <div className="campaign-name-input">
        <InputGroup label="campaign name" size="sm" error="" dark={false}>
          <InputText
            size="sm"
            placeholder="Enter Text"
            onChange={(event) => {
              handleChange(event, "campaignName");
            }}
          />
        </InputGroup>
      </div>

      <div className="campaign-budget-input">
        <InputGroup label="budget" size="sm" error="(optional)" dark={false}>
          <InputText
            size="sm"
            placeholder="Enter Number"
            onChange={(event) => {
              handleChange(event, "campaignBudget");
            }}
            // onChange={handleChange}
            // value={inputValue}
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default CampaignInputs;
