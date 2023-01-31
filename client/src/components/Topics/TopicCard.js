import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./Topics.module.css";
const TopicCard = ({ topic }) => {
  return (
    <Card className={classes.Card} sx={{ maxWidth: "xl", m: 2 }}>
      <CardContent className={classes.CardContent}>
        <div className={classes.TypographyWrapper}>
          <Typography className={classes.text}>{topic.name}</Typography>
        </div>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <Button className={classes.button} size="medium">
          Détails
        </Button>
        <Button className={classes.button} size="medium">
          Join
        </Button>
      </CardActions>
    </Card>
  );
};

export default TopicCard;
