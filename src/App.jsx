import LoginWithPopUp from './components/login-popup/LoginWithPopUp';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import Users from './components/users/Users';
import { AuthProvider } from './providers/Auth.provider';

const App = () => {
	return (
		<>
			<h1>Firebase</h1>
			{/*
			<AuthProvider>
				<Register />
				<Login />
				<Logout />
				<LoginWithPopUp />
				
				---LO COMENTAMOS PORQUE ES LA 1ª PARTE DE LA CLASE(LOGIN)---
			</AuthProvider>
			*/}
			<Users />
		</>
	);
};

export default App;
