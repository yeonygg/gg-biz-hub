import { Section, Table } from "pier-design-system";

const ResultTable = (props) => {
  const unit = props.campaign.unitConfig;
  console.log(props.toggleOn);

  {
    parseFloat(props.campaign.campaignBudget).toFixed(2).toLocaleString();
  }

  const tableData = () => {
    let data = [];
    let blend = [];
    let floorAverage = [];
    let openAverage = [];
    let vcpmAverage = [];

    for (let i = 0; i < unit.length; i++) {
      const vcpmZero = () => {
        if (unit[i].floorVCPM === "tbd") {
          return "TBD";
        } else {
          return (
            "$" + parseFloat(unit[i].floorVCPM).toFixed(2).toLocaleString()
          );
        }
      };

      if (props.toggleOn === true) {
        if (unit[i].customOn === true) {
          floorAverage.push(unit[i].floorCPM + unit[i].customFloorCPM);
          openAverage.push(unit[i].openCPM + unit[i].customOpenCPM);
        } else {
          floorAverage.push(unit[i].floorCPM);
          openAverage.push(unit[i].openCPM);
        }
        if (unit[i].floorVCPM === "tbd") {
        } else {
          vcpmAverage.push(unit[i].floorVCPM);
        }
      }
      const row = {
        "Unit Type": unit[i].unitType,
        "Floor CPM":
          "$" + parseFloat(unit[i].floorCPM).toFixed(2).toLocaleString(),
        "Floor VCPM": vcpmZero(),

        "Open CPM":
          "$" + parseFloat(unit[i].openCPM).toFixed(2).toLocaleString(),
      };

      if (unit[i].customOn === true) {
        const customRow = {
          "Unit Type": unit[i].unitType,
          "Floor CPM":
            "$" +
            parseFloat(
              parseFloat(unit[i].floorCPM) + parseFloat(unit[i].customFloorCPM)
            )
              .toFixed(2)
              .toLocaleString(),
          "Floor VCPM":
            "$" + parseFloat(unit[i].floorVCPM).toFixed(2).toLocaleString(),
          "Open CPM":
            "$" +
            parseFloat(
              parseFloat(unit[i].openCPM) + parseFloat(unit[i].customOpenCPM)
            )
              .toFixed(2)
              .toLocaleString(),
        };

        data.push(customRow);
      } else {
        data.push(row);
      }
    }

    for (let i = 0; i < unit.length; i++) {
      if (props.toggleOn === true) {
        console.log(vcpmAverage);
        const floorCalc =
          floorAverage.reduce((a, b) => a + b, 0) / floorAverage.length;
        const openCalc =
          openAverage.reduce((a, b) => a + b, 0) / openAverage.length;
        const vcpmCalc =
          vcpmAverage.reduce((a, b) => a + b, 0) / vcpmAverage.length;
        const blendRow = {
          "Unit Type": unit[i].unitType,
          "Floor CPM": "$" + parseFloat(floorCalc).toFixed(2).toLocaleString(),
          "Floor VCPM": "$" + parseFloat(vcpmCalc).toFixed(2).toLocaleString(),
          "Open CPM": "$" + parseFloat(openCalc).toFixed(2).toLocaleString(),
        };
        blend.push(blendRow);
      }
    }

    if (props.toggleOn === true) {
      return blend;
    } else {
      return data;
    }
  };

  return (
    <Section padding="sm" className="client-section">
      <Table
        size="sm"
        columns={["Unit Type", "Floor CPM", "Open CPM", "Floor VCPM"]}
        data={tableData()}
      />
    </Section>
  );
};

export default ResultTable;
