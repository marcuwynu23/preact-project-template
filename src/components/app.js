import { h } from 'preact';
import { Router } from 'preact-router';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header';
// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import About from '../routes/about';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Profile path="/profile/" user="me"/>
			<Profile path="/profile/:user" />
			<About path="/about"/>
		</Router>
	</div>
)

export default App;
