import CustomAdd from "./CustomAdd";
import unitTypes from "../constants/units";
import studies from "../constants/studies";
import { findHighest } from "../helpers/helpers";
import customFeatures from "../constants/custom";
import { Fragment, useState } from "react";
import UUIDV4 from "../helpers/helpers";

import {
  InputGroup,
  InputSelect,
  IconButton,
  Tooltip,
} from "pier-design-system";

const AddStudyRow = (props) => {
  // const [studyType, setStudyType] = useState("");
  const campaign = props.campaign;
  const handleChange = (event, field) => {
    const value = parseFloat(event.target.value);
    switch (field) {
      case "studyType":
        props.changeHandler([
          {
            field: "studyType",
            key: props.index,
            value: value,
          },
          ///reset these values to null since type changed
          {
            field: "studyPartner",
            key: props.index,
            value: null,
          },
          {
            field: "studyQuantity",
            key: props.index,
            value: null,
          },
        ]);
        break;

      case "studyPartner":
        props.changeHandler([
          {
            field: "studyPartner",
            key: props.index,
            value: value,
          },
          ///reset these values to null since partner changed
          {
            field: "studyQuantity",
            key: props.index,
            value: null,
          },
        ]);
        break;

      case "studyQuantity":
        const selectedPartner =
          studies[props.config.studyType].studyPartners[
            props.config.studyPartner
          ];
        const minSpend = Object.keys(selectedPartner.maxStudies).find(
          (key) => selectedPartner.maxStudies[key] === value
        );
        const cpmUpcharge = selectedPartner.cpmUpcharge;

        props.changeHandler([
          {
            field: "studyQuantity",
            key: props.index,
            value: value,
          },
          {
            field: "minSpend",
            key: props.index,
            value: minSpend,
          },
          {
            field: "cpmUpcharge",
            key: props.index,
            value: cpmUpcharge,
          },
        ]);
        break;
    }
  };

  const handleDelete = (event) => {
    props.deleteHandler(props.index);
  };

  const handleAdd = (event) => {
    props.addHandler(props.index);
  };

  return (
    <Fragment>
      <div className="study-row-wrapper">
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
            <option selected={props.config.studyType === null} disabled="true">
              Select study type
            </option>
            {studies.map((study) => (
              <option
                key={study.id}
                value={study.id}
                selected={
                  props.config.studyType != null &&
                  props.config.studyType === study.id
                }
              >
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
            disabled={props.config.studyType === null}
            dark={false}
            error={false}
            capleft={false}
            required=""
            onChange={(event) => {
              handleChange(event, "studyPartner");
            }}
          >
            <option
              selected={props.config.studyPartner === null}
              disabled="true"
            >
              Select study partner
            </option>
            {props.config.studyType != null &&
              studies[props.config.studyType].studyPartners.map((partner) => (
                <option
                  key={partner.id}
                  value={partner.id}
                  selected={
                    props.config.studyPartner != null &&
                    partner.id === props.config.studyPartner
                  }
                >
                  {partner.name}
                </option>
              ))}
          </InputSelect>
        </InputGroup>

        <div className="no-studies-wrapper">
          <InputGroup
            label="No of studies"
            size="sm"
            error=""
            dark={false}
            style={{ width: "70%" }}
          >
            <InputSelect
              size="sm"
              disabled={props.config.studyPartner === null}
              dark={false}
              error={false}
              capleft={false}
              required=""
              onChange={(event) => {
                handleChange(event, "studyQuantity");
              }}
            >
              <option
                selected={props.config.studyQuantity === null}
                disabled="true"
              >
                Select number of studies
              </option>
              {props.config.studyPartner != null &&
                Array.from(
                  {
                    length: findHighest(
                      studies[props.config.studyType].studyPartners[
                        props.config.studyPartner
                      ].maxStudies
                    ),
                  },
                  (x, i) => i
                ).map((value, index) => (
                  <option
                    key={index}
                    value={value + 1}
                    selected={
                      props.config.studyQuantity != null &&
                      props.config.studyQuantity === value + 1
                    }
                  >
                    {value + 1}
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
    </Fragment>
  );
};

export default AddStudyRow;
