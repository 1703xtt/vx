//>>>VX

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// INICIALIZAR FIREBASE
const app = initializeApp(firebaseConfig);

// EXPORTAR LA BASE DE DATOS
const db = getFirestore(app);
export { db };

