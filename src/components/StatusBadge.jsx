export default function StatusBadge({ available }) {
  return (
    <span className={`badge ${available ? "badge--on" : "badge--off"}`}>
      {available ? "AVAILABLE" : "SOLD OUT"}
    </span>
  );
}
