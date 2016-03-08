import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router'

import Homepage from './pages/home';
import Lobby from './pages/lobby';

export class App extends React.Component {
	render() {
		return (
			<div>
			  'Hello'
			  {this.props.children}
			</div>
		);
	}
}

console.log(App);
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} />
      <Route path="home" component={Homepage} />
      <Route path="lobby" component={Lobby} />
    </Route>
  </Router>
), document.querySelector("#app"));