import Topics from "../components/Topics/Topics";
import { Text, Button } from "@chakra-ui/react";
import classes from "../components/Topics/Topics.module.css";
const TopicsPage = () => {
  return (
    <div className={{}}>
      <Text>Liste des débats :</Text>
      <Button size="medium">Create +</Button>
      <Topics></Topics>
    </div>
  );
};

export default TopicsPage;
