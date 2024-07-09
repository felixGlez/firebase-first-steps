import { useEffect, useState } from 'react';
import { auth } from '../config/firebase.config';
import { AuthContext } from '../contexts/Auth.context';

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		//onAuthStateChanged es un evento que te da firebase para saber cuándo el estado de autenticación ha cambiado; es decir, cuando se produce un login o un logout. Automáticamente lo gestiona.
		const unsuscribe = auth.onAuthStateChanged(user => {
			if (user) {
				console.log('User autenticated', user);
				setCurrentUser(user);
			} else {
				console.log('No user');
				setCurrentUser(null);
			}
			setLoading(false); //Pase lo que pase el loading false, porque ya no está cargando
		});

		return () => unsuscribe(); //Esto es para limpiar el evento y que no se ejecute la función una y otra vez. Cuando se desmonta el componente se borra y se vuelve a crear.
	}, []);

	// Firebase automáticamente loguea automáticamente cuando se registra un usuario, por eso en la consola nos sale un usuario autenticado

	return (
		<AuthContext.Provider value={{ currentUser, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
