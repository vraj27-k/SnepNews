import './App.css';
import Navbar from './componates/navbar';
import News from './componates/news';  // ✅ FIXED: Correct import
import LoadingBar from "react-top-loading-bar";

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0);  // ✅ useState hook for progress bar

  return (
    <>
      <Router>
        <Navbar />

        <LoadingBar
          color="#f11946"
          progress={progress}  // ✅ use the hook value
        />

        <Routes>
          <Route path="/" element={<News setProgress={setProgress} key="general" pagesize={6} category="general" country="us" Api="46074fd9db914e869e418c3ccf5ff19a" />} />
          <Route path="/general" element={<News setProgress={setProgress} key="general" pagesize={6} category="general" country="us" Api="46074fd9db914e869e418c3ccf5ff19a" />} />
          <Route path="/business" element={<News setProgress={setProgress} key="business" pagesize={6} category="business" country="us" Api="46074fd9db914e869e418c3ccf5ff19a" />} />
          <Route path="/health" element={<News setProgress={setProgress} key="health" pagesize={6} category="health" country="us" Api="46074fd9db914e869e418c3ccf5ff19a" />} />
          <Route path="/science" element={<News setProgress={setProgress} key="science" pagesize={6} category="science" country="us" Api="46074fd9db914e869e418c3ccf5ff19a" />} />
          <Route path="/technology" element={<News setProgress={setProgress} key="technology" pagesize={6} category="technology" country="us" Api="46074fd9db914e869e418c3ccf5ff19a" />} />
          <Route path="/sports" element={<News setProgress={setProgress} key="sports" pagesize={6} category="sports" country="us" Api="46074fd9db914e869e418c3ccf5ff19a" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pagesize={6} category="entertainment" country="us" Api="46074fd9db914e869e418c3ccf5ff19a" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
