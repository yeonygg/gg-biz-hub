import {
  BodyText,
  Button,
  InputToggle,
  HR,
  Card,
  Section,
  Table,
} from "pier-design-system";
import DmpTable from "./dmpTable";

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
            Lotame DMPs
            <BodyText
              size="xs"
              style={{
                color: "#A5B2B8",
              }}
            >
              Minimum Spends
            </BodyText>
          </BodyText>

          <div className="design-sla-table -m-b-9">
            <DmpTable />
          </div>
        </Section>
      </Card>
    </div>
  );
};

export default LotameDmps;
