/* eslint-disable import/no-anonymous-default-export */
var dmp = [
  {
    id: 0,
    dataType: "GumGum First Part (Contextual)",
    minSpend: 0,
    spendThreshold: [
      { spendTitle: "$0-$99k", cpmUpcharge: 0, minSpend: 0 },
      { spendTitle: "$100-$299k", cpmUpcharge: 0, minSpend: 100000 },
      { spendTitle: "$300+", cpmUpcharge: 0, minSpend: 300000 },
    ],
  },
  {
    id: 1,
    dataType: "Lotame LDX ($0.20)",
    minSpend: 0,
    spendThreshold: [
      { spendTitle: "$0-$99k", cpmUpcharge: 0.2, minSpend: 0 },
      { spendTitle: "$100-$299k", cpmUpcharge: 0, minSpend: 100000 },
      { spendTitle: "$300+", cpmUpcharge: 0, minSpend: 300000 },
    ],
  },
  {
    id: 2,
    dataType: "3rd Party Branded Data",
    minSpend: 0,
    spendThreshold: [
      { spendTitle: "$0-$99k", cpmUpcharge: 0.5, minSpend: 0 },
      { spendTitle: "$100-$299k", cpmUpcharge: 0.5, minSpend: 100000 },
      { spendTitle: "$300+", cpmUpcharge: 0, minSpend: 300000 },
    ],
  },
  {
    id: 3,
    dataType: "Custom Audiences",
    minSpend: 100000,
    spendThreshold: [
      { spendTitle: "$0-$99k", cpmUpcharge: 0, minSpend: 0 },
      { spendTitle: "$100-$299k", cpmUpcharge: 1.0, minSpend: 100000 },
      { spendTitle: "$300+", cpmUpcharge: 0, minSpend: 300000 },
    ],
  },
  {
    id: 4,
    dataType: "Advertiser First Part Data Ingestion",
    minSpend: 100000,
    spendThreshold: [
      { spendTitle: "$0-$99k", cpmUpcharge: 0, minSpend: 0 },
      { spendTitle: "$100-$299k", cpmUpcharge: 1.0, minSpend: 100000 },
      { spendTitle: "$300+", cpmUpcharge: 0, minSpend: 300000 },
    ],
  },
  {
    id: 5,
    dataType: "Custom Audiences",
    minSpend: 100000,
    spendThreshold: [
      { spendTitle: "$0-$99k", cpmUpcharge: 0, minSpend: 0 },
      { spendTitle: "$100-$299k", cpmUpcharge: 3.0, minSpend: 100000 },
      { spendTitle: "$300+", cpmUpcharge: 3.0, minSpend: 300000 },
    ],
  },
];

export default dmp;
