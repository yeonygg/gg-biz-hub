import { Card, Section, Heading } from "pier-design-system";

const CustomCard = (props) => {
  return (
    <div>
      <Card>
        <Section padding="lg">
          <Heading>{props.custom.name}</Heading>
        </Section>
      </Card>
    </div>
  );
};

export default CustomCard;
