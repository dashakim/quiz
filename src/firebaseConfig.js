import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, get, query, orderByChild, update, remove } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const wordService = {
  async addWord(word) {
    try {
      console.log('Adding word to Firebase:', word);
      const wordsRef = ref(database, 'words');
      const newWordRef = push(wordsRef);
      await set(newWordRef, {
        ...word,
        createdAt: Date.now(),
      });
      console.log('Successfully added word with ID:', newWordRef.key);
      return { id: newWordRef.key, ...word };
    } catch (error) {
      console.error('Error adding word:', error);
      throw error;
    }
  },

  async getWords() {
    try {
      const wordsRef = ref(database, 'words');
      const snapshot = await get(wordsRef);
      const words = [];
      snapshot.forEach((child) => {
        words.push({ id: child.key, ...child.val() });
      });
      return words;
    } catch (error) {
      console.error('Error getting words:', error);
      throw error;
    }
  },

  async getWordsByCategory(category) {
    try {
      const wordsRef = ref(database, 'words');
      const categoryQuery = query(wordsRef, orderByChild('category'));
      const snapshot = await get(categoryQuery);
      const words = [];
      snapshot.forEach((child) => {
        const word = child.val();
        if (word.category === category) {
          words.push({ id: child.key, ...word });
        }
      });
      return words;
    } catch (error) {
      console.error('Error getting words by category:', error);
      throw error;
    }
  },

  async updateWord(id, updates) {
    try {
      const wordRef = ref(database, `words/${id}`);
      await update(wordRef, {
        ...updates,
        updatedAt: Date.now(),
      });
      return { id, ...updates };
    } catch (error) {
      console.error('Error updating word:', error);
      throw error;
    }
  },

  async deleteWord(id) {
    try {
      const wordRef = ref(database, `words/${id}`);
      await remove(wordRef);
      return id;
    } catch (error) {
      console.error('Error deleting word:', error);
      throw error;
    }
  },
};
