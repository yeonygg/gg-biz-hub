import { Section, Table } from "pier-design-system";

const ResultTable = (props) => {
  const designSLA = () => {
    const timeArray = [];
    console.log(timeArray);
    for (let i = 0; i < props.campaign.unitConfig.length; i++) {
      if (props.campaign.unitConfig[i].isExpedited === true) {
        const turnaroundTime = props.campaign.unitConfig[i].turnaroundTime;
        timeArray.push(turnaroundTime - 1);
      } else {
        timeArray.push(props.campaign.unitConfig[i].turnaroundTime);
      }

      if (props.campaign.unitConfig[i].isCustom === true) {
        timeArray.push(props.campaign.unitConfig[i].turnaroundTime + 1);
      }
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
