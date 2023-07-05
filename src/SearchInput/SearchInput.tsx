import { useState } from 'react';
import styles from './SearchInput.module.scss';

interface Props {
	setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ setQuery }: Props) => {
	return (
		<div className={styles.filter}>
			<input
				type='text'
				placeholder='search'
				className={styles.search}
				onChange={(el) => setQuery(el.target.value)}
			/>
		</div>
	);
};

export default SearchInput;
