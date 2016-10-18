import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Archives from './components/Archives';
import Features from './components/Features';
import Settings from './components/Settings';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './styles/App.css';
import SingleArticle from './components/SingleArticle';
// Render the main component into the dom
const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
	  <Route path="/" component={App}>
	  <IndexRoute component={Features}></IndexRoute>
	  <Route path="features" component={Features}></Route>
	  <Route path="archives" component={Archives}></Route>
	  <Route path="settings" component={Settings}></Route>
	  <Router path="archives/:params" component={SingleArticle}></Router>
	  </Route>
	</Router>
	, app);
