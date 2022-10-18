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

    // console.log(props.campaign.unitConfig);

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

  const designTime = String(designSLA());
  // console.log(result);

  const unit = props.campaign.unitConfig;

  const tableData = () => {
    let data = [];
    //"Unit Type": "",
    //"Floor CPM": "",
    //"Floor VCPM": "",
    //"Open CPM": "",
    // };
    for (let i = 0; i < unit.length; i++) {
      const row = {
        "Unit Type": unit[i].unitType,
        "Floor CPM": unit[i].floorCPM,
        "Floor VCPM": unit[i].floorVCPM,
        "Open CPM": unit[i].openCPM,
      };

      //const name = unit[i].unitType;
      //const floorCPM = unit[i].floorCPM;
      //const floorVCPM = unit[i].floorVCPM;
      //const openCPM = unit[i].openCPM;
      data.push(row);
      // data.floorCPM.push(floorCPM);
      // data.floorVCPM.push(floorVCPM);
      // data.openCPM.push(openCPM);
    }
    console.log(data);
    return data;
  };

  // tableData();

  const unitName = [];
  console.log(unitName);

  for (let i = 0; i < unit.length; i++) {
    const name = unit[i].unitType;
    // const floorCPM = unit[i].floorCPM;
    // const floorVCPM = unit[i].floorVCPM;
    // const openCPM = unit[i].openCPM;
    unitName.push(name);
    // data.floorCPM.push(floorCPM);
    // data.floorVCPM.push(floorVCPM);
    // data.openCPM.push(openCPM);
  }

  return (
    <Section padding="sm" className="client-section">
      <Table
        size="sm"
        columns={["Unit Type", "Floor CPM", "Floor VCPM", "Open CPM"]}
        data={tableData()}
      />
    </Section>
  );
};

export default ResultTable;
