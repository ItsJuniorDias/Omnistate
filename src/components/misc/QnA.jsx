import React, { useState } from "react";

const QnA = ({ n, q }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  function toggleAnswer() {
    setShowAnswer(!showAnswer);
  }

  return (
    <div
      className={`bg-white rounded-xl shadow-sm p-5 mb-4 transition-all duration-300 ${
        showAnswer ? "shadow-md border border-blue-600" : "shadow-sm"
      }`}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAnswer}
      >
        <h4 className="text-lg font-semibold text-gray-900">
          {n}. {q.question}
        </h4>
        <div
          className={`text-gray-600 text-xl transform transition-transform duration-300 ${
            showAnswer ? "rotate-90" : "rotate-0"
          }`}
        >
          <i className="fas fa-angle-right" />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          showAnswer ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm md:text-base">{q.answer}</p>
      </div>
    </div>
  );
};

export default QnA;
