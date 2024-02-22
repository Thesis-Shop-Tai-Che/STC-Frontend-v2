import React from "react";
import App from "./route";
import appConfig from "../app-config.json";
import { createRoot } from "react-dom/client";
import "./css/tailwind.css";
import "zmp-ui/zaui.css";
import "./css/app.css"; 
 
import 'zmp-framework/zmp-bundle.min.css';
if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

const root = createRoot(document.getElementById("app")!);
root.render(React.createElement(App));
