import CustomAdd from "./CustomAdd";
import unitTypes from "../constants/units";
import studies from "../constants/studies";
import customFeatures from "../constants/custom";
import { useState } from "react";

import {
  InputGroup,
  InputText,
  InputSelect,
  Section,
  InputToggle,
  IconButton,
  Tooltip,
  InputCheckbox,
} from "pier-design-system";

const AddStudyRow = (props) => {
  console.log(props.config.studyPartner);
  const studyConfig = props.config.studyPartner;
  const numConfig = props.config.studyQuantity;
  const handleChange = (event, field) => {
    const value = event.target.value;
    console.log(value);
    const checkCustomizable = unitTypes.map((obj) => obj.name).indexOf(value);
    const index = value;
    const numIndex = studyConfig[index];
    console.log(numIndex);
    props.changeHandler(props.index, value, field);

    if (field === "studyType") {
      // console.log(checkCustomizable);
      props.changeHandler(
        props.index,
        studies[index].studyPartners,
        "studyPartner"
      );
    }

    if (field === "partners") {
      props.changeHandler(
        props.index,
        studyConfig[value].maxStudies,
        "studyQuantity"
      );
    }
  };

  const handleDelete = (event) => {
    props.deleteHandler(props.index);
  };

  return (
    <div>
      <div className="-d-flex -m-b-6">
        <InputGroup
          label="type of study"
          size="sm"
          error=""
          dark={false}
          className="-m-r-4"
        >
          <InputSelect
            size="sm"
            disabled={false}
            dark={false}
            error={false}
            capleft={false}
            required=""
            onChange={(event) => {
              handleChange(event, "studyType");
            }}
          >
            <option>Select Unit type</option>
            {studies.map((study) => (
              <option key={study.id} value={study.id}>
                {study.title}
              </option>
            ))}
          </InputSelect>
        </InputGroup>
        <InputGroup
          label="study partner"
          size="sm"
          error=""
          dark={false}
          className="-m-r-4"
        >
          <InputSelect
            size="sm"
            disabled={false}
            dark={false}
            error={false}
            capleft={false}
            required=""
            onChange={(event) => {
              handleChange(event, "partners");
            }}
          >
            <option>Select Unit type</option>
            {studyConfig.map((partner) => (
              <option key={partner.name} value={partner.id}>
                {partner.name}
              </option>
            ))}
          </InputSelect>
        </InputGroup>
        <InputGroup
          label="unit type"
          size="sm"
          error=""
          dark={false}
          style={{ width: "70%" }}
        >
          <InputSelect
            size="sm"
            disabled={false}
            dark={false}
            error={false}
            capleft={false}
            required=""
            onChange={(event) => {
              handleChange(event, "unitType");
            }}
          >
            <option>Select Unit type</option>
            {numConfig.map((num) => (
              <option key={num}>{num}</option>
            ))}
          </InputSelect>
        </InputGroup>
        {props.total === props.index && (
          <div className="toggle-button">
            <Tooltip text="Add Study">
              <IconButton
                title="Button"
                icon="far fa-plus"
                size="sm"
                disabled={false}
                dark={false}
                pill={false}
                hero={true}
                onClick={handleDelete}
              />
            </Tooltip>
          </div>
        )}
        {props.total != props.index && (
          <div className="toggle-button">
            <Tooltip text="Delete creative">
              <IconButton
                title="Button"
                icon="far fa-trash"
                size="sm"
                disabled={false}
                dark={false}
                pill={false}
                danger={true}
                onClick={handleDelete}
              />
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddStudyRow;
