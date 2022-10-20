import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import {
  Card,
  Section,
  BodyText,
  HR,
  Button,
  Heading,
} from "pier-design-system";
import SubHeading from "./SubHeading";
import SpendMeter from "./SpendMeter";

const SpendCard = (props) => {
  const resultHead = "Minimum Spend";
  const bodyText =
    "Click the Share button to share this information with the client";

  const spendFunction = () => {
    const unit = props.campaign.unitConfig;
    console.log(unit);

    const standard = [];
    const hiUnit = [];
    const skin = [];
    const versionCount = [];
    const custom = [];

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

    const customMinSpend = Math.max(...custom);

    let minSpend = 25000;

    if (custom.length > 0) {
      return Math.max(minSpend, customMinSpend);
    }

    if (
      totalVersions <= 6 &&
      standard.length <= 2 &&
      hiVersions === 0 &&
      skinVersions === 0
    ) {
      return minSpend;
    } else if (
      totalVersions <= 9 &&
      standard.length <= 3 &&
      hiVersions === 0 &&
      skinVersions === 0
    ) {
      minSpend = 50000;
    } else if (
      totalVersions <= 9 &&
      standard.length <= 3 &&
      hiVersions === 1 &&
      skinVersions === 0
    ) {
      minSpend = 75000;
    } else if (
      totalVersions <= 15 &&
      standard.length <= 15 &&
      hiVersions === 2 &&
      skinVersions === 0
    ) {
      minSpend = 125000;
    } else if (
      totalVersions <= 15 &&
      standard.length <= 15 &&
      hiVersions > 2 &&
      skinVersions === 0
    ) {
      minSpend = 200000;
    } else if (
      totalVersions <= 15 &&
      standard.length <= 15 &&
      skinVersions > 0 &&
      skinVersions <= 2
    ) {
      minSpend = 200000;
    } else if (
      totalVersions <= 20 &&
      standard.length <= 20 &&
      skinVersions > 2
    ) {
      minSpend = 300000;
    }

    return minSpend;

    // switch (unit) {
    //   case "25k":
    //     if (totalVersions <= 6 && standard.length <= 2) {
    //       console.log("25k case");
    //       return 25000;
    //     }

    //     break;
    // }
  };

  const meter = () => {};

  // console.log(spendFunction());

  console.log(props.campaign);

  const inputBudget = props.campaign.campaignBudget;
  console.log(inputBudget);
  const textColor = () => {
    let color = "";
    if (spendFunction() >= inputBudget) {
      color = "#E24550";
    } else {
      color = "#08D18B";
    }
    return color;
  };

  const spendMessage = () => {
    if (inputBudget === "" || inputBudget === 0) {
      return "";
    }
    if (spendFunction() >= inputBudget) {
      return "Minimum Spend exceeds stated campaign budget";
    } else {
      return "Minimum Spend is under stated budget";
    }
  };

  return (
    <Card className="spend-card">
      <div className="card-style">
        <SubHeading text={resultHead} />

        <Section padding="xs">
          <Heading
            style={{ color: [textColor()], marginBottom: "0.75rem" }}
            size="lg"
          >
            ${spendFunction()}
          </Heading>

          <BodyText size="xs" style={{ color: [textColor()] }}>
            {spendMessage()}
          </BodyText>
          <BodyText style={{ fontWeight: "bold", paddingTop: "2rem" }}>
            Stated Campaign Budget
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
