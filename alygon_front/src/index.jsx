import "../global.css";
import "../styleguide.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { ElementDashboard } from "./screens/ElementDashboard";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ElementDashboard />);



