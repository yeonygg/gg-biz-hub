import { Heading, Section, BodyText } from "pier-design-system";
import { Fragment } from "react";

const SubHeading = (props) => {
  return (
    <Fragment>
      <Heading size="xs" className="sub-heading -m-b-8">
        {props.text}
      </Heading>
      <BodyText size="xs" color="light">
        {props.body}
      </BodyText>
    </Fragment>
  );
};

export default SubHeading;
