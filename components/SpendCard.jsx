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

const SpendCard = (props) => {
  const resultHead = "Minimum Spend";

  const studySpendFunction = () => {
    //start of study minspend
    const study = props.campaign.studyConfig;

    for (let i = 0; i < study.length; i++) {
      let minSpend = 0;
      if (
        study[i].selectedPartner === "Upwave" &&
        study[i].selectedQuantity === "1"
      ) {
        minSpend = 75000;
      } else if (
        study[i].selectedPartner === "Upwave" &&
        study[i].selectedQuantity === "2"
      ) {
        minSpend = 200000;
      } else if (study[i].selectedPartner === "Kantar Millward Brown") {
        minSpend = 100000;
      } else if (study[i].selectedPartner === "Dynata") {
        minSpend = 100000;
      } else if (
        study[i].selectedPartner === "Foursquare/Placed" &&
        study[i].selectedQuantity === "2"
      ) {
        minSpend = 200000;
      } else if (
        study[i].selectedPartner === "Lumen" &&
        study[i].selectedQuantity === "1"
      ) {
        minSpend = 75000;
      } else if (
        study[i].selectedPartner === "Lumen" &&
        study[i].selectedQuantity === "2"
      ) {
        minSpend = 200000;
      } else if (study[i].selectedPartner === "ANSA") {
        minSpend = 75000;
      } else if (study[i].selectedPartner === "IRI") {
        minSpend = 250000;
      } else if (study[i].selectedPartner === "Catalina") {
        minSpend = 250000;
      }
      return minSpend;
    }
  };

  const dmpSpendFunction = () => {
    const dmp = props.campaign.dmpConfig;
    //start of dmp minspend

    for (let i = 0; i < dmp.length; i++) {
      let minSpend = 0;
      if (dmp[i].dmpType === "Custom Audiences") {
        minSpend = dmp[i].minSpend;
      } else if (dmp[i].dmpType === "Advertiser First Part Data Ingestion") {
        minSpend = dmp[i].minSpend;
      } else if (dmp[i].dmpType === "ABM Data") {
        minSpend = dmp[i].minSpend;
      }
      return minSpend;
    }
  };

  const creativeSpendFunction = () => {
    const unit = props.campaign.unitConfig;

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

    if (
      custom.length > 0 &&
      skinVersions == 0 &&
      addOns > 0 &&
      hiVersions == 1
    ) {
      minSpend = 75000 + 25000;
    }

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

    return minSpend;
  };

  const spendFunction = () => {
    let spend = 0;
    const study = props.campaign.studyConfig;
    const dmp = props.campaign.dmpConfig;

    if (study.length < 1 && dmp.length < 1) {
      spend = creativeSpendFunction();
    }
    if (
      creativeSpendFunction() >= studySpendFunction() &&
      creativeSpendFunction() >= dmpSpendFunction()
    ) {
      spend = creativeSpendFunction();
    } else if (creativeSpendFunction() >= dmpSpendFunction()) {
      spend = creativeSpendFunction();
    } else if (
      creativeSpendFunction() <= studySpendFunction() &&
      studySpendFunction() >= dmpSpendFunction
    ) {
      spend = studySpendFunction();
    } else if (
      creativeSpendFunction() <= dmpSpendFunction() &&
      studySpendFunction() <= dmpSpendFunction()
    ) {
      spend = dmpSpendFunction();
    }
    return spend;
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
    if (inputBudget == 0) {
      return (iconCode = "");
    } else if (spendFunction() > inputBudget && inputBudget > 0) {
      iconCode = (
        <Tooltip
          position="right"
          text="Reduce the number of units or versions, or an exception will be required"
        >
          <i
            className="fas fa-exclamation-circle"
            style={{ marginRight: "5px" }}
          ></i>
        </Tooltip>
      );
    } else if (spendFunction() <= inputBudget) {
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
    <div className="card-style">
      <SubHeading text={resultHead} />

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
      <SpendMeter
        campaignBudget={props.campaign.campaignBudget}
        minSpend={spendFunction()}
      />
    </div>
  );
};

export default SpendCard;
