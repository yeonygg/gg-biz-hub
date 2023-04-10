/* eslint-disable import/no-anonymous-default-export */
import { Tooltip } from "pier-design-system";
import dmp from "./dmps";
import studies from "./studies";

export const Columns = [
  {
    Header: () => (
      <div
        style={{
          textAlign: "left",
          minWidth: "50px",
          maxWidth: "500px",
        }}
      >
        Total Creatives
      </div>
    ),
    accessor: "totalCreatives",
    headerStyle: { textAlign: "right" },
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
        }}
      >
        Standard{" "}
        <Tooltip text="In-Screen/In-Image, In-Screen Expandable Video, In-Image 6 sec Canvas, In-Screen Frame, In-Screen Expandable Corner, In-Article Shoppable">
          <i style={{ color: "#25B9EF" }} className="fas fa-info-circle"></i>
        </Tooltip>
      </div>
    ),
    accessor: "standardUnits",
    Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
        }}
      >
        High Impact{" "}
        <Tooltip text="In-Image Canvas, In-Image Expandable, In-Screen Expandable">
          <i style={{ color: "#25B9EF" }} className="fas fa-info-circle"></i>
        </Tooltip>
      </div>
    ),
    accessor: "highImpact",
    headerStyle: { textAlign: "center" },
    Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
        }}
      >
        Skins/Scrollers{" "}
        <Tooltip text="Desktop Skin, Mobile Skin, Mobile Scroller">
          <i style={{ color: "#25B9EF" }} className="fas fa-info-circle"></i>
        </Tooltip>
      </div>
    ),
    accessor: "skins",
    headerStyle: { textAlign: "center" },
    Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
        }}
      >
        In-Video CTV{" "}
      </div>
    ),
    accessor: "inVideoMin",
    headerStyle: { textAlign: "center" },
    Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
  },
];

export const DesignBucket = [
  {
    Header: "Total Creatives",
    accessor: "totalCreatives",
  },
  {
    Header: "Standard",
    accessor: "standardUnits",
    headerStyle: () => (
      <Tooltip text="Desktop Skin, Mobile Skin, Mobile Scroller">
        <i style={{ color: "#25B9EF" }} className="fas fa-info-circle"></i>
      </Tooltip>
    ),
  },
  {
    Header: "High Impact",
    accessor: "highImpact",
  },
  {
    Header: "Skins/Scrollers",
    accessor: "skins",
  },
  {
    Header: "In-Video CTV",
    accessor: "inVideoMin",
  },
];

export const Generator = [
  {
    Header: "Unit Types",
    accessor: "unitType",
  },
  {
    Header: "Floor CPM",
    accessor: "floorCPM",
  },
  {
    Header: "Open CPM",
    accessor: "openCPM",
  },
  {
    Header: "Floor VCPM",
    accessor: "floorVCPM",
  },
];

export const Rates = [
  {
    Header: "Unit Type",
    accessor: "name",
  },
  {
    Header: "Floor CPM",
    accessor: "floorCPM",
  },
  {
    Header: "Open CPM",
    accessor: "openCPM",
  },
  {
    Header: "Floor VCPM",
    accessor: "floorVCPM",
  },
];

export const DmpNew = [
  {
    Header: "Spend Tier",
    accessor: "spend",
  },
  {
    Header: "Locked Status",
    accessor: "locked",
    Cell: (props) => {
      return (
        <span
          style={{ color: props.value === "Locked" ? "#E24550" : "#08D18B" }}
        >
          {props.value}
        </span>
      );
    },
  },

  {
    Header: "CPM Upcharge",
    accessor: "cpmUpcharge",
  },
];

