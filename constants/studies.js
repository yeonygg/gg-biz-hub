/* eslint-disable import/no-anonymous-default-export */

const checkIcon =
  '<i style={{ color: "#08D18B" }} className="fas fa-check"></i>';
var studies = [
  {
    id: 0,
    title: "Brand Lift",
    studyPartners: [
      {
        id: 0,
        name: "Upwave",
        minSpend: [75000, 200000],
        maxStudies: [1, 2],
        cpmUpcharge: 0,
        table: [
          {
            column1: "Unlocked",
          },
          { column2: "Unlocked" },
          { column3: "Unlocked" },
          { column4: "You can offer 2 studies if feasible" },
        ],
      },
      {
        id: 1,
        name: "Kantar Millward Brown",
        minSpend: [100000],
        maxStudies: [1],
        cpmUpcharge: [{ 100: 2.0, 150: 1.0 }],
        table: [
          { column1: "" },
          { column2: "$2.00 CPM Upcharge" },
          { column3: "$1.00 CPM Upcharge" },
          { column4: "Unlocked" },
        ],
      },

      {
        id: 2,
        name: "Dynata",
        minSpend: [100000],
        maxStudies: [1],
        cpmUpcharge: [{ 100: 2.0, 150: 1.0 }],
        table: [
          { spend: "50k", column: "<i className='fa-far fa-x></i>" },
          { spend: "200k", column: "$2.00 CPM Upcharge" },
          { column: "$1.00 CPM Upcharge" },
          { column: "Unlocked" },
        ],
      },
    ],
    description:
      "Studies that rely users to respond to survey questions. Respondents are usually representative of the general US population (ranges in age, gender, race, geo, etc.). These partners (i.e. MWB, Upwave) are best for measuring lift in Brand Awareness, Consideration/Purchase Intent, Favorability, and other attitudinal metrics",
    goodCandidates: {
      title: ["Consumer Products:", "Campaign Characteristics:"],
      info: {
        consumerProducts: [
          "These typically perform best with household, consumer products as the survey respondents are representative of the general population",
          "Newer, less established brands",
        ],
        campaignCharacteristics: [
          "8-11M impressions",
          "National (or minimal) geo-targeting",
        ],
      },
    },

    caveats: {
      title: ["B2B/Tech:", "Household Names:"],
      info: [
        "These will not typically perform best with Tech, B2B, SaaS, or other niche products that the average user aren’t familiar with. These types of products may have positive lift in Awareness, but likely not with Consideration or Action Intent. We can look at different audience cuts, but that can be limiting and not guaranteed that the data will be stable.",
        "Brands with household names (i.e. Coca-Cola, Kleenex, Apple) will not drive significant lift in Awareness, as most users are already familiar. Good to run a study when launching a new product/flavor/iteration",
      ],
    },
    deliveryTime: "Report delivered approximately 3-4 weeks post campaign",
  },
  {
    id: 1,
    title: "Foot Traffic",
    studyPartners: [
      {
        id: 0,
        name: "Foursquare/Placed",
        minSpend: [0, 200000],
        maxStudies: [1, 2],
        cpmUpcharge: [{ 0: 0.5, 100: 0.5, 150: 0, 200: 0 }],
        table: [
          { column1: "$0.50 CPM Upcharge" },
          { column2: "$0.50 CPM Upcharge" },
          { column3: "Unlocked" },
          { column4: "You can offer 2 studies if feasible" },
        ],
      },
    ],
    description:
      "Studies that track ad exposure and user location to measure in-store foot traffic and thereby typically return on Ad Spend, in-store conversions, cost per visit, and incremental sales",
    goodCandidates: {
      title: "QSR, Retail, Brick & Mortar:",
      info: "Foot Traffic studies can only be effective when the brand partner “owns” the retail space (i.e. Sephora vs. a makeup brand sold in Sephora or Starbucks vs. a Starbucks kiosk inside the grocery store)",
    },

    caveats: {
      title: "Seasonality:",
      info: "Keep in mind that foot-traffic results may be lower in Winter months when weather may cause a decrease in mobility (i.e. snowstorms causing dangerous roads)",
    },
    deliveryTime: "Report delivered approximately 1 month post campaign",
  },
  {
    id: 2,
    title: "Attention",
    studyPartners: [
      {
        id: 0,
        name: "Lumen",
        minSpend: [75000, 150000],
        maxStudies: [1, 2],
        cpmUpcharge: [{ 0: 0, 100: 0, 150: 0, 200: 0 }],
        table: [
          { column1: "Unlocked" },
          { column2: "Unlocked" },
          { column3: "You can offer 2 studies if feasible" },
          { column4: "You can offer 2 studies if feasible" },
        ],
      },
    ],
    description:
      "Eye tracking and attention predictions at speed and scale—boost stand out, enhance engagement, drive communication, increase sales",
    goodCandidates: {
      title: "Creative Testing and Focused Clients:",
      info: "Advertisers who want to understand how users are engaging and gathering from their creatives. Help prove the value of our high impact units.",
    },

    caveats: {
      title: "",
      info: "Cost as per creative we are measuring. Multiple versions may require higher budget amounts. Also. Playground XYZ tech will be done integrating sometime during 2023 which will replace any of the need for this partner.",
    },
    deliveryTime: "Report delivered approximately 3-4 weeks post campaign",
  },
  {
    id: 3,
    title: "Sales ROI (Sales Lift)",
    studyPartners: [
      {
        id: 0,
        name: "ANSA",
        minSpend: [75000],
        maxStudies: [1],
        cpmUpcharge: [{ 75: 0.75, 150: 0, 250: 0, 500: 0 }],
        table: [
          { column1: "$0.75 CPM Upcharge" },
          { column2: "Unlocked" },
          { column3: "Unlocked" },
          { column4: "Unlocked" },
        ],
      },
      {
        id: 1,
        name: "IRI",
        minSpend: [250000],
        maxStudies: [1],
        cpmUpcharge: [{ 0: 0, 100: 0, 150: 0, 200: 0 }],
        table: [
          { column1: "" },
          { column2: "" },
          { column3: "Unlocked" },
          { column4: "Unlocked" },
        ],
      },
      {
        id: 2,
        name: "Catalina",
        minSpend: [250000],
        maxStudies: [1],
        cpmUpcharge: [{ 0: 0, 100: 0, 150: 0, 200: 0 }],
        table: [
          { column1: "" },
          { column2: "" },
          { column3: "Unlocked" },
          { column4: "Unlocked" },
        ],
      },
    ],
    description:
      "Uses household level data to build exposed vs. control groups, which can then attribute purchase data to the campaign. Metrics include sales lift, ROI, competitive share lift, etc.",
    goodCandidates: {
      title: "CPG Specific Products:",
      info: "CPG products that don’t have significant market penetration i.e. Squirt rather than Coca-Cola",
    },

    caveats: {
      title: "In-Network Retailers:",
      info: "Determine the retailer in which the study will be run on and whether that retailer is included in the study vendors retailer network. All partners have multiple levels of reporting and service. It is crucial to work with ops presales to identify which tier and report type we can access.",
    },
    deliveryTime: "Report delivered approximately 9 weeks post campaign",
  },
];

export default studies;
