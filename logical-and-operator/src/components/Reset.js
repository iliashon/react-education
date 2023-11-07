const buttonStyle = { backgroundColor: "red" };

export default function Reset({ onClick, countNum }) {
  return (
    !!countNum && (
      <div>
        <button style={buttonStyle} onClick={onClick}>
          Reset
        </button>
      </div>
    )
  );
}
