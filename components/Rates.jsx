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
import RatesRow from "./RatesRow";
import { unitTypes, rateCatergories } from "../constants/units";
import RatesCard from "./RatesCard";

let setDebounce;

function Rates() {
  const [selectRates, setRates] = useState([null]);
  const [toggleAll, setToggle] = useState(false);

  const handleChange = (e, value, index) => {
    const newArray = selectRates;
    newArray[+index] = +value;
    setRates([...newArray]);
  };

  const createRates = () => {
    const newCustomArray = selectRates;
    newCustomArray.push(null);
    setRates([...newCustomArray]);
  };

  const getRates = () => {
    return selectRates.map((id) =>
      rateCatergories.find((rate) => rate.id === id)
    );
  };

  const removeRates = (index) => {
    const array = selectRates;
    array.splice(index, 1);
    setRates([...array]);
  };

  const updateRates = (selectRates) => {
    setRates([...selectRates]);
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
      <Heading>CPM Rates</Heading>
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
                Select Unit Type
              </BodyText>
            </div>

            <div className="-d-block" style={{ width: "100%" }}>
              {" "}
              {selectRates.map((value, index) => (
                <RatesRow
                  changeHandler={handleChange}
                  index={index}
                  value={selectRates[index]}
                  key={Math.random() * 10000}
                  config={unitTypes}
                  addCustom={createRates}
                  removeCustom={removeRates}
                  total={selectRates.length - 1}
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
        getRates().map(
          (rate, index) =>
            rate != undefined && (
              <RatesCard
                key={index}
                index={index}
                handleDelete={index}
                rate={rate}
                array={selectRates}
                removeCustom={removeRates}
              />
            )
        )}

      {toggleAll &&
        rateCatergories.map((rate, index) => (
          <RatesCard
            key={index}
            rate={rate}
            toggleAll={toggleAll}
            array={selectRates}
          />
        ))}

      <Section padding="lg"></Section>
    </Fragment>
  );
}

export default Rates;
