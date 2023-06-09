import React, { Fragment } from "react";
import { useState, useEffect, Component } from "react";
import {
  Card,
  Section,
  Heading,
  BodyText,
  HR,
  Button,
} from "pier-design-system";
import { Link } from "react-router-dom";
import SubHeading from "./SubHeading";
import { BrowserView, MobileView, isMobile } from "react-device-detect";

function Home() {
  console.log(window.innerWidth);

  const bizRules = "Creative Business Rules";
  const custom = "Custom Creative Guidelines";
  const data = "Research and Data";

  if (isMobile) {
    return (
      <Fragment>
        <div className="home-main-card -m-b-6">
          <Section padding="lg" style={{ height: "400px" }}>
            <div className="main-content-wrapper">
              <Heading dark={true}>Welcome to GumGum Business Hub!</Heading>
              <div className="main-card-buttons-wrapper">
                <Link to="/rates">
                  {" "}
                  <Button className="-m-r-4" dark={true}>
                    Rates
                  </Button>
                </Link>
                <Link to="/generator">
                  {" "}
                  <Button dark={true}>Generator</Button>
                </Link>
              </div>
            </div>
          </Section>
        </div>
        <Card>
          <Section padding="md">
            <div className="main-sub-card">
              {" "}
              <div className="main-card-style -m-r-6">
                <SubHeading text={bizRules} />
                <div className="sla-result-text -m-b-6">
                  {" "}
                  <BodyText size="md">
                    Find minimum spends, design SLA buckets, and applicable unit
                    types
                  </BodyText>
                </div>
                <div className="main-button-wrapper">
                  <Link to="/creative-rules">
                    {" "}
                    <Button
                      size="sm"
                      className="-m-b-4"
                      icon="fas fa-arrow-circle-right"
                    >
                      Explore Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="main-card-style -m-r-6">
                <SubHeading text={custom} />
                <div className="sla-result-text -m-b-6">
                  {" "}
                  <BodyText size="md">
                    Find all information about any custom creative add-on
                  </BodyText>
                </div>{" "}
                <div className="main-button-wrapper">
                  {" "}
                  <Link to="/custom-creatives">
                    <Button
                      size="sm"
                      className="-m-b-4"
                      icon="fas fa-arrow-circle-right"
                    >
                      Explore Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="main-card-style">
                <SubHeading text={data} />
                <div className="sla-result-text -m-b-6">
                  {" "}
                  <BodyText size="md">
                    Find all information about DMPs and studies added to
                    campaigns
                  </BodyText>
                </div>

                <div className="main-button-wrapper">
                  {" "}
                  <Link to="/studies">
                    <Button
                      size="sm"
                      className="-m-b-4"
                      icon="fas fa-arrow-circle-right"
                    >
                      Explore Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Section>
        </Card>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <div className="home-main-card -m-b-6">
        <Section padding="lg">
          <Heading dark={true}>Welcome to GumGum Business Hub!</Heading>
          <HR style={{ width: "100px" }} size="lg" theme="hero" />
          <div style={{ width: "45%", marginTop: "2rem" }}>
            {" "}
            <BodyText size="md" dark={true}>
              Your one stop shop for all Gumgum operations business rules,
              studies, creative guidelines and SLA buckets
            </BodyText>
          </div>
          <div className="-d-flex -m-t-10">
            <Link to="/rates">
              {" "}
              <Button className="-m-r-6" dark={true}>
                Rates
              </Button>
            </Link>
            <Link to="/generator">
              {" "}
              <Button dark={true}>Generator</Button>
            </Link>
          </div>
        </Section>
      </div>
      <Card>
        <Section padding="lg">
          <div className="main-sub-card">
            {" "}
            <div className="main-card-style -m-r-6">
              <SubHeading text={bizRules} />
              <div className="sla-result-text -m-b-6">
                {" "}
                <BodyText size="md">
                  Find minimum spends, design SLA buckets, and applicable unit
                  types
                </BodyText>
              </div>
              <div className="main-button-wrapper">
                <Link to="/creative-rules">
                  {" "}
                  <Button className="-m-b-4" icon="fas fa-arrow-circle-right">
                    Explore Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="main-card-style -m-r-6">
              <SubHeading text={custom} />
              <div className="sla-result-text -m-b-6">
                {" "}
                <BodyText size="md">
                  Find all information about any custom creative add-on
                </BodyText>
              </div>{" "}
              <div className="main-button-wrapper">
                {" "}
                <Link to="/custom-creatives">
                  <Button className="-m-b-4" icon="fas fa-arrow-circle-right">
                    Explore Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="main-card-style">
              <SubHeading text={data} />
              <div className="sla-result-text -m-b-6">
                {" "}
                <BodyText size="md">
                  Find all information about DMPs and studies added to campaigns
                </BodyText>
              </div>

              <div className="main-button-wrapper">
                {" "}
                <Link to="/studies">
                  <Button className="-m-b-4" icon="fas fa-arrow-circle-right">
                    Explore Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </Card>
    </Fragment>
  );
}

export default Home;
