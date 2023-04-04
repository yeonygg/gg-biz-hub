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
    const studies = props.campaign.studyConfig;
    return studies.length === 0
      ? 0
      : Math.max(...studies.map((study) => study.minSpend));
  };

  const dmpSpendFunction = () => {
    const dmp = props.campaign.dmpConfig;
    //start of dmp minspend

    //returning a value of 0 instead of undefined so spend function can still return a number value for spend
    if (dmp.length < 1) {
      return 0;
    } else {
      //loops through the dmpConfig to return the minSpend of the selected partner
      let minSpend = [];

      for (let i = 0; i < dmp.length; i++) {
        if (
          dmp[i].dmpType === "3rd Party Branded Data" ||
          dmp[i].dmpType === "Lotame LDX ($0.20)" ||
          dmp[i].dmpType === "GumGum First Part (Contextual)"
        ) {
          minSpend.push(dmp[i].minSpend);
        } else if (dmp[i].dmpType === "Custom Audiences") {
          minSpend.push(dmp[i].minSpend);
        } else if (dmp[i].dmpType === "Advertiser First Part Data Ingestion") {
          minSpend.push(dmp[i].minSpend);
        } else if (dmp[i].dmpType === "ABM Data") {
          minSpend.push(dmp[i].minSpend);
        }
      }
      return Math.max(...minSpend);
    }
  };

  const creativeSpendFunction = () => {
    const unit = props.campaign.unitConfig;

    const standard = [];
    const hiUnit = [];
    const skin = [];
    const skinMinSpends = [];
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
        skinMinSpends.push(standardUnit.minSpend);
      }

      if (standardUnit.customOn === true) {
        //for multiple versions of ***the same custom execution*** add at 25% of cost of 1
        const customFeatureCost =
          standardUnit.customMinSpend +
          standardUnit.customMinSpend * (standardUnit.versionCount - 1) * 0.25;
        custom.push(customFeatureCost);
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

    const highestCustom = Math.max(...custom);
    //for multiple ***different types of custom executions*** we apply a 50% discount for each subsequent one
    const customMinSpend = Math.round(
      custom
        .filter((v, index) => {
          return index !== custom.indexOf(highestCustom);
        })
        .reduce((sum, a) => sum + a * 0.5, 0) + highestCustom
    );

    let minSpend = [];

    if (totalVersions == 0) {
      return 0;
    }
    // console.log(minSpend);
    // if (
    //   custom.length > 0 &&
    //   skinVersions == 0 &&
    //   addOns == 0 &&
    //   customNull === false
    // ) {
    //   return Math.max(minSpend, customMinSpend);
    // }

    // if (
    //   custom.length > 0 &&
    //   skinVersions == 0 &&
    //   addOns > 0 &&
    //   totalVersions == 1
    // ) {
    //   minSpend = minSpends + 25000;
    // }

    // if (
    //   custom.length > 0 &&
    //   skinVersions == 0 &&
    //   addOns > 0 &&
    //   totalVersions > 1 &&
    //   hiVersions == 0
    // ) {
    //   return Math.max(minSpends + 25000, customMinSpend);
    // }

    // if (
    //   custom.length > 0 &&
    //   skinVersions == 0 &&
    //   addOns > 0 &&
    //   hiVersions == 1
    // ) {
    //   minSpend = 75000 + 25000;
    // }

    // if (
    //   custom.length > 1 &&
    //   skinVersions == 0 &&
    //   addOns > 0 &&
    //   hiVersions > 0
    // ) {
    //   return Math.max(100000, customMinSpend);
    // }
    if (
      totalVersions > 0 &&
      totalVersions <= 6 &&
      hiVersions === 0 &&
      standard.length <= 2 &&
      skinVersions < 2
    ) {
      minSpend.push(25000);
    } else if (
      totalVersions > 0 &&
      totalVersions <= 9 &&
      standard.length <= 3 &&
      hiVersions <= 1 &&
      skinVersions < 2
    ) {
      minSpend.push(50000);
    } else if (
      totalVersions > 0 &&
      totalVersions <= 9 &&
      standard.length <= 3 &&
      hiVersions <= 2 &&
      skinVersions < 2
    ) {
      minSpend.push(75000);
    } else if (
      totalVersions > 0 &&
      totalVersions > 9 &&
      totalVersions <= 12 &&
      standard.length <= 3 &&
      hiVersions === 2 &&
      skinVersions < 2
    ) {
      minSpend.push(100000);
    } else if (
      totalVersions > 0 &&
      totalVersions <= 15 &&
      standard.length <= 3 &&
      hiVersions === 3 &&
      skinVersions < 2
    ) {
      minSpend.push(125000);
    } else if (
      totalVersions > 0 &&
      totalVersions <= 18 &&
      standard.length <= 4 &&
      hiVersions <= 4 &&
      skinVersions <= 2
    ) {
      minSpend.push(200000);
    } else if (
      totalVersions > 0 &&
      totalVersions <= 25 &&
      standard.length <= 5 &&
      hiVersions <= 4 &&
      skinVersions <= 4
    ) {
      minSpend.push(300000);
    }

    const finalSpendArray = minSpend.concat(skinMinSpends);
    const highestfinalSpend = Math.max(...finalSpendArray);
    const addOnMap = addOn.map(function () {
      if (highestfinalSpend < 100000) {
        return highestfinalSpend + 25000;
      } else {
        return 0;
      }
    });
    return Math.max(highestfinalSpend, highestCustom, addOnMap);
  };

  const spendFunction = () => {
    let spend = 0;
    const study = props.campaign.studyConfig;
    const dmp = props.campaign.dmpConfig;

    if (study.length < 1 && dmp.length < 1) {
      spend = creativeSpendFunction();
    } else if (
      creativeSpendFunction() >= studySpendFunction() &&
      creativeSpendFunction() >= dmpSpendFunction()
    ) {
      spend = creativeSpendFunction();
    } else if (
      studySpendFunction() >= creativeSpendFunction() &&
      studySpendFunction() >= dmpSpendFunction()
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
