import { useEffect, useState } from "react";
import { getReviews } from "../../services/api.js";
import StarRating from "../StarRating.jsx";

// Read-only: the owner can see star ratings and comments, nothing else.
export default function OwnerReviews() {
  const [reviews, setReviews] = useState(null);
  useEffect(() => { getReviews().then(setReviews); }, []);
  return (
    <section className="owner__reviews">
      <h2>Customer reviews</h2>
      {!reviews ? <p className="muted">Loading…</p> : reviews.length === 0 ? (
        <p className="muted">No reviews yet.</p>
      ) : (
        <ul className="reviews">
          {reviews.map((r) => (
            <li key={r.id} className="review">
              <div className="review__top"><strong>{r.name}</strong><StarRating value={r.rating} /></div>
              <p>{r.comment}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
