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
    customFeatures: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 21,
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
    customFeatures: [
      0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 21, 22, 23,
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
    customFeatures: [2, 4, 14, 15],
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
    customFeatures: [0, 1, 2, 5, 13, 14, 15],
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
    customFeatures: [2, 15],
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
    customFeatures: [
      0, 1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 21, 22, 23,
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
    customFeatures: [
      0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 22, 23,
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
    customFeatures: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
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
  },
  {
    id: 18,
    name: "In-Video Snipe",
    abbrev: "IVS",
    minSpend: 0,
    highImpact: true,
    turnaroundTime: 7,
    cesRequired: true,

    floorCPM: 14,
    floorVCPM: 21.5,
    openCPM: 17,
    customizable: false,
  },
];
var customFeatures = [
  {
    id: 0,
    name: "API Integration",
    abbrev: "null",
    minSpend: 150000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 1,
    name: "Dynamic Responsive Creative",
    abbrev: "null",
    minSpend: 125000,
    highImpact: true,
    turnaroundTime: 7,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 2,
    name: "Countdown",
    abbrev: "null",
    minSpend: 100000,
    highImpact: true,
    turnaroundTime: 3,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 3,
    name: "Extended Rollover",
    abbrev: "null",
    minSpend: 25000,
    highImpact: true,
    turnaroundTime: 3,
    cesRequired: false,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 4,
    name: "Scrollable Text",
    abbrev: "null",
    minSpend: 25000,
    highImpact: true,
    turnaroundTime: 3,
    cesRequired: false,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 5,
    name: "Social Integration",
    abbrev: "null",
    minSpend: 150000,
    highImpact: true,
    turnaroundTime: 3,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 6,
    name: "Interactive Scroll",
    abbrev: "null",
    minSpend: 100000,
    highImpact: true,
    turnaroundTime: 5,
    cesRequired: true,
    cesTurnaroundTime: 1,
    floorCPM: 3,
    openCPM: 4,
  },
  {
    id: 7,
    name: "Interactive Carousel",
    abbrev: "null",
    minSpend: 100000,
    highImpact: true,
    turnaroundTime: 5,
    cesRequired: true,
    cesTurnaroundTime: 1,
    floorCPM: 3,
    openCPM: 4,
  },
  {
    id: 8,
    name: "Interactive Slider",
    abbrev: "null",
    minSpend: 100000,
    highImpact: true,
    turnaroundTime: 5,
    cesRequired: true,
    cesTurnaroundTime: 1,
    floorCPM: 3,
    openCPM: 4,
  },
  {
    id: 9,
    name: "Interactive Quiz/Poll",
    abbrev: "null",
    minSpend: 150000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 10,
    name: "360 Interactive",
    abbrev: "null",
    minSpend: 100000,
    highImpact: true,
    turnaroundTime: 5,
    cesRequired: true,
    cesTurnaroundTime: 1,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 11,
    name: "Hotspot Integration 3D",
    abbrev: "null",
    minSpend: 250000,
    highImpact: true,
    turnaroundTime: 15,
    cesTurnaroundTime: 3,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 12,
    name: "Hotspot Integration no-3D",
    abbrev: "null",
    minSpend: 225000,
    highImpact: true,
    turnaroundTime: 10,
    cesTurnaroundTime: 3,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 13,
    name: "Map Integration",
    abbrev: "null",
    minSpend: 150000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 14,
    name: "Multiple CTAs",
    abbrev: "null",
    minSpend: 75000,
    highImpact: true,
    turnaroundTime: 3,
    cesTurnaroundTime: 3,
    cesRequired: true,
    floorCPM: 0,
    openCPM: 0,
  },
  {
    id: 15,
    name: "Multiple Tune-ins",
    abbrev: "null",
    minSpend: 25000,
    highImpact: true,
    turnaroundTime: 2,
    cesRequired: false,
    floorCPM: 0,
    openCPM: 0,
  },
  {
    id: 16,
    name: "Expandable Accordian",
    abbrev: "null",
    minSpend: 125000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 3,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 17,
    name: "Lightbox - Standard Shoppable",
    abbrev: "null",
    minSpend: 125000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 18,
    name: "Lightbox - Custom Shoppable",
    abbrev: "null",
    minSpend: 150000,
    highImpact: true,
    turnaroundTime: 10,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 19,
    name: "Lightbox - Multiple Click-outs",
    abbrev: "null",
    minSpend: 125000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 20,
    name: "Lightbox - Multiple Videos",
    abbrev: "null",
    minSpend: 150000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 21,
    name: "Lightbox - Host Micro-site",
    abbrev: "null",
    minSpend: 100000,
    highImpact: true,
    turnaroundTime: 10,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 22,
    name: "In-image - Color Matching",
    abbrev: "null",
    minSpend: 125000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
  {
    id: 23,
    name: "In-image - Facial Recognition",
    abbrev: "null",
    minSpend: 225000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 10,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
  },
];

export default { unitTypes, customFeatures };
