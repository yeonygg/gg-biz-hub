/* eslint-disable import/no-anonymous-default-export */

var unitTypes = [
  {
    id: 0,
    name: "In-Screen",
    abbrev: "IS",
    minSpend: 25000,
    highImpact: false,
    turnaroundTime: 2,
    cesRequired: false,
    floorCPM: 7,
    floorVCPM: 12,
    openCPM: 8.5,
    customizable: true,
    rateCatergory: "in-screen",
    customFeatures: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21,
      23,
    ],
  },
  {
    id: 1,
    name: "In-Image",
    abbrev: "II",
    minSpend: 25000,
    highImpact: false,
    turnaroundTime: 2,
    cesRequired: false,
    floorCPM: 7,
    floorVCPM: 10,
    openCPM: 8.5,
    customizable: true,
    rateCatergory: "in-image",
    customFeatures: [
      0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 23,
      24, 25,
    ],
  },
  {
    id: 2,
    name: "In-Screen Expandable Video",
    abbrev: "ISXV",
    minSpend: 25000,
    highImpact: false,
    turnaroundTime: 2,
    cesRequired: true,
    floorCPM: 11.5,
    floorVCPM: 16,
    openCPM: 14.5,
    customizable: true,
    rateCatergory: "in-screen",

    customFeatures: [2, 4, 14, 15, 17, 22],
  },
  {
    id: 3,
    name: "6-Sec Canvas Video",
    abbrev: "6sCNV",
    minSpend: 25000,
    highImpact: false,
    turnaroundTime: 2,
    cesRequired: false,
    floorCPM: 13,
    floorVCPM: 18.5,
    openCPM: 15,
    rateCatergory: "in-image",

    customizable: false,
  },
  {
    id: 4,
    name: "In-Screen Frame",
    abbrev: "ISF",
    minSpend: 25000,
    highImpact: false,
    turnaroundTime: 2,
    cesRequired: false,
    floorCPM: 10,
    floorVCPM: 14.25,
    openCPM: 12,
    customizable: true,
    rateCatergory: "in-screen",

    customFeatures: [0, 1, 2, 5, 14, 15, 17],
  },
  {
    id: 5,
    name: "In-Screen Expandable Corner",
    abbrev: "ISXC",
    minSpend: 25000,
    highImpact: false,
    turnaroundTime: 2,
    cesRequired: false,
    floorCPM: 7.5,
    floorVCPM: 10.5,
    openCPM: 9.5,
    customizable: true,
    rateCatergory: "in-screen",

    customFeatures: [2, 15, 17],
  },
  {
    id: 6,
    name: "In-Image Canvas",
    abbrev: "IIC",
    minSpend: 75000,
    highImpact: true,
    turnaroundTime: 3,
    cesRequired: false,
    floorCPM: 13,
    floorVCPM: 18.5,
    openCPM: 15,
    customizable: true,
    rateCatergory: "in-image",

    customFeatures: [
      0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 23,
      24, 25,
    ],
  },
  {
    id: 7,
    name: "In-Image Expandable",
    abbrev: "IIX",
    minSpend: 75000,
    highImpact: true,
    turnaroundTime: 3,
    cesRequired: false,
    floorCPM: 10,
    floorVCPM: 14.25,
    openCPM: 12,
    customizable: true,
    rateCatergory: "in-image",

    customFeatures: [
      0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      23, 24, 25,
    ],
  },
  {
    id: 8,
    name: "In-Screen Expandable",
    abbrev: "ISX",
    minSpend: 75000,
    highImpact: true,
    turnaroundTime: 3,
    cesRequired: false,
    floorCPM: 11.5,
    floorVCPM: 16,
    openCPM: 14.5,
    customizable: true,
    rateCatergory: "in-screen",

    customFeatures: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 23,
    ],
  },
  {
    id: 9,
    name: "Desktop Skin",
    abbrev: "null",
    minSpend: 200000,
    highImpact: true,
    turnaroundTime: 5,
    cesRequired: true,
    floorCPM: 22,
    floorVCPM: "TBD",
    openCPM: 25,
    customizable: false,
    isSkin: true,
    rateCatergory: "skins-scrollers",
  },
  {
    id: 10,
    name: "Mobile Skin",
    abbrev: "null",
    minSpend: 200000,
    highImpact: true,
    turnaroundTime: 5,
    cesRequired: true,
    floorCPM: 18,
    floorVCPM: "TBD",
    openCPM: 21,
    customizable: false,
    isSkin: true,
    rateCatergory: "skins-scrollers",
  },
  {
    id: 11,
    name: "Mobile Scroller",
    abbrev: "null",
    minSpend: 200000,
    highImpact: true,
    turnaroundTime: 3,
    cesRequired: true,
    floorCPM: 8,
    floorVCPM: "TBD",
    openCPM: 10,
    customizable: false,
    isSkin: true,
    rateCatergory: "skins-scrollers",
  },
  {
    id: 12,
    name: "Gumgum Standard",
    abbrev: "null",
    minSpend: 25000,
    highImpact: false,
    turnaroundTime: 2,
    cesRequired: false,
    floorCPM: 3.5,
    floorVCPM: 5,
    openCPM: 5,
    rateCatergory: "in-screen",

    customizable: false,
  },
  {
    id: 13,
    name: "Gumgum Display",
    abbrev: "null",
    minSpend: 25000,
    highImpact: false,
    turnaroundTime: 2,
    cesRequired: false,
    floorCPM: 2.5,
    floorVCPM: "Custom rate",
    openCPM: 3.5,
    rateCatergory: "in-screen",

    customizable: false,
  },
  {
    id: 14,
    name: "Gumgum Native",
    abbrev: "null",
    minSpend: 25000,
    highImpact: false,
    turnaroundTime: 0,
    cesRequired: true,
    floorCPM: 7,
    floorVCPM: "TBD",
    openCPM: 10,
    customizable: false,
    rateCatergory: "enhanced display-video",
  },
  {
    id: 15,
    name: "Gumgum Social",
    abbrev: "null",
    minSpend: 25000,
    highImpact: false,
    turnaroundTime: 0,
    cesRequired: true,
    floorCPM: 9.5,
    floorVCPM: "TBD",
    openCPM: 12,
    customizable: false,
    rateCatergory: "enhanced display-video",
  },
  {
    id: 16,
    name: "In-Article Shoppable",
    abbrev: "IAS",
    minSpend: 25000,
    highImpact: false,
    turnaroundTime: 2,
    cesRequired: true,
    floorVCPM: 11,
    floorCPM: 8,
    openCPM: 10,
    customizable: false,
    rateCatergory: "enhanced display-video",
  },
  {
    id: 17,
    name: "In-Article Video",
    abbrev: "IAV",
    minSpend: 25000,
    highImpact: false,
    turnaroundTime: 0,
    cesRequired: true,
    floorCPM: 9.5,
    floorVCPM: 11,
    openCPM: 12,
    customizable: false,
    rateCatergory: "enhanced display-video",
  },
  {
    id: 18,
    name: "In-Video Snipe",
    abbrev: "IVS",
    minSpend: 0,
    highImpact: true,
    turnaroundTime: 7,
    cesRequired: true,
    rateCatergory: "other",

    floorCPM: 14,
    floorVCPM: 21.5,
    openCPM: 17,
    customizable: false,
  },

  {
    id: 19,
    name: "In-Game",
    rateCatergory: "other",
    customizable: false,
    abbrev: "null",
    minSpend: "TBD",
    highImpact: true,
    turnaroundTime: "TBD",
    cesTurnaroundTime: "TBD",
    cesRequired: false,
    floorCPM: "TBD",
    floorVCPM: "TBD",
    openCPM: "TBD",
  },
  {
    id: 20,
    name: "In-Screen/In-Image (Blend)",
    abbrev: "",
    minSpend: 25000,
    highImpact: false,
    turnaroundTime: 2,
    cesRequired: false,
    floorCPM: 7,
    floorVCPM: 10,
    openCPM: 8.5,
    customizable: true,
    rateCatergory: "blend",
    customFeatures: [],
  },
  {
    id: 21,
    name: "In-Screen Expandable/In-Image Expandable (Blend)",
    abbrev: "",
    minSpend: 25000,
    highImpact: false,
    turnaroundTime: 2,
    cesRequired: false,
    floorCPM: 9,
    floorVCPM: 13.25,
    openCPM: 11,
    customizable: true,
    rateCatergory: "blend",
    customFeatures: [],
  },
];

export default unitTypes;

export const rateCatergories = [
  { id: 0, category: "Blend (Direct Only)", value: "blend" },
  { id: 1, category: "In-Image", value: "in-image" },
  { id: 2, category: "In-Screen", value: "in-screen" },
  {
    id: 3,
    category: "Enhanced Display/Video",
    value: "enhanced display-video",
  },
  { id: 4, category: "Skins/Scrollers", value: "skins-scrollers" },
  { id: 5, category: "Other - In-Game/Video", value: "other" },
];
