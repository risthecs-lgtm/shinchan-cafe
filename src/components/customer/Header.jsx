import { NavLink } from "react-router-dom";
import { RESTAURANT_NAME } from "../../data/config.js";

const LINKS = [["Menu", "/menu"], ["Availability", "/availability"], ["Reviews", "/reviews"]];

export default function Header() {
  return (
    <header className="header">
      <NavLink className="brand" to="/menu">{RESTAURANT_NAME}</NavLink>
      <nav aria-label="Main">
        {LINKS.map(([label, to]) => <NavLink key={to} to={to}>{label}</NavLink>)}
      </nav>
    </header>
  );
}
