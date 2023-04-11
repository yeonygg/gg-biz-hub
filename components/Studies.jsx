import React from "react";
import { useState, useEffect, Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  Section,
  Heading,
  BodyText,
  InputToggle,
} from "pier-design-system";
import Link from "next/link";
import spendTiers from "../constants/spends";
import LotameDmps from "../components/LotameDmps";
import StudyRow from "../components/StudyRow";
import studies from "../constants/studies";
import dmp from "../constants/dmps";
import StudiesCard from "../components/StudiesCard";
import DmpRow from "./DmpRow";
import DmpCard from "./DmpCard";

let setDebounce;

function Studies() {
  const navigate = useNavigate();
  const params = useParams();

  let defaultStudyValues = [null];
  let defaultDmpValues = [null];

  if(Object.keys(params).length > 0) {
    const pathProps = params.id.split("&");
    const preppedStudyString = pathProps[0].replace("studies=", "");
    const preppedDmpString = pathProps[1].replace("dmps=", "");
    defaultStudyValues = preppedStudyString.length > 0 ? preppedStudyString.split(",").map(Number) : [null];
    defaultDmpValues = preppedDmpString.length > 0 ? preppedDmpString.split(",").map(Number) : [null];
  }

  const [selectedStudies, setStudies] = useState(defaultStudyValues);
  const [selectedDmps, setDmps] = useState(defaultDmpValues);

  const [toggleAllStudies, setToggleStudies] = useState(false);
  const [toggleAllDmps, setToggleDmps] = useState(false);

  const handleChangeStudy = (e, value, index) => {
    const newArray = selectedStudies;
    newArray[+index] = +value; //convert to number
    setStudies([...newArray]);
    setPath();
  };

  const createStudySelect = () => {
    const newStudyArray = selectedStudies;
    newStudyArray.push(null);
    setStudies([...newStudyArray]);
  };

  const getStudies = () => {
    return selectedStudies.map((id) =>
      studies.find((study) => study.id === id)
    );
  };

  const removeStudySelect = (index) => {
    const array = selectedStudies;
    array.splice(index, 1);
    setStudies([...array]);
    setPath();
  };

  const updateStudy = (studies) => {
    setStudies([...studies]);
  };

  const handleToggleStudy = (event) => {
    setToggleStudies(event.target.checked);
  };

  const handleChangeDmp = (e, value, index) => {
    const newArray = selectedDmps;
    newArray[+index] = +value; //convert to number
    setDmps([...newArray]);
    setPath();
  };

  const createDmpSelect = () => {
    const newDmpArray = selectedDmps;
    newDmpArray.push(null);
    setDmps([...newDmpArray]);
  };

  const getDmps = () => {
    return selectedDmps.map((id) => dmp.find((dmp) => dmp.id === id));
  };

  const removeDmpSelect = (index) => {
    const array = selectedDmps;
    array.splice(index, 1);
    setDmps([...array]);
    setPath();
  };

  const updateDmp = (dmps) => {
    setDmps([...dmps]);
  };

  const handleToggleDmps = (event) => {
    setToggleDmps(event.target.checked);
  };

  const setPath = () => {
    navigate(`/studies/studies=${selectedStudies.toString()}&dmps=${selectedDmps}`);
  }

  return (
    <div>
      <Heading>Research and Data Study Rules</Heading>
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
                Select a DMP
              </BodyText>
            </div>

            <div className="-d-block" style={{ width: "100%" }}>
              {" "}
              {selectedDmps.map((value, index) => (
                <DmpRow
                  changeHandler={handleChangeDmp}
                  index={index}
                  value={selectedDmps[index]}
                  config={dmp}
                  key={Math.random() * 10000}
                  addDmp={createDmpSelect}
                  removeDmp={removeDmpSelect}
                  total={selectedDmps.length - 1}
                  toggleAll={toggleAllDmps}
                  exclude={selectedDmps}
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
              onChange={handleToggleDmps}
            >
              Show All DMPs
            </InputToggle>
          </div>
        </Section>
      </Card>
      {!toggleAllDmps &&
        getDmps().map(
          (dmp, index) =>
            dmp != undefined && (
              <DmpCard
                key={index}
                index={index}
                handleDelete={index}
                config={spendTiers}
                dmp={dmp}
                array={selectedDmps}
                removeDmp={removeDmpSelect}
                value={selectedDmps[index]}
              />
            )
        )}

      {toggleAllDmps &&
        dmp.map((dmp, index) => (
          <DmpCard
            key={index}
            dmp={dmp}
            toggleAll={toggleAllDmps}
            array={selectedDmps}
          />
        ))}
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
              {selectedStudies.map((value, index) => (
                <StudyRow
                  changeHandler={handleChangeStudy}
                  index={index}
                  value={selectedStudies[index]}
                  config={studies}
                  key={Math.random() * 10000}
                  addStudy={createStudySelect}
                  removeStudy={removeStudySelect}
                  total={selectedStudies.length - 1}
                  toggleAll={toggleAllStudies}
                  exclude={selectedStudies}
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
              onChange={handleToggleStudy}
            >
              Show All Studies
            </InputToggle>
          </div>
        </Section>
      </Card>

      {!toggleAllStudies &&
        getStudies().map(
          (study, index) =>
            study != undefined && (
              <StudiesCard
                key={index}
                index={index}
                handleDelete={index}
                config={spendTiers}
                study={study}
                array={selectedStudies}
                removeStudy={removeStudySelect}
                value={selectedStudies[index]}
              />
            )
        )}

      {toggleAllStudies &&
        studies.map((study, index) => (
          <StudiesCard
            key={index}
            study={study}
            toggleAll={toggleAllStudies}
            array={selectedStudies}
          />
        ))}

      <Section padding="lg"></Section>
    </div>
  );
}

export default Studies;
