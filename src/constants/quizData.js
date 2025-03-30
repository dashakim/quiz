export const QUIZ_LEVELS = {
  A1: 'A1 (Basic)',
  A2: 'A2 (Elementary)',
};

export const EXERCISE_TYPES = {
  MULTIPLE_CHOICE: 'multipleChoice',
  WORD_COMPLETION: 'wordCompletion',
  ARTICLES: 'articles',
};

export const EXERCISE_TYPE_LABELS = {
  [EXERCISE_TYPES.MULTIPLE_CHOICE]: 'Multiple Choice',
  [EXERCISE_TYPES.WORD_COMPLETION]: 'Complete the Word',
  [EXERCISE_TYPES.ARTICLES]: 'Articles',
};

export const SAMPLE_QUESTIONS = [
  {
    word: 'Obrigado',
    options: ['Please', 'Thank you', 'Hello', 'Goodbye'],
    correct: 1,
    context: 'Essential Portuguese',
    level: 'Beginner',
    examples: [
      {
        portuguese: 'Obrigado pela sua ajuda',
        english: 'Thank you for your help',
        context: 'Formal',
      },
      {
        portuguese: 'Muito obrigado!',
        english: 'Thank you very much!',
        context: 'Enthusiastic',
      },
      {
        portuguese: 'Obrigado por tudo',
        english: 'Thank you for everything',
        context: 'Heartfelt',
      },
    ],
  },
  {
    word: 'Bom dia',
    options: ['Good night', 'Good afternoon', 'Good morning', 'Good evening'],
    correct: 2,
    context: 'Daily Greetings',
    level: 'Beginner',
    examples: [
      {
        portuguese: 'Bom dia! Como está?',
        english: 'Good morning! How are you?',
        context: 'Casual greeting',
      },
      {
        portuguese: 'Melhor bom dia!',
        english: 'Very good morning!',
        context: 'Enthusiastic',
      },
      {
        portuguese: 'Bom dia a todos',
        english: 'Good morning everyone',
        context: 'Group greeting',
      },
    ],
  },
]; 