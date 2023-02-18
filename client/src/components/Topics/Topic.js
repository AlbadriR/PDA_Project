import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./Topics.module.css";

import TopicCard from "./TopicCard";
const Topic = () => {
  const [topic, setTopic] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`/api/topic/${id}`);
      if (!data.ok) {
        throw new Error(
          `Error fetching data: ${data.status} ${data.statusText}`
        );
      }
      const json = await data.json();
      setTopic(json);
      console.log(json);
    };
    fetchData();
  }, [id]);

  return topic ? (
    <div className={classes.Topic}>
      <TopicCard topic={topic}></TopicCard>
    </div>
  ) : null;
};

export default Topic;
