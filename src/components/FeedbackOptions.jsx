const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        style={{
          margin: "5px",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "1px solid #bbb",
          cursor: "pointer",
          backgroundColor: "#fff",
          color: "#333",
        }}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
