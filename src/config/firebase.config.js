import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	// Esto no tiene por qué ser privado, ya que desde firebase tenemos establecido qué dominios pueden hacer peticiones
	apiKey: 'AIzaSyAyEFIESetZxIvKYL4jyAxWH6BFNSe5SaU',
	authDomain: 'fir-first-steps-65bc5.firebaseapp.com',
	projectId: 'fir-first-steps-65bc5',
	storageBucket: 'fir-first-steps-65bc5.appspot.com',
	messagingSenderId: '793638536687',
	appId: '1:793638536687:web:6317df655d44bebb8fe21a'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth Module
export const auth = getAuth(app);

// Firestore Module
const db = getFirestore(app);
export const usersCollectionReference = collection(db, 'users'); //collection nos lo da firebase. Esto es lo que vamos a utilizar para interactuar con nuestra base de datos.
