import React from "react";
import {
  Card,
  Section,
  Heading,
  BodyText,
  InputSelect,
  IconButton,
  Tooltip,
} from "pier-design-system";
import Link from "next/link";
import CustomAdd from "../components/CustomAdd";
import customFeatures from "../constants/custom";

const CustomCreatives = (props) => {
  return (
    <div>
      <Section padding="sm"></Section>
      <Heading>Creative - Custom Creatives</Heading>
      <Card>
        <Section
          padding="lg"
          className="-flex-row -justify-content-center -align-items-center"
          style={{ marginTop: "1.125rem" }}
        >
          <div className="custom-page-select">
            <BodyText
              style={{
                fontWeight: "bold",
                width: "45%",
                paddingRight: "4rem",
              }}
            >
              Select Custom Creative
            </BodyText>

            <InputSelect
              size="sm"
              disabled={false}
              dark={false}
              error={false}
              capleft={false}
              required=""
              autoFocus
            >
              <option disabled={true} selected={true} value="">
                Select your Custom Add On
              </option>
              {customFeatures.map((custom) => (
                <option key={custom.id}>{custom.name}</option>
              ))}
            </InputSelect>
            <Tooltip text="Add Custom Creative">
              <IconButton
                style={{ marginLeft: "1rem" }}
                className="plus-button"
                title="Button"
                icon="far fa-plus"
                size="sm"
                disabled={false}
                dark={false}
                pill={false}
                hero={true}
              />
            </Tooltip>
          </div>
        </Section>
      </Card>

      <Link href="/">Home</Link>
    </div>
  );
};
export default CustomCreatives;
