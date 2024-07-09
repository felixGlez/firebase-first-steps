import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { usersCollectionReference } from '../../config/firebase.config';

const Users = () => {
	const [users, setUsers] = useState();

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);

	if (users.length === 0) return <h2>Loading users...</h2>;

	return (
		<>
			<h2>USERS</h2>
			{users.map(user => (
				<div>
					<p>{user.name}</p>
					<p>{user.email}</p>
					<p>{user.active ? 'Active' : 'Inactive'}</p>
				</div>
			))}
		</>
	);
};

const getAllUsers = async setUsers => {
	//El parámetro que necesita es saber de qué colección se tiene que traer los datos
	const { docs } = await getDocs(usersCollectionReference); //Aquí tenemos la bbdd encriptada, pero firebase nos da un método para entender lo que pone ahi dentro:
	const users = docs.map(doc => doc.data());
	setUsers(users);
};

export default Users;
