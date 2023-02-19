import { Routes, Route } from "react-router-dom";
import Topic from "../components/Topics/Topic";
import MyTopics from "../components/Topics/MyTopics";
const MyTopicsPage = () => {
  return (
    <Routes>
      <Route path="/" element={<MyTopics />} />
      <Route path=":id" element={<Topic />} />
    </Routes>
  );
};

export default MyTopicsPage;
