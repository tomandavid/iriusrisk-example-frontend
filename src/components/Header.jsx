import React from "react";
import { logout } from "../api/supabaseClient";

export default function Header() {
  return (
    <div className="header">
      <img src="/logo.png" loading="lazy" alt="" class="image-32"/>
      <button onClick={logout} className="logout-button">Logout</button>
    </div>
  );
}
