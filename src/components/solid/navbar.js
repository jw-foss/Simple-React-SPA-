import React from 'react';
import { Link } from 'react-router';
export default class Navbar extends React.Component {
	render () {
		return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
          <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><Link to="Features">Features</Link></li>
                <li><Link to="Archives">Archives</Link></li>
                <li><Link to="Settings">Settings</Link></li>
              </ul>
          </div>
        </div>
      </nav>

			)
	}
}