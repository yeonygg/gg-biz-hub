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
=======
>>>>>>> 5cd902b (created custom creatives page)
} from "pier-design-system";
import Link from "next/link";
import CustomAdd from "../components/CustomAdd";
import customFeatures from "../constants/custom";
<<<<<<< HEAD
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

class App extends Component {
  constructor() {
    super();
    this.state = {
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
    return (
      <div>
        <Section padding="sm"></Section>
        <Heading>Creative - Custom Creatives</Heading>
        <Card className="-m-b-6">
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
            <div className="-d-flex -justify-content-end -m-t-6">
              <InputToggle
                size="sm"
                disabled={false}
                dark={false}
                error={false}
              >
                Show All Custom Creatives
              </InputToggle>
            </div>
          </Section>
        </Card>

        <CustomCard custom={this.state} />

        <Link href="/">Home</Link>
      </div>
    );
  }
}

export default App;
=======

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
