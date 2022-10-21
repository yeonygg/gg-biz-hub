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

const SpendMeter = (props) => {
  const percentCalc = () => {
    const budget = props.campaignBudget;
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

  console.log(percentCalc());
  var {
    percent = [percentCalc()], // a number between 0 and 1, inclusive
    width = "100%", // the overall width
    height = 25, // the overall height
    rounded = true, // if true, use rounded corners
    greenColor = "url('#primaryGradient')", // the fill color
    circleGreenColor = "url('#circlePrimaryGradient')", // the fill color
    redColor = "url('#dangerGradient')", // the fill color
    animate = true, // if true, animate when the percent changes
    label = null, // a label to describe the contents (for accessibility)
  } = props;

  var r = rounded ? Math.ceil(height / 2) : 0;
  var w = percent ? Math.max(100 * Math.min(percent, 1)) : 0;
  console.log(w);
  var style = animate
    ? { transition: "width 500ms, fill 250ms, all 500ms" }
    : null;

  const circlePosition = () => {
    if (percent === 0) {
      return 6 + "%";
    } else if (percent > 0 && percent <= 1) {
      return w - 6 + "%";
    }
  };

  return (
    <Section padding="xs">
      <svg width={width} height="100" aria-label={label}>
        <defs>
          <linearGradient id="primaryGradient" gradientTransform="rotate(0)">
            <stop offset="-7%" stop-color="#08D18B" />
            <stop offset="107%" stop-color="#25B9EF" />
          </linearGradient>
        </defs>

        <defs>
          <linearGradient
            id="circlePrimaryGradient"
            gradientTransform="rotate(0)"
          >
            <stop offset="-7%" stop-color="#25B9EF" />
            <stop offset="107%" stop-color="#08D18B" />
          </linearGradient>
        </defs>

        <defs>
          <linearGradient id="dangerGradient" gradientTransform="rotate(0)">
            <stop offset="-7%" stop-color="#FCA522" />
            <stop offset="107%" stop-color="#E24550" />
          </linearGradient>
        </defs>
        <rect
          width={width}
          height={height}
          fill="#E3E7E8"
          rx={r}
          ry={r}
          y="25"
        />

        <rect
          width={w + "%"}
          height={height}
          fill={colorSwitch()}
          rx={r}
          ry={r}
          y="25"
          style={style}
        />
        <ellipse
          cx={circlePosition()}
          cy="37%"
          rx="27"
          ry="27"
          fill={circleGreenColor}
          style={style}
        ></ellipse>
        <ellipse
          cx={circlePosition()}
          cy="37%"
          rx="25"
          ry="25"
          fill="#fff"
          style={style}
        ></ellipse>
      </svg>
    </Section>
  );
};

export default SpendMeter;
