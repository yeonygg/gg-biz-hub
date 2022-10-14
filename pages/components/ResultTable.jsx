import { Section, Table } from "pier-design-system";

const ResultTable = (props) => {
  const designSLA = () => {
    const standardTimeArray = [];
    const expeditedTimeArray = [];
    const hiTimeArray = [];
    const customArray = [];
    const skinArray = [];

    console.log(standardTimeArray);
    console.log(expeditedTimeArray);
    console.log(hiTimeArray);
    console.log(customArray);
    console.log(skinArray);
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

    console.log(standardTimeArraySum);

    const customArraySum = customArray.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    console.log(customArraySum);

    console.log(skinArray.length);

    if (skinArray.length >= 1) {
      return 5 * skinArray.length + Math.floor(standardTimeArraySum / 4);
    }

    //standard time calc
    if (expTimeArraySum <= 4) {
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

  console.log(designSLA());

  return (
    <Section padding="sm" className="client-section">
      <Table
        size="sm"
        columns={["Rate", "Spend", "Floor CPM", "Open CPM", "SLA"]}
        data={[
          {
            Rate: "Cell 1",
            Spend: "Cell 2",
            "Floor CPM": "Cell 2",
            "Open CPM": "Cell 2",
            SLA: "",
          },
        ]}
      />
    </Section>
  );
};

export default ResultTable;
