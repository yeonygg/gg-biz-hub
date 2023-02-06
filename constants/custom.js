<<<<<<< HEAD
const customFeatures = [
=======
var customFeatures = [
>>>>>>> develop
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
    description:
      "Pipe in dynamic content within a unit via external data source",
<<<<<<< HEAD
    objective: "Primary: Awareness or Conversion",
=======
    objective: { primary: "Awareness or Conversion" },
>>>>>>> develop
    bestPractices:
      "Requires client to supply desired API credentials. For retail clients, need external data source to ensure daily product offerings daily based on store availabilities. Can also be used in conjuction with Click2Cart functionality.",
    programmatic: "Feasible",
    clientRequirements: "Client Supplied API + Credentials",
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
    description:
      "Dynamically pull in weather condition or time of day directly within the creative based on the user's location.",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "Requires API connection to weather app. List of weather that can be tracked can be found here. Creative can be dynamically served in the adserver based on time of day. Can be leveraged within In-Screen/In-Image blend.",
    programmatic: "TBD",
    clientRequirements: "List of Permutations and triggers",
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
    description:
      "Implements a real-time countdown clock within an ad unit to inform users of an upcoming deadline, release date or an announcement.",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "Generally only leveraged within an In-Screen unit. Great for entertainment and events.",
    programmatic: "Feasible",
    clientRequirements: "Countdown Dates/Times",
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
    description:
      "Have extended rollover animation for additional information about ad campaign",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "Generally only leveraged within an In-Screen/In-Image and In-Screen Expandable/In-Image Expandable units.",
    programmatic: "Feasible",
    clientRequirements:
      "Additional Creative assets and taglines for longer animations",
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
    description:
      "Scrollable text boxes (automatic or manual) for additional health information/legal text reuqired for the product",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "Generally only leveraged within an In-Screen/In-Image and In-Screen Expandable/In-Image Expandable units. Great for Pharmaceutical campaigns",
    programmatic: "Feasible",
    clientRequirements: "Legal/Medical information text content",
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
    description:
      "Integrate a social network API to pull data directly from a social platform within unit (similar to an ISI)",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "Too many requests to the social media API (usually # per day/hour), social network will block any further requests and will be closed/limited. Usually stay clear of Facebook.",
    programmatic: "Feasible",
    clientRequirements:
      "Social Feed, prefered method of integration (not all social networks supported)",
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
    description:
      "When the user scrolls on a webpage, additional animation plays within the ad unit. This can only be applied to In-Screen units, it functions on both desktop and mobile (not recommended for In-Screen Expandable).",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "Unit starts with a short intro animation where most of the ad's components are present with a background then other elements such as colors, imagery and/or taglines can be swapped out or change as the user scrolls down. We recommend a maximum of 5 to 6 frames, where the elements are animating on scroll.",
    programmatic: "Feasible",
    clientRequirements:
      "Requires client to supply copy and/or storyboard for each frame.",
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
    description:
      "When the user swipes or clicks arrows for additional content within the ad unit, similar to a slide show or gallery.",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "Unit starts with a short intro animation where all ad components are present with a background then as the user swipes or clicks through, other elements such as colors, imagery and/or text can change up. We recommend a maximum of 5 to 6 stages, where the elements are animating.",
    programmatic: "Feasible",
    clientRequirements:
      "Requires client to supply copy and/or storyboard for each stage.",
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
    description:
      "When the user drags a slider button to reveal a hidden image or graphic.",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "This can be applied to In-Screen/In-Image (as well as expandable units). Functions on both desktop and mobile. We recommend a maximum of 5 to 6 stages, where one element is changing.",
    programmatic: "Feasible",
    clientRequirements:
      "Requires clear direction or storyboard from the client.",
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
    description:
      "Features a quiz or poll ('this or that') for the user to engage with the unit.",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "Client is releasing new products and looking to gain insights. Only supports two, 2-answer questions, max 4 possible results.",
    programmatic: "Feasible",
    clientRequirements:
      "Requires client to supply copy and/or storyboard for each stage.",
  },
  {
    id: 10,
    name: "Gamification",
    abbrev: "null",
    minSpend: "TBD",
    highImpact: true,
    turnaroundTime: "TBD",
    cesTurnaroundTime: "TBD",
    cesRequired: false,
    floorCPM: "TBD",
    openCPM: "TBD",
    description:
      "Any game that is interrogated within the ad unit. Requires a higher level of engineering than most of creative capabilities. ",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "Engagement" },
>>>>>>> develop
    bestPractices:
      "Brainstorm session with client & creative services team is highly encouraged.",
    programmatic: "Feasible",
    clientRequirements: "TBD",
  },
  {
    id: 11,
    name: "360 Interactive",
    abbrev: "null",
    minSpend: 100000,
    highImpact: true,
    turnaroundTime: 5,
    cesRequired: true,
    cesTurnaroundTime: 1,
    floorCPM: 2,
    openCPM: 2,
    description:
      "In the Canvas' collapsed state you can click on a button labeled '360 view' where it then expands to showcase the products 360 experience. ",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "Requires very specific 360 assets from the client in order to activate. This unit/feature is mostly recommended for auto campaigns.",
    programmatic: "Feasible",
    clientRequirements:
      "Equirectangular and Cubic image formats for 360 viewer",
  },
  {
    id: 12,
    name: "Hotspot Integration 3D",
    abbrev: "null",
    minSpend: 250000,
    highImpact: true,
    turnaroundTime: 15,
    cesTurnaroundTime: 3,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
    description:
      "Within the unit there are multiple hotspots. When you click on each hotspot it then zooms in on that item and allows you to experience 3D view. Requires 3D assets from clients which is uncommon",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "Utlize when trying to highlight multiple features of a product. Previously created for both auto and consumer electronics. Mostly leveraged within an In-Screen Expandable unit.",
    programmatic: "Feasible",
    clientRequirements: "3D Assets, landing pages, content",
  },
  {
    id: 13,
    name: "Hotspot Integration no-3D",
    abbrev: "null",
    minSpend: 225000,
    highImpact: true,
    turnaroundTime: 10,
    cesTurnaroundTime: 3,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
    description:
      "Within the unit there are multiple hotspots. When you click on each hotspot it then provides a deeper dive into each product, feature, etc.",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "Utlize when trying to highlight multiple features of a product. Previously created for both auto and consumer electronics. Mostly leveraged within an In-Screen Expandable unit. There's a max of 5 hotspots in total.",
    programmatic: "Feasible",
    clientRequirements:
      "Hotspot behavior expectations, copy/imagery for each state",
  },
  {
    id: 14,
    name: "Map Integration",
    abbrev: "null",
    minSpend: 150000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
    description:
      "Includes a 'tap to map feature' to drive audiences directly to a map showcasing where they can buy the produut or find a store near them.",
<<<<<<< HEAD
    objective: "Primary: Foot traffic",
=======
    objective: { primary: "Foot traffic" },
>>>>>>> develop
    bestPractices:
      "Great for QSR, or CPG driving to super markets and client looking to increase foot traffic. Client demos do not include functioning Lightbox to start. We highly recommend getting client approval on the statics before proceeding to animation/production for this unit.",
    programmatic: "Feasible",
    clientRequirements:
      "List of locations, preferably coordinates but will accept full addresses",
  },
  {
    id: 15,
    name: "Multiple CTAs",
    abbrev: "null",
    minSpend: 75000,
    highImpact: true,
    turnaroundTime: 3,
    cesTurnaroundTime: 3,
    cesRequired: true,
    floorCPM: 0,
    openCPM: 0,
    description:
      "Contains more than one call-to-action within a single ad unit.",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "If a client has multiple KPIs but only wants to include one creative version",
    programmatic: "Feasible",
    clientRequirements:
      "Requires a list of URLs from the client, one for each CTA",
  },
  {
    id: 16,
    name: "In-Unit Shoppable",
    abbrev: "null",
    minSpend: "TBD",
    highImpact: true,
    turnaroundTime: "TBD",
    cesTurnaroundTime: "TBD",
    cesRequired: true,
    floorCPM: 0,
    openCPM: 0,
    description:
      "Functions much like an ad unit with multiple CTAs but with an emphasis on showcasing three products within a single ad unit. This does not click out to a lightbox, instead each product would click out to a landing page with more information on that product.",
<<<<<<< HEAD
    objective:
      "Primary: Conversions Secondary: Awareness Recommended Metrics: Engagement",
=======
    objective: {
      primary: "Conversions",
      secondary: "Awareness",
      recommendedMetrics: "Engagement",
    },
>>>>>>> develop
    bestPractices:
      "Does not need to include Click2Cart functionality unless requested by the client. Generally only leveraged within an In-Screen unit but can be applied to In-Screen Expandable.",
    programmatic: "Feasible",
    clientRequirements:
      "Requires product images and landing page click-outs for each",
  },
  {
    id: 17,
    name: "Multiple Tune-ins",
    abbrev: "null",
    minSpend: 25000,
    highImpact: true,
    turnaroundTime: 2,
    cesRequired: false,
    floorCPM: 0,
    openCPM: 0,
    description:
      "A single ad unit that displays one date at a time. For example, an ad for a tv show would promote the premiere date, when to tune-in as well as the date of the season finale. The ad stays the same but the copy for the dates would change throughout the duration of the campaign flight.",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "Great for Entertainment. Typically the design team will build one version for the initial client review and maintain edits for that version until the client approves design and animation. Then we can proceed to set up the other tune-in dates in the final deliverables phase.",
    programmatic: "Feasible",
    clientRequirements: "Requires list of dates/messaging from the client.",
  },
  {
    id: 18,
    name: "Expandable Accordian",
    abbrev: "null",
    minSpend: 125000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 3,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
    description:
      "Content within the ad unit is divided into narrows slices which then expands when a user hovers over it on desktop.  On mobile devices, the accordion is removed and instead, the images display as a slide show animation.",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "Great for showcasing multiple products in one unit. Max of 4 products or a minimum of 3 within the accordion. Only leveraged within an In-Screen Expandable unit.",
    programmatic: "Feasible",
    clientRequirements:
      "Images to be used on each slice, landing page clickouts for each.",
  },
  {
    id: 19,
    name: "Lightbox - Standard Shoppable",
    abbrev: "null",
    minSpend: 125000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
    description:
      "Products are displayed in a fixed 3x2 grid with discrete CTAs that either direct users to a purchase page or, if using C2C, land them on the shopping cart section.",
<<<<<<< HEAD
    objective:
      "Primary: Conversions Secondary: Awareness Recommended Metrics: Engagement",
=======
    objective: {
      primary: "Conversions",
      secondary: "Awareness",
      recommendedMetrics: "Engagement",
    },
>>>>>>> develop
    bestPractices:
      "Great for showcasing multiple products in one unit. Max of 4 products or a minimum of 3 within the accordion. Only leveraged within an In-Screen Expandable unit.",
    programmatic: "Lightboxes are generally not recommended for Programmatic",
    clientRequirements:
      "Images to be used on each slice, landing page clickouts for each.",
  },
  {
    id: 20,
    name: "Lightbox - Custom Shoppable",
    abbrev: "null",
    minSpend: 150000,
    highImpact: true,
    turnaroundTime: 10,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
    description:
      "Upon clicking the unit, users are driven to a custom lightbox(es) showcasing multiple product offerings that are clickable for more information or add to cart",
<<<<<<< HEAD
    objective: "Primary: Conversions Secondary: Awareness",
=======
    objective: { primary: "Conversions", secondary: "Awareness" },
>>>>>>> develop
    bestPractices:
      "Shoppable units can be used in conjuction with Click2Cart functionality",
    programmatic: "Lightboxes are generally not recommended for Programmatic",
    clientRequirements:
      "Product List, Prices, landing pages, nav behavior. Click2Cart?",
  },
  {
    id: 21,
    name: "Lightbox - Multiple Click-outs",
    abbrev: "null",
    minSpend: 125000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
    description:
      "Within the unit the creative team will include 3-5 seperate clickouts ",
<<<<<<< HEAD
    objective:
      "Primary: Awareness / Conversion (depending if the client wants users to learn more or drive sales) Recommended Metrics: CTR",
=======
    objective: {
      primary:
        "Awareness / Conversion (depending if the client wants users to learn more or drive sales)",
      recommendedMetrics: "CTR",
    },
>>>>>>> develop
    bestPractices:
      "Client want's to showcase multiple products in one unit and drive to each of their landing pages. Client is looking for a shoppable unit.",
    programmatic: "Lightboxes are generally not recommended for Programmatic",
    clientRequirements: "Need landing pages for each clickout",
  },
  {
    id: 22,
    name: "Lightbox - Multiple Videos",
    abbrev: "null",
    minSpend: 150000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
    description:
      "As oppose to a standard Lightbox which only features one video, we can create a video gallery within a custom Lightbox unit. One video would sit at the for front while other videos sit underneath in as thumbnails, being queued up to play next. When the user clicks through the other videos they pop up to the main spot.",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "Engagement" },
