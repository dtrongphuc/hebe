import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Index';
import Product from './pages/Product/Index';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/:path/products/:productId' component={Product} />
			</Switch>
		</Router>
	);
}

export default App;
