import { Section, Table } from "pier-design-system";

const ResultTable = (props) => {
  const designSLA = () => {
    const standardTimeArray = [];
    const expeditedTimeArray = [];
    const hiTimeArray = [];
    const customArray = [];
    const skinArray = [];
    for (let i = 0; i < props.campaign.unitConfig.length; i++) {
      const turnaroundTime = props.campaign.unitConfig[i].turnaroundTime;
      const versionCount = props.campaign.unitConfig[i].versionCount;
      const customTurnaroundTime =
        props.campaign.unitConfig[i].customTurnaroundTime;

      //STANDARD TURNAROUND TIME CALC START

      if (
        props.campaign.unitConfig[i].isExpedited === false &&
        props.campaign.unitConfig[i].highImpact === false
      ) {
        standardTimeArray.push(turnaroundTime * versionCount);
      } else if (
        props.campaign.unitConfig[i].isExpedited === true &&
        props.campaign.unitConfig[i].highImpact === false
      ) {
        expeditedTimeArray.push(turnaroundTime * versionCount - 1);
      }

      //STANDARD TURNAROUND TIME CALC END

      //HIGH IMPACT TURNAROUND TIME CALC START

      if (
        props.campaign.unitConfig[i].isExpedited === false &&
        props.campaign.unitConfig[i].highImpact === true
      ) {
        if (versionCount === 1) {
          hiTimeArray.push(turnaroundTime);
        } else {
          for (
            let i = 0;
            i < props.campaign.unitConfig.length * versionCount - 2;
            i++
          ) {
            hiTimeArray.push(turnaroundTime);
          }
        }
      } else if (
        props.campaign.unitConfig[i].isExpedited === true &&
        props.campaign.unitConfig[i].highImpact === true
      ) {
        expeditedTimeArray.push(turnaroundTime);
        hiTimeArray.push(turnaroundTime);
      }
      if (props.campaign.unitConfig[i].customOn === true) {
        //custom calc
        customArray.push(customTurnaroundTime * versionCount);
      }

      if (props.campaign.unitConfig[i].turnaroundTime >= 5) {
        skinArray.push(turnaroundTime);
      }
    }

    const standardTimeArraySum = standardTimeArray.reduce(
      (accumulator, value) => {
        return accumulator + value;
      },
      0
    );

    const expTimeArraySum = expeditedTimeArray.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    // console.log(standardTimeArraySum);

    const customArraySum = customArray.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    // console.log(customArraySum);

    // console.log(skinArray.length);

    if (skinArray.length >= 1) {
      return 5 * skinArray.length + Math.floor(standardTimeArraySum / 4);
    }

    //standard time calc
    if (expTimeArraySum > 1 && expTimeArraySum <= 4) {
      return 1 + customArraySum + hiTimeArray.length;
    }

    if (standardTimeArraySum < 8) {
      return 2 + customArraySum + hiTimeArray.length;
    }

    if (standardTimeArraySum > 8 && standardTimeArraySum < 30) {
      return 3 + customArraySum + hiTimeArray.length;
    }

    if (standardTimeArraySum > 30) {
      return 4 + customArraySum + hiTimeArray.length;
    }
  };

  //Design SLA END

  // console.log(designSLA());

  //minSpend start----------------->

  const Spend = () => {
    const standardSpend = [];
    const customSpend = [];
    const versionCount = [];
    const expandableCount = [];

    console.log(standardSpend);
    console.log(expandableCount);
    console.log(versionCount);

    for (let i = 0; i < props.campaign.unitConfig.length; i++) {
      const unitMinSpend = props.campaign.unitConfig[i].minSpend;
      const customMinSpend = props.campaign.unitConfig[i].customMinSpend;
      const versions = props.campaign.unitConfig[i].versionCount;

      if (props.campaign.unitConfig[i].highImpact === false) {
        standardSpend.push(unitMinSpend);
      }

      customSpend.push(customMinSpend);
      versionCount.push(versions);

      if (
        props.campaign.unitConfig[i].unitType === "In-Image Expandable" ||
        props.campaign.unitConfig[i].unitType === "In-Screen Expandable"
      ) {
        expandableCount.push(props.campaign.unitConfig[i].minSpend);
      }
    }

    const versionCountSum = versionCount.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    console.log(versionCountSum);

    if (expandableCount.length >= 1) {
      return 74000;
    }

    if (versionCountSum <= 6 && standardSpend.length <= 2) {
      return standardSpend[0];
    }

    if (versionCountSum <= 9 && standardSpend.length <= 3) {
      return 50000;
    }

    if (versionCountSum <= 15 && standardSpend.length <= 3) {
      return 125000;
    }
  };

  Spend();
  const spendResult = String(Spend());

  //minSpend end------------------->

  const result = String(designSLA());
  // console.log(result);

  return (
    <Section padding="sm" className="client-section">
      <Table
        size="sm"
        columns={["Rate", "Spend", "Floor CPM", "Open CPM", "SLA"]}
        data={[
          {
            Rate: "Cell 1",
            Spend: [spendResult],
            "Floor CPM": "Cell 2",
            "Open CPM": "Cell 2",
            SLA: [result],
          },
        ]}
      />
    </Section>
  );
};

export default ResultTable;
