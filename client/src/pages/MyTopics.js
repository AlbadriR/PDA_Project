import { Routes, Route } from "react-router-dom";
import Topic from "../components/Topics/Topic";
import Topics from "../components/Topics/Topics";
const MyTopic = () => {
  return (
    <Routes>
      <Route path="/" element={<Topics />} />
      <Route path=":id" element={<Topic />} />
    </Routes>
  );
};

export default MyTopic;
