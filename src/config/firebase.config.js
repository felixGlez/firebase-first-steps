import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAyEFIESetZxIvKYL4jyAxWH6BFNSe5SaU',
	authDomain: 'fir-first-steps-65bc5.firebaseapp.com',
	projectId: 'fir-first-steps-65bc5',
	storageBucket: 'fir-first-steps-65bc5.appspot.com',
	messagingSenderId: '793638536687',
	appId: '1:793638536687:web:6317df655d44bebb8fe21a'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
