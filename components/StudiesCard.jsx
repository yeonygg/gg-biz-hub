import {
  Card,
  Section,
  Heading,
  BodyText,
  HR,
  IconButton,
  Tooltip,
  Table,
  List,
  ListItem,
} from "pier-design-system";
import { Fragment } from "react";
import StudySpendTable from "./StudySpendTable";
import { UUIDV4 } from "../helpers/helpers";

const StudiesCard = (props) => {
  const disabled = () => {
    let disable = false;
    if (props.array.length === 1) {
      disable = true;
    } else if (props.toggleAll === true) {
      disable = true;
    } else {
      disable = false;
    }
    return disable;
  };

  const removeTooltip = () => {
    let tooltip = "Remove Card";
    if (disabled() === true) {
      tooltip = "";
    }
    return tooltip;
  };

  const handleDelete = (event) => {
    props.removeStudy(props.index);
  };

  const handleStudyPartners = () => {
    const studyPartners = props.study.studyPartners;
    let partners = "";
    if (studyPartners.length === 3) {
      partners = (
        <List key={UUIDV4()} size="sm" style={{ padding: "0" }}>
          <ListItem style={{ width: "100%", marginBottom: "0.875rem" }}>
            {studyPartners[0].name}
          </ListItem>
          <ListItem style={{ width: "100%", marginBottom: "0.875rem" }}>
            {studyPartners[1].name}
          </ListItem>
          <ListItem style={{ width: "100%", marginBottom: "0.875rem" }}>
            {studyPartners[2].name}
          </ListItem>
        </List>
      );
    } else {
      partners = (
        <List key={UUIDV4} size="sm" style={{ padding: "0" }}>
          <ListItem style={{ width: "100%", marginBottom: "0.875rem" }}>
            {studyPartners[0].name}
          </ListItem>
        </List>
      );
    }
    return partners;
  };

  const handleMiddleSection = () => {
    let middleSection = "";
    if (props.study.title === "Brand Lift") {
      const getTitle = props.study.goodCandidates.title;
      const getCaveat = props.study.caveats.title;

      middleSection = (
        <Fragment>
          <Heading size="sm">Good Candidates</Heading>
          <HR />
          <div className="study-consumer-section-wrapper">
            <div key={UUIDV4()} className="study-consumer-section">
              <BodyText style={{ fontWeight: "bold", color: "#25B9EF" }}>
                {getTitle[0]}
              </BodyText>
              {props.study.goodCandidates.info.consumerProducts.map(
                (product) => (
                  <div key={UUIDV4()} className="-d-flex">
                    <i
                      className="pier-button-icon__icon fas fa-thumbs-up"
                      style={{
                        marginRight: "1rem",
                        marginTop: "4px",
                        color: "#25B9EF",
                      }}
                    ></i>{" "}
                    <BodyText size="xs">{product}</BodyText>
                  </div>
                )
              )}
            </div>
            <div
              key={UUIDV4()}
              className="study-campaign-characteristics-section"
            >
              <BodyText style={{ fontWeight: "bold", color: "#25B9EF" }}>
                {getTitle[1]}
              </BodyText>
              {props.study.goodCandidates.info.campaignCharacteristics.map(
                (product) => (
                  <div key={UUIDV4()} className="-d-flex">
                    <i
                      className="pier-button-icon__icon fas fa-thumbs-up"
                      style={{
                        marginRight: "1rem",
                        marginTop: "4px",
                        color: "#25B9EF",
                      }}
                    ></i>{" "}
                    <BodyText size="xs">{product}</BodyText>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="-m-t-8">
            <Heading size="sm">Caveats</Heading>
          </div>
          <HR />
          <div className="study-caveats-wrapper">
            <div key={UUIDV4()} className="study-b2b-tech">
              <BodyText style={{ fontWeight: "bold" }}>
                {props.study.caveats.title[0]}
              </BodyText>
              <BodyText size="xs">{props.study.caveats.info[0]}</BodyText>
            </div>
            <div key={UUIDV4()} className="study-household-names">
              <BodyText style={{ fontWeight: "bold" }}>
                {props.study.caveats.title[1]}
              </BodyText>
              <BodyText size="xs">{props.study.caveats.info[1]}</BodyText>
            </div>
          </div>
          <HR />
          <div className="-m-t-7 -m-b-7">
            <BodyText style={{ fontWeight: "bold", color: "#25B9EF" }}>
              {props.study.deliveryTime}
            </BodyText>
          </div>
        </Fragment>
      );
    } else {
      middleSection = (
        <Fragment>
          <div className="study-middle-wrapper">
            {" "}
            <div className="study-candidates-wrapper">
              <Heading size="sm">Good Candidates</Heading>
              <HR />

              <BodyText
                style={{
                  fontWeight: "bold",
                  color: "#25B9EF",
                  marginTop: "1.5rem",
                }}
              >
                {props.study.goodCandidates.title}
              </BodyText>
              <div className="-d-flex -m-b-7">
                <i
                  className="pier-button-icon__icon fas fa-thumbs-up"
                  style={{
                    marginRight: "1rem",
                    marginTop: "4px",
                    color: "#25B9EF",
                  }}
                ></i>
                <BodyText size="xs">{props.study.goodCandidates.info}</BodyText>
              </div>
            </div>
            <div className="study-caveats-wrapper-2">
              <Heading size="sm">Caveats</Heading>
              <HR />

              <BodyText style={{ fontWeight: "bold", marginTop: "1.5rem" }}>
                {props.study.caveats.title}
              </BodyText>
              <BodyText size="xs">{props.study.caveats.info}</BodyText>
            </div>{" "}
          </div>{" "}
          <HR />
          <div className="-m-t-7 -m-b-7">
            <BodyText style={{ fontWeight: "bold", color: "#25B9EF" }}>
              {props.study.deliveryTime}
            </BodyText>
          </div>
        </Fragment>
      );
    }
    return middleSection;
  };

  return (
    <div>
      <Card>
        <Section className="section-style">
          <div className="-d-flex -justify-content-between">
            <Heading className="heading-style">
              Study - {props.study.title}
            </Heading>

            <Tooltip text={removeTooltip()}>
              <IconButton
                onClick={handleDelete}
                title="Button"
                icon="fas fa-times"
                size="sm"
                disabled={disabled()}
                dark={false}
                pill={false}
              />
            </Tooltip>
          </div>

          <div className="-d-flex">
            <div className="study-card-description-box">
              <div className="study-card-description-flexbox">
                <div className="study-description">
                  {" "}
                  <BodyText size="md" style={{ fontWeight: "bold" }}>
                    Description
                  </BodyText>
                  <BodyText size="xs">{props.study.description}</BodyText>
                </div>
                <div className="study-studypartners">
                  {" "}
                  <BodyText size="md" style={{ fontWeight: "bold" }}>
                    Study Partners
                  </BodyText>
                  {handleStudyPartners()}
                </div>
              </div>

              {handleMiddleSection()}
            </div>
          </div>
          <Heading size="sm" className="-m-t-8">
            Minimum Spends
          </Heading>
          <StudySpendTable study={props.study} />

          {/*//this is the share button! uncomment when functionality works        
        <Section>
          <div
            className="-float-right"
            style={{
              position: "absolute",
              top: "0",
              right: "1.4rem",
            }}
          >
            <Tooltip text="Share Card">
              <IconButton
                title="Button"
                icon="fas fa-share"
                size="sm"
                disabled={false}
                dark={false}
                pill={false}
              />
            </Tooltip>
          </div>
        </Section> */}
        </Section>
      </Card>
    </div>
  );
};

export default StudiesCard;
