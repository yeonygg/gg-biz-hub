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

        console.log(props.campaign.unitConfig);

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

    const phases = [
        {
            name:'Kick Off Call',
            time: 0.5,
            sequence: 0.5

        },
        {
            name:'Avails Pull',
            time: 0.5,
            sequence: 1
        },
        {
            name:'Ticket Creation',
            time: 0.5,
            sequence: 1
        },
        {
            name:'Asset Validation',
            time: 1,
            sequence: 1.5
        },
        {
            name:'Initial Mocks',
            time: designSLA(),
            sequence: 2.5
        },
        {
            name:'Client Review',
            time: 1,
            sequence: designSLA() + 2.5
        },
        {
            name:'Revisions',
            time: 1,
            sequence: designSLA() + 3.5
        },
        {
            name:'Tagging/Setup',
            time: 1,
            sequence: designSLA() + 4.5
        },
        {
            name:'QA',
            time: 0.5,
            sequence:  designSLA() + 5.5
        },
        {
            name:'Launch',
            time: 0,
            sequence: designSLA() + 6
        }
    ];
   
    const totalTime = 6 + designSLA();

    const generateCells = (phase) => {
        let td = [];
        let blocksFilled = 0;
        let oddCount = 0;
        for (let i = 1; i <= totalTime*2; i++) {
           
            let bgClass = oddCount < 2 ? '-odd' : '-even'

            if(phase.sequence === i/2) {
                if(phase.time < 1) {
                    td.push(<div class={`gantt-cell ${bgClass}`} key={i}><div class="filled -first -last"></div></div>);
                } else {
                    td.push(<div class={`gantt-cell ${bgClass}`} key={i}><div class="filled -first"></div></div>);
                }
                blocksFilled = phase.time*2;
            } else if(blocksFilled > 2) {
                td.push(<div class={`gantt-cell ${bgClass}`} key={i}><div class="filled"></div></div>);
                blocksFilled--; 
            } else if(blocksFilled == 2) {
                td.push(<div class={`gantt-cell ${bgClass}`} key={i}><div class="filled -last"></div></div>);
                blocksFilled--; 
            } else {
                td.push(<div class={`gantt-cell ${bgClass}`} key={i}></div>);
            }
            oddCount = oddCount < 3 ? oddCount+1 : 0;
        }
        return td;
    }

    const generateHeader = () => {
        let td = [];
        for (let i = 1; i <= totalTime; i++) {
            td.push(<div class="gantt-header-cell pier-body-text pier-body-text--xxs pier-body-text--light" key={i}>{`Day ${i}`}</div>);
        }
        return td;
    }
    
  return (
    <Section padding="sm" className="launch-timeline">
        <Heading size="xs">Launch Timeline</Heading>
        <div className="launch-gantt">
            <div class="gantt-header">
                <div class="gantt-task-header">Task</div>
                {
                    generateHeader() 
                }
            </div>
            {
                phases.map((phase) => (
                    <div className="gantt-row">
                        <div class="gantt-task">{phase.name}</div>
                        { generateCells(phase) }
                    </div>
                ))
            }
        </div>
    </Section>
  );
};

export default LaunchTimeline;
