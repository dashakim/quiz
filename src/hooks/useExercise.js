import { useState, useCallback } from 'react';
import { exerciseTypes, grammarRules } from '../utils/exercisePatterns';

export const useExercise = () => {
  const [currentExercise, setCurrentExercise] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('A1');
  const [exerciseType, setExerciseType] = useState('multipleChoice');

  const generateExercise = useCallback((type, level) => {
    const exercises = exerciseTypes[type][level];
    const exercise = exercises[Math.floor(Math.random() * exercises.length)];

    switch (type) {
      case 'multipleChoice':
        return {
          ...exercise,
          type: 'multipleChoice',
          question: exercise.sentence.replace('[verb]', '____'),
          options: exercise.options,
        };
      case 'wordCompletion':
        return {
          ...exercise,
          type: 'wordCompletion',
          question: exercise.sentence,
          correctAnswer: exercise.correctAnswer,
        };
      case 'articles':
        return {
          ...exercise,
          type: 'articles',
          question: exercise.sentence,
          correctAnswer: exercise.correctAnswer,
        };
      default:
        return exercise;
    }
  }, []);

  const checkAnswer = useCallback(() => {
    if (!currentExercise) return;
    const isAnswerCorrect = userAnswer.toLowerCase().trim() === currentExercise.correctAnswer.toLowerCase();
    setIsCorrect(isAnswerCorrect);
  }, [currentExercise, userAnswer]);

  const generateNewExercise = useCallback(() => {
    const newExercise = generateExercise(exerciseType, selectedLevel);
    setCurrentExercise(newExercise);
    setUserAnswer('');
    setIsCorrect(null);
  }, [exerciseType, selectedLevel, generateExercise]);

  const handleLevelChange = useCallback(
    (newLevel) => {
      setSelectedLevel(newLevel);
      const newExercise = generateExercise(exerciseType, newLevel);
      setCurrentExercise(newExercise);
      setUserAnswer('');
      setIsCorrect(null);
    },
    [exerciseType, generateExercise],
  );

  const handleExerciseTypeChange = useCallback(
    (newType) => {
      setExerciseType(newType);
      const newExercise = generateExercise(newType, selectedLevel);
      setCurrentExercise(newExercise);
      setUserAnswer('');
      setIsCorrect(null);
    },
    [selectedLevel, generateExercise],
  );

  return {
    currentExercise,
    userAnswer,
    isCorrect,
    selectedLevel,
    exerciseType,
    setUserAnswer,
    checkAnswer,
    generateNewExercise,
    handleLevelChange,
    handleExerciseTypeChange,
    grammarRules,
  };
};
