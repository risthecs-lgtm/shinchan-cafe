import { useState } from "react";
import { Link } from "react-router-dom";
import { useFoods } from "../../services/useFoods.js";
import { setFoodAvailability } from "../../services/api.js";
import OwnerFoodRow from "./OwnerFoodRow.jsx";
import OwnerReviews from "./OwnerReviews.jsx";

// Availability only. Same food objects ({ id, name, image, available }) as the
// customer /availability page, both read through services/api.js.
export default function OwnerPanel() {
  const { foods, refresh } = useFoods();
  const [busyId, setBusyId] = useState(null);
  const [error, setError] = useState("");

  async function change(id, available) {
    setBusyId(id); setError("");
    try {
      await setFoodAvailability(id, available); // swap for a real API call in services/api.js
      await refresh();
    } catch {
      setError("Could not save that change. Please try again.");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <main className="owner">
      <nav className="owner__nav" aria-label="Back to site">
        <Link to="/menu">← Menu</Link>
        <Link to="/availability">Availability</Link>
        <Link to="/reviews">Reviews</Link>
      </nav>
      <h1>Food availability</h1>
      <p className="lede">Tap a button to update what customers see.</p>
      <p className="notice">
        Test mode: changes are saved only in this browser. They are not stored in a database yet, and there is no owner login.
      </p>
      {error && <p className="msg msg--err" role="alert">{error}</p>}
      {!foods ? <p className="muted">Loading…</p> : (
        <ul className="owner__list">
          {foods.map((f) => <OwnerFoodRow key={f.id} food={f} busy={busyId === f.id} onChange={change} />)}
        </ul>
      )}
      <OwnerReviews />
    </main>
  );
}
