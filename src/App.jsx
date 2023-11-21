import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from "./Components/Navbar";
import Banksdata from "./Components/Banksdata";
import BankdataNewForm from "./Components/BankdataNewForm";

function App() {
 

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/bankdata" element={<Banksdata />} />
            <Route path="/bankdata/new" element={<BankdataNewForm />} />
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
