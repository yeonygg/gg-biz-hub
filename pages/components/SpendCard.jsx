import {
  Card,
  Section,
  BodyText,
  HR,
  Button,
  Heading,
  Tooltip,
} from "pier-design-system";
import SubHeading from "./SubHeading";
import SpendMeter from "./SpendMeter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SpendCard = (props) => {
  const resultHead = "Minimum Spend";
  const bodyText =
    "Click the Share button to share this information with the client";

  const spendFunction = () => {
    const unit = props.campaign.unitConfig;
    // console.log(unit);

    const standard = [];
    const hiUnit = [];
    const skin = [];
    const versionCount = [];
    const custom = [];
    const addOn = [];
    let unitMinSpend = [];
    let customNull = false;

    for (let i = 0; i < unit.length; i++) {
      const standardUnit = unit[i];
      const versions = unit[i].versionCount;

      versionCount.push(versions);

      if (standardUnit.highImpact === false) {
        standard.push(standardUnit.highImpact);
      }

      if (standardUnit.highImpact === true) {
        hiUnit.push(standardUnit.versionCount);
      }

      if (standardUnit.isSkin === true) {
        skin.push(standardUnit.versionCount);
      }

      if (standardUnit.customOn === true) {
        custom.push(standardUnit.customMinSpend);
      }

      if (
        standardUnit.customUnit === "Extended Rollover" ||
        standardUnit.customUnit === "Scrollable Text"
      ) {
        addOn.push(standardUnit.versionCount);
        unitMinSpend.push(standardUnit.minSpend);
      }

      if (standardUnit.customOn === true && standardUnit.customUnit === null) {
        customNull = true;
      }
    }

    const totalVersions = versionCount.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    const hiVersions = hiUnit.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    const skinVersions = skin.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    const addOns = addOn.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    const minSpends = Math.max(...unitMinSpend);
    // console.log(minSpends);

    const customMinSpend = Math.max(...custom);
    // console.log(customMinSpend);

    let minSpend = 0;

    if (totalVersions == 0) {
      return 0;
    }
    // console.log(minSpend);
    if (
      custom.length > 0 &&
      skinVersions == 0 &&
      addOns == 0 &&
      customNull === false
    ) {
      return Math.max(minSpend, customMinSpend);
    }

    if (
      custom.length > 0 &&
      skinVersions == 0 &&
      addOns > 0 &&
      totalVersions == 1
    ) {
      minSpend = minSpends + 25000;
    }

    if (
      custom.length > 0 &&
      skinVersions == 0 &&
      addOns > 0 &&
      totalVersions > 1 &&
      hiVersions == 0
    ) {
      return Math.max(minSpends + 25000, customMinSpend);
    }

    console.log(minSpends);

    if (
      custom.length > 0 &&
      skinVersions == 0 &&
      addOns > 0 &&
      hiVersions == 1
    ) {
      minSpend = 75000 + 25000;
    }

    console.log(custom.length);

    if (
      custom.length > 1 &&
      skinVersions == 0 &&
      addOns > 0 &&
      hiVersions > 0
    ) {
      return Math.max(100000, customMinSpend);
    }
    if (
      totalVersions > 0 &&
      totalVersions <= 6 &&
      hiVersions === 0 &&
      standard.length <= 2 &&
      skinVersions === 0 &&
      addOns == 0
    ) {
      return 25000;
    } else if (
      totalVersions > 0 &&
      totalVersions <= 9 &&
      standard.length <= 3 &&
      hiVersions === 0 &&
      skinVersions === 0 &&
      addOns == 0
    ) {
      minSpend = 50000;
    } else if (
      totalVersions > 0 &&
      totalVersions <= 9 &&
      standard.length <= 3 &&
      hiVersions === 1 &&
      skinVersions === 0 &&
      addOns == 0
    ) {
      minSpend = 75000;
    } else if (
      totalVersions > 0 &&
      totalVersions <= 15 &&
      standard.length <= 15 &&
      hiVersions === 2 &&
      skinVersions === 0
    ) {
      minSpend = 125000;
    } else if (
      totalVersions > 0 &&
      totalVersions <= 15 &&
      standard.length <= 15 &&
      hiVersions > 2 &&
      skinVersions === 0
    ) {
      minSpend = 200000;
    } else if (
      totalVersions > 0 &&
      totalVersions <= 15 &&
      standard.length <= 15 &&
      skinVersions > 0 &&
      skinVersions <= 2
    ) {
      minSpend = 200000;
    } else if (
      totalVersions > 0 &&
      totalVersions <= 20 &&
      standard.length <= 20 &&
      skinVersions > 2
    ) {
      minSpend = 300000;
    }

    // if (customNull === true) {
    //   return minSpend;
    // }

    return minSpend;
  };

  const inputBudget = props.campaign.campaignBudget;
  const textColor = () => {
    let color = "";
    if (spendFunction() > inputBudget || inputBudget == 0) {
      color = "#E24550";
    } else {
      color = "#08D18B";
    }
    return color;
  };

  const icon = () => {
    let iconCode = "";
    if (inputBudget == "" || inputBudget == 0) {
      iconCode = "";
    }
    if (spendFunction() > inputBudget && inputBudget > 0) {
      iconCode = (
        <Tooltip
          position="right"
          text="Reduce the number of units or versions, 
or an exception will be required"
        >
          <i
            className="fas fa-exclamation-circle"
            style={{ marginRight: "5px" }}
          ></i>
        </Tooltip>
      );
    } else if (spendFunction() < inputBudget) {
      iconCode = (
        <i className="fas fa-check-circle" style={{ marginRight: "5px" }}></i>
      );
    }
    return iconCode;
  };

  const spendMessage = () => {
    if (inputBudget === "" || inputBudget === 0) {
      return "";
    }
    if (spendFunction() > inputBudget) {
      return `Campaign budget does not meet minimum spend requirements`;
    } else {
      return "Campaign budget meets minimum spend thresholds";
    }
  };

  // console.log(icon());

  return (
    <Card className="spend-card">
      <div className="card-style">
        <SubHeading text={resultHead} />

        <Section padding="xs">
          <Heading
            style={{ color: [textColor()], marginBottom: "0.75rem" }}
            size="lg"
          >
            ${spendFunction().toLocaleString("en-US")}
          </Heading>
          <BodyText
            size="xs"
            style={{ color: [textColor()], paddingBottom: "2rem" }}
          >
            {icon()}
            {spendMessage()}
          </BodyText>
        </Section>
        <SpendMeter
          campaignBudget={props.campaign.campaignBudget}
          minSpend={spendFunction()}
        />
      </div>
    </Card>
  );
};

export default SpendCard;
