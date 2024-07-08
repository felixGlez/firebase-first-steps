import { useState } from 'react';

const Login = () => {
	const [loginData, setLoginData] = useState({});

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

const loginUser = (event, loginData) => {
	event.preventDefault();
	const { email, password } = loginData;
};

export default Login;
