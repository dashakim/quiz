import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, get, query, orderByChild, update, remove } from 'firebase/database';

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});
const database = getDatabase(app);

export const wordService = {
  async addWord(wordData) {
    try {
      const wordsRef = ref(database, 'words');
      const newWordRef = push(wordsRef);
      await set(newWordRef, {
        ...wordData,
        createdAt: Date.now(),
      });
      return { id: newWordRef.key, ...wordData };
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
  }
}; 