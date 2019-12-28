import React from "react";

const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score">{score} / 5</div>
        <button className="playBtn" onClick={playAgain}>
            Ponownie
        </button>
    </div>
);

export default Result;