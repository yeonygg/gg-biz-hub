import { InputGroup, InputText, Section, Heading } from "pier-design-system";

import { useContext, useState } from "react";
import { InputsContext } from "../Contexts/InputsContext";

const CampaignNames = (props) => {
  const [clientName, setClientName] = useState("");
  return (
    <Section padding="sm" className="client-section">
      <InputsContext.Provider value={{ clientName, setClientName }}>
        <div className="client-name">
          <Heading size="xs">{clientName}</Heading>
        </div>
      </InputsContext.Provider>

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
