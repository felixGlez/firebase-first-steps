import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const googleProvider = new GoogleAuthProvider();

const LoginWithPopUp = () => {
	const { currentUser, loading } = useContext(AuthContext);

	if (loading || currentUser) return;

	return (
		<>
			<h2>Social Login</h2>
			<button onClick={signInWithGoogle}>Login With Google</button>
		</>
	);
};

const signInWithGoogle = async () => {
	try {
		// Recibe dos parámetros: auth y el provider (que no es el nuestro, sino con el que queremos iniciar sesión)
		await signInWithPopup(auth, googleProvider);
	} catch (error) {
		console.log(error);
	}
};

export default LoginWithPopUp;
