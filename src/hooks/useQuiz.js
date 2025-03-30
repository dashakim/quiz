import { useState } from 'react';

export const useQuiz = (questions) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showExamples, setShowExamples] = useState(false);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
      setTimeout(() => setShowExamples(true), 800);
    } else {
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
        }
      }, 1200);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExamples(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowExamples(false);
  };

  return {
    currentQuestion,
    selectedAnswer,
    score,
    showExamples,
    handleAnswerClick,
    handleNextQuestion,
    resetQuiz,
    progress: ((currentQuestion + 1) / questions.length) * 100,
    isLastQuestion: currentQuestion === questions.length - 1,
  };
}; 