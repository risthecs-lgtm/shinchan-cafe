import FoodImage from "../FoodImage.jsx";
import StatusBadge from "../StatusBadge.jsx";

export default function OwnerFoodRow({ food, busy, onChange }) {
  return (
    <li className="orow">
      <div className="orow__img"><FoodImage src={food.image} alt={food.name} /></div>
      <div className="orow__body">
        <h3>{food.name}</h3>
        <div className="orow__status"><span>Current status</span><StatusBadge available={food.available} /></div>
        <div className="orow__btns">
          <button className="tog tog--on" disabled={busy} aria-pressed={food.available} onClick={() => onChange(food.id, true)}>AVAILABLE</button>
          <button className="tog tog--off" disabled={busy} aria-pressed={!food.available} onClick={() => onChange(food.id, false)}>SOLD OUT</button>
        </div>
      </div>
    </li>
  );
}
