import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./style.css";
import Menu from "./Menu";
import Table from "./Table";
import Conteudo from "./Conteudo";

export const ElementDashboard = () => {
  
  return (
    
    <div className="element-dashboard">
        <div className="overlap-wrapper">
            <div className="overlap">
            <Router>
            <Menu />
              <Routes>
                <Route path="/dashboard" element={<Conteudo />} />
                <Route path="/clientes" element={<Table />} />
              </Routes>
            </Router>
            </div>
        </div>
      </div>
  );
};
