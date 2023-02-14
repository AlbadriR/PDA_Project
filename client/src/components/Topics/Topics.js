import { useState, useEffect } from "react";
import classes from "./Topics.module.css";
import TopicCard from "./TopicCard";
const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/topics");
      if (!data.ok) {
        throw new Error(
          `Error fetching data: ${data.status} ${data.statusText}`
        );
      }
      const json = await data.json();
      setTopics(json);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.Topic}>
      {topics.map((topic) => (
        <TopicCard key={topic._id} topic={topic}></TopicCard>
      ))}
    </div>
  );
};

export default Topics;
