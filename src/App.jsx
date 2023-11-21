import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from "./Components/Navbar";
import Banksdata from "./Components/Banksdata";
import BankdataNewForm from "./Components/BankdataNewForm";
import Edit from "./Pages/Edit";
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
            {/* <Route exact path="/bankdata/:id" element={<Show />} /> */}
            <Route path="/bankdata/:id/edit" element={<Edit />} />
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
  
  
}

export default App
