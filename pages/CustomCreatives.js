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
} from "pier-design-system";
import Link from "next/link";
import customFeatures from "../constants/custom";
import CustomCard from "../components/CustomCard";
import CustomSelectRow from "../components/CustomSelectRow";

let setDebounce;

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectCustomFeatures: [null],
      toggleAll: false,
    };
  }

  handleChange = (e, value, index) => {
    const newArray = this.state.selectCustomFeatures;
    newArray[+index] = +value; //convert to number
    this.setState({
      selectCustomFeatures: newArray,
    });
  };

  createCustomSelect = () => {
    const newCustomArray = this.state.selectCustomFeatures;
    newCustomArray.push(null);
    this.setState({
      selectCustomFeatures: newCustomArray,
    });
  };

  getCustomFeatures = () => {
    return this.state.selectCustomFeatures.map((id) =>
      customFeatures.find((feature) => feature.id === id)
    );
  };

  removeCustomSelect = (index) => {
    const array = this.state.selectCustomFeatures;
    array.splice(index, 1);
    this.setState({
      selectCustomFeatures: array,
    });
  };

  updateCustom = (selectCustomFeatures) => {
    this.setState({
      selectCustomFeatures: selectCustomFeatures,
    });
    // console.log(this.state.campaign.unitConfig);
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
        <Heading>Creative - Custom Creatives</Heading>
        <Link href="/">Home</Link>

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
                {this.state.selectCustomFeatures.map((value, index) => (
                  <CustomSelectRow
                    changeHandler={this.handleChange}
                    index={index}
                    value={this.state.selectCustomFeatures[index]}
                    key={Math.random() * 10000}
                    config={customFeatures}
                    addCustom={this.createCustomSelect}
                    removeCustom={this.removeCustomSelect}
                    total={this.state.selectCustomFeatures.length - 1}
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
                Show All Custom Creatives
              </InputToggle>
            </div>
          </Section>
        </Card>

        {/* this.state.key.map((index) => {
          <CustomCard custom={index} />;
        }) */}

        {!this.state.toggleAll &&
          this.getCustomFeatures().map(
            (feature, index) =>
              feature != undefined && (
                <CustomCard
                  key={index}
                  index={index}
                  handleDelete={index}
                  feature={feature}
                  array={this.state.selectCustomFeatures}
                  removeCustom={this.removeCustomSelect}
                />
              )
          )}

        {this.state.toggleAll &&
          customFeatures.map((feature, index) => (
            <CustomCard
              key={index}
              feature={feature}
              toggleAll={this.state.toggleAll}
              array={this.state.selectCustomFeatures}
            />
          ))}

        <Section padding="lg"></Section>
      </div>
    );
  }
}

export default App;
