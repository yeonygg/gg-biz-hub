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

const SpendCard = (props) => {
  const resultHead = "Minimum Spend";
  const bodyText =
    "Click the Share button to share this information with the client";

  const spendFunction = () => {
    const unit = props.campaign.unitConfig;
    console.log(unit);

    const standard = [];
    const versionCount = [];
    console.log(standard);
    console.log(versionCount);

    for (let i = 0; i < unit.length; i++) {
      const standardUnit = unit[i].highImpact;
      const versions = unit[i].versionCount;

      versionCount.push(versions);

      if (standardUnit === false) {
        standard.push(standardUnit);
      }
    }

    const totalVersions = versionCount.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    console.log(totalVersions);

    if (totalVersions <= 6 && standard.length <= 2) {
      return 25000;
    } else if (totalVersions <= 9 && standard.length <= 3) {
      return 50000;
    }

    // switch (unit) {
    //   case "25k":
    //     if (totalVersions <= 6 && standard.length <= 2) {
    //       console.log("25k case");
    //       return 25000;
    //     }

    //     break;
    // }
  };

  console.log(spendFunction());

  return (
    <Card className="spend-card">
      <div className="card-style">
        <SubHeading text={resultHead} />
        <Heading size="lg">${spendFunction()}</Heading>

        <Section padding="xs"></Section>
      </div>
    </Card>
  );
};

export default SpendCard;
