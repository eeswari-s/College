import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register"; // ✅ Import the Register page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

