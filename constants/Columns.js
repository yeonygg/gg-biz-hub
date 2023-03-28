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
          minWidth: "200px",
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
    accessor: "name",
  },
  {
    Header: "Locked Status",
    accessor: "floorCPM",
  },
  {
    Header: "CPM Upcharge",
    accessor: "openCPM",
  },
];

export const Dmp = [
  {
    Header: () => (
      <div
        style={{
          textAlign: "left",
          minWidth: "200px",
          maxWidth: "400px",
        }}
      >
        Data Type
      </div>
    ),
    accessor: "dataType",
    headerStyle: { textAlign: "right" },
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
          color: "#08D18B",
        }}
      >
        $25k-$49k{" "}
      </div>
    ),

    accessor: "tableInfo[0].column1",
    Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
          color: "#08D18B",
        }}
      >
        $50k-$74k{" "}
      </div>
    ),
    accessor: "tableInfo[1].column2",
    headerStyle: { textAlign: "center" },
    Cell: (row) => (
      <div style={{ textAlign: "center" }}>
        <i style={{ color: "#08D18B" }} className="fas fa-check"></i> &nbsp;
        {row.value}
      </div>
    ),
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
          color: "#08D18B",
        }}
      >
        $75k-$99k{" "}
      </div>
    ),
    accessor: "tableInfo[2].column3",
    headerStyle: { textAlign: "center" },
    Cell: (row) => (
      <div style={{ textAlign: "center" }}>
        <i style={{ color: "#08D18B" }} className="fas fa-check"></i> &nbsp;
        {row.value}
      </div>
    ),
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
          color: "#08D18B",
        }}
      >
        $100k-$124k{" "}
      </div>
    ),
    accessor: "tableInfo[3].column4",
    headerStyle: { textAlign: "center" },
    Cell: (row) => (
      <div style={{ textAlign: "center" }}>
        <i style={{ color: "#08D18B" }} className="fas fa-check"></i> &nbsp;
        {row.value}
      </div>
    ),
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
          color: "#08D18B",
        }}
      >
        $125k-$199k{" "}
      </div>
    ),
    accessor: "tableInfo[4].column5",
    headerStyle: { textAlign: "center" },
    Cell: (row) => (
      <div style={{ textAlign: "center" }}>
        <i style={{ color: "#08D18B" }} className="fas fa-check"></i> &nbsp;
        {row.value}
      </div>
    ),
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
          color: "#08D18B",
        }}
      >
        $200k-$299k{" "}
      </div>
    ),
    accessor: "tableInfo[5].column6",
    headerStyle: { textAlign: "center" },
    Cell: (row) => (
      <div style={{ textAlign: "center" }}>
        <i style={{ color: "#08D18B" }} className="fas fa-check"></i> &nbsp;
        {row.value}
      </div>
    ),
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
          color: "#08D18B",
        }}
      >
        $300k+{" "}
      </div>
    ),
    accessor: "tableInfo[6].column7",
    headerStyle: { textAlign: "center" },
    Cell: (row) => (
      <div style={{ textAlign: "center" }}>
        <i style={{ color: "#08D18B" }} className="fas fa-check"></i> &nbsp;
        {row.value}
      </div>
    ),
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
          color: "#08D18B",
        }}
      >
        No Voiced Budget{" "}
      </div>
    ),
    accessor: "tableInfo[7].column8",
    headerStyle: { textAlign: "center" },
    Cell: (row) => (
      <div style={{ textAlign: "center" }}>
        <i style={{ color: "#08D18B" }} className="fas fa-check"></i> &nbsp;
        {row.value}
      </div>
    ),
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
          color: "#08D18B",
        }}
      >
        $0k-99k{" "}
      </div>
    ),

    accessor: "table[0].column1",
    Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
          color: "#08D18B",
        }}
      >
        $100k-$149k{" "}
      </div>
    ),
    accessor: "table[1].column2",
    headerStyle: { textAlign: "center" },
    Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
          color: "#08D18B",
        }}
      >
        $150k-199k{" "}
      </div>
    ),
    accessor: "table[2].column3",
    headerStyle: { textAlign: "center" },
    Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
  },
  {
    Header: () => (
      <div
        style={{
          textAlign: "center",
          color: "#08D18B",
        }}
      >
        $200k+{" "}
      </div>
    ),
    accessor: "table[3].column4",
    headerStyle: { textAlign: "center" },
    Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
  },
];
