import Topics from "../components/Topics/Topics";
import { Text, Button, Flex, Space, Modal, Group } from "@mantine/core";
import { useState } from "react";
const TopicsPage = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className={{}}>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>
      <Flex
        mih={50}
        gap="md"
        justify="space-between"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Text>Liste des débats :</Text>
        <Button
          onClick={() => setOpened(true)}
          radius="md"
          size="lg"
          compact
          variant="light"
        >
          <Text>Create +</Text>
        </Button>
      </Flex>
      <Space h="xl" />
      <Topics></Topics>
    </div>
  );
};

export default TopicsPage;
/*
      
      <Button size="medium">Create +</Button>
      
      */
