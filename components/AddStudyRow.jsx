import CustomAdd from "./CustomAdd";
import unitTypes from "../constants/units";
import studies from "../constants/studies";
import customFeatures from "../constants/custom";
import { useState } from "react";

import {
  InputGroup,
  InputSelect,
  IconButton,
  Tooltip,
} from "pier-design-system";

const AddStudyRow = (props) => {
  const studyPartners = props.config.studyPartners;
  const numConfig = props.config.studyQuantity;
  const campaign = props.campaign;
  const handleChange = (event, field) => {
    const value = event.target.value;

    if (field === "studyType") {
      props.changeHandler(props.index, value, "studyType");
      const index = studies.findIndex((study) => study.title === value);

      props.changeHandler(
        props.index,
        studies[index].studyPartners,
        "studyPartners"
      );
    }

    if (field === "selectedPartner") {
      props.changeHandler(props.index, value, "selectedPartner");

      const index = studyPartners.findIndex(
        (partner) => partner.name === value
      );

      props.changeHandler(
        props.index,
        studyPartners[index].maxStudies,
        "studyQuantity"
      );
    }

    if (field === "selectedQuantity") {
      props.changeHandler(props.index, value, "selectedQuantity");
      console.log(numConfig);
      console.log(numConfig.findIndex((num) => num === value));
      console.log(value);
      props.changeHandler(props.index, studyPartners.minSpend, "minSpend");
    }
  };

  console.log(campaign);

  const handleDelete = (event) => {
    props.deleteHandler(props.index);
  };

  const handleAdd = (event) => {
    props.addHandler(props.index);
  };

  console.log(props.total);
  console.log(props.id);

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
              <option key={study.id} value={study.name}>
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
              handleChange(event, "selectedPartner");
            }}
          >
            <option>Select Unit type</option>
            {studyPartners.length > 0 &&
              studyPartners.map((partner) => (
                <option key={partner.id} value={partner.name}>
                  {partner.name}
                </option>
              ))}
          </InputSelect>
        </InputGroup>
        <InputGroup
          label="No of studies"
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
              handleChange(event, "selectedQuantity");
            }}
          >
            <option>Select Unit type</option>
            {props.config.studyQuantity.length > 0 &&
              numConfig.map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
          </InputSelect>
        </InputGroup>
        {props.total === props.id + 1 && (
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
                onClick={handleAdd}
              />
            </Tooltip>
          </div>
        )}
        {props.total != props.id + 1 && (
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
