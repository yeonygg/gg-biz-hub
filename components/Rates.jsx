import React, { Fragment } from "react";
import { useState, useEffect, Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { UUIDV4 } from "../helpers/helpers";
import { isMobile } from "react-device-detect";

let setDebounce;

function Rates() {
  const navigate = useNavigate();
  const params = useParams();
  const ids = Object.keys(params).length > 0 ? params.id.split(",").map(Number) : [null];
  const [selectRates, setRates] = useState(ids);
  const [toggleAll, setToggle] = useState(false);

  const handleChange = (e, value, index) => {
    const newArray = selectRates;
    newArray[+index] = +value;
    setRates([...newArray]);
    navigate(`/rates/${selectRates.toString()}`);
    console.log(selectRates)
  };

  const createRates = () => {
    const newCustomArray = selectRates;
    newCustomArray.push(null);
    setRates([...newCustomArray]);
    console.log(selectRates)
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
    navigate(`/rates/${selectRates.toString()}`);
  };

  const updateRates = (selectRates) => {
    setRates([...selectRates]);
    // console.log(this.state.campaign.unitConfig);
  };

  const handleToggle = (event) => {
    setToggle(event.target.checked);
  };

  return (
    <Fragment>
      <Heading className="heading-style">CPM Rates</Heading>
      <Card>
        <Section className="section-style">
          <div className="rates-select-wrapper">
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
                  exclude={selectRates}
                />
              ))}
            </div>
          </div>

          <div className="-d-flex -justify-content-end">
            <InputToggle
              size="sm"
              disabled={false}
              dark={false}
              error={false}
              onChange={handleToggle}
            >
              Show All Rates
            </InputToggle>
          </div>
        </Section>
      </Card>

      {!toggleAll &&
        getRates().map(
          (rate, index) =>
            rate != undefined && (
              <RatesCard
                key={UUIDV4()}
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
            key={UUIDV4()}
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
