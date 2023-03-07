import { useState, useEffect } from "react";
import TopicCard from "./TopicCard";
import { Button } from "@mantine/core";
import "./Topics.module.css";
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
    <table>
      <tbody>
        {topics.map((topic) => (
          <tr key={topic._id}>
            <td style={{ width: "100%" }}>
              <TopicCard key={topic._id} topic={topic}></TopicCard>
            </td>
            <td>
              <Button
                key={topic._id}
                radius="md"
                size="lg"
                compact
                variant="light"
              >
                Join
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Topics;
