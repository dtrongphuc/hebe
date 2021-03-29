import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Index';
import Product from './pages/Product/Index';
import MyBoyfriendsBack from './pages/MyBoyfriendsBack/Index';
import StaffEdit from './pages/StaffEdit/Index';
import Contact from './pages/Contact/Index';
import Admin from './pages/Admin/Index';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/admin' component={Admin} />
				<Route exact path='/:path/products/:productId' component={Product} />
				<Route
					path='/collections/my-boyfriends-back'
					component={MyBoyfriendsBack}
				/>
				<Route path='/collections/staff-edit' component={StaffEdit} />
				<Route path='/contact' component={Contact} />
			</Switch>
		</Router>
	);
}

export default App;
