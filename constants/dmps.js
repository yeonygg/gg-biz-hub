/* eslint-disable import/no-anonymous-default-export */
var dmp = [
  {
    id: 0,
    dataType: "GumGum First Part (Contextual)",
<<<<<<< HEAD
    cpmUpcharge: {0: 0, 25000: 0, 50000: 0, 75000: 0, 100000: 0, 125000: 0, 200000: 0, 300000: 0},
    minSpend: 25000,
    spendTiers: [
      "$25k-$49k",
      "$50k-$74k",
      "$75k-$99k",
      "$100k-$124k",
      "$125k-$199k",
      "$200k-$299k",
      "$300k+",
      "No Voiced Budget",
    ],
    cpms: [
      { tier25: 0 },
      { tier50: 0 },
      { tier75: 0 },
      { tier100: 0 },
      { tier125: 0 },
      { tier200: 0 },
      { tier300: 0 },
      { noVoice: 0 },
    ],

    tableInfo: [
      { column1: "Unlocked" },
      { column2: "Unlocked" },
      { column3: "Unlocked" },
      { column4: "Unlocked" },
      { column5: "Unlocked" },
      { column6: "Unlocked" },
      { column7: "Unlocked" },
      { column8: "Locked" },
=======
    minSpend: 25000,
    info: [
      { spend: "$25k-$200k+", locked: "Unlocked", cpmUpcharge: 0 },
      { spend: "No Voiced Budget", locked: "Locked", cpmUpcharge: "N/A" },
>>>>>>> 290fd06 (completed dmp table for data page)
    ],
  },
  {
    id: 1,
    dataType: "Lotame LDX ($0.20)",
<<<<<<< HEAD
    cpmUpcharge: {0: 0.2, 25000: 0.2, 50000: 0.2, 75000: 0.2, 100000: 0, 125000: 0, 200000: 0, 300000: 0},
    minSpend: 25000,
    tier25Cpm: 0.2,
    tier50Cpm: 0.2,
    tier75Cpm: 0.2,
    tier100Cpm: 0,
    tier125Cpm: 0,
    tier200Cpm: 0,
    tier300Cpm: 0,
    noVoiceCpm: 0.2,
    tableInfo: [
      { column1: "$0.20 CPM Upcharge" },
      { column2: "$0.20 CPM Upcharge" },
      { column3: "$0.20 CPM Upcharge" },
      { column4: "Unlocked" },
      { column5: "Unlocked" },
      { column6: "Unlocked" },
      { column7: "Unlocked" },
      { column8: "$0.20 CPM Upcharge" },
=======
    info: [
      { spend: "$25k-$99k", locked: "Unlocked", cpmUpcharge: 0.2 },
      { spend: "$100k-$300k+", locked: "Unlocked", cpmUpcharge: 0 },
      { spend: "No Voiced Budget", locked: "Unlocked", cpmUpcharge: 0.2 },
>>>>>>> 290fd06 (completed dmp table for data page)
    ],
    minSpend: 25000,
  },
  {
    id: 2,
    dataType: "3rd Party Branded Data",
<<<<<<< HEAD
    cpmUpcharge: {0: 1, 25000: 1, 50000: 1, 75000: 1, 100000: 0.5, 125000: 0.5, 200000: 0, 300000: 0},
    minSpend: 25000,
    tier25Cpm: 1,
    tier50Cpm: 1,
    tier75Cpm: 1,
    tier100Cpm: 0.5,
    tier125Cpm: 0.5,
    tier200Cpm: 0,
    tier300Cpm: 0,
    noVoiceCpm: 1,
    tableInfo: [
      { column1: "$1.00 CPM Upcharge" },
      { column2: "$1.00 CPM Upcharge" },
      { column3: "$1.00 CPM Upcharge" },
      { column4: "$0.50 CPM Upcharge" },
      { column5: "$0.50 CPM Upcharge" },
      { column6: "Unlocked" },
      { column7: "Unlocked" },
      { column8: "$1.00 CPM Upcharge" },
=======
    info: [
      { spend: "$25k-$99k", locked: "Unlocked", cpmUpcharge: 1 },
      { spend: "$100k-$199k", locked: "Unlocked", cpmUpcharge: 0.5 },
      { spend: "$200k+", locked: "Unlocked", cpmUpcharge: 0 },
      { spend: "No Voiced Budget", locked: "Unlocked", cpmUpcharge: 1 },
>>>>>>> 290fd06 (completed dmp table for data page)
    ],
    minSpend: 25000,
  },
  {
    id: 3,
    dataType: "Client Ad Serving Fee's (DCM, IAS, DV, Other)",
<<<<<<< HEAD
    cpmUpcharge: {0: 0.15, 25000: 0.15, 50000: 0.15, 75000: 0.15, 100000: 0, 125000: 0, 200000: 0, 300000: 0},
    minSpend: 25000,
    tier25Cpm: 0.15,
    tier50Cpm: 0.15,
    tier75Cpm: 0.15,
    tier100Cpm: 0,
    tier125Cpm: 0,
    tier200Cpm: 0,
    tier300Cpm: 0,
    noVoiceCpm: 0.15,
    tableInfo: [
      { column1: "" },
      { column2: "$0.15 CPM Upcharge" },
      { column3: "$0.15 CPM Upcharge" },
      { column4: "$0.15 CPM Upcharge" },
      { column5: "Unlocked" },
      { column6: "Unlocked" },
      { column7: "Unlocked" },
      { column8: "$0.15 CPM Upcharge" },
=======
    info: [
      { spend: "$25k-$99k", locked: "Unlocked", cpmUpcharge: 0.15 },
      { spend: "$100k-$300k+", locked: "Unlocked", cpmUpcharge: 0 },
      { spend: "No Voiced Budget", locked: "Unlocked", cpmUpcharge: 0.15 },
>>>>>>> 290fd06 (completed dmp table for data page)
    ],
    minSpend: 25000,
  },
  {
    id: 4,
    dataType: "Advertiser First Part Data Ingestion",
<<<<<<< HEAD
    cpmUpcharge: {0: 1, 25000: 1, 50000: 1, 75000: 1, 100000: 1, 125000: 1, 200000: 1, 300000: 0},
    minSpend: 25000,
    tier25Cpm: 1,
    tier50Cpm: 1,
    tier75Cpm: 1,
    tier100Cpm: 1,
    tier125Cpm: 1,
    tier200Cpm: 1,
    tier300Cpm: 0,
    noVoiceCpm: 1,
    tableInfo: [
      { column1: "" },
      { column2: "$1.00 CPM Upcharge" },
      { column3: "$1.00 CPM Upcharge" },
      { column4: "$1.00 CPM Upcharge" },
      { column5: "$1.00 CPM Upcharge" },
      { column6: "$1.00 CPM Upcharge" },
      { column7: "Unlocked" },
      { column8: "$1.00 CPM Upcharge" },
=======
    info: [
      { spend: "$25k-$299k", locked: "Unlocked", cpmUpcharge: 1 },
      { spend: "$300k+", locked: "Unlocked", cpmUpcharge: 0 },
      { spend: "No Voiced Budget", locked: "Unlocked", cpmUpcharge: 1 },
>>>>>>> 290fd06 (completed dmp table for data page)
    ],
    minSpend: 25000,
  },
  {
    id: 5,
    dataType: "ABM Data",
<<<<<<< HEAD
    cpmUpcharge: {0: 3, 25000: 3, 50000: 3, 75000: 3, 100000: 3, 125000: 3, 200000: 3, 300000: 3},
    minSpend: 100000,
    tier25Cpm: "locked",
    tier50Cpm: "locked",
    tier75Cpm: "locked",
    tier100Cpm: 3,
    tier125Cpm: 3,
    tier200Cpm: 3,
    tier300Cpm: 3,
    noVoiceCpm: "locked",
    tableInfo: [
      { column1: "" },
      { column2: "" },
      { column3: "" },
      { column4: "$3.00 CPM Upcharge" },
      { column5: "$3.00 CPM Upcharge" },
      { column6: "$3.00 CPM Upcharge" },
      { column7: "$3.00 CPM Upcharge" },
      { column8: "" },
=======
    info: [
      { spend: "$25k-$99k", locked: "Locked", cpmUpcharge: "N/A" },
      { spend: "$100k-$300k+", locked: "Unlocked", cpmUpcharge: 3 },
      { spend: "No Voiced Budget", locked: "Locked", cpmUpcharge: "N/A" },
>>>>>>> 290fd06 (completed dmp table for data page)
    ],
    minSpend: 100000,
  },
];

export default dmp;
