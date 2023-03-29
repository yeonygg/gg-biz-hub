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
            Design SLA Buckets
            <BodyText
              size="xs"
              style={{
                color: "#A5B2B8",
              }}
            >
              Creative Turnaround Times
            </BodyText>
          </BodyText>

          <div className="design-sla-table -m-b-4">
            <DesignBucketTable expedited={handleExpedited} />
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
                Get SLA with Generator
              </Button>
            </Link>
          </div>
        </Section>
      </Card>
    </div>
  );
};

export default DesignBucketsCard;
