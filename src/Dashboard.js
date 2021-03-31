import React from "react";
import { useAuth } from "./Context";
import { useHistory } from "react-router-dom";
import "../src/all.css";

export default function Dashboard() {
  const { loggedUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await logout();
    history.push("/login");
  }

  return (
    <div>
      <div id="dash_container">
        <h1> Dashboard</h1>
        <hr />
        <h3>Email: {loggedUser.email}</h3>
        <br />
        <button className="button" onClick={handleLogout}>
          LOG OUT BUTTON
        </button>
      </div>
    </div>
  );
}
