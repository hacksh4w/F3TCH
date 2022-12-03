import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Upload from "./components/Upload/Upload";
import Retrieve from "./components/retrieve/Retrieve";
import SignupPage from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetAll from "./components/GetAll/GetAll";
import Mainpage from "./pages/Mainpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/retrieve" element={<GetAll/>} />
        <Route path="/home" element={<Mainpage />} />
      </Routes>
    </Router>
  );
}

export default App;
