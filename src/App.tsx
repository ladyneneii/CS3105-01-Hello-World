import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Feed" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
