import Layout from "./Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import FeedScreen from "./screens/Feed";
import MessagesScreen from "./screens/Messages";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<FeedScreen />} />
        <Route path="/explore" element={<FeedScreen />} />
        <Route path="/notifications" element={<FeedScreen />} />
        <Route path="/messages" element={<MessagesScreen />} />
        <Route path="/bookmarks" element={<MessagesScreen />} />
        <Route path="/lists" element={<MessagesScreen />} />
        <Route path="/profile" element={<MessagesScreen />} />
        <Route path="/options" element={<MessagesScreen />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
