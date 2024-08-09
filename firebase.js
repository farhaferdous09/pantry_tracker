import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGdT8yUHsCqhqQg30W6NNwRQ-QxIaskW4",
  authDomain: "pantry-tracker-dd65e.firebaseapp.com",
  projectId: "pantry-tracker-dd65e",
  storageBucket: "pantry-tracker-dd65e.appspot.com",
  messagingSenderId: "726256246614",
  appId: "1:726256246614:web:07debcd3069f7f61de00f7",
  measurementId: "G-DJ3J0T2H66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const firestore = getFirestore(app);

// Conditionally Initialize Analytics
let analytics;
if (typeof window !== 'undefined' && isSupported()) {
  analytics = getAnalytics(app);
}

export { analytics };

