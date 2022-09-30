import { Heading, Section, BodyText } from "pier-design-system";

const SubHeading = (props) => {
  return (
    <Section padding="xs">
      <Heading size="xs" className="sub-heading">
        {props.text}
      </Heading>
      <BodyText size="xs" color="light">
        {props.body}
      </BodyText>
    </Section>
  );
};

export default SubHeading;
