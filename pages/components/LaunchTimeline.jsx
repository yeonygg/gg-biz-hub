import { InputGroup, InputText, Section, Heading } from "pier-design-system";

import { useContext, useState } from "react";
import { InputsContext } from "../Contexts/InputsContext";

const LaunchTimeline = (props) => {
  const designSLA = () => {
    const standardTimeArray = [];
    const highImpactArray = [];
    const customTimeArray = [];

    for (let i = 0; i < props.campaign.unitConfig.length; i++) {
      const customTurnaroundTime =
        props.campaign.unitConfig[i].customTurnaroundTime;
      const versionCount = props.campaign.unitConfig[i].versionCount;

      //STANDARD TURNAROUND TIME CALC
      if (props.campaign.unitConfig[i].highImpact === false) {
        standardTimeArray.push(versionCount);
      }

      //High Impact TURNAROUND TIME CALC

      if (props.campaign.unitConfig[i].highImpact === true) {
        highImpactArray.push(versionCount);
      }

      //Custom TURNAROUND TIME CALC

      if (props.campaign.unitConfig[i].customOn === true) {
        customTimeArray.push(customTurnaroundTime);
      }
    }

    const standardTimeArraySum = standardTimeArray.reduce(
      (accumulator, value) => {
        return accumulator + value;
      },
      0
    );

    const highImpactArraySum = highImpactArray.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    const maxCustom = Math.max(...customTimeArray);
    const totalUnits = standardTimeArraySum + highImpactArraySum;

    //standard time calc
    let totalDesignTime = "";

    if (totalUnits <= 4) {
      totalDesignTime = 2;
    } else if (totalUnits > 4 && totalUnits <= 15) {
      totalDesignTime = 3;
    } else if (totalUnits > 15) {
      totalDesignTime = 4;
    }

    if (highImpactArray.length >= 1) {
      totalDesignTime = totalDesignTime + 1;
    }

    // console.log(props.campaign.unitConfig);

    if (
      customTimeArray.length > 0 &&
      props.campaign.unitConfig[0].isExpedited === false
    ) {
      return Math.max(totalDesignTime, maxCustom);
    } else if (
      customTimeArray.length > 0 &&
      props.campaign.unitConfig[0].isExpedited === true
    ) {
      return maxCustom - 1;
    }

    if (
      props.campaign.unitConfig.length > 0 &&
      props.campaign.unitConfig[0].isExpedited === true
    ) {
      totalDesignTime = totalDesignTime - 1;
    }
    return totalDesignTime;
  };

  const ceSLA = () => {
    let sla = 1;
    props.campaign.unitConfig.map((unit) => {
      if (unit.cesTurnaroundTime != undefined) {
        sla = Math.max(unit.cesTurnaroundTime, sla);
      }
    });
    return sla;
  };

  const phases = [
    {
      name: "Kick Off Call",
      time: 0.5,
      sequence: 0.5,
      description:
        "AM connects directly with the client to align on design and delivery expectations.",
      owner: "Account Manager",
    },
    {
      name: "Avails Pull",
      time: 0.5,
      sequence: 1,
      description:
        "Campaign Managers pull avails and ensure the campaign can be delivered as planned.",
      owner: "Campaign Manager",
    },
    {
      name: "Ticket Creation",
      time: 0.5,
      sequence: 1,
      description:
        "Campaign Managers create the AC ticket as well as the shell tickets for DTR and CES.",
      owner: "Campaign Manager",
    },
    {
      name: "Tag Sheet Requisition",
      time: 1,
      sequence: 1,
      description:
        "Campaign Managers coordinate with client to collect all tagging/tracking documents",
      owner: "Campaign Manager",
    },
    {
      name: "Asset Validation",
      time: 1,
      sequence: 1.5,
      description:
        "Clients are expected to submit assets within 24 hours of signed I/O.\nDesign Managers await, and then screen any submitted assets for viability.",
      owner: "Design Manager",
    },
    {
      name: "Initial Mocks",
      time: designSLA(),
      sequence: 2.5,
      description:
        "DTR ticket is assigned and designers work on initial creative based on client-provided assets and direction",
      owner: "Designer",
    },
    {
      name: "Client Review",
      time: 1,
      sequence: designSLA() + 2.5,
      description:
        "Designers submit the creative mocks for review and Campaign \nManagers pass demos along to the client. Clients are expected to \nprovide feedback within 24 hours of mock submission",
      owner: "Campaign Manager",
    },
    {
      name: "Revisions",
      time: 1,
      sequence: designSLA() + 3.5,
      description:
        "Designers have 24 hours to make and revisions the client has \nrequested. Note: this process will take longer for multiple rounds of revisions",
      owner: "Designer",
    },
    {
      name: "Tagging/Setup",
      time: ceSLA(),
      sequence: designSLA() + 4.5,
      description:
        "Creative Engineering applies provided tracking tags to all \ncreatives and perform any manual engineering work required to \nready the creative for launch",
      owner: "Creative Engineer",
    },
    {
      name: "QA",
      time: 0.5,
      sequence: designSLA() + ceSLA() + 4.5,
      description: "Account Manager confirms campaign is configured Correctly",
      owner: "Account Manager",
    },
    {
      name: "Launch",
      time: 0,
      sequence: designSLA() + ceSLA() + 5,
      description: "Launch!",
      owner: "Account Manager",
    },
  ];

  const totalTime = Math.max(10, 5 + designSLA() + ceSLA());

  const generateCells = (phase) => {
    let td = [];
    let blocksFilled = 0;
    let oddCount = 0;
    for (let i = 1; i <= totalTime * 2; i++) {
      let bgClass = oddCount < 2 ? "-odd " : "-even ";
      if (phase.sequence === i / 2) {
        if (phase.time < 1) {
          td.push(
            <div class={`gantt-cell ${bgClass}`} key={i}>
              <div
                data-owner={phase.owner}
                class="filled -first -last pier-tooltip pier-tooltip--top"
                data-tooltip={`Day ${Math.ceil(i / 2)}: ${phase.description}`}
              ></div>
            </div>
          );
        } else {
          td.push(
            <div class={`gantt-cell ${bgClass}`} key={i}>
              <div
                data-owner={phase.owner}
                class="filled -first pier-tooltip pier-tooltip--top"
                data-tooltip={`Day ${Math.ceil(i / 2)}: ${phase.description}`}
              ></div>
            </div>
          );
        }
        blocksFilled = phase.time * 2;
      } else if (blocksFilled > 2) {
        td.push(
          <div class={`gantt-cell ${bgClass}`} key={i}>
            <div
              data-owner={phase.owner}
              class="filled pier-tooltip pier-tooltip--top"
              data-tooltip={`Day ${Math.ceil(i / 2)}: ${phase.description}`}
            ></div>
          </div>
        );
        blocksFilled--;
      } else if (blocksFilled == 2) {
        td.push(
          <div class={`gantt-cell ${bgClass}`} key={i}>
            <div
              data-owner={phase.owner}
              class="filled -last pier-tooltip pier-tooltip--top"
              data-tooltip={`Day ${Math.ceil(i / 2)}: ${phase.description}`}
            ></div>
          </div>
        );
        blocksFilled--;
      } else {
        td.push(<div class={`gantt-cell ${bgClass}`} key={i}></div>);
      }
      oddCount = oddCount < 3 ? oddCount + 1 : 0;
    }
    return td;
  };

  const generateHeader = () => {
    let td = [];
    for (let i = 1; i <= totalTime; i++) {
      td.push(
        <div
          class="gantt-header-cell pier-body-text pier-body-text--xxs pier-body-text--light"
          key={i}
        >{`Day ${i}`}</div>
      );
    }
    return td;
  };

  const owners = [...new Set(phases.map((phase) => phase.owner))];

  return (
    <Section padding="sm" className="launch-timeline">
      <Heading size="xs">Launch Timeline</Heading>
      <div className="launch-gantt">
        <div class="gantt-header">
          <div class="gantt-task-header">&nbsp;</div>
          {generateHeader()}
        </div>
        {phases.map((phase) => (
          <div className="gantt-row" key={phase}>
            <div className="gantt-task -text-a-right">{phase.name}</div>
            {generateCells(phase)}
          </div>
        ))}
        <div className="gantt-legend">
          {owners.map((owner) => (
            <div className="gantt-key" key={owner}>
              <div data-owner={owner} className="gantt-color -m-b-2"></div>
              <div className="pier-body-text--xs -m-b-0 -text-a-right">
                {owner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default LaunchTimeline;
