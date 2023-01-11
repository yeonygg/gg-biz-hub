import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Component } from "react";
=======
>>>>>>> 5cd902b (created custom creatives page)
=======
import { Component } from "react";
>>>>>>> 20d30b9 (updated custom page)
import {
  Card,
  Section,
  Heading,
  BodyText,
  InputSelect,
  IconButton,
  Tooltip,
<<<<<<< HEAD
<<<<<<< HEAD
  InputToggle,
=======
>>>>>>> 5cd902b (created custom creatives page)
=======
  InputToggle,
>>>>>>> 20d30b9 (updated custom page)
} from "pier-design-system";
import Link from "next/link";
import CustomAdd from "../components/CustomAdd";
import customFeatures from "../constants/custom";
<<<<<<< HEAD
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
      key: [],
      hidden: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // getUnitIndex = (key) => {
  //   const customConfig = this.state;
  //   console.log(customConfig);
  //   return customConfig.map((obj) => obj.key).indexOf(key);
  // };

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
    const index = e.target.selectedIndex - 1;
    clearTimeout(setDebounce);
    setDebounce = setTimeout(() => {
      this.setState({
        // name: e.target.value,
        key: this.state.key.push(customFeatures[index]),
        hidden: false,
        // description: customFeatures[index].description,
        // objective: customFeatures[index].objective,
        // bestPractices: customFeatures[index].bestPractices,
        // minSpend: customFeatures[index].minSpend,
        // cpmUpcharge: customFeatures[index].floorCPM,
        // clientRequirements: customFeatures[index].clientRequirements,
        // programmatic: customFeatures[index].programmatic,
        // designTime: customFeatures[index].turnaroundTime,
        // cesTime: customFeatures[index].cesTurnaroundTime,
      });

      if (this.state.hidden === false) {
      }
    }, 250);

    console.log(this.state);
    console.log(index);
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
        {this.state.key.map((index) => {
          <CustomCard custom={index} />;
        })}

        <Link href="/">Home</Link>
      </div>
    );
  }
}

export default App;
=======
=======
import CustomCard from "../components/CustomCard";
import UUIDV4 from "../helpers/helpers";
>>>>>>> 20d30b9 (updated custom page)

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

<<<<<<< HEAD
      <Link href="/">Home</Link>
    </div>
  );
};
export default CustomCreatives;
>>>>>>> 5cd902b (created custom creatives page)
=======
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
>>>>>>> 20d30b9 (updated custom page)
