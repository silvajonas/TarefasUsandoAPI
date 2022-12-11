import React from "react";

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch,
} from "react-router-dom";

import { Dashborad } from "../pages/dashborad/Dashboard";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" element={<Dashborad />} />

        <Route path="/*" element={<Navigate to="/dashboard" />} />
      </Switch>
    </BrowserRouter>
  );
};
