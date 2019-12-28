import React, {useState} from "react";

const QuestionBox = ({content, answerA, answerB, answerC, answerD, selected}) => {
    const options = [answerA, answerB, answerC, answerD];
    const [answer, setAnswer] = useState(options);

    return (
        <div className="questionBox">
            <div className="question">{content}</div>
            {answer.map((text, index) => (
                <button key={index} className="answerBtn" onClick={() => {
                    setAnswer([text]);
                    selected(text);
                }}>
                    {text}
                </button>
            ))}
        </div>
    );
};

export default QuestionBox;
