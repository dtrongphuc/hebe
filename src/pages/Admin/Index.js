import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Brands from './pages/Brands';
import Dashboard from './pages/Dashboard';
import NewBrand from './pages/NewBrand/NewBrand';
import NewProduct from './pages/NewProduct/NewProduct';
import NewGroup from './pages/NewGroup/NewGroup';
import Products from './pages/Products';
import Groups from './pages/Groups';
import './styles.scss';

export default function Index() {
	const [open, setOpen] = useState(false);
	let { path } = useRouteMatch();

	return (
		<>
			<Sidebar open={open} setOpen={setOpen} />
			<main className='main-panel'>
				<Header setSidebarOpen={() => setOpen(!open)} />
				<div className='admin-container pt-3'>
					<Switch>
						<Route exact path={`${path}`} component={Dashboard} />
						<Route exact path={`${path}/brands`} component={Brands} />
						<Route exact path={`${path}/groups`} component={Groups} />
						<Route exact path={`${path}/products`} component={Products} />
						<Route path={`${path}/brands/new-brand`} component={NewBrand} />
						<Route path={`${path}/groups/new-group`} component={NewGroup} />
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
