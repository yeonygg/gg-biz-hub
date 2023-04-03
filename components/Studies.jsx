import React from "react";
import { useState, useEffect, Component } from "react";
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
  const [selectedStudies, setStudies] = useState([null]);
  const [toggleAllStudies, setToggleStudies] = useState(false);

  const [selectedDmps, setDmps] = useState([null]);
  const [toggleAllDmps, setToggleDmps] = useState(false);

  const handleChangeStudy = (e, value, index) => {
    const newArray = selectedStudies;
    newArray[+index] = +value; //convert to number
    setStudies([...newArray]);
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
  };

  const updateStudy = (studies) => {
    setStudies([...studies]);
  };

  const handleToggleStudy = (event) => {
<<<<<<< HEAD
    setToggle(event.target.checked);
=======
    setToggleStudies(event.target.checked);
>>>>>>> 290fd06 (completed dmp table for data page)
  };

  const handleChangeDmp = (e, value, index) => {
    const newArray = selectedDmps;
    newArray[+index] = +value; //convert to number
    setDmps([...newArray]);
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
  };

  const updateDmp = (dmps) => {
    setDmps([...dmps]);
  };

  const handleToggleDmps = (event) => {
<<<<<<< HEAD
    setToggle(event.target.checked);
=======
    setToggleDmps(event.target.checked);
>>>>>>> 290fd06 (completed dmp table for data page)
  };

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
