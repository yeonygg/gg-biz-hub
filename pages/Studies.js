import React from "react";
import { Component } from "react";
import {
  Card,
  Section,
  Heading,
  BodyText,
  InputToggle,
} from "pier-design-system";
import Link from "next/link";
import designSpendTiers from "../constants/designspends";
import LotameDmps from "../components/LotameDmps";
import StudyRow from "../components/StudyRow";
import studies from "../constants/studies";
import StudiesCard from "../components/StudiesCard";

let setDebounce;

class App extends Component {
  constructor() {
    super();
    this.state = {
      studies: [null],
      toggleAll: false,
    };
  }

  handleChange = (e, value, index) => {
    const newArray = this.state.studies;
    newArray[+index] = +value; //convert to number
    this.setState({
      studies: newArray,
    });
  };

  createCustomSelect = () => {
    const newCustomArray = this.state.studies;
    newCustomArray.push(null);
    this.setState({
      studies: newCustomArray,
    });
  };

  getstudies = () => {
    return this.state.studies.map((id) =>
      studies.find((study) => study.id === id)
    );
  };

  removeCustomSelect = (index) => {
    const array = this.state.studies;
    array.splice(index, 1);
    this.setState({
      studies: array,
    });
  };

  updateCustom = (studies) => {
    this.setState({
      studies: studies,
    });
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
        <Heading>Studies/DMPs</Heading>
        <Link href="/">Home</Link>
        <LotameDmps />

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
                  Select a Study
                </BodyText>
              </div>

              <div className="-d-block" style={{ width: "100%" }}>
                {" "}
                {this.state.studies.map((value, index) => (
                  <StudyRow
                    changeHandler={this.handleChange}
                    index={index}
                    value={this.state.studies[index]}
                    config={studies}
                    key={Math.random() * 10000}
                    addCustom={this.createCustomSelect}
                    removeCustom={this.removeCustomSelect}
                    total={this.state.studies.length - 1}
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
                Show All Studies
              </InputToggle>
            </div>
          </Section>
        </Card>

        {/* this.state.key.map((index) => {
          <CustomCard custom={index} />;
        }) */}

        {!this.state.toggleAll &&
          this.getstudies().map(
            (study, index) =>
              study != undefined && (
                <StudiesCard
                  key={index}
                  index={index}
                  handleDelete={index}
                  config={spendTiers}
                  study={study}
                  array={this.state.studies}
                  removeCustom={this.removeCustomSelect}
                  value={this.state.studies[index]}
                />
              )
          )}

        {this.state.toggleAll &&
          studies.map((study, index) => (
            <StudiesCard
              key={index}
              study={study}
              toggleAll={this.state.toggleAll}
              array={this.state.studies}
            />
          ))}

        <Section padding="lg"></Section>
      </div>
    );
  }
}

export default App;
