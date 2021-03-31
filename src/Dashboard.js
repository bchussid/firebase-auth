import React from "react";
import { useAuth } from "./Context";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const { loggedUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await logout();
    history.push("/login");
  }

  return (
    <div>
      <h1 style={{ marginLeft: "40%" }}> Dashboard</h1>
      <h3>Email: {loggedUser.email}</h3>
      <hr />
      <button style={{ height: "50vh", width: "50vw" }} onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
}
