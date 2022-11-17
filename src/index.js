import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import 'bootstrap/dist/js/bootstrap.bundle';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routing/>
  <Footer/>
  </BrowserRouter>
);

 
