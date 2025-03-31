import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { firebaseConfig } from '../firebaseConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const wordService = {
  async getWords() {
    const querySnapshot = await getDocs(collection(db, 'words'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },

  async addWord(wordData) {
    const docRef = await addDoc(collection(db, 'words'), wordData);
    return docRef.id;
  },

  async updateWord(id, wordData) {
    const wordRef = doc(db, 'words', id);
    await updateDoc(wordRef, wordData);
  },

  async deleteWord(id) {
    const wordRef = doc(db, 'words', id);
    await deleteDoc(wordRef);
  }
}; 