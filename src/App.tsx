import Layout from "./Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import FeedScreen from "./screens/Feed";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<FeedScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
