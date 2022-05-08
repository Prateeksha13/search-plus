import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SearchResults from "./views/SearchResults/SearchResults";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
