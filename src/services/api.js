/**
 * DATA ACCESS LAYER — the ONLY file that must change when you add a backend.
 *
 * Right now there is NO backend. Foods/reviews come from /src/data, and
 * changes are kept in this browser's localStorage so you can test the UI.
 * That means: changes are NOT shared between devices and NOT visible to
 * customers. Replace each function body with a fetch() to your API
 * (examples in the comments) and nothing else needs to change.
 */
import { FOODS } from "../data/foods.js";
import { REVIEWS } from "../data/reviews.js";

const AVAIL_KEY = "demo.availability";
const REVIEW_KEY = "demo.reviews";

const read = (k, fallback) => {
  try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch { return fallback; }
};
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

// Later: return (await fetch("/api/foods")).json();
export async function getFoods() {
  const overrides = read(AVAIL_KEY, {});
  return FOODS.map((f) => ({ ...f, available: overrides[f.id] ?? f.available }));
}

// Later: await fetch(`/api/foods/${id}/availability`, { method: "PATCH", body: JSON.stringify({ available }) })
// (server must verify the owner's session — never trust the browser)
export async function setFoodAvailability(id, available) {
  write(AVAIL_KEY, { ...read(AVAIL_KEY, {}), [id]: available });
}

// Later: return (await fetch("/api/reviews")).json();
export async function getReviews() {
  return [...read(REVIEW_KEY, []), ...REVIEWS];
}

// Later: await fetch("/api/reviews", { method: "POST", body: JSON.stringify(review) })
// (validate + rate-limit on the server)
export async function submitReview({ name, rating, comment }) {
  const review = { id: `local-${Date.now()}`, name: name.trim(), rating, comment: comment.trim(), createdAt: new Date().toISOString() };
  write(REVIEW_KEY, [review, ...read(REVIEW_KEY, [])]);
  return review;
}
