import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import { Provider } from 'react-redux';
import { store } from "../src/views/tickets/redux/store";


import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import ViewTickets from "views/tickets/ViewTickets";
import TicketDetails from "views/tickets/TicketDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<Navigate to="/admin/index" replace />} />
      {/* <Route path="/admin/tickets" element={<ViewTickets/>} /> */}
      <Route path="/admin/tickets/:ticketId" element={<TicketDetails/>}/>
    </Routes>
    </Provider>
  </BrowserRouter>
);
