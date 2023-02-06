import {
  BodyText,
  Button,
  InputToggle,
  HR,
  Card,
  Section,
  Table,
} from "pier-design-system";
import Link from "next/link";
import DesignBucketTable from "./DesignBucketTable";
import designBuckets from "../constants/designbuckets";

const LotameDmps = () => {
  const handleExpedited = (e) => {
    for (let i = 0; i < designBuckets.length; i++) {
      if (e.target.checked === true) {
        designBuckets[i].isExpedited = true;
        console.log(designBuckets[i].isExpedited);
      } else {
        designBuckets[i].isExpedited = false;
        console.log(designBuckets[i].isExpedited);
      }
    }
  };

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

          <div className="design-sla-table -m-b-4">
            <DesignBucketTable />
          </div>
          <Section></Section>
        </Section>
      </Card>
    </div>
  );
};

export default LotameDmps;
