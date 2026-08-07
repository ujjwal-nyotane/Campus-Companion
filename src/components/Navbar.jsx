import { GraduationCap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <GraduationCap size={34}/>
        Campus Companion
      </div>

      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Dashboard</li>
        <li>About</li>
      </ul>

      <button>Login</button>
    </nav>
  );
}