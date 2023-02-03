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

    return this.state.selectCustomFeatures.map((id) => customFeatures.find((feature) => feature.id === id));
  };

  removeCustomSelect = () => {
    const newCustomArray = this.state.selectCustomFeatures;
    const index = this.getCustomFeatures(id);
    newCustomArray.splice(index, 1);
    this.updateCustom(selectCustomFeatures);
  };

  updateCustom = (selectCustomFeatures) => {
    this.setState({
      selectCustomFeatures: selectCustomFeatures,
    });
    // console.log(this.state.campaign.unitConfig);
>>>>>>> 36fd239 (added function for listing applicable unit types)
  };

  render() {
    // console.log("render");
    const handleToggle = (event, field) => {
      if (field === "showAll") {
        for (let i = 0; i < this.state.selectCustomFeatures.length; i++) {
          if (event.target.checked === true) {
            console.log("testing");
          } else {
            console.log("else testing");
          }
        }
      }
    };
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
<<<<<<< HEAD
                    index={this.state.index}
                    key={UUIDV4()}
                    config={this.state}
=======
                    index={index}
                    value={this.state.selectCustomFeatures[index]}
                    key={Math.random() * 10000}
                    config={customFeatures}
>>>>>>> cbdb026 (fixed custom feature select functionality)
                    addCustom={this.createCustomSelect}
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
                onChange={(event) => {
                  handleToggle(event, "showAll");
                }}
              >
                Show All Custom Creatives
              </InputToggle>
            </div>
          </Section>
        </Card>
<<<<<<< HEAD
<<<<<<< HEAD
        {/* this.state.key.map((index) => {
          <CustomCard custom={index} />;
        }) */}

        <CustomCard custom={this.state} />
=======
        {this.getCustomFeatures().map((feature, index) => (
          
            feature != undefined && <CustomCard key={index} feature={feature} />
        ))}
>>>>>>> cbdb026 (fixed custom feature select functionality)
=======
        {this.getCustomFeatures().map(
          (feature, index) =>
            feature != undefined && <CustomCard key={index} feature={feature} />
        )}
>>>>>>> 36fd239 (added function for listing applicable unit types)

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
