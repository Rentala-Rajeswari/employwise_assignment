import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthScreen from "./components/AuthScreen";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";
import "./style.css";

export default function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </Router>
    </div>
  );
}