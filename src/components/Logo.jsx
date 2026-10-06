import { useState } from "react";
import { LOGO_SRC, RESTAURANT_NAME } from "../data/config.js";

export default function Logo() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    const initials = RESTAURANT_NAME.split(" ").map((w) => w[0]).slice(0, 2).join("");
    return <div className="logo logo--ph" aria-hidden="true">{initials}</div>;
  }
  return <img className="logo" src={LOGO_SRC} alt={`${RESTAURANT_NAME} logo`} onError={() => setFailed(true)} />;
}
