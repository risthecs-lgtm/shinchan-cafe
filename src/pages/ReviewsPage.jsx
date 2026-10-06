import { useCallback, useEffect, useState } from "react";
import { getReviews } from "../services/api.js";
import StarRating from "../components/StarRating.jsx";
import ReviewForm from "../components/customer/ReviewForm.jsx";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(null);
  const load = useCallback(() => getReviews().then(setReviews), []);
  useEffect(() => { load(); document.title = "Reviews"; }, [load]);
  return (
    <>
      <h1 className="page-title">Reviews</h1>
      {!reviews ? <p className="muted">Loading…</p> : reviews.length === 0 ? (
        <p className="muted">No reviews yet. Be the first to write one.</p>
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
      <ReviewForm onSubmitted={load} />
    </>
  );
}
