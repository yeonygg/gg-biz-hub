import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import CampaignInputs from "../components/CampaignInputs";
import CreativeRow from "../components/CreativeRow";
import SubHeading from "../components/SubHeading";
import RateBreakdownCard from "../components/RateBreakdownCard";
import SpendCard from "../components/SpendCard";
import DesignCard from "../components/DesignCard";
import CesCard from "../components/CesCard";
import CampaignOutput from "../components/CampaignOutput";
import { useState, useEffect, Fragment } from "react";
import UUIDV4 from "../helpers/helpers";

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
  InputToggle,
  InputCheckbox,
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

function Generator() {

  const [accordionOpen, setAccordion] = useState(true);
  const [campaignText, setcampaignText] = useState("Campaign Details");
  const [bodyText, setBodyText] = useState("Fill in required campaign info");
  const [creativeText, setCreativeText] = useState("Creative Plan");
  const [hasStudy, setStudy] = useState(false);
  const [hasDmp, setDmp] = useState(false);
  const [campaign, setCampaign] = useState({
    clientName: undefined,
    campaignName: undefined,
    campaignBudget: 0,
    unitConfig: [],
  })

  const setCustomConfig = (key, value, field) => {
    const unit = getUnitConfig(key);
    unit[field] = value;
    campaign.unitConfig[getUnitIndex(key)] = unit;
    updateCampaign(campaign);
  };

  const setCampaignInputs = (value, field) => {
    clearTimeout(setDebounce);
    campaign[field] = value;
    setDebounce = setTimeout(() => {
      updateCampaign(campaign);
    }, 250);
  };

  const getUnitConfig = (key) => {
    const unitConfig = campaign.unitConfig;
    const index = getUnitIndex(key);
    return unitConfig[index];
  };

  const getUnitIndex = (key) => {
    const unitConfig = campaign.unitConfig;
    return unitConfig.map((obj) => obj.key).indexOf(key);
  };

  const setUnitConfig = (key, value, field) => {
    const unit = getUnitConfig(key);
    unit[field] = value;
    campaign.unitConfig[getUnitIndex(key)] = unit;
    updateCampaign(campaign);
  };

  const removeUnitConfig = (key) => {
    const index = getUnitIndex(key);
    campaign.unitConfig.splice(index, 1);
    updateCampaign(campaign);
  };

  const createUnitConfig = () => {
    const newUnit = Object.assign({}, unitSchema);
    newUnit.key = UUIDV4();
    campaign.unitConfig.push(newUnit);
    updateCampaign(campaign);
  };

  const deleteAllUnits = () => {
    campaign.unitConfig = [];
    updateCampaign(campaign);
  };

  const updateCampaign = (updatedCampaign) => {
    console.log('update');
    console.log(updatedCampaign);
    setCampaign({...updatedCampaign});
  };

  const toggleAccordion = () => {
    setAccordion(!accordionOpen);
  };

  const handleToggle = (event, field) => {
    if (field === "isExpedited") {
      for (let i = 0; i < campaign.unitConfig.length; i++) {
        if (event.target.checked === true) {
          setUnitConfig(
            campaign.unitConfig[i].key,
            true,
            "isExpedited"
          );
        } else {
          setUnitConfig(
            campaign.unitConfig[i].key,
            false,
            "isExpedited"
          );
        }
      }
    }
  };

  const addStudy = (event) => {
    setStudy(event.target.checked);
  };

  const addDmp = (event) => {
    setDmp(event.target.checked);
  };

    const accordionClass = accordionOpen
      ? "pier-accordion pier-accordion--open pier-accordion--card"
      : "pier-accordion pier-accordion--card";

  return (
    <Fragment>
      <main>
        <Heading className="main-heading">
          Rate, Spend, and SLA Generator
        </Heading>
        <Card className="card">
          <div className={accordionClass}>
            <div
              className="pier-accordion__title"
              onClick={toggleAccordion}
            >
              <h1 className="pier-accordion__heading">
                <span className="pier-accordion__icon fas fa-cog"></span>
                Configure Campaign
              </h1>
            </div>
            <div className="pier-accordion__content">
              <div className="campaign-card-style">
                <div className="campaign-section-wrapper">
                  <SubHeading
                    text={campaignText}
                    body={bodyText}
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
                    campaign={campaign}
                    changeHandler={setCampaignInputs}
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
                        text={creativeText}
                        body={"Add Creatives to Campaign"}
                      />
                    </div>
                  </div>

                  {campaign.unitConfig.map((config, index) => (
                    <CreativeRow
                      deleteHandler={removeUnitConfig}
                      changeHandler={setUnitConfig}
                      key={config.key}
                      index={config.key}
                      config={config}
                    />
                  ))}

                  <HR />

                  <div className="buttons-section">
                    <Tooltip text="Add creative">
                      <IconButton
                        onClick={createUnitConfig}
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
                      onClick={deleteAllUnits}
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
                  <div className="-m-t-11">
                    <div className={accordionClass}>
                      <div
                        className="pier-accordion__title"
                        onClick={toggleAccordion}
                      >
                        <h1 className="pier-accordion__heading">
                          <span className="pier-accordion__icon fas fa-cog"></span>
                          Add Studies and DMP's
                        </h1>
                      </div>
                      <div className="pier-accordion__content">
                        <Section>
                          <div className="-d-flex -justify-content-between ">
                            <BodyText
                              size="lg"
                              style={{ fontWeight: "bold" }}
                            >
                              Additional Studies
                              </BodyText>
                              <BodyText
                                size="xs"
                                style={{ color: "#A5B2B8" }}
                              >
                                Optional field to add studies to the campaign
                            </BodyText>
                            <InputCheckbox
                              onChange={addStudy}
                              size="sm"
                              disabled={false}
                              dark={false}
                              error={false}
                              partial={false}
                            >
                              Add Study
                            </InputCheckbox>
                          </div>
                          <HR />
                          <div className="-d-flex -justify-content-between  -m-t-7">
                            <BodyText
                              size="lg"
                              style={{ fontWeight: "bold" }}
                            >
                              Additional DMPs
                              
                            </BodyText>
                              <BodyText
                                size="xs"
                                style={{ color: "#A5B2B8" }}
                              >
                                Optional field to add DMPs to the campaign
                              </BodyText>
                            <InputCheckbox
                              onChange={addDmp}
                              size="sm"
                              disabled={false}
                              dark={false}
                              error={false}
                              partial={false}
                            >
                              Add DMP
                            </InputCheckbox>
                          </div>
                        </Section>
                        <HR />
                      </div>
                    </div>
                  </div>
                  {/* <div className="-m-t-6 -float-right">
                    <Button
                      title="Button"
                      icon="fas fa-cog"
                      disabled={false}
                      dark={false}
                      pill={false}
                      size="sm"
                    >
                      Generate
                    </Button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div id="capture">
          <CampaignOutput campaign={campaign} />
          <div className="spend-sla-section">
            <SpendCard campaign={campaign} />
            <DesignCard campaign={campaign} />
            <CesCard campaign={campaign} />
          </div>

          <RateBreakdownCard campaign={campaign} />
        </div>
      </main>
    </Fragment>
  );
}


export default Generator;
