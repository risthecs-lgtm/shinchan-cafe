import { useEffect } from "react";
import { HEYZINE_URL, RESTAURANT_NAME, TAGLINE } from "../data/config.js";
import Logo from "../components/Logo.jsx";

// The Heyzine page blocks being shown inside other websites, so the menu opens
// in this same tab (browser Back returns here). No iframe on this page.
export default function MenuPage() {
  useEffect(() => { document.title = `Menu · ${RESTAURANT_NAME}`; }, []);
  return (
    <>
      <div className="menu-top">
        <a className="btn btn--gold btn--sm" href={HEYZINE_URL}>View Full Menu</a>
      </div>
      <div className="hero hero--center">
        <Logo />
        <h1>{RESTAURANT_NAME}</h1>
        <p>{TAGLINE}</p>
      </div>
    </>
  );
}
