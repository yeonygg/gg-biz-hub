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
<<<<<<< HEAD
import CustomAdd from "../components/CustomAdd";
import customFeatures from "../constants/custom";
import CustomCard from "../components/CustomCard";
import UUIDV4 from "../helpers/helpers";

let setDebounce;

let customSchema = {
  key: null,
  name: "",
  description: "",
  minSpend: 0,
  designTime: 0,
  cesTime: 0,
  programmatic: "",
  cpmUpcharge: 0,
  objective: "",
  bestPractices: "",
  clientRequirements: "",
};

=======
import customFeatures from "../constants/custom";
import CustomCard from "../components/CustomCard";
import CustomSelectRow from "../components/CustomSelectRow";

let setDebounce;

>>>>>>> develop
class App extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      key: null,
      name: "",
      description: "",
      minSpend: 0,
      designTime: 0,
      cesTime: 0,
      programmatic: "",
      cpmUpcharge: 0,
      objective: "",
      bestPractices: "",
      clientRequirements: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  //   getCustomInputs = (key) => {
  //     const customConfig = this.state;
  //     const index = this.getUnitIndex(key);
  //     return customConfig[index];
  //   };

  //   getUnitIndex = (key) => {
  //     const customConfig = this.state;
  //     console.log(customConfig);
  //     return customConfig.map((obj) => obj.key).indexOf(key);
  //   };

  //   setCustomInputs = (value, field) => {
  //     clearTimeout(setDebounce);
  //     const customSelect = this.state;
  //     customSelect[field] = value;
  //     setDebounce = setTimeout(() => {
  //       this.updateCustom(customSelect);
  //       console.log(this.state.customSelect);
  //     }, 250);
  //   };

  //   removeCustomConfig = (key) => {
  //     const customSelect = this.state;
  //     const index = this.getUnitIndex(key);
  //     customSelect.splice(index, 1);
  //     this.updateCustom(customSelect);
  //   };

  //   createUnitConfig = () => {
  //     const customSelect = this.state;
  //     const newUnit = Object.assign({}, customSchema);
  //     newUnit.key = UUIDV4();
  //     customSelect.push(newUnit);
  //     this.updateCustom(customSelect);
  //   };

  //   setUnitConfig = (key, value, field) => {
  //     const customSelect = this.state;
  //     const unit = this.getCustomInputs(key);
  //     unit[field] = value;
  //     customSelect.unitConfig[this.getUnitIndex(key)] = unit;
  //     this.updateCustom(customSelect);
  //   };

  //   updateCustom = (customSelect) => {
  //     this.setState({
  //       customSelect: customSelect,
  //     });
  //     // console.log(this.state.campaign.unitConfig);
  //   };

  handleChange(e) {
    console.log("custom thing selected!");
    this.setState({
      name: e.target.value,
    });
    console.log(this.state);
    console.log(e.target.value);
  }

  render() {
=======
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

  addCard(e) {
    console.log("button clicked!");
  }

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
    console.log(this.state.selectCustomFeatures);
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
    console.log(this.state.selectCustomFeatures);
  };

  render() {
    // console.log("render");

>>>>>>> develop
    return (
      <div>
        <Section padding="sm"></Section>
        <Heading>Creative - Custom Creatives</Heading>
<<<<<<< HEAD
=======
        <Link href="/">Home</Link>

>>>>>>> develop
        <Card className="-m-b-6">
          <Section
            padding="lg"
            className="-flex-row -justify-content-center -align-items-center"
            style={{ marginTop: "1.125rem" }}
          >
<<<<<<< HEAD
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
                onChange={this.handleChange}
              >
                <option disabled={true} selected={true} value="">
                  Select your Custom Add On
                </option>
                {/* customFeatures.map(function (customIndex) {
                const custom = customFeatures[customIndex];
                return <option key={custom.id}>{custom.name}</option>;
              }) */}

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
=======
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

>>>>>>> develop
            <div className="-d-flex -justify-content-end -m-t-6">
              <InputToggle
                size="sm"
                disabled={false}
                dark={false}
                error={false}
<<<<<<< HEAD
=======
                onChange={this.handleToggle}
>>>>>>> develop
              >
                Show All Custom Creatives
              </InputToggle>
            </div>
          </Section>
        </Card>

<<<<<<< HEAD
        <CustomCard custom={this.state} />

        <Link href="/">Home</Link>
=======
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
>>>>>>> develop
      </div>
    );
  }
}

export default App;
