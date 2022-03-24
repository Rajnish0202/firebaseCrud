import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE5A01AHqjRRD3Su5IUp8liOd_iUYH0JU",
  authDomain: "crudapp-f0114.firebaseapp.com",
  projectId: "crudapp-f0114",
  storageBucket: "crudapp-f0114.appspot.com",
  messagingSenderId: "323307222989",
  appId: "1:323307222989:web:204b1b16aee91c3a3d7684",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
