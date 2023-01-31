import { Route, Routes } from "react-router-dom";
import Layout from "./components/Navigation/Layout";
import MyTopics from "./pages/MyTopics";
import TopicsPage from "./pages/TopicsPage";
import About from "./pages/About";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TopicsPage />} />
        <Route path="about" element={<About />} />
        <Route path="mytopics/*" element={<MyTopics />} />
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
