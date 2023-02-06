import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import CampaignInputs from "../components/CampaignInputs";
import CreativeRow from "../components/CreativeRow";
import SubHeading from "../components/SubHeading";
import RateBreakdownCard from "../components/RateBreakdownCard";
import SpendCard from "../components/SpendCard";
import DesignCard from "../components/DesignCard";
import CesCard from "../components/CesCard";
import CampaignOutput from "../components/CampaignOutput";
import { useState, useEffect, Component } from "react";
import { InputToggle } from "pier-design-system";
import UUIDV4 from "../helpers/helpers";
<<<<<<< HEAD
import Layout from "./Layout";
import { Fragment } from "react";
import Navigation from "../components/Navigation";
import CustomCreatives from "./CustomCreatives";

=======
import { Fragment } from "react";
import Layout from "./Layout";
import Navigation from "../components/Navigation";
import CustomCreatives from "./CustomCreatives";
>>>>>>> develop
import {
  Card,
  Heading,
  Section,
  BodyText,
  HR,
  Button,
  IconButton,
  Tooltip,
  Accordion,
} from "pier-design-system";

let setDebounce;
let unitSchema = {
  key: null,
  unitType: "In-screen",
  versionCount: 0,
  customUnit: null,
  customOn: false,
  isExpedited: false,
  isCustomizable: true,
  floorCPM: 0,
  openCPM: 0,
  turnaroundTime: 0,
  minSpend: 0,
  customFeatures: [],
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      accordionOpen: true,
      campaignText: "Campaign Details",
      bodyText: "Fill in required campaign info",
      creativeText: "Creative Plan",
      campaign: {
        clientName: undefined,
        campaignName: undefined,
        campaignBudget: 0,
        unitConfig: [],
      },
    };
  }

  setCampaignInputs = (value, field) => {
    clearTimeout(setDebounce);
    const campaign = this.state.campaign;
    campaign[field] = value;
    setDebounce = setTimeout(() => {
      this.updateCampaign(campaign);
      // console.log(this.state.campaign);
    }, 250);
  };

  getUnitConfig = (key) => {
    const unitConfig = this.state.campaign.unitConfig;
    const index = this.getUnitIndex(key);
    return unitConfig[index];
  };

  getUnitIndex = (key) => {
    const unitConfig = this.state.campaign.unitConfig;
    return unitConfig.map((obj) => obj.key).indexOf(key);
  };

  setUnitConfig = (key, value, field) => {
    const campaign = this.state.campaign;
    const unit = this.getUnitConfig(key);
    unit[field] = value;
    campaign.unitConfig[this.getUnitIndex(key)] = unit;
    this.updateCampaign(campaign);
  };

  removeUnitConfig = (key) => {
    const campaign = this.state.campaign;
    const index = this.getUnitIndex(key);
    campaign.unitConfig.splice(index, 1);
    this.updateCampaign(campaign);
  };
  createUnitConfig = () => {
    const campaign = this.state.campaign;
    const newUnit = Object.assign({}, unitSchema);
    newUnit.key = UUIDV4();
    campaign.unitConfig.push(newUnit);
    this.updateCampaign(campaign);
  };

  deleteAllUnits = () => {
    const campaign = this.state.campaign;
    campaign.unitConfig = [];
    this.updateCampaign(campaign);
  };

  updateCampaign = (campaign) => {
    this.setState({
      campaign: campaign,
    });
    // console.log(this.state.campaign.unitConfig);
  };

  toggleAccordion = () => {
    this.setState({
      accordionOpen: !this.state.accordionOpen,
    });
  };

  render() {
    const handleToggle = (event, field) => {
      if (field === "isExpedited") {
        for (let i = 0; i < this.state.campaign.unitConfig.length; i++) {
          if (event.target.checked === true) {
            this.setUnitConfig(
              this.state.campaign.unitConfig[i].key,
              true,
              "isExpedited"
            );
          } else {
            this.setUnitConfig(
              this.state.campaign.unitConfig[i].key,
              false,
              "isExpedited"
            );
          }
        }
      }
    };

    const accordionClass = this.state.accordionOpen
      ? "pier-accordion pier-accordion--open pier-accordion--card"
      : "pier-accordion pier-accordion--card";

    return (
      <Fragment>
        <div className={styles.container}>
          <div
            className="-d-flex"
            style={{ width: "100vw", height: "100vh", position: "fixed" }}
          ></div>

          <Head>
            <title>GumGum SLA Generator</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link hre="~/pier-design-system/dist/styles.css" />
          </Head>

          <main>
            <Section padding="lg"></Section>
            <Heading className="main-heading">
              Rate, Spend, and SLA Generator
            </Heading>
            <Link href="/CustomCreatives">Custom Creatives</Link>
            <Card className="card">
              <div className={accordionClass}>
                <div
                  className="pier-accordion__title"
                  onClick={this.toggleAccordion}
                >
                  <h1 className="pier-accordion__heading">
                    <span className="pier-accordion__icon fas fa-cog"></span>
                    Configure Campaign
                  </h1>
                </div>
                <div className="pier-accordion__content">
<<<<<<< HEAD
                  <div className="campaign-card-style">
=======
                  <div className="card-style">
>>>>>>> develop
                    <div className="campaign-section-wrapper">
                      <SubHeading
                        text={this.state.campaignText}
                        body={this.state.bodyText}
                      />

                      <Section padding="xs">
                        {" "}
                        <InputToggle
                          size="sm"
                          disabled={false}
                          dark={false}
                          error={false}
                          className="-m-r-7"
                        >
                          Client Facing
                        </InputToggle>
                      </Section>

                      <CampaignInputs
                        campaign={this.state.campaign}
                        changeHandler={this.setCampaignInputs}
                      />

                      <HR />

                      <Section padding="xs">
                        <div className="-d-flex -justify-content-between">
                          <InputToggle
                            size="sm"
                            disabled={false}
                            dark={false}
                            error={false}
                            className="-m-r-7"
                          >
                            Programmatic
                          </InputToggle>

                          <InputToggle
                            size="sm"
                            disabled={false}
                            dark={false}
                            error={false}
                            className="-m-r-5"
                            onChange={(event) => {
                              handleToggle(event, "isExpedited");
                            }}
                          >
                            Expedited
                          </InputToggle>
                        </div>
                      </Section>
                    </div>
                    <div className="plan-section-wrapper">
                      <div className="creative-plan">
                        <div className="-m-b-6">
                          <SubHeading
                            text={this.state.creativeText}
                            body={"Add Creatives to Campaign"}
                          />
                        </div>
                      </div>

                      {this.state.campaign.unitConfig.map((config, index) => (
                        <CreativeRow
                          deleteHandler={this.removeUnitConfig}
                          changeHandler={this.setUnitConfig}
                          key={config.key}
                          index={config.key}
                          config={config}
                        />
                      ))}

                      <HR />

                      <div className="buttons-section">
                        <Tooltip text="Add creative">
                          <IconButton
                            onClick={this.createUnitConfig}
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
                        <Button
                          className="clear-all-button"
                          onClick={this.deleteAllUnits}
                          title="Button"
                          size="sm"
                          theme="secondary"
                          disabled={false}
                          dark={false}
                          pill={false}
                        >
                          Clear all
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <div id="capture">
              <CampaignOutput campaign={this.state.campaign} />
              <div className="spend-sla-section">
                <SpendCard campaign={this.state.campaign} />
                <DesignCard campaign={this.state.campaign} />
                <CesCard campaign={this.state.campaign} />
              </div>

              <RateBreakdownCard campaign={this.state.campaign} />
            </div>
<<<<<<< HEAD
            <footer style={{ height: "15px" }}></footer>
          </main>
        </div>
        <div style={{ visibility: "hidden" }}>
          {this.state.campaign.unitConfig.map((config, index) => (
            <CustomCreatives
              deleteHandler={this.removeUnitConfig}
              changeHandler={this.setUnitConfig}
              key={config.key}
              index={config.key}
              config={config}
            />
          ))}
        </div>
=======
          </main>
        </div>
>>>>>>> develop
      </Fragment>
    );
  }
}

export default App;
