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
  const handleChange = (event, field) => {
    const value = event.target.type === "checkbox";
    props.changeHandler(props.index, value, field);

    if (field === "customFeatures") {
      // console.log(checkCustomizable);

      props.changeHandler(
        props.index,
        customFeatures.turnaroundTime,
        "turnaroundTime"
      );
      props.changeHandler(
        props.index,
        unitTypes[checkCustomizable].customFeatures,
        "customFeatures"
      );
      props.changeHandler(
        props.index,
        unitTypes[checkCustomizable].minSpend,
        "minSpend"
      );
      if (checkCustomizable) {
        props.changeHandler(
          props.index,
          unitTypes[checkCustomizable].customizable,
          "isCustomizable"
        );
      }
      if (checkCustomizable) {
        props.changeHandler(
          props.index,
          unitTypes[checkCustomizable].cesRequired,
          "cesRequired"
        );
      }
    }
    if (field === "customOn") {
      if (event.target.checked === true) {
        props.changeHandler(props.index, true, "customOn");
      } else {
        props.changeHandler(props.index, false, "customOn");
      }
    }

    if (field === "customUnit") {
      const custIndex = customFeatures.map((obj) => obj.name).indexOf(value);
      props.changeHandler(
        props.index,
        customFeatures[custIndex].turnaroundTime,
        "customTurnaroundTime"
      );

      const ceTurnaround = customFeatures[custIndex].cesRequired
        ? customFeatures[custIndex].cesTurnaroundTime
        : 1;
      customFeatures[custIndex].cesRequired &&
        props.changeHandler(props.index, ceTurnaround, "cesTurnaroundTime");

      props.changeHandler(
        props.index,
        customFeatures[custIndex].floorCPM,
        "customFloorCPM"
      );
      props.changeHandler(
        props.index,
        customFeatures[custIndex].openCPM,
        "customOpenCPM"
      );
      props.changeHandler(
        props.index,
        customFeatures[custIndex].minSpend,
        "customMinSpend"
      );
      props.changeHandler(
        props.index,
        customFeatures[custIndex].cesTurnaroundTime,
        "cesTurnaroundTime"
      );
      props.changeHandler(
        props.index,
        customFeatures[custIndex].cesRequired,
        "cesRequired"
      );
    }
  };

  const handleDelete = (event) => {
    props.deleteHandler(props.index);
  };
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
              onChange={(event) => {
                handleChange(event, "customFeatures");
              }}
            >
              <option disabled={true} selected={true} value="">
                Select your Custom Add On
              </option>
              {customFeatures.map(function (customIndex) {
                const custom = customFeatures[customIndex];
                return <option key={custom.id}>{custom.name}</option>;
              })}
              {/*
              {customFeatures.map((custom) => (
                <option key={custom.id}>{custom.name}</option>
              ))}

              */}
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
