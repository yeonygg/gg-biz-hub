import CustomAdd from "./CustomAdd";
import unitTypes from "../constants/units";
import studies from "../constants/studies";
<<<<<<< HEAD
import {findHighest} from "../helpers/helpers";
=======
>>>>>>> 290fd06 (completed dmp table for data page)
import customFeatures from "../constants/custom";
import { useState } from "react";
import UUIDV4 from "../helpers/helpers";

import {
  InputGroup,
  InputSelect,
  IconButton,
  Tooltip,
} from "pier-design-system";

const AddStudyRow = (props) => {
<<<<<<< HEAD
=======
  const studyPartners = props.config.studyPartners;
  const numConfig = props.config.studyQuantity;
  const spendConfig = props.config.minSpend;
  // const studyType = props.config.studyType;
>>>>>>> 290fd06 (completed dmp table for data page)

  // const [studyType, setStudyType] = useState("");
  const campaign = props.campaign;
  const handleChange = (event, field) => {
<<<<<<< HEAD
    const value = parseFloat(event.target.value);
    switch(field) {
      case "studyType":
        props.changeHandler([
          {
            field:"studyType",
            key: props.index,
            value: value
          },
          ///reset these values to null since type changed
          {
            field: "studyPartner",
            key: props.index,
            value: null
          },
          {
            field: "studyQuantity",
            key: props.index,
            value: null
          }
        ]);
        break;

      case "studyPartner":
        props.changeHandler([
          {
            field: "studyPartner",
            key: props.index,
            value: value
          },
          ///reset these values to null since partner changed
          {
            field: "studyQuantity",
            key: props.index,
            value: null
          }
        ]);
        break;

      case "studyQuantity":
          const selectedPartner = studies[props.config.studyType].studyPartners[props.config.studyPartner];
          const minSpend = Object.keys(selectedPartner.maxStudies).find(key => selectedPartner.maxStudies[key] === value);
          const cpmUpcharge = selectedPartner.cpmUpcharge;

          props.changeHandler([
            {
              field: "studyQuantity",
              key: props.index,
              value: value
            },
            {
              field: "minSpend",
              key: props.index,
              value: minSpend
            },
            {
              field: "cpmUpcharge",
              key: props.index,
              value: cpmUpcharge
            },
          ]);
          break;
=======
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
>>>>>>> 290fd06 (completed dmp table for data page)
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
<<<<<<< HEAD
=======
            value={props.value != null ? props.value : ""}
>>>>>>> 290fd06 (completed dmp table for data page)
            onChange={(event) => {
              handleChange(event, "studyType");
            }}
          >
<<<<<<< HEAD
            <option selected={props.config.studyType === null} disabled="true">Select study type</option>
            {studies.map((study) => (
              <option key={study.id} value={study.id} selected={props.config.studyType != null && props.config.studyType===study.id}>
=======
            <option disabled={true} value="">
              Select study type
            </option>
            {studies.map((study) => (
              <option key={UUIDV4()} value={study.name}>
>>>>>>> 290fd06 (completed dmp table for data page)
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
<<<<<<< HEAD
            disabled={props.config.studyType === null}
=======
            disabled={false}
>>>>>>> 290fd06 (completed dmp table for data page)
            dark={false}
            error={false}
            capleft={false}
            required=""
<<<<<<< HEAD
            onChange={(event) => {
              handleChange(event, "studyPartner");
            }}
          >
            <option selected={props.config.studyPartner === null} disabled="true">Select study partner</option>
            {props.config.studyType != null && studies[props.config.studyType].studyPartners.map((partner) => (
              <option key={partner.id} value={partner.id} selected={props.config.studyPartner != null && partner.id===props.config.studyPartner}>
=======
            value={props.value != null ? props.value : ""}
            onChange={(event) => {
              handleChange(event, "selectedPartner");
            }}
          >
            <option disabled={true} value="">
              Select study partner
            </option>
            {studyPartners.map((partner) => (
              <option key={UUIDV4()} value={partner.name}>
>>>>>>> 290fd06 (completed dmp table for data page)
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
<<<<<<< HEAD
            disabled={props.config.studyPartner === null}
=======
            disabled={false}
>>>>>>> 290fd06 (completed dmp table for data page)
            dark={false}
            error={false}
            capleft={false}
            required=""
<<<<<<< HEAD
            onChange={(event) => {
              handleChange(event, "studyQuantity");
            }}
          >
            <option selected={props.config.studyQuantity === null} disabled="true">Select number of studies</option>
            {props.config.studyPartner != null &&
              Array.from({length: findHighest(studies[props.config.studyType].studyPartners[props.config.studyPartner].maxStudies)}, (x, i) => i).map((value, index) => (
                <option key={index} value={value+1} selected={props.config.studyQuantity != null && props.config.studyQuantity===(value+1)}>
                  {value+1}
                </option>
              ))
            }
=======
            value={props.value != null ? props.value : ""}
            onChange={(event) => {
              handleChange(event, "selectedQuantity");
            }}
          >
            <option disabled={true} value="">
              Select number of studies
            </option>
            {props.config.studyQuantity.length === 1 &&
              numConfig.map((num) => (
                <option key={UUIDV4()} value={num[0]}>
                  {num}
                </option>
              ))}
            {props.config.studyQuantity.length > 1 &&
              numConfig.map((num) => (
                <option key={UUIDV4()} value={num}>
                  {num}
                </option>
              ))}
>>>>>>> 290fd06 (completed dmp table for data page)
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
