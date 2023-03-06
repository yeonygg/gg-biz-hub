import React, { Fragment } from "react";
import { useState, useEffect, Component } from "react";
import {
  Card,
  Section,
  Heading,
  BodyText,
  InputSelect,
  IconButton,
  Tooltip,
  InputToggle,
} from "pier-design-system";
import Link from "next/link";
import customFeatures from "../constants/custom";
import CustomCard from "../components/CustomCard";
import CustomSelectRow from "../components/CustomSelectRow";

let setDebounce;

function CustomCreatives() {
  const [selectCustomFeatures, setCustomFeatures] = useState([null]);
  const [toggleAll, setToggle] = useState(false);

  const handleChange = (e, value, index) => {
    const newArray = selectCustomFeatures;
    newArray[+index] = +value;
    setCustomFeatures([...newArray]);
  };

  const createCustomSelect = () => {
    const newCustomArray = selectCustomFeatures;
    newCustomArray.push(null);
    setCustomFeatures([...newCustomArray]);
  };

  const getCustomFeatures = () => {
    return selectCustomFeatures.map((id) =>
      customFeatures.find((feature) => feature.id === id)
    );
  };

  const removeCustomSelect = (index) => {
    const array = selectCustomFeatures;
    array.splice(index, 1);
    setCustomFeatures([...array]);
  };

  const updateCustom = (selectCustomFeatures) => {
    setCustomFeatures([...selectCustomFeatures]);
    // console.log(this.state.campaign.unitConfig);
  };

  const removeCardFromAll = () => {
    const allArray = customFeatures;
  };

  const handleToggle = (event) => {
    setToggle(event.target.checked);
  };

  return (
    <Fragment>
      <Heading>Creative - Custom Creatives</Heading>
      <Card className="-m-b-6">
        <Section
          padding="lg"
          className="-flex-row -justify-content-center -align-items-center"
          style={{ marginTop: "1.125rem" }}
        >
          <div className="-d-flex" style={{ width: "100%" }}>
            <div className="custom-body-text">
              <BodyText
                style={{
                  fontWeight: "bold",
                }}
              >
                Select Custom Creative
              </BodyText>
            </div>

            <div className="-d-block" style={{ width: "100%" }}>
              {" "}
              {selectCustomFeatures.map((value, index) => (
                <CustomSelectRow
                  changeHandler={handleChange}
                  index={index}
                  value={selectCustomFeatures[index]}
                  key={Math.random() * 10000}
                  config={customFeatures}
                  addCustom={createCustomSelect}
                  removeCustom={removeCustomSelect}
                  total={selectCustomFeatures.length - 1}
                  toggleAll={toggleAll}
                />
              ))}
            </div>
          </div>

          <div className="-d-flex -justify-content-end -m-t-6">
            <InputToggle
              size="sm"
              disabled={false}
              dark={false}
              error={false}
              onChange={handleToggle}
            >
              Show All Custom Creatives
            </InputToggle>
          </div>
        </Section>
      </Card>

      {/* this.state.key.map((index) => {
        <CustomCard custom={index} />;
      }) */}

      {!toggleAll &&
        getCustomFeatures().map(
          (feature, index) =>
            feature != undefined && (
              <CustomCard
                key={index}
                index={index}
                handleDelete={index}
                feature={feature}
                array={selectCustomFeatures}
                removeCustom={removeCustomSelect}
              />
            )
        )}

      {toggleAll &&
        customFeatures.map((feature, index) => (
          <CustomCard
            key={index}
            feature={feature}
            toggleAll={toggleAll}
            array={selectCustomFeatures}
          />
        ))}

      <Section padding="lg"></Section>
    </Fragment>
  );
}

export default CustomCreatives;
