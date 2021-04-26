import React, { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Router from './router/Router';
import './styles.scss';

export default function Index() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Sidebar open={open} setOpen={setOpen} />
			<main className='main-panel'>
				<Header setSidebarOpen={() => setOpen(!open)} />
				<div className='admin-container pt-3'>
					<Router />
				</div>
			</main>
		</>
	);
}
