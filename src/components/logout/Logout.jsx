import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const Logout = () => {
	const { currentUser } = useContext(AuthContext);

	if (!currentUser) return;

	return <button onClick={logout}>Logout</button>;
};

const logout = async () => {
	await signOut(auth);
};

export default Logout;
