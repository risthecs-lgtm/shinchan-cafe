import { useEffect } from "react";
import OwnerGate from "../components/owner/OwnerGate.jsx";
import OwnerPanel from "../components/owner/OwnerPanel.jsx";

export default function OwnerPage() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots"; meta.content = "noindex,nofollow";
    document.head.appendChild(meta);
    document.title = "Availability";
    return () => { document.head.removeChild(meta); };
  }, []);
  return (
    <OwnerGate>
      <OwnerPanel />
    </OwnerGate>
  );
}
