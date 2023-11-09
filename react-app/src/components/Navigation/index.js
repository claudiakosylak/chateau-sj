import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import styles from "./Navigation.module.sass";

function Navigation({ isLoaded, onHomePress, onAboutPress, onFloorPlanPress, onContactPress }) {
	const sessionUser = useSelector(state => state.session.user);
	const history = useHistory();

	return (
		<div className={styles.header}>
			<h1>Chateau San Jose</h1>
			<div className={styles.right}>
				<p className={styles.phone}>(559) 555-5555</p>
				<ProfileButton
				onHomePress={onHomePress}
				onAboutPress={onAboutPress}
				onFloorPlanPress={onFloorPlanPress}
				onContactPress={onContactPress}
				/>
			</div>
		</div>
	);
}

export default Navigation;
