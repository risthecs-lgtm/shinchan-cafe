import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * PASSWORD POPUP (stopgap, NOT real security).
 * This password is stored in the website code, so anyone who knows how to view
 * the page's source can find it. It only keeps casual visitors out.
 * It asks every time /owner is opened (nothing is remembered).
 * Later: replace with a real login checked by your backend, and let the backend
 * verify the owner on every availability update.
 */
const OWNER_PASSWORD = "maggiechawal";

export default function OwnerGate({ children }) {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (unlocked) return children;

  function submit(e) {
    e.preventDefault();
    if (value === OWNER_PASSWORD) return setUnlocked(true);
    setError("Wrong password. Please try again.");
    setValue("");
  }

  return (
    <div className="gate" role="dialog" aria-modal="true" aria-labelledby="gate-title">
      <form className="gate__card" onSubmit={submit}>
        <h2 id="gate-title">Owner access</h2>
        <p className="lede">Enter the owner password to continue.</p>
        <input type="password" autoFocus autoComplete="current-password" placeholder="Password"
          value={value} onChange={(e) => { setValue(e.target.value); setError(""); }} />
        {error && <p className="msg msg--err" role="alert">{error}</p>}
        <div className="gate__btns">
          <button className="btn btn--gold">Open</button>
          <button type="button" className="gate__cancel" onClick={() => navigate("/menu")}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
