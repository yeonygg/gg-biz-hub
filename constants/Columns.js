/* eslint-disable import/no-anonymous-default-export */
import { Tooltip } from "pier-design-system";

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
        $0k-$99k{" "}
      </div>
    ),
    accessor: "column1",
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
        $100k-$199k{" "}
      </div>
    ),
    accessor: "column2",
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
    accessor: "column3",
    headerStyle: { textAlign: "center" },
    Cell: (row) => (
      <div style={{ textAlign: "center" }}>
        <i style={{ color: "#08D18B" }} className="fas fa-check"></i> &nbsp;
        {row.value}
      </div>
    ),
  },
];
