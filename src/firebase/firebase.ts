// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtcthbbZ6v0p6MegLnyA5-pZ-tFyt-rHc",
  authDomain: "swap-game-app.firebaseapp.com",
  projectId: "swap-game-app",
  storageBucket: "swap-game-app.firebasestorage.app",
  messagingSenderId: "929736513083",
  appId: "1:929736513083:web:bfa85eaf6b608cb72fee1e",
  measurementId: "G-1NMKZGG2CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

// Take all the msg from Firestore
export const fetchMessages = async () => {
  const querySnapshot = await getDocs(collection(db, 'messages'));
  const messages: { id: string; text: string }[] = [];
  querySnapshot.forEach((doc) => {
    messages.push({ id: doc.id, text: doc.data().text });
  });
  return messages;
};

// Add MSG to Firestore
export const addMessage = async (message: string) => {
  try {
    await addDoc(collection(db, 'messages'), { text: message });
  } catch (error) {
    console.error('Error adding message:', error);
  }
};

export { app };