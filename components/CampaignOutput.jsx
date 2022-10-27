import {
  InputGroup,
  InputText,
  Section,
  Heading,
  Card,
} from "pier-design-system";

import { useState } from "react";

const CampaignOutput = (props) => {
  const toTitleCase = (s) => {
    if (typeof s === "string" && s.length > 0) {
      const words = s.split(" ");
      if (Array.isArray(words) && words.length > 0) {
        if (words.length === 1) {
          const word = words[0];
          const matches = word.charAt(0).match(/\w+/i);
          const lines = word.split("\n");
          if (Array.isArray(lines) && lines.length > 1) {
            return lines
              .map((line) => {
                return toTitleCase(line);
              })
              .join("\n");
          } else if (Array.isArray(matches)) {
            return word
              .split("")
              .map((c, i) => {
                if (i === 0) {
                  return c.toUpperCase();
                }
                return c.toLowerCase();
              })
              .join("");
          } else {
            return word.charAt(0).concat(toTitleCase(word.slice(1)));
          }
        } else {
          return words.map((word) => toTitleCase(word)).join(" ");
        }
      }
    }

    return "";
  };

  return (
    <Card className="card -p-a-4">
      <Section padding="sm" className="client-section">
        <div className="client-name">
          <Heading className="-m-b-3" size="md">
            {toTitleCase(props.campaign.clientName)}
          </Heading>
          <Heading className="-m-b-0" size="xs">
            {toTitleCase(props.campaign.campaignName)}
          </Heading>
        </div>

        <div className="campaign-budget -text-a-right">
          <Heading className="-m-b-0" size="xs">
            Budget
          </Heading>
          <Heading className="-m-b-0" size="lg">
            $
            {parseFloat(props.campaign.campaignBudget).toLocaleString("eng-US")}
          </Heading>
        </div>
      </Section>
    </Card>
  );
};

export default CampaignOutput;
