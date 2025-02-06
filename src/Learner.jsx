import React from "react";
import Score from "./Score";

function Learner({ learner }) {
  return (
    <div className="learner">
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <div className="scores">
        <h3>Scores:</h3>
        {learner.scores.map((score, index) => (
          <Score key={index} score={score} />
        ))}
      </div>
    </div>
  );
}

export default Learner;