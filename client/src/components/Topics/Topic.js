import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TopicCard from "./TopicCard";
import TopicForm from "./TopicForm";
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
    <div>
      <TopicCard topic={topic}></TopicCard>
      <h1>Edit</h1>
      {topic && <TopicForm id={id} topic={topic} />}
    </div>
  ) : null;
};

export default Topic;
