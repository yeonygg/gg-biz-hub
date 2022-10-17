import { Section, Table } from "pier-design-system";

const ResultTable = (props) => {
  const designSLA = () => {
    const standardTimeArray = [];
    const highImpactArray = [];

    for (let i = 0; i < props.campaign.unitConfig.length; i++) {
      const turnaroundTime = props.campaign.unitConfig[i].turnaroundTime;
      const versionCount = props.campaign.unitConfig[i].versionCount;

      //STANDARD TURNAROUND TIME CALC START
      if (props.campaign.unitConfig[i].highImpact === false) {
        standardTimeArray.push(versionCount);
      }
      //STANDARD TURNAROUND TIME CALC END

      if (props.campaign.unitConfig[i].highImpact === true) {
        highImpactArray.push(versionCount);
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

    const totalUnits = standardTimeArraySum + highImpactArraySum;

    //standard time calc
    let totalDesignTime = "";

    if (totalUnits <= 4) {
      totalDesignTime = 2;
    } else if (totalUnits > 4 && totalUnits <= 15) {
      totalDesignTime = 3;
    } else if (totalUnits > 15) {
      totalDesignTime = 4;
    }

    if (highImpactArray.length >= 1) {
      totalDesignTime = totalDesignTime + 1;
    }

    console.log(props.campaign.unitConfig);

    if (
      props.campaign.unitConfig.length > 0 &&
      props.campaign.unitConfig[0].isExpedited === true
    ) {
      totalDesignTime = totalDesignTime - 1;
    }
    return totalDesignTime;
  };

  //Design SLA END

  //minSpend start----------------->

  const Spend = () => {
    const standardSpend = [];
    const customSpend = [];
    const versionCount = [];
    const expandableCount = [];

    // console.log(standardSpend);
    // console.log(expandableCount);
    // console.log(versionCount);

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

    // console.log(versionCountSum);

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
