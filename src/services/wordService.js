import { getDatabase, ref, push, set, get, update, remove } from 'firebase/database';
import { firebaseConfig } from '../firebaseConfig';

const db = getDatabase();
const wordsRef = ref(db, 'words');

export const wordService = {
  async getWords() {
    try {
      const snapshot = await get(wordsRef);
      if (!snapshot.exists()) {
        return [];
      }
      const words = [];
      snapshot.forEach((child) => {
        words.push({
          id: child.key,
          ...child.val()
        });
      });
      return words;
    } catch (error) {
      console.error('Error fetching words:', error);
      throw new Error('Failed to fetch words');
    }
  },

  async addWord(wordData) {
    try {
      const newWordRef = push(wordsRef);
      await set(newWordRef, {
        ...wordData,
        createdAt: Date.now()
      });
      return newWordRef.key;
    } catch (error) {
      console.error('Error adding word:', error);
      throw new Error('Failed to add word');
    }
  },

  async updateWord(id, wordData) {
    try {
      const wordRef = ref(db, `words/${id}`);
      await update(wordRef, {
        ...wordData,
        updatedAt: Date.now()
      });
    } catch (error) {
      console.error('Error updating word:', error);
      throw new Error('Failed to update word');
    }
  },

  async deleteWord(id) {
    try {
      const wordRef = ref(db, `words/${id}`);
      await remove(wordRef);
    } catch (error) {
      console.error('Error deleting word:', error);
      throw new Error('Failed to delete word');
    }
  }
}; 