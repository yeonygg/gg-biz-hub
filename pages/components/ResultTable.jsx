import { Section, Table } from "pier-design-system";

const ResultTable = (props) => {
  const designSLA = () => {
    const standardTimeArray = [];
    const highImpactArray = [];
    const customTimeArray = [];

    for (let i = 0; i < props.campaign.unitConfig.length; i++) {
      const customTurnaroundTime =
        props.campaign.unitConfig[i].customTurnaroundTime;
      const versionCount = props.campaign.unitConfig[i].versionCount;

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
      customTimeArray.length > 0 &&
      props.campaign.unitConfig[0].isExpedited === false
    ) {
      return Math.max(totalDesignTime, maxCustom);
    } else if (
      customTimeArray.length > 0 &&
      props.campaign.unitConfig[0].isExpedited === true
    ) {
      return maxCustom - 1;
    }

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
    const versionCount = [];

    for (let i = 0; i < props.campaign.unitConfig.length; i++) {
      const unitMinSpend = props.campaign.unitConfig[i].minSpend;
      const versions = props.campaign.unitConfig[i].versionCount;

      if (props.campaign.unitConfig[i].highImpact === false) {
        standardSpend.push(unitMinSpend);
      }
      versionCount.push(versions);
    }

    const versionCountSum = versionCount.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    // console.log(versionCountSum);

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
  const spendResult = "$" + String(Spend());

  //minSpend end------------------->

  const designTime = String(designSLA());
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
            SLA: [designTime],
          },
        ]}
      />
    </Section>
  );
};

export default ResultTable;
