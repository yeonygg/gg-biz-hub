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
  const spendConfig = props.config.minSpend;
  // const studyType = props.config.studyType;

  // const [studyType, setStudyType] = useState("");
  const campaign = props.campaign;
  const handleChange = (event, field) => {
    const value = event.target.value;

    if (field === "studyType") {
      setStudyType(value);
      //sets the studyType property with the value selected
      props.changeHandler(props.index, value, "studyType");
      //searches for the index of the value name in the studies constant
      const index = studies.findIndex((study) => study.title === value);

      props.changeHandler(props.index, "", "studyQuantity");
      props.changeHandler(props.index, "", "selectedQuantity");

      //sets the studyPartners array into the study config
      props.changeHandler(
        props.index,
        studies[index].studyPartners,
        "studyPartners"
      );
      props.changeHandler(
        props.index,
        studies[index].studyPartners[0].name,
        "selectedPartner"
      );
    }

    if (field === "selectedPartner") {
      props.changeHandler(props.index, value, "selectedPartner");

      const index = studyPartners.findIndex(
        (partner) => partner.name === value
      );
      //populates the maxStudies array with maxStudies values in studyPartners
      props.changeHandler(
        props.index,
        studyPartners[index].maxStudies,
        "studyQuantity"
      );
      //populates the minspend array with minspend values in studyPartners
      props.changeHandler(
        props.index,
        studyPartners[index].minSpend,
        "minSpend"
      );

      if (numConfig.length < 2) {
        props.changeHandler(props.index, 1, "selectedQuantity");
      }

      if (numConfig.length < 2) {
        props.changeHandler(
          props.index,
          studyPartners[index].minSpend[0],
          "selectedMinSpend"
        );
      }
    }

    if (field === "selectedQuantity") {
      props.changeHandler(props.index, value, "selectedQuantity");

      //getting the index of number of studies
      const index = numConfig.findIndex((partner) => partner === Number(value));
      //sets the selectedMinSpend prop
      props.changeHandler(props.index, spendConfig[index], "selectedMinSpend");
    }
  };

  const handleDelete = (event) => {
    props.deleteHandler(props.index);
  };

  const handleAdd = (event) => {
    props.addHandler(props.index);
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
            <option>Select study type</option>
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
            <option selected="selected">Select study partner</option>
            {studyPartners.map((partner) => (
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
            <option>Select number of studies</option>
            {props.config.studyQuantity.length === 1 &&
              numConfig.map((num) => (
                <option selected="selected" key={num} value={num[0]}>
                  {num}
                </option>
              ))}
            {props.config.studyQuantity.length > 1 &&
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
            <Tooltip text="Delete study">
              <IconButton
                title="Button"
                icon="far fa-trash"
                size="sm"
                position="left"
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
