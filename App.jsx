import { Routes, Route, Navigate } from "react-router-dom";
import CustomerLayout from "./components/customer/CustomerLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import AvailabilityPage from "./pages/AvailabilityPage.jsx";
import ReviewsPage from "./pages/ReviewsPage.jsx";
import OwnerPage from "./pages/OwnerPage.jsx";

// Four pages only. /owner has its own layout and is never linked from customer navigation.
export default function App() {
  return (
    <Routes>
      <Route element={<CustomerLayout />}>
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/availability" element={<AvailabilityPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/owner" element={<OwnerPage />} />
      <Route path="*" element={<Navigate to="/menu" replace />} />
    </Routes>
  );
}
