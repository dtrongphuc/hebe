import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Home';
import Product from './pages/Product/Index';
import Collections from './pages/Collections/Collections';
import Contact from './pages/Contact/Index';
import Admin from './pages/Admin/Index';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/admin' component={Admin} />
				<Route exact path='/:path/products/:productPath' component={Product} />
				<Route path='/collections/:path' component={Collections} />
				<Route path='/contact' component={Contact} />
			</Switch>
		</Router>
	);
}

export default App;
