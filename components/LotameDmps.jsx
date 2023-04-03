import {
  BodyText,
  Button,
  InputToggle,
  HR,
  Card,
  Section,
  Table,
} from "pier-design-system";
// import DmpTable from "./dmpTable";

const LotameDmps = () => {
  return (
    <div>
      <Card className="-m-b-6">
        <Section
          padding="lg"
          className="-flex-row -justify-content-center -align-items-center"
          style={{ marginTop: "1.125rem" }}
        >
          <BodyText
            style={{
              fontWeight: "bold",
              marginBottom: "3rem",
            }}
          >
            Select a Lotame DMP
          </BodyText>

          <div className="design-sla-table -m-b-9"></div>
        </Section>
      </Card>
    </div>
  );
};

export default LotameDmps;
