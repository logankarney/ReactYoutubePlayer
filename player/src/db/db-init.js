import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

// Create this file using information from your FireBase Realtime DB app
var firebaseConfig = require("./db-config");

// Initialize Firebase from config
firebase.initializeApp(firebaseConfig);

const AppDB = firebase.database();
const AppAUTH = firebase.auth();

export { AppDB, AppAUTH };
