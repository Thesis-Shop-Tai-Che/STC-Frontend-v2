import React from "react";
import { App, ZMPRouter, SnackbarProvider } from "zmp-ui";
import Layout from "../route";
import "./app.css";

const MyApp = () => {
  return (
    <App>
      <SnackbarProvider>
        <ZMPRouter>
          <Layout />
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};
export default MyApp;
