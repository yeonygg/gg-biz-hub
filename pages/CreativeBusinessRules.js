import React from "react";
import { Component } from "react";
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
import designSpendTiers from "../constants/designspends";

let setDebounce;

class App extends Component {
  constructor() {
    super();
    this.state = {
      spendThreshold: [null],
      toggleAll: false,
    };
  }

  handleChange = (e, value, index) => {
    const newArray = this.state.spendThreshold;
    newArray[+index] = +value; //convert to number
    this.setState({
      spendThreshold: newArray,
    });
  };

  createCustomSelect = () => {
    const newCustomArray = this.state.spendThreshold;
    newCustomArray.push(null);
    this.setState({
      spendThreshold: newCustomArray,
    });
  };

  getSpendThreshold = () => {
    return this.state.spendThreshold.map((id) =>
      designSpendTiers.find((spend) => spend.id === id)
    );
  };

  removeCustomSelect = (index) => {
    const array = this.state.spendThreshold;
    array.splice(index, 1);
    this.setState({
      spendThreshold: array,
    });
  };

  updateCustom = (spendThreshold) => {
    this.setState({
      spendThreshold: spendThreshold,
    });
  };

  removeCardFromAll = () => {
    const allArray = customFeatures;
  };

  handleToggle = (event) => {
    this.setState({
      toggleAll: event.target.checked,
    });
  };

  render() {
    // console.log("render");

    return (
      <div>
        <Section padding="sm"></Section>
        <Heading>Creative - Business Rules</Heading>
        <Link href="/">Home</Link>
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
                  <BodyText
                    size="xs"
                    style={{
                      color: "#A5B2B8",
                    }}
                  >
                    All Campaigns must be over $25,000
                  </BodyText>
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
                {this.state.spendThreshold.map((value, index) => (
                  <SpendThresholdRow
                    changeHandler={this.handleChange}
                    index={index}
                    value={this.state.spendThreshold[index]}
                    config={designSpendTiers}
                    key={Math.random() * 10000}
                    addCustom={this.createCustomSelect}
                    removeCustom={this.removeCustomSelect}
                    total={this.state.spendThreshold.length - 1}
                    toggleAll={this.state.toggleAll}
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
                onChange={this.handleToggle}
              >
                Show All Thresholds
              </InputToggle>
            </div>
          </Section>
        </Card>

        {/* this.state.key.map((index) => {
          <CustomCard custom={index} />;
        }) */}

        {!this.state.toggleAll &&
          this.getSpendThreshold().map(
            (spend, index) =>
              spend != undefined && (
                <BusinessRuleCard
                  key={index}
                  index={index}
                  handleDelete={index}
                  config={designSpendTiers}
                  spend={spend}
                  array={this.state.spendThreshold}
                  removeCustom={this.removeCustomSelect}
                  value={this.state.spendThreshold[index]}
                />
              )
          )}

        {this.state.toggleAll &&
          designSpendTiers.map((spend, index) => (
            <BusinessRuleCard
              key={index}
              spend={spend}
              toggleAll={this.state.toggleAll}
              array={this.state.spendThreshold}
            />
          ))}

        <Section padding="lg"></Section>
      </div>
    );
  }
}

export default App;
