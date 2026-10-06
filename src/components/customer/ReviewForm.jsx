import { useState } from "react";
import StarRating from "../StarRating.jsx";
import { submitReview } from "../../services/api.js";

export default function ReviewForm({ onSubmitted }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handle(e) {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return setError("Please add your name and a comment.");
    if (rating < 1) return setError("Please choose a star rating.");
    setError(""); setBusy(true);
    try {
      await submitReview({ name, rating, comment });
      setName(""); setRating(0); setComment(""); setDone(true);
      onSubmitted?.();
    } catch {
      setError("Your review could not be sent. Please try again.");
    } finally { setBusy(false); }
  }

  return (
    <form className="form" onSubmit={handle} noValidate>
      <h3>Write a Review</h3>
      <label>Name
        <input value={name} maxLength={60} autoComplete="name" onChange={(e) => { setName(e.target.value); setDone(false); }} />
      </label>
      <div className="field">
        <span>Rating</span>
        <StarRating value={rating} onChange={(n) => { setRating(n); setDone(false); }} />
      </div>
      <label>Comment
        <textarea rows={4} maxLength={600} value={comment} onChange={(e) => { setComment(e.target.value); setDone(false); }} />
      </label>
      {error && <p className="msg msg--err" role="alert">{error}</p>}
      {done && <p className="msg msg--ok" role="status">Thank you. Your review has been posted.</p>}
      <button className="btn btn--gold" disabled={busy}>{busy ? "Sending…" : "Submit Review"}</button>
    </form>
  );
}