>>>>>>> develop
    bestPractices:
      "This usually requires raw video files and not YouTube links. Instead of creating multiple creative versions a client can opt to include all video assets within one unit",
    programmatic: "Lightboxes are generally not recommended for Programmatic",
    clientRequirements: "All videos, expected behavior for video navigation",
  },
  {
    id: 23,
    name: "Lightbox - Host Micro-site",
    abbrev: "null",
    minSpend: 100000,
    highImpact: true,
    turnaroundTime: 10,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
    description:
      "Integrate an existing client microsite within a lightbox unit",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "Engagement" },
>>>>>>> develop
    bestPractices:
      "Requires client microsite or GumGum build microsite to host.",
    programmatic: "Lightboxes are generally not recommended for Programmatic",
    clientRequirements: "Site to integrate or replicate, expected behaviors",
  },
  {
    id: 24,
    name: "In-image - Color Matching",
    abbrev: "null",
    minSpend: 125000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 5,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
    description:
      "Matches ad creative to the color on screen. Dynamically adjusting the color of the ad based on the image on-screen is also possible but more difficult to execute in practice.",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices: "Color matching only works within an In-Image unit.",
    programmatic: "TBD",
    clientRequirements: "CV Support, Color List to Match Against",
  },
  {
    id: 25,
    name: "In-image - Facial Recognition",
    abbrev: "null",
    minSpend: 225000,
    highImpact: true,
    turnaroundTime: 5,
    cesTurnaroundTime: 10,
    cesRequired: true,
    floorCPM: 2,
    openCPM: 2,
    description:
      "Includes the use of GumGum's proprietary platform to analyze an any given image within our inventory for certain facial landmarks such as eyes, smiles, etc. Please note anything outside of facial recognition would required weeks of training models to detect those particular proprieties.",
<<<<<<< HEAD
    objective: "Primary: Awareness Recommended Metrics: CTR, Engagement",
=======
    objective: { primary: "Awareness", recommendedMetrics: "CTR, Engagement" },
>>>>>>> develop
    bestPractices:
      "Only recommend to clients with campaigns that can execute facial recognition. Please note anything outside of facial recognition would required weeks or months of training models to detect new proprieties. Can only be used with In-Image Canvas (display)",
    programmatic: "No",
    clientRequirements:
      "CV Lead Time / Support, Conversation with LC& Dan on viability of concept before being pitched",
  },
];

export default customFeatures;
