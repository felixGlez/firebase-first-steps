import { getDocs, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { usersCollectionReference } from '../../config/firebase.config';

const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const subscribeToData = onSnapshot(usersCollectionReference, snapshot => {
			getAllUsers(snapshot, setUsers);
		});

		return () => subscribeToData();
	}, []);

	console.log(users);
	if (users.length === 0) return <h2>Loading users...</h2>;

	return (
		<>
			<h2>USERS</h2>
			{users.map(user => (
				<div key={user.id}>
					<p>{user.name}</p>
					<p>{user.email}</p>
					<p>{user.active ? 'Active' : 'Inactive'}</p>
				</div>
			))}
		</>
	);
};

const getAllUsers = async (snapshot, setUsers) => {
	const { docs } = snapshot; //Aquí tenemos la bbdd encriptada, pero firebase nos da un método para entender lo que pone ahi dentro:
	const users = docs.map(doc => ({ id: doc.id, ...doc.data() }));
	//el id está en doc, por eso tenemos que juntarlo en un objeto de esta forma. Con el spread operator dejamos el resto como está.
	setUsers(users);
};

export default Users;