export const studySpendTable = [
  {
    Header: () => (
      <div
        style={{
          textAlign: "left",
          minWidth: "200px",
          maxWidth: "400px",
        }}
      >
        Partner Name
      </div>
    ),
    accessor: "name",
    headerStyle: { textAlign: "right" },
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
        }}
      >
        $25k-$49k{" "}
      </div>
    ),

    accessor: "table[0].column1",
    Cell: (props) => {
      return (
        <p
          style={{
            textAlign: "center",
            color: props.value === "Locked" ? "#E24550" : "#08D18B",
          }}
        >
          {props.value}
        </p>
      );
    },
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
        }}
      >
        $50k-$74k{" "}
      </div>
    ),
    accessor: "table[1].column2",
    headerStyle: { textAlign: "center" },
    Cell: (props) => {
      return (
        <p
          style={{
            textAlign: "center",
            color: props.value === "Locked" ? "#E24550" : "#08D18B",
          }}
        >
          {props.value}
        </p>
      );
    },
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
        }}
      >
        $75k-$99k{" "}
      </div>
    ),
    accessor: "table[2].column3",
    headerStyle: { textAlign: "center" },
    Cell: (props) => {
      return (
        <p
          style={{
            textAlign: "center",
            color: props.value === "Locked" ? "#E24550" : "#08D18B",
          }}
        >
          {props.value}
        </p>
      );
    },
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
        }}
      >
        $100k-$124k{" "}
      </div>
    ),
    accessor: "table[3].column4",
    headerStyle: { textAlign: "center" },
    Cell: (props) => {
      return (
        <p
          style={{
            textAlign: "center",
            color: props.value === "Locked" ? "#E24550" : "#08D18B",
          }}
        >
          {props.value}
        </p>
      );
    },
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
        }}
      >
        $125k-$199k{" "}
      </div>
    ),
    accessor: "table[4].column5",
    headerStyle: { textAlign: "center" },
    Cell: (props) => {
      return (
        <p
          style={{
            textAlign: "center",
            color: props.value === "Locked" ? "#E24550" : "#08D18B",
          }}
        >
          {props.value}
        </p>
      );
    },
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
        }}
      >
        $200k+{" "}
      </div>
    ),
    accessor: "table[5].column6",
    headerStyle: { textAlign: "center" },
    Cell: (props) => {
      return (
        <p
          style={{
            textAlign: "center",
            color: props.value === "Locked" ? "#E24550" : "#08D18B",
          }}
        >
          {props.value}
        </p>
      );
    },
  },
];

export const studySpendTableMobile = [
  {
    Header: "Partner Name",
    accessor: "name",
  },
  {
    Header: "$25k-$49k",
    accessor: "table[0].column1",
    Cell: (props) => {
      return (
        <span
          style={{
            textAlign: "center",
            color: props.value === "Locked" ? "#E24550" : "#08D18B",
          }}
        >
          {props.value}
        </span>
      );
    },
  },
  {
    Header: "$50k-$74k",
    accessor: "table[1].column2",
    Cell: (props) => {
      return (
        <span
          style={{
            textAlign: "center",
            color: props.value === "Locked" ? "#E24550" : "#08D18B",
          }}
        >
          {props.value}
        </span>
      );
    },
  },
  {
    Header: "$75k-$99k",
    accessor: "table[2].column3",
    Cell: (props) => {
      return (
        <span
          style={{
            textAlign: "center",
            color: props.value === "Locked" ? "#E24550" : "#08D18B",
          }}
        >
          {props.value}
        </span>
      );
    },
  },
  {
    Header: "$100k-$124k",
    accessor: "table[3].column4",
    Cell: (props) => {
      return (
        <span
          style={{
            textAlign: "center",
            color: props.value === "Locked" ? "#E24550" : "#08D18B",
          }}
        >
          {props.value}
        </span>
      );
    },
  },
  {
    Header: "$125k-$199k",
    accessor: "table[4].column5",
    Cell: (props) => {
      return (
        <span
          style={{
            textAlign: "center",
            color: props.value === "Locked" ? "#E24550" : "#08D18B",
          }}
        >
          {props.value}
        </span>
      );
    },
  },
  {
    Header: "$200k+",
    accessor: "table[5].column6",
    Cell: (props) => {
      return (
        <span
          style={{
            textAlign: "center",
            color: props.value === "Locked" ? "#E24550" : "#08D18B",
          }}
        >
          {props.value}
        </span>
      );
    },
  },
];
