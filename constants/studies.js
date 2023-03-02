/* eslint-disable import/no-anonymous-default-export */
var studies = [
  {
    id: 0,
    title: "Brand Lift",
<<<<<<< HEAD
=======
    minSpends: {
      partner: { name: "Upwave", minSpend: 75000, upgradeSpend: 200000 },
    },

>>>>>>> feature/creative-business-rules
    studyPartners: ["Kantar Millward Brown", "Upwave", "Dynata"],
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
    studyPartners: ["Foursquare/Placed"],
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
    studyPartners: ["Lumen"],
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
    studyPartners: ["IRI", "Catalina", "ANSA"],
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
