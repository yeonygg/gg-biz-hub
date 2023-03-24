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
import RateTableSection from "./RateTableSection";
import AddStudyRow from "./AddStudyRow";
import AddDmpRow from "./AddDmpRow";

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
import studies from "../constants/studies";

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

let studySchema = {
  key: null,
  studyType: "Brand Lift",
  studyPartners: [],
  studyQuantity: [],
  selectedQuantity: 1,
  selectedPartner: "",
  studyQuantity: 0,
  minSpend: 0,
};

let dmpSchema = {
  key: null,
  dmpType: "GumGum First Part (Contextual)",
  minSpend: 0,
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
    studyConfig: [],
    dmpConfig: [],
  });

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
    console.log(updatedCampaign);
    setCampaign({ ...updatedCampaign });
  };

  //starting study config

  const getStudyConfig = (key) => {
    const studyConfig = campaign.studyConfig;
    const index = getStudyIndex(key);
    return studyConfig[index];
  };

  const getStudy = () => {
    const studyConfig = campaign.studyConfig;
    return studyConfig.map((id) => studies.find((study) => study.id === id));
  };

  const getStudyIndex = (key) => {
    const studyConfig = campaign.studyConfig;
    return studyConfig.map((obj) => obj.key).indexOf(key);
  };

  const setStudyConfig = (key, value, field) => {
    const study = getStudyConfig(key);
    study[field] = value;
    campaign.studyConfig[getStudyIndex(key)] = study;
    updateCampaign(campaign);
  };

  const removeStudyConfig = (key) => {
    const index = getStudyIndex(key);
    console.log(index);
    campaign.studyConfig.splice(index, 1);
    updateCampaign(campaign);
  };

  const createStudyConfig = () => {
    const newStudy = Object.assign({}, studySchema);
    newStudy.key = UUIDV4();
    campaign.studyConfig.push(newStudy);
    updateCampaign(campaign);
  };

  const deleteAllStudies = () => {
    campaign.studyConfig = [];
    updateCampaign(campaign);
  };

  //ending study config

  //starting dmp config

  const getDmpConfig = (key) => {
    const dmpConfig = campaign.dmpConfig;
    const index = getDmpIndex(key);
    return dmpConfig[index];
  };

  const getDmpIndex = (key) => {
    const dmpConfig = campaign.dmpConfig;
    console.log(dmpConfig.map((obj) => obj.key));
    console.log(dmpConfig.map((obj) => obj.key).indexOf(key));
    return dmpConfig.map((obj) => obj.key).indexOf(key);
  };

  const setDmpConfig = (key, value, field) => {
    const dmp = getDmpConfig(key);
    dmp[field] = value;
    campaign.dmpConfig[getDmpIndex(key)] = dmp;
    updateCampaign(campaign);
  };

  const createDmpConfig = () => {
    const newDmp = Object.assign({}, dmpSchema);
    newDmp.key = UUIDV4();
    campaign.dmpConfig.push(newDmp);
    updateCampaign(campaign);
  };

  const removeDmpConfig = (key) => {
    const index = getDmpIndex(key);
    console.log(index);
    campaign.dmpConfig.splice(index, 1);
    updateCampaign(campaign);
  };

  const deleteAllDmps = () => {
    campaign.dmpConfig = [];
    updateCampaign(campaign);
  };

  //ending dmp config

  const toggleAccordion = () => {
    setAccordion(!accordionOpen);
  };

  const handleToggle = (event, field) => {
    if (field === "isExpedited") {
      for (let i = 0; i < campaign.unitConfig.length; i++) {
        if (event.target.checked === true) {
          setUnitConfig(campaign.unitConfig[i].key, true, "isExpedited");
        } else {
          setUnitConfig(campaign.unitConfig[i].key, false, "isExpedited");
        }
      }
    }
  };

  const handleStudyCheckbox = (event) => {
    if (event.target.checked === true) {
      createStudyConfig();
    } else {
      deleteAllStudies();
    }
  };

  const handleDmpCheckbox = (event) => {
    if (event.target.checked === true) {
      console.log("checked");
      createDmpConfig();
    } else {
      console.log("unchecked");
      deleteAllDmps();
    }
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
            <div className="pier-accordion__title" onClick={toggleAccordion}>
              <h1 className="pier-accordion__heading">
                <span className="pier-accordion__icon fas fa-cog"></span>
                Configure Campaign
              </h1>
            </div>
            <div className="pier-accordion__content">
              <div className="campaign-card-style">
                <div className="campaign-section-wrapper">
                  <SubHeading text={campaignText} body={bodyText} />

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
                    <Accordion
                      size="sm"
                      title="Add Studies and DMP's"
                      startOpen={false}
                      inCard={false}
                      icon="fas fa-chart-bar"
                      disabled={false}
                      dark={false}
                    >
                      <Section>
                        <div className="-d-flex -justify-content-between ">
                          <BodyText size="lg" style={{ fontWeight: "bold" }}>
                            Additional Studies
                            <BodyText size="xs" style={{ color: "#A5B2B8" }}>
                              Optional field to add studies to the campaign
                            </BodyText>
                          </BodyText>

                          <InputCheckbox
                            onChange={(event) => {
                              handleStudyCheckbox(event);
                            }}
                            size="sm"
                            disabled={false}
                            dark={false}
                            error={false}
                            partial={false}
                          >
                            Add Study
                          </InputCheckbox>
                        </div>
                        {campaign.studyConfig.map((config, index) => (
                          <AddStudyRow
                            addHandler={createStudyConfig}
                            deleteHandler={removeStudyConfig}
                            changeHandler={setStudyConfig}
                            key={config.index}
                            index={config.key}
                            id={index}
                            config={config}
                            total={campaign.studyConfig.length}
                            campaign={campaign.studyConfig}
                          />
                        ))}
                        <HR />
                        <div className="-d-flex -justify-content-between  -m-t-7">
                          <BodyText size="lg" style={{ fontWeight: "bold" }}>
                            Additional DMPs
                            <BodyText size="xs" style={{ color: "#A5B2B8" }}>
                              Optional field to add DMPs to the campaign
                            </BodyText>
                          </BodyText>

                          <InputCheckbox
                            onChange={(event) => {
                              handleDmpCheckbox(event);
                            }}
                            size="sm"
                            disabled={false}
                            dark={false}
                            error={false}
                            partial={false}
                          >
                            Add DMP
                          </InputCheckbox>
                        </div>
                        {campaign.dmpConfig.map((config, index) => (
                          <AddDmpRow
                            addHandler={createDmpConfig}
                            deleteHandler={removeDmpConfig}
                            changeHandler={setDmpConfig}
                            key={config.index}
                            id={index}
                            index={config.key}
                            config={config}
                            total={campaign.dmpConfig.length}
                            campaign={campaign.dmpConfig}
                          />
                        ))}
                        <HR />
                      </Section>
                    </Accordion>
                  </div>
                  <div className="-m-t-6 -float-right">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div id="capture">
          <Card style={{ padding: "1rem" }}>
            <Section padding="xl">
              <div className="-d-flex -m-b-6">
                <CampaignOutput campaign={campaign} />

                <DesignCard campaign={campaign} />
                <CesCard campaign={campaign} />
              </div>
              <HR />
              <div className="-d-flex">
                <div className="spend-sla-section">
                  <SpendCard campaign={campaign} />
                </div>

                <div className="rate-sla-section">
                  {" "}
                  <RateTableSection campaign={campaign} />
                </div>
              </div>
            </Section>
          </Card>

          <RateBreakdownCard campaign={campaign} />
        </div>
      </main>
    </Fragment>
  );
}

export default Generator;
