import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';

const Login = () => {
	const { loading, currentUser } = useContext(AuthContext);
	const [loginData, setLoginData] = useState({});

	// Si no pusiéramos el loading y sólo el currentUser, a nivel de experiencia de usuario sería raro porque se mostraría el form por un instante y luego desaparecería al llegar los datos del usuario a currentUser. Jugar con el loading es una buena práctica para ocultar cosas ya que siempre parte de true, y cuando tenemos las respuestas solemos cambiarlo a false.
	if (loading || currentUser) return;

	return (
		<>
			<h2>Login</h2>
			<form onSubmit={event => loginUser(event, loginData)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						id='email'
						onInput={event =>
							setLoginData({ ...loginData, email: event.target.value })
						}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='text'
						name='password'
						id='password'
						onInput={event =>
							setLoginData({ ...loginData, password: event.target.value })
						}
					/>
				</div>
				<button disabled={!loginData.email || !loginData.password}>
					Login
				</button>
			</form>
		</>
	);
};

const loginUser = async (event, loginData) => {
	event.preventDefault();
	const { email, password } = loginData;

	try {
		//función que nos proporciona firebase también
		await signInWithEmailAndPassword(auth, email, password);
		console.log('User Logged');
		event.target.reset();
	} catch (error) {
		console.log('Error logging user:', error.code, error.message);
	}
};

export default Login;
