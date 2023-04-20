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
  HR,
  Table,
  Button,
} from "pier-design-system";
import { Link } from "react-router-dom";
import customFeatures from "../constants/custom";
import unitTypes from "../constants/units";
import Image from "next/image";
import DesignBucketsCard from "../components/DesignBucketsCard";
import BusinessRuleCard from "../components/BusinessRuleCard";
import SpendThresholdRow from "../components/SpendThresholdRow";
import spendTiers from "../constants/spends";
import { isMobile } from "react-device-detect";

let setDebounce;

function CreativeBusinessRules() {
  const navigate = useNavigate();
  const params = useParams();
  const ids =
    Object.keys(params).length > 0 ? params.id.split(",").map(Number) : [null];
  const [spendThreshold, setSpendThreshold] = useState([null]);
  const [toggleAll, setToggle] = useState(false);

  console.log(window.innerWidth);

  const handleChange = (e, value, index) => {
    const newArray = spendThreshold;
    newArray[+index] = +value; //convert to number
    setSpendThreshold([...newArray]);
    navigate(`/creative-rules/${spendThreshold.toString()}`);
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
    navigate(`/creative-rules/${spendThreshold.toString()}`);
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
      <Heading className="heading-style">Creative - Business Rules</Heading>
      <DesignBucketsCard />
      <Card>
        <Section className="section-style">
          <div className="threshold-card-wrapper">
            <div className="campaign-minimum-wrapper">
              <BodyText
                style={{
                  fontWeight: "bold",
                  marginBottom: "0",
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
              <div className="exception-section-wrapper">
                <div className="exception-section">
                  <div className="-m-t-5">
                    <i
                      className="pier-button-icon__icon fas fa-info-circle"
                      style={{ marginRight: "5px", color: "#25B9EF" }}
                    ></i>
                  </div>

                  <BodyText size="xs" className="exception-text-1">
                    All Exception requests should go through Salesforce. If
                    Exception requires faster than 24 hr turnaround, after SF
                    submission, you can email adquestions@gumgum.com for quicker
                    response.
                  </BodyText>
                </div>

                <div className="exception-section">
                  <div className="-m-t-5">
                    <i
                      className="pier-button-icon__icon fas fa-info-circle"
                      style={{ marginRight: "5px", color: "#25B9EF" }}
                    ></i>
                  </div>

                  <BodyText size="xs" className="exception-text-2">
                    Upon pushback from seller or client (after first exception
                    submitted), CSM at their discretion will schedule a call
                    with Ops Leader and Sales Leader
                  </BodyText>
                </div>
              </div>
            </div>
          </div>

          <div className="spend-select-wrapper">
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
                  exclude={spendThreshold}
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
                key={Math.random() * 10000}
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
            key={Math.random() * 10000}
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
