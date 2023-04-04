/* eslint-disable import/no-anonymous-default-export */
var dmp = [
  {
    id: 0,
    dataType: "GumGum First Part (Contextual)",
    cpmUpcharge: {0: 0, 25000: 0, 50000: 0, 75000: 0, 100000: 0, 125000: 0, 200000: 0, 300000: 0},
    minSpend: 25000,
    info: [
      { spend: "$25k-$200k+", locked: "Unlocked", cpmUpcharge: 0 },
      { spend: "No Voiced Budget", locked: "Locked", cpmUpcharge: "N/A" },
    ],
  },
  {
    id: 1,
    dataType: "Lotame LDX ($0.20)",
    cpmUpcharge: {0: 0.2, 25000: 0.2, 50000: 0.2, 75000: 0.2, 100000: 0, 125000: 0, 200000: 0, 300000: 0},
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
    cpmUpcharge: {0: 1, 25000: 1, 50000: 1, 75000: 1, 100000: 0.5, 125000: 0.5, 200000: 0, 300000: 0},
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
    cpmUpcharge: {0: 0.15, 25000: 0.15, 50000: 0.15, 75000: 0.15, 100000: 0, 125000: 0, 200000: 0, 300000: 0},
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
    cpmUpcharge: {0: 1, 25000: 1, 50000: 1, 75000: 1, 100000: 1, 125000: 1, 200000: 1, 300000: 0},
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
    cpmUpcharge: {0: 3, 25000: 3, 50000: 3, 75000: 3, 100000: 3, 125000: 3, 200000: 3, 300000: 3},
    info: [
      { spend: "$25k-$99k", locked: "Locked", cpmUpcharge: "N/A" },
      { spend: "$100k-$300k+", locked: "Unlocked", cpmUpcharge: 3 },
      { spend: "No Voiced Budget", locked: "Locked", cpmUpcharge: "N/A" },
    ],
    minSpend: 100000,
  },
];

export default dmp;
