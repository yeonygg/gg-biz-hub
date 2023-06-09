import {
  Card,
  Section,
  Heading,
  BodyText,
  HR,
  IconButton,
  Tooltip,
  Table,
} from "pier-design-system";
import unitTypes from "../constants/units";
import spendTiers from "../constants/spends";
import customFeatures from "../constants/custom";
import { UUIDV4 } from "../helpers/helpers";
import { isMobile } from "react-device-detect";

const BusinessRuleCard = (props) => {
  const standardUnits = props.spend.supportedStandard;
  const gumgumUnits = props.spend.supportedGumgum;
  const unsupportedHiUnits = props.spend.unsupportedHi;
  const supportedHiUnits = props.spend.supportedHi;

  const unsupportedSkins = props.spend.unsupportedSkins;
  const supportedSkins = props.spend.supportedSkins;

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

  const hiHeading = () => {
    let heading = "";
    if (props.spend.unsupportedHi.length > 1) {
      return (heading = (
        <div className="-d-flex">
          <BodyText size="md" style={{ color: "#E24550", fontWeight: "bold" }}>
            High Impact
          </BodyText>
          &nbsp; &nbsp;
          <i
            className="pier-button-icon__icon fas fa-lock"
            style={{
              marginRight: "10px",
              color: "#E24550",
              paddingTop: "0.3rem",
            }}
          ></i>
        </div>
      ));
    } else {
      return (heading = (
        <div className="-d-flex">
          <BodyText
            size="md"
            style={{ color: "#08D18B", fontWeight: "bold", marginBottom: "0" }}
          >
            High Impact
          </BodyText>
          &nbsp; &nbsp;
          <i
            className="pier-button-icon__icon fas fa-unlock"
            style={{
              marginRight: "10px",
              color: "#08D18B",
              paddingTop: "0.3rem",
            }}
          ></i>
        </div>
      ));
    }
  };

  const handleHi = () => {
    let highImpact = "";
    if (props.spend.unsupportedHi.length > 0) {
      const hiArray = props.spend.unsupportedHi;
      return (highImpact = hiArray.map((unit) => (
        <div key={UUIDV4()} className="-d-flex">
          <i
            className="pier-button-icon__icon fas fa-times"
            style={{
              marginRight: "10px",
              color: "#E24550",
              marginTop: "0.25rem",
            }}
          ></i>{" "}
          <BodyText size="sm">{unitTypes[unit].name}</BodyText> &nbsp;
          <BodyText size="sm" style={{ fontWeight: "bold" }}>
            ({unitTypes[unit].abbrev})
          </BodyText>
        </div>
      )));
    } else if (props.spend.supportedHi.length > 0) {
      const hiArray = props.spend.supportedHi;
      return (highImpact = hiArray.map((unit) => (
        <div key={UUIDV4()} className="-d-flex">
          <i
            className="pier-button-icon__icon fas fa-check"
            style={{ marginRight: "10px", color: "#08D18B" }}
          ></i>{" "}
          <BodyText size="sm">{unitTypes[unit].name}</BodyText> &nbsp;
          <BodyText size="sm" style={{ fontWeight: "bold" }}>
            ({unitTypes[unit].abbrev})
          </BodyText>
        </div>
      )));
    }
  };

  const skinHeading = () => {
    let heading = "";
    if (props.spend.supportedSkins.length > 1) {
      return (heading = (
        <div className="-d-flex">
          <BodyText
            size="md"
            style={{
              color: "#08D18B",
              fontWeight: "bold",
              marginBottom: "0",
            }}
          >
            Unlocked Skins
          </BodyText>
          &nbsp; &nbsp;
          <i
            className="pier-button-icon__icon fas fa-unlock"
            style={{
              marginRight: "10px",
              color: "#08D18B",
              paddingTop: "0.3rem",
            }}
          ></i>
        </div>
      ));
    } else {
      return (heading = (
        <div className="-d-flex">
          <BodyText
            size="md"
            style={{
              color: "#E24550",
              fontWeight: "bold",
            }}
          >
            Skins
          </BodyText>
          &nbsp; &nbsp;
          <i
            className="pier-button-icon__icon fas fa-lock"
            style={{
              marginRight: "10px",
              color: "#E24550",
              paddingTop: "0.3rem",
            }}
          ></i>
        </div>
      ));
    }
  };
  const handleLockedSkin = () => {
    let heading = "";
    if (props.spend.title === "$200k-$299k" || props.spend.title === "$300k+") {
      return (heading = null);
    } else {
      return (heading = (
        <div className="-d-flex">
          <BodyText
            size="md"
            style={{
              color: "#E24550",
              fontWeight: "bold",
            }}
          >
            Locked Skins
          </BodyText>
          &nbsp; &nbsp;
          <i
            className="pier-button-icon__icon fas fa-lock"
            style={{
              marginRight: "10px",
              color: "#E24550",
              paddingTop: "0.3rem",
            }}
          ></i>
        </div>
      ));
    }
  };

  const hiVersionMax = () => {
    let versions = "";
    if (props.spend.totalHighImpact === 1) {
      versions = props.spend.totalHighImpact + " version maximum";
    } else if (props.spend.totalHighImpact > 1) {
      versions = props.spend.totalHighImpact + " versions maximum";
    }

    return versions;
  };

  const skinVersionMax = () => {
    let versions = "";
    if (props.spend.totalSkins === 1) {
      versions = props.spend.totalSkins + " version maximum";
    } else if (props.spend.totalSkins > 1) {
      versions = props.spend.totalSkins + " versions maximum";
    }
    return versions;
  };

  const handleDelete = (event) => {
    props.removeCustom(props.index);
  };

  const ggHeading = () => {
    let heading = "";
    if (props.spend.gumgumDesigned === true) {
      heading = "Gumgum Designed";
    } else {
      heading = "Client Provided";
    }

    return heading;
  };

  const unlockedCustom = () => {
    let custom = [];
    const customAdd = props.spend.unlockedCustom;

    if (props.spend.unlockedCustom === "No unlocked custom add-ons") {
      return "No unlocked custom add-ons";
    } else if (props.spend.unlockedCustom === "All custom add-ons unlocked") {
      return "All custom add-ons unlocked";
    } else {
      custom.push(customAdd.map((unit) => customFeatures[unit].name));
    }

    return custom.join().replace(/,/g, ", ");
  };

  return (
    <div>
      <Card style={{ marginBottom: "1rem" }}>
        <Section className="section-style">
          <div className="-float-right">
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
        </Section>
        <Section className="section-style">
          <div className="spend-card-wrapper">
            <div className="spend-heading-section-wrapper">
              <Heading className="heading-style">
                {props.spend.title}
                <HR
                  size="lg"
                  theme="hero"
                  style={{ width: "75px", marginTop: "1rem" }}
                />
              </Heading>{" "}
              <div className="spend-subheading-wrapper">
                <BodyText size="md" style={{ fontWeight: "bold" }}>
                  Unit Types & Versions
                </BodyText>
                <BodyText size="sm">
                  {props.spend.totalUnitTypes} Unit types <br></br>
                  {props.spend.totalVersions} versions maximum
                </BodyText>
              </div>
            </div>

            <div className="units-wrapper">
              <div className="custom-card-description-box-1">
                <div>
                  <BodyText
                    size="md"
                    style={{ fontWeight: "bold", color: "#08D18B" }}
                  >
                    Standard Units
                  </BodyText>

                  {standardUnits.map((unit) => (
                    <div key={UUIDV4()} className="-d-flex">
                      <i
                        className="pier-button-icon__icon fas fa-check"
                        style={{ marginRight: "10px", color: "#08D18B" }}
                      ></i>{" "}
                      <BodyText size="sm">{unitTypes[unit].name}</BodyText>{" "}
                      &nbsp;
                      <BodyText size="sm" style={{ fontWeight: "bold" }}>
                        ({unitTypes[unit].abbrev})
                      </BodyText>
                    </div>
                  ))}

                  {/*!unit.isGumGum && <><i className="fa-check"></i>{`${unit.name} (${unit.abbrev}) }*/}

                  <BodyText size="md" style={{ fontWeight: "bold" }}>
                    {ggHeading()}
                  </BodyText>
                  <div className="-d-block">
                    {" "}
                    {gumgumUnits.map((unit) => (
                      <ul
                        key={UUIDV4()}
                        className="gg-standard-list"
                        data-columns="2"
                      >
                        <li key={UUIDV4()}> {unitTypes[unit].name}</li>
                      </ul>
                    ))}
                  </div>

                  <div className="-d-flex">
                    <BodyText
                      size="md"
                      style={{ fontWeight: "bold", color: "#08D18B" }}
                    >
                      Unlocked Custom Add-ons
                    </BodyText>
                    <i
                      className="pier-button-icon__icon fas fa-unlock"
                      style={{
                        marginLeft: "10px",
                        paddingTop: "0.3rem",
                        color: "#08D18B",
                      }}
                    ></i>
                  </div>
                  <BodyText size="sm">{unlockedCustom()}</BodyText>
                </div>
              </div>

              <div className="custom-card-description-box-2">
                <div>
                  {hiHeading()}
                  {props.spend.totalHighImpact > 0 && (
                    <BodyText
                      size="xs"
                      style={{
                        fontWeight: "bold",
                        paddingBottom: ".5rem",
                      }}
                    >
                      {hiVersionMax()}
                    </BodyText>
                  )}
                  {handleHi()}
                  {/*!unit.isGumGum && <><i className="fa-check"></i>{`${unit.name} (${unit.abbrev}) }*/}
                  {skinHeading()}
                  {props.spend.totalSkins > 0 && (
                    <BodyText
                      size="xs"
                      style={{
                        fontWeight: "bold",
                        paddingBottom: "0.5rem",
                      }}
                    >
                      {skinVersionMax()}
                    </BodyText>
                  )}

                  {supportedSkins.map((unit) => (
                    <div key={UUIDV4()} className="-d-flex">
                      <i
                        className="pier-button-icon__icon fas fa-check"
                        style={{ marginRight: "10px", color: "#08D18B" }}
                      ></i>{" "}
                      <BodyText size="sm">{unitTypes[unit].name}</BodyText>{" "}
                      &nbsp;
                      <BodyText
                        size="sm"
                        style={{ fontWeight: "bold" }}
                      ></BodyText>
                    </div>
                  ))}
                  {handleLockedSkin()}
                  {unsupportedSkins.map((unit) => (
                    <div key={UUIDV4()} className="-d-flex">
                      <i
                        className="pier-button-icon__icon fas fa-times"
                        style={{
                          marginRight: "10px",
                          color: "#E24550",
                          marginTop: "0.25rem",
                        }}
                      ></i>{" "}
                      <BodyText size="sm">{unitTypes[unit].name}</BodyText>{" "}
                      &nbsp;
                      <BodyText
                        size="sm"
                        style={{ fontWeight: "bold" }}
                      ></BodyText>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section padding="xs"></Section>
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
                icon="fas fa-external-link-alt"
                size="sm"
                disabled={false}
                dark={false}
                pill={false}
              />
            </Tooltip>
          </div>
        </Section> */}
      </Card>
    </div>
  );
};

export default BusinessRuleCard;
