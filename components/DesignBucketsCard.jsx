import React from "react";
import { useState, useEffect, Component } from "react";
import {
  BodyText,
  Button,
  InputToggle,
  HR,
  Card,
  Section,
  Table,
} from "pier-design-system";
import { Link } from "react-router-dom";
import DesignBucketTable from "./DesignBucketTable";
import designBuckets from "../constants/designbuckets";

const DesignBucketsCard = () => {
  const [isExpedited, setExpedited] = useState(false);

  const handleExpedited = (e) => {
    setExpedited(!isExpedited);
  };

  return (
    <div>
      <Card>
        <Section className="section-style">
          <div className="-m-b-6">
            {" "}
            <BodyText
              style={{
                fontWeight: "bold",
                marginBottom: "0rem",
              }}
            >
              Design SLA Buckets
            </BodyText>
            <BodyText
              size="xs"
              style={{
                color: "#A5B2B8",
              }}
            >
              Creative Turnaround Times
            </BodyText>
          </div>

          <div className="design-sla-table -m-b-4">
            <DesignBucketTable isExpedited={isExpedited} />{" "}
          </div>

          <div className="-d-flex -justify-content-between -p-t-5">
            <InputToggle
              onChange={handleExpedited}
              size="sm"
              disabled={false}
              dark={false}
              error={false}
            >
              Show Expedited
            </InputToggle>
            <Link to="/generator">
              {" "}
              <Button
                size="sm"
                title="Button"
                icon="fas fa-cog"
                disabled={false}
                dark={false}
                pill={false}
              >
                Generator
              </Button>
            </Link>
          </div>
        </Section>
      </Card>
    </div>
  );
};

export default DesignBucketsCard;
