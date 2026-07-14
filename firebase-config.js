const firebaseConfig = {
  apiKey: "AIzaSyCfzLWoN-OjY091uhtgsJDdykSTxGUjqAs",
  authDomain: "dbr-inside-system.firebaseapp.com",
  projectId: "dbr-inside-system",
  storageBucket: "dbr-inside-system.firebasestorage.app",
  messagingSenderId: "968780488853",
  appId: "1:968780488853:web:c1252c5b14dd5603fefb9c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Enable Firestore offline persistence for superfast real-time database queries
try {
  db.enablePersistence()
    .then(() => {
      console.log("Firestore offline cache persistence activated.");
    })
    .catch((err) => {
      if (err.code == 'failed-precondition') {
        console.warn("Firestore persistence failed: Multiple tabs open.");
      } else if (err.code == 'unimplemented') {
        console.warn("Firestore persistence failed: Browser unimplemented.");
      } else {
        console.warn("Firestore persistence error:", err);
      }
    });
} catch (e) {
  console.warn("Firestore enablePersistence threw error:", e);
}
