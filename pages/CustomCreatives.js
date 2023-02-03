import React from "react";
<<<<<<< HEAD
import { Component } from "react";
=======
>>>>>>> 5cd902b (created custom creatives page)
import {
  Card,
  Section,
  Heading,
  BodyText,
  InputSelect,
  IconButton,
  Tooltip,
<<<<<<< HEAD
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
=======
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
>>>>>>> 5cd902b (created custom creatives page)
