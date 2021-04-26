import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Brands from '../pages/Brands';
import Dashboard from '../pages/Dashboard';
import NewBrand from '../pages/NewBrand/NewBrand';
import NewGroup from '../pages/NewGroup/NewGroup';
import Products from '../pages/Products';
import Groups from '../pages/Groups';
import NewProduct from '../pages/NewProduct/NewProduct';
import EditProduct from '../pages/EditProduct';

export default function Router() {
	let { path } = useRouteMatch();

	return (
		<Switch>
			<Route exact path={`${path}`} component={Dashboard} />
			<Route exact path={`${path}/brands`} component={Brands} />
			<Route exact path={`${path}/groups`} component={Groups} />
			<Route exact path={`${path}/products`} component={Products} />

			<Route
				exact
				path={`${path}/products/new-product`}
				component={NewProduct}
			/>
			<Route
				path={`${path}/products/edit/:productId`}
				component={EditProduct}
			/>
			<Route path={`${path}/brands/new-brand`} component={NewBrand} />
			<Route path={`${path}/groups/new-group`} component={NewGroup} />
		</Switch>
	);
}
