import FoodImage from "../FoodImage.jsx";
import StatusBadge from "../StatusBadge.jsx";

export default function FoodCard({ food }) {
  return (
    <article className={`food ${food.available ? "" : "food--off"}`}>
      <div className="food__media">
        <FoodImage src={food.image} alt={food.name} />
        <StatusBadge available={food.available} />
      </div>
      <h3>{food.name}</h3>
    </article>
  );
}
