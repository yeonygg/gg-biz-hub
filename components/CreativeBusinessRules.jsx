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
  HR,
  Table,
  Button,
} from "pier-design-system";
import Link from "next/link";
import customFeatures from "../constants/custom";
import unitTypes from "../constants/units";
import Image from "next/image";
import DesignBucketsCard from "../components/DesignBucketsCard";
import BusinessRuleCard from "../components/BusinessRuleCard";
import SpendThresholdRow from "../components/SpendThresholdRow";
import spendTiers from "../constants/spends";

let setDebounce;

function CreativeBusinessRules () {
  const [spendThreshold, setSpendThreshold] = useState([null]);
  const [toggleAll, setToggle] = useState(false);

  const handleChange = (e, value, index) => {
    const newArray = spendThreshold;
    newArray[+index] = +value; //convert to number
    setSpendThreshold([...newArray]);
  };

  const createCustomSelect = () => {
    const newCustomArray = spendThreshold;
    newCustomArray.push(null);
    setSpendThreshold([...newCustomArray]);
  };

  const getSpendThreshold = () => {
    return spendThreshold.map((id) =>
      spendTiers.find((spend) => spend.id === id)
    );
  };

  const removeCustomSelect = (index) => {
    const array = spendThreshold;
    array.splice(index, 1);
    setSpendThreshold([...array]);
  };

  const updateCustom = (spendThreshold) => {
    setSpendThreshold([...spendThreshold]);
  };

  const removeCardFromAll = () => {
    const allArray = customFeatures;
  };

  const handleToggle = (event) => {
    setToggle(event.target.checked);
  };

  return (
    <Fragment>
      <Heading>Creative - Business Rules</Heading>
      <DesignBucketsCard />
      <Card className="-m-b-6">
        <Section
          padding="lg"
          className="-flex-row -justify-content-center -align-items-center"
          style={{ marginTop: "1.125rem" }}
        >
          <div className="-d-flex">
            <div className="campaign-minimum-wrapper">
              <BodyText
                style={{
                  fontWeight: "bold",
                }}
              >
                Campaign & Unit Minimums
              </BodyText>
              <BodyText
                  size="xs"
                  style={{
                    color: "#A5B2B8",
                  }}
                >
                  All Campaigns must be over $25,000
                </BodyText>
            </div>

            <div className="exception-info-wrapper">
              <BodyText
                style={{
                  fontWeight: "bold",
                }}
              >
                Exception Information
              </BodyText>
              <div className="-d-flex">
                <div className="exception-section">
                  <div className="-m-t-5">
                    <Image
                      alt="exclamation icon"
                      width="140px"
                      height="140px"
                      src="/exclamation-icon.svg"
                      style={{ verticalAlign: "middle" }}
                    />
                  </div>

                  <BodyText
                    size="xs"
                    style={{ marginLeft: "2rem", paddingRight: "2rem" }}
                  >
                    All Exception requestions should go through Salesforce. If
                    Exception requires faster than 24 hr turnaround, after SF
                    submission, you can email adquestions@gumgum.com for
                    quicker response.
                  </BodyText>
                </div>

                <div className="exception-section">
                  <div className="-m-t-5">
                    <Image
                      alt="exclamation icon"
                      width="140px"
                      height="140px"
                      src="/exclamation-icon.svg"
                    />
                  </div>

                  <BodyText size="xs" style={{ marginLeft: "2rem" }}>
                    Upon pushback from seller or client (after first exception
                    submitted), CSM at their discretion will schedule a call
                    with Ops Leader and Sales Leader
                  </BodyText>
                </div>
              </div>
            </div>
          </div>

          <div className="-d-flex" style={{ width: "100%" }}>
            <div className="custom-body-text">
              <BodyText
                style={{
                  fontWeight: "bold",
                }}
              >
                Select Spend Threshold
              </BodyText>
            </div>

            <div className="-d-block" style={{ width: "100%" }}>
              {" "}
              {spendThreshold.map((value, index) => (
                <SpendThresholdRow
                  changeHandler={handleChange}
                  index={index}
                  value={spendThreshold[index]}
                  config={spendTiers}
                  key={Math.random() * 10000}
                  addCustom={createCustomSelect}
                  removeCustom={removeCustomSelect}
                  total={spendThreshold.length - 1}
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
              Show All Thresholds
            </InputToggle>
          </div>
        </Section>
      </Card>

      {!toggleAll &&
        getSpendThreshold().map(
          (spend, index) =>
            spend != undefined && (
              <BusinessRuleCard
                key={index}
                index={index}
                handleDelete={index}
                config={spendTiers}
                spend={spend}
                array={spendThreshold}
                removeCustom={removeCustomSelect}
                value={spendThreshold[index]}
              />
            )
        )}

      {toggleAll &&
        spendTiers.map((spend, index) => (
          <BusinessRuleCard
            key={index}
            spend={spend}
            toggleAll={toggleAll}
            array={spendThreshold}
          />
        ))}

      <Section padding="lg"></Section>
    </Fragment>
  );
  
}

export default CreativeBusinessRules;
