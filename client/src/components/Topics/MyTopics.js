import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import TopicCard from "./TopicCard";
import { Button } from "@mantine/core";
import "./Topics.module.css";
const Topics = () => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);

  const handleClick = (id) => {
    navigate(`/mytopics/${id}`);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/topic/${id}`, {
      method: "DELETE",
    });
  };

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
  }, [handleDelete]);

  return (
    <table>
      <tbody>
        {topics.map((topic) => (
          <tr key={topic._id}>
            <td style={{ width: "100%" }}>
              <TopicCard key={topic._id} topic={topic}></TopicCard>
            </td>
            <td>
              <Button
                key={`edit ${topic._id}`}
                radius="md"
                size="lg"
                compact
                variant="light"
                onClick={() => handleClick(topic._id)}
              >
                Edit
              </Button>
              <Button
                key={`delete ${topic._id}`}
                radius="md"
                size="lg"
                compact
                variant="light"
                onClick={() => handleDelete(topic._id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Topics;
