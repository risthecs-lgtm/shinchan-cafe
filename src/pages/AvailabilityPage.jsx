import { useEffect } from "react";
import { useFoods } from "../services/useFoods.js";
import FoodCard from "../components/customer/FoodCard.jsx";

export default function AvailabilityPage() {
  const { foods } = useFoods(); // data comes from services/api.js -> database later
  useEffect(() => { document.title = "Availability"; }, []);
  return (
    <>
      <h1 className="page-title">What's Available Today</h1>
      {!foods ? <p className="muted">Loading…</p> : (
        <div className="grid">{foods.map((f) => <FoodCard key={f.id} food={f} />)}</div>
      )}
    </>
  );
}
