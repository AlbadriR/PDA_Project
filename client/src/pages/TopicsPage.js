import Topics from "../components/Topics/Topics";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "../components/Topics/Topics.module.css";
import Container from "@mui/material/Container";
const TopicsPage = () => {
  return (
    <div className={{}}>
      <Container className={classes.useFlexHorizontal}>
        <Typography className={classes.text}>Liste des débats :</Typography>
        <Button className={classes.button} size="medium">
          Create +
        </Button>
      </Container>
      <Topics></Topics>
    </div>
  );
};

export default TopicsPage;
