import React from "react";

function Score({ score }) {
  return (
    <div className="score">
      <p>
        <strong>Date:</strong> {score.date}
      </p>
      <p>
        <strong>Score:</strong> {score.score}
      </p>
    </div>
  );
}

export default Score;