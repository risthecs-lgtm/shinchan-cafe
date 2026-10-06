// Read-only stars when `onChange` is omitted; accessible radio-style input when provided.
export default function StarRating({ value, onChange }) {
  return (
    <div className="stars" role={onChange ? "radiogroup" : "img"} aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => {
        const on = n <= value;
        return onChange ? (
          <button type="button" key={n} className={on ? "star on" : "star"} role="radio"
            aria-checked={n === value} aria-label={`${n} star${n > 1 ? "s" : ""}`} onClick={() => onChange(n)}>★</button>
        ) : (
          <span key={n} className={on ? "star on" : "star"} aria-hidden="true">★</span>
        );
      })}
    </div>
  );
}
