import { useEffect, useState } from 'react';
import styles from './UsersLogged.module.scss';
import axios from 'axios';
import SearchInput from '../SearchInput/SearchInput';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
interface UserData {
	email: string;
	gender: string;
	cell: number;
	name: {
		title: string;
		first: string;
		last: string;
	};
}

interface Props {
	setdetailsUser: React.Dispatch<React.SetStateAction<UserData | null>>;
}

const UsersLogged = ({ setdetailsUser }: Props) => {
	useEffect(() => {
		info();
	}, []);
	const [query, setQuery] = useState('');
	const [loggedUser, setLoggedUser] = useState<UserData[]>([]);
	const info = () => {
		axios
			.get('https://randomuser.me/api/?results=20')
			.then((res) => {
				console.log(res.data.results);
				setLoggedUser(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	};



	return (
		<section className={styles.loggedUserFilter}>
			<div className={styles.boxSearch}>
				<SearchInput setQuery={setQuery} />

				{loggedUser
					? loggedUser
							.filter(
								(el) =>
									el.name.first.toLowerCase().includes(query.toLowerCase()) ||
									el.name.last.toLowerCase().includes(query.toLowerCase())
							)

							.map((el, index) => (
								<div key={index} className={styles.placeName}>
									<Link to='/details'>
										<button
											onClick={() => setdetailsUser(el)}
											className={styles.buttonDetails}
										>
											{' '}
											Details
										</button>
									</Link>{' '}
									{el.name.first} {el.name.last}{' '}
								</div>
							))
					: null}
			</div>
		</section>
	);
};

export default UsersLogged;

// useEffect
