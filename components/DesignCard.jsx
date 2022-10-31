import {
  Card,
  Section,
  BodyText,
  HR,
  Button,
  Heading,
} from "pier-design-system";
import SubHeading from "./SubHeading";

const DesignCard = (props) => {
  const resultHead = "Design SLA";
  const bodyText = "Business Days";

  const designSLA = () => {
    const standardTimeArray = [];
    const highImpactArray = [];
    const customTimeArray = [];
    const inVideo = [];
    const skin = [];
    const addOn = [];
    const customNull = false;

    // console.log(addOn);

    for (let i = 0; i < props.campaign.unitConfig.length; i++) {
      const customTurnaroundTime =
        props.campaign.unitConfig[i].customTurnaroundTime;
      const versionCount = props.campaign.unitConfig[i].versionCount;
      const turnaroundTime = props.campaign.unitConfig[i].turnaroundTime;

      //STANDARD TURNAROUND TIME CALC
      if (props.campaign.unitConfig[i].highImpact === false) {
        standardTimeArray.push(versionCount);
      }

      //High Impact TURNAROUND TIME CALC

      if (props.campaign.unitConfig[i].highImpact === true) {
        highImpactArray.push(versionCount);
      }

      //Custom TURNAROUND TIME CALC

      if (props.campaign.unitConfig[i].customOn === true) {
        customTimeArray.push(customTurnaroundTime);
      }

      if (props.campaign.unitConfig[i].unitType === "In-Video Snipe") {
        inVideo.push(turnaroundTime);
      }

      if (
        props.campaign.unitConfig[i].unitType === "Desktop Skin" ||
        props.campaign.unitConfig[i].unitType === "Mobile Skin" ||
        props.campaign.unitConfig[i].unitType === "Mobile Scroller"
      ) {
        skin.push(turnaroundTime);
      }

      if (
        props.campaign.unitConfig[i].customUnit === "Extended Rollover" ||
        props.campaign.unitConfig[i].customUnit === "Scrollable Text"
      ) {
        addOn.push(versionCount);
      }

      if (
        props.campaign.unitConfig[i].customOn === true &&
        props.campaign.unitConfig[i].customUnit == null
      ) {
        customNull = true;
      }
    }

    const standardTimeArraySum = standardTimeArray.reduce(
      (accumulator, value) => {
        return accumulator + value;
      },
      0
    );

    const highImpactArraySum = highImpactArray.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    const maxCustom = Math.max(...customTimeArray);
    const totalUnits = standardTimeArraySum + highImpactArraySum;

    //standard time calc
    let totalDesignTime = 0;

    if (totalUnits > 0 && props.campaign.unitConfig[0].isExpedited === false) {
      if (totalUnits > 0 && totalUnits <= 4) {
        // debugger;
        totalDesignTime = 2;
      } else if (totalUnits > 4 && totalUnits <= 15) {
        totalDesignTime = 3;
      } else if (totalUnits > 15) {
        totalDesignTime = 4;
      } else if (totalUnits == 0 && customTimeArray.length > 0) {
        totalDesignTime = 0;
      }

      if (highImpactArray.length > 0 && totalUnits > 0 && addOn.length == 0) {
        totalDesignTime = totalDesignTime + 1;
      }
      if (
        customTimeArray.length > 0 &&
        totalUnits > 0 &&
        skin.length == 0 &&
        addOn.length == 0 &&
        customNull === false
      ) {
        return Math.max(totalDesignTime, maxCustom);
      }
      if (customTimeArray.length > 0 && addOn.length > 0) {
        totalDesignTime = totalDesignTime + 1;
      }
      if (
        customTimeArray.length > 0 &&
        highImpactArray.length > 0 &&
        addOn.length > 0
      ) {
        totalDesignTime = totalDesignTime + 1;
      }

      if (inVideo.length > 0) {
        totalDesignTime = 7;
      }
      if (skin.length > 0) {
        totalDesignTime = 5;
      }
    }

    if (totalUnits > 0 && props.campaign.unitConfig[0].isExpedited === true) {
      if (totalUnits > 0 && totalUnits <= 4) {
        totalDesignTime = 1;
      } else if (totalUnits > 4 && totalUnits <= 15) {
        totalDesignTime = 2;
      } else if (totalUnits > 15) {
        totalDesignTime = 3;
      } else if (totalUnits == 0 && customTimeArray.length > 0) {
        totalDesignTime = 0;
      }

      if (highImpactArray.length > 0 && totalUnits > 0 && addOn.length == 0) {
        totalDesignTime = totalDesignTime + 1;
      }
      if (
        customTimeArray.length > 0 &&
        totalUnits > 0 &&
        skin.length == 0 &&
        addOn.length == 0
      ) {
        return Math.max(totalDesignTime, maxCustom) - 1;
      }
      if (
        customTimeArray.length > 0 &&
        highImpactArray.length > 0 &&
        addOn.length > 0
      ) {
        totalDesignTime = totalDesignTime + 1;
      }

      if (customTimeArray.length > 0 && addOn.length > 0) {
        totalDesignTime = totalDesignTime + 1;
      }

      if (inVideo.length > 0) {
        totalDesignTime = 6;
      }
      if (skin.length > 0) {
        totalDesignTime = 4;
      }
    }

    return totalDesignTime;
  };
  const plural = () => {
    if (designSLA() > 1) {
      return "Business Days";
    } else {
      return "Business Day";
    }
  };

  //Design SLA END

  return (
    <Card className="design-card">
      <div className="card-style">
        <SubHeading text={resultHead} />
        <Heading className="sla-heading">{designSLA()}</Heading>
        <BodyText>{plural()}</BodyText>
        <Section padding="xs"></Section>
      </div>
    </Card>
  );
};

export default DesignCard;
