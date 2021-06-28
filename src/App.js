import React, { useState, useEffect } from 'react';
import './App.css';
import { css } from '@emotion/react';
import PropagateLoader from 'react-spinners/PropagateLoader';

import Navbar from './components/Navbar';

function App() {
	const [loading, setLoading] = useState(false);
	const override = css`
		display: block;
		border-color: red;
		margin-top: 20%;
	`;

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	}, []);

	return (
		<div className="App">
			{loading ? (
				<PropagateLoader
					loading={loading}
					color={'#3d2514'}
					css={override}
					size={40}
				/>
			) : (
				<>
					<Navbar />
				</>
			)}
		</div>
	);
}

export default App;
