import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-title">Smart City Issue Reporting</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/report">Report Issue</Link>
        <Link to="/status">Issue Status</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </nav>
  );
}
