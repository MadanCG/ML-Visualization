import asset from "../constants/assets";


export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 30px",
        backgroundColor: asset.colors.deepBlue,
        color: "white",
        border: "none",
        borderRadius: "8px",
      }}
    >
      {label}
    </button>
  );
}
