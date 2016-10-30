import React from 'react'
import { Link } from 'react-router'

export default class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true
    }
  }
  handleClick() {

    const collapsed = !this.state.collapsed
    this.setState({ collapsed })

  }

  render() {
    const { collapsed } = this.state
    const { location } = this.props
    const featuresClass = location.pathname === '/' ? 'active' : ''
    const archivesClass = location.pathname.match(/^\/Archives/) ? 'active' : ''

    const resumeClass = location.pathname.match(/^\/Resume/) ? 'active' : ''
    const navClass = collapsed ? 'collapse' : ''
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" onClick={this.handleClick.bind(this)}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="container-fluid">
          <div className={'navbar-collapse ' + navClass} >
            <ul className="nav navbar-nav">
              <li className={featuresClass} onClick={this.handleClick.bind(this)}><Link to="Logs">Blogs</Link></li>
              <li className={archivesClass} onClick={this.handleClick.bind(this)}><Link to="Archives">Build Journal</Link></li>
              <li className={resumeClass} onClick={this.handleClick.bind(this)}><Link to="Resume">About Me</Link></li>
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}