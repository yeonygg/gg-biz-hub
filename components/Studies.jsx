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
import StudiesCard from "../components/StudiesCard";

let setDebounce;

function Studies () {

  const [selectedStudies, setStudies] = useState([null]);
  const [toggleAll, setToggle] = useState(false);

  const handleChange = (e, value, index) => {
    const newArray = selectedStudies;
    newArray[+index] = +value; //convert to number
    setStudies([...newArray]);
  };

  const createCustomSelect = () => {
    const newCustomArray = selectedStudies;
    newCustomArray.push(null);
    setStudies([...newCustomArray]);
  };

  const getStudies = () => {
    return selectedStudies.map((id) =>
      studies.find((study) => study.id === id)
    );
  };

  const removeCustomSelect = (index) => {
    const array = selectedStudies;
    array.splice(index, 1);
    setStudies([...array]);
  };

  const updateCustom = (studies) => {
    setStudies([...studies]);
  };

  const handleToggle = (event) => {
    setToggle(event.target.checked);
  };


  return (
    <div>
      <Heading>Research and Data Study Rules</Heading>
      <LotameDmps />
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
                  changeHandler={handleChange}
                  index={index}
                  value={selectedStudies[index]}
                  config={studies}
                  key={Math.random() * 10000}
                  addCustom={createCustomSelect}
                  removeCustom={removeCustomSelect}
                  total={selectedStudies.length - 1}
                  toggleAll={toggleAll}
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
              onChange={handleToggle}
            >
              Show All Studies
            </InputToggle>
          </div>
        </Section>
      </Card>

      {/* this.state.key.map((index) => {
        <CustomCard custom={index} />;
      }) */}

      {!toggleAll &&
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
                removeCustom={removeCustomSelect}
                value={selectedStudies[index]}
              />
            )
        )}

      {toggleAll &&
        studies.map((study, index) => (
          <StudiesCard
            key={index}
            study={study}
            toggleAll={toggleAll}
            array={selectedStudies}
          />
        ))}

      <Section padding="lg"></Section>
    </div>
  );
  
}

export default Studies;
