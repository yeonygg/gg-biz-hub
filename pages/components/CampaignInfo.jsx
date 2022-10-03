import { InputGroup, InputText, Section } from "pier-design-system";
import { useContext, useState } from "react";
import { InputsContext } from "../Contexts/InputsContext";

const CampaignInfo = (props) => {
  const { setClientName } = useContext(InputsContext);
  // const [clientName, setClientName] = useState("");
  return (
    <Section padding="sm" className="client-section">
      <div className="client-name-input">
        <InputGroup label="client name" size="sm" error="" dark={false}>
          <InputText
            size="sm"
            placeholder="Enter Text"
            onChange={(event) => {
              setClientName(event.target.value);
              console.log(clientName);
            }}
            // value={clientName}
          />
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
          <InputText
            size="sm"
            placeholder="Enter Text"
            // onChange={handleChange}
            // value={inputValue}
          />
        </InputGroup>
      </div>
    </Section>
  );
};

export default CampaignInfo;
