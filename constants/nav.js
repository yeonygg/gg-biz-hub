/* eslint-disable import/no-anonymous-default-export */

const navData = [{
    id: 0,
    name: "Business Rules",
    path: null,
    pages: [{
      id: 0,
      path: "/custom-creatives",
      name: "Custom Creative Guidelines",
      component: "CustomCreatives"
    },
    {
      id: 1,
      path: "/creative-rules",
      name: "Creative Business Rules",
      component: "CreativeBusinessRules"
    },
    {
      id: 2,
      path: "/studies",
      name: "Research & Data",
      component: "Studies"
    }]
  },
  {
    id: 1,
    name: "Plan Generator",
    path: "/generator",
    component: "Generator",
    pages: null
  }];

export default navData;
  