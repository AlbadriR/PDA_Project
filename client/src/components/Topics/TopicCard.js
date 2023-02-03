import classes from "./Topics.module.css";
import { Card, CardBody, Text, Button } from "@chakra-ui/react";
const TopicCard = ({ topic }) => {
  return (
    <Card>
      <CardBody>
        <Text>{topic.name}</Text>
        <Button colorScheme="blue">Button</Button>
      </CardBody>
    </Card>
  );
};

export default TopicCard;
