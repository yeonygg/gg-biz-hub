import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import {
  Card,
  Section,
  BodyText,
  HR,
  Button,
  Heading,
} from "pier-design-system";
import SubHeading from "./SubHeading";
import {
  faCheck,
  faXmark,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SpendMeter = (props) => {
  const budget = props.campaignBudget;

  const x = <FontAwesomeIcon icon={faXmark} inverse />;
  const check = <FontAwesomeIcon icon={faCheck} inverse />;
  const percentCalc = () => {
    const minSpend = props.minSpend;

    if (budget === "" || budget === 0) {
      return 0;
    }

    if (budget < minSpend) {
      return budget / minSpend;
    } else {
      return 1;
    }
  };
  /*
  console.log(percentCalc());

  const colorSwitch = () => {
    const budget = props.campaignBudget;
    const minSpend = props.minSpend;
    if (budget === "" || budget === 0) {
      return redColor;
    } else if (budget < minSpend) {
      return redColor;
    } else {
      return greenColor;
    }
  };

  const circleColorSwitch = () => {
    const budget = props.campaignBudget;
    const minSpend = props.minSpend;
    if (budget === "" || budget === 0) {
      return circleRedColor;
    } else if (budget < minSpend) {
      return circleRedColor;
    } else {
      return circleGreenColor;
    }
  };

  const iconSwitch = () => {
    const budget = props.campaignBudget;
    const minSpend = props.minSpend;
    if (budget === "" || budget === 0) {
      return x;
    } else if (budget < minSpend) {
      return x;
    } else {
      return check;
    }
  };

  const circlePosition = () => {
    if (percentCalc() == 0) {
      return 6 + "%";
    } else if (percentCalc() > 0 && percentCalc() <= 1) {
      return w - 5 + "%";
    }
  };

  const iconPosition = () => {
    if (percentCalc() == 0) {
      return 4.6 + "%";
    } else if (percentCalc() > 0 && percentCalc() <= 1) {
      return w - 6 + "%";
    }
  };
  */

  const budgetNumber = () => {
    const budget = props.campaignBudget;
    let number = "";
    if (percentCalc() >= 0.25) {
      console.log(budget);
      number = "$" + budget;
    } else {
      number = "";
    }
    return number;
  };

  const spendNumber = () => {
    const spend = props.minSpend;
    let number = 0;
    if (percentCalc() <= 0.85) {
      number = "$" + spend.toLocaleString("en-US");
    } else {
      number = "";
    }
    return number;
  };

  const {
    percent = [percentCalc()], // a number between 0 and 1, inclusive
    width = "100%", // the overall width
    height = 25, // the overall height
    rounded = true, // if true, use rounded corners
    greenColor = "url('#primaryGradient')", // the fill color
    circleGreenColor = "url('#circlePrimaryGradient')",
    circleRedColor = "url('#circleDangerGradient')", // the fill color
    redColor = "url('#dangerGradient')", // the fill color
    animate = true, // if true, animate when the percent changes
    label = null, // a label to describe the contents (for accessibility)
  } = props;

  // var r = rounded ? Math.ceil(height / 2) : 0;
  // var w = percent ? Math.max(100 * Math.min(percent, 1)) : 0;
  // console.log(w);
  // var style = animate
  //   ? { transition: "width 500ms, fill 250ms, all 500ms" }
  //   : null;

  const barClass =
    percentCalc() < 1
      ? "spend-meter__filled--red"
      : "spend-meter__filled--green";
  const iconClass =
    percentCalc() < 1 ? "fas fa-times-circle" : "fas fa-check-circle";
  const iconColor =
    percentCalc() < 1 ? "spend-meter__icon--red" : "spend-meter__icon--green";
  return (
    <div className="meter-wrapper -m-b-6">
      <div className="meter-copy -m-b-4 -m-t-5">
        <BodyText style={{ fontWeight: "bold", marginBottom: 0 }}>
          Stated Campaign Budget
        </BodyText>
        <BodyText className="budget-meter-spend">{spendNumber()}</BodyText>
      </div>

      <div className="spend-meter" data-spend={`$${budget}`}>
        <div
          className={`spend-meter__filled ${barClass}`}
          style={{ width: `${percentCalc() * 100}%` }}
        ></div>
        <div className="spend-meter__icon-holder">
          <div
            className={`spend-meter__icon ${iconColor}`}
            style={{ left: `${percentCalc() * 100}%` }}
          >
            <i className={iconClass} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendMeter;
