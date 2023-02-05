import {
  Container,
  Title,
  Text,
  Accordion,
  createStyles,
  Button,
  Flex,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
const TopicCard = ({ topic }) => {
  const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      minHeight: 650,
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,
    },

    item: {
      borderRadius: theme.radius.md,
      marginBottom: theme.spacing.lg,

      border: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },
  }));

  const placeholder =
    "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

  const { classes } = useStyles();
  const colorScheme = useColorScheme();
  return (
    <Accordion chevronPosition="left" variant="separated">
      <Accordion.Item className={classes.item} value="Topic">
        <Accordion.Control>
          <Flex
            mih={50}
            gap="xl"
            justify="space-between"
            align="center"
            direction="row"
            wrap="nowrap"
          >
            <Text>{topic.name}</Text>{" "}
            <Button radius="md" size="lg" compact variant="light">
              Join
            </Button>
          </Flex>
        </Accordion.Control>
        <Accordion.Panel>
          <Text>{placeholder}</Text>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default TopicCard;
/*<Card>
      <CardBody>
        <Text>{topic.name}</Text>
        <Button colorScheme="blue">Button</Button>
      </CardBody>
    </Card>*/
