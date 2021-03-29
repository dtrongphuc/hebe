import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
import NewProduct from './pages/NewProduct';
import Products from './pages/Products';
import './styles.scss';

export default function Index() {
	let { path } = useRouteMatch();
	return (
		<>
			<Sidebar />
			<main className='main-panel'>
				<Header />
				<div className='admin-container'>
					<Switch>
						<Route exact path={`${path}`} component={Dashboard} />
						<Route exact path={`${path}/categories`} component={Categories} />
						<Route exact path={`${path}/products`} component={Products} />
						<Route
							path={`${path}/products/new-product`}
							component={NewProduct}
						/>
					</Switch>
				</div>
			</main>
		</>
	);
}
