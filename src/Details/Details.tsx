import React from 'react';
import styles from './Details.module.scss';
import { UserList } from '../App';

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
	detailsUser: UserData | null;
}

const Details = ({ detailsUser }: Props) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.infoAboutUser}>
				<span>
					{detailsUser?.name.first} {detailsUser?.name.last}
				</span>

				<span> {detailsUser?.gender} </span>
				<span>{detailsUser?.email}</span>
				<span> {detailsUser?.cell}</span>
			</div>
		</div>
	);
};

export default Details;
