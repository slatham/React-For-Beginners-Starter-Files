import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCMvajWxHd3yCYvtoFfgnhgj0U2ACjP_MU",
  authDomain: "catch-of-the-day-slatham.firebaseapp.com",
  projectId: "catch-of-the-day-slatham",
});

const db = firebase.firestore(firebaseApp);

const base = Rebase.createClass(db);

export { firebaseApp };

export default base;
