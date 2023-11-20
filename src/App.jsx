import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from "./Components/Navbar";

function App() {
 

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/bookmarks" element={<Index />} /> */}
            {/* <Route path="/bookmarks/new" element={<New />} /> */}
            {/* <Route exact path="/bookmarks/:id" element={<Show />} /> */}
            {/* <Route path="/bookmarks/:id/edit" element={<Edit />} /> */}
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
  
  
}

export default App
