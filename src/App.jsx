import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from "./Components/Navbar";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import Index from "./Pages/Index";
import Home from "./Pages/Home";
import Show from "./Pages/show";
// import BankdataDetails from "./Components/BankdataDetails";


function App() {
 

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/banksdata" element={<Index />} />
            <Route path="/new" element={<New />} />
            <Route exact path="/banksdata/:id" element={<Show />} />
            <Route path="banksdata/:id/edit" element={<Edit />} />
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
  
  
}

export default App
