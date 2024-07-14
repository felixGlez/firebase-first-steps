import { addDoc } from 'firebase/firestore';
import { usersCollectionReference } from '../../config/firebase.config';

const CreateUser = () => {
	return <button onClick={createUser}>Create user</button>;
};

const createUser = async () => {
	const newUser = {
		name: 'Carol',
		email: 'carol@gmail.com',
		active: true
	};
	console.log(newUser);

	try {
		//Necesita 2 parámetros: la referencia de dónde lo vamos a añadir y los datos que vamos a añadir
		await addDoc(usersCollectionReference, { ...newUser });
	} catch (error) {
		console.error(error);
	}
};

export default CreateUser;
