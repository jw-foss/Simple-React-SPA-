import React from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd'
export default class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true
    }
  }
  handleClick() {

  }

  render() {

    return (
      <Menu mode="horizontal">
        <Menu.Item key="logs">
          <Icon type="file"/><Link to="Logs">Blog</Link>
        </Menu.Item>
        <Menu.Item key="archives">
          <Icon type="laptop"/><Link to="Archives">Build Journal</Link>
        </Menu.Item>
        <Menu.Item key="resume">
          <Icon type="user"/><Link to="Resume">About me</Link>
        </Menu.Item>
      </Menu>

    )
  }
}