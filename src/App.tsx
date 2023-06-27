import React, { useState } from 'react';
import styles from './App.module.scss';
import SignIn from './Sign/SignIn';

export type UserList = {
	email: string;
	password: string;
	passwordConfirmation: string;
};

const App = () => {
	const [userList, setUserList] = useState<UserList[]>([]);

	return (
		<div>
			<SignIn userList={userList} />
		</div>
	);
};

export default App;
