/* eslint-disable import/no-anonymous-default-export */
var dmp = [
  {
    id: 0,
    dataType: "GumGum First Part (Contextual)",
    minSpend: 25000,
    info: [
      { spend: "$25k-$200k+", locked: "Unlocked", cpmUpcharge: 0 },
      { spend: "No Voiced Budget", locked: "Locked", cpmUpcharge: "N/A" },
    ],
  },
  {
    id: 1,
    dataType: "Lotame LDX ($0.20)",
    info: [
      { spend: "$25k-$99k", locked: "Unlocked", cpmUpcharge: 0.2 },
      { spend: "$100k-$300k+", locked: "Unlocked", cpmUpcharge: 0 },
      { spend: "No Voiced Budget", locked: "Unlocked", cpmUpcharge: 0.2 },
    ],
    minSpend: 25000,
  },
  {
    id: 2,
    dataType: "3rd Party Branded Data",
    info: [
      { spend: "$25k-$99k", locked: "Unlocked", cpmUpcharge: 1 },
      { spend: "$100k-$199k", locked: "Unlocked", cpmUpcharge: 0.5 },
      { spend: "$200k+", locked: "Unlocked", cpmUpcharge: 0 },
      { spend: "No Voiced Budget", locked: "Unlocked", cpmUpcharge: 1 },
    ],
    minSpend: 25000,
  },
  {
    id: 3,
    dataType: "Client Ad Serving Fee's (DCM, IAS, DV, Other)",
    info: [
      { spend: "$25k-$99k", locked: "Unlocked", cpmUpcharge: 0.15 },
      { spend: "$100k-$300k+", locked: "Unlocked", cpmUpcharge: 0 },
      { spend: "No Voiced Budget", locked: "Unlocked", cpmUpcharge: 0.15 },
    ],
    minSpend: 25000,
  },
  {
    id: 4,
    dataType: "Advertiser First Part Data Ingestion",
    info: [
      { spend: "$25k-$299k", locked: "Unlocked", cpmUpcharge: 1 },
      { spend: "$300k+", locked: "Unlocked", cpmUpcharge: 0 },
      { spend: "No Voiced Budget", locked: "Unlocked", cpmUpcharge: 1 },
    ],
    minSpend: 25000,
  },
  {
    id: 5,
    dataType: "ABM Data",
    info: [
      { spend: "$25k-$99k", locked: "Locked", cpmUpcharge: "N/A" },
      { spend: "$100k-$300k+", locked: "Unlocked", cpmUpcharge: 3 },
      { spend: "No Voiced Budget", locked: "Locked", cpmUpcharge: "N/A" },
    ],
    minSpend: 100000,
  },
];

export default dmp;
