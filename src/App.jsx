import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from "./Components/Navbar";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import Index from "./Pages/Index";
import Home from "./Pages/Home";
import Banksdata from "./Components/Banksdata";

function App() {
 

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/banksdata" element={<Banksdata />} />
            {/* <Route path="/new" element={<New />} /> */}
            {/* <Route exact path="/:id" element={<Show />} /> */}
            {/* <Route path="/:id/edit" element={<Edit />} /> */}
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
  
  
}

export default App
