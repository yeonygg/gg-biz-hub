import { Heading, Section, BodyText } from "pier-design-system";
import { Fragment } from "react";

const SubHeading = (props) => {
  return (
    <div className="-m-b-7">
      <Heading size="xs" className="sub-heading">
        {props.text}
      </Heading>
      <BodyText size="xs" color="light">
        {props.body}
      </BodyText>
    </div>
  );
};

export default SubHeading;
