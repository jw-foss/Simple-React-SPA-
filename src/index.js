import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Archives from './components/Archives';
import Logs from './components/Logs';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './styles/App.css';
import SingleArticle from './components/SingleArticle';
import Resume from './components/Resume';
import SingleLog from './components/SingleLog';
// Render the main component into the dom
const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Logs}></IndexRoute>
			<Route path="logs" component={Logs}></Route>
			<Route path="archives" component={Archives}></Route>
			<Route path="resume" component={Resume}></Route>
			<Route path="archives/:params" component={SingleArticle}></Route>
			<Route path="logs/:id" components={SingleLog}></Route>
		</Route>
	</Router>
	, app);
