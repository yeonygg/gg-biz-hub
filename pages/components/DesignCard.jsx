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
  // console.log(props.campaign);

  const designSLA = () => {
    const standardTimeArray = [];
    const highImpactArray = [];
    const customTimeArray = [];
    const inVideo = [];
    const skin = [];

    // console.log(customTimeArray);

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

    if (totalUnits > 0 && totalUnits <= 4) {
      totalDesignTime = 2;
    } else if (totalUnits > 4 && totalUnits <= 15) {
      totalDesignTime = 3;
    } else if (totalUnits > 15) {
      totalDesignTime = 4;
    } else if (totalUnits == 0 && customTimeArray.length > 0) {
      totalDesignTime = 0;
    }

    if (highImpactArray.length > 0 && totalUnits > 0) {
      totalDesignTime = totalDesignTime + 1;
    }

    // console.log(props.campaign.unitConfig);

    if (
      customTimeArray.length > 0 &&
      props.campaign.unitConfig[0].isExpedited === false &&
      totalUnits > 0
    ) {
      return Math.max(totalDesignTime, maxCustom);
    } else if (
      customTimeArray.length > 0 &&
      props.campaign.unitConfig[0].isExpedited === true &&
      totalUnits > 0
    ) {
      return maxCustom - 1;
    }

    if (
      props.campaign.unitConfig.length > 0 &&
      props.campaign.unitConfig[0].isExpedited === true &&
      totalUnits > 0
    ) {
      totalDesignTime = totalDesignTime - 1;
    }

    if (inVideo.length > 0) {
      totalDesignTime = 7;
    }

    if (skin.length > 0) {
      totalDesignTime = 5;
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
