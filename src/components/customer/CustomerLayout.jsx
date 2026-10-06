import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";

export default function CustomerLayout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <>
      <Header />
      {/* key remounts the page on every route change, replaying the fade-in */}
      <main key={pathname} className="page"><Outlet /></main>
      <footer className="footer">© {new Date().getFullYear()}</footer>
    </>
  );
}
