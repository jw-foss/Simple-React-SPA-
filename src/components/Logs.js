import React from 'react'
import getData from './getData'
import { Card } from 'antd'
import { Link } from 'react-router'
import { Pagination } from 'antd'
export default class Logs extends React.Component {
  constructor() {
    super()
    this.state = {
      total: null,
      data: [],
      current: 1
    }
  }
  //data fetching function
  onChange(page) {
    this.setState({
      current: page
    })

    getData('/articles', '?page=' + page, function (data) {
      this.setState({
        data: data.splice(0, data.length - 1)
      })
    }.bind(this))
  }

  componentWillMount() {
    getData('/articles', '?page=' + this.state.current, function (data) {
      this.setState({
        total: data.pop(),
        data: data.splice(0, data.length - 1)
      })
    }.bind(this))
  }

  render() {
    //render markdown
    function createMarkUp(data) {
      return { __html: data.content }
    }
    let { data, total, current } = this.state
    return (
      <div style={{
        width: '80%',
        margin: '0 auto'
      }}>
        {data.map((v, i) => {
          return (
            <Card title={<Link to={'logs/' + v.code}>{v.title}</Link>}
              extra={v.author}
              style={{
                width: 500,
                margin: '15px auto',
                height: '180'
              }}
              key={i}>
              <p dangerouslySetInnerHTML={createMarkUp(v)}></p>
            </Card>
          )
        })}
        <Pagination
          total={total}
          onChange={this.onChange.bind(this)}
          current={current} />
      </div>
    );
  }
}


