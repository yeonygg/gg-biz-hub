import { Section, Table } from "pier-design-system";

const ResultTable = () => {
  return (
    <Section padding="sm" className="client-section">
      <Table
        size="sm"
        columns={["Rate", "Spend", "SLA"]}
        data={[{ Rate: "Cell 1", Spend: "Cell 2", SLA: "Cell 3" }]}
      />
    </Section>
  );
};

export default ResultTable;
