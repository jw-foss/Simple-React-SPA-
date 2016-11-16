import React from 'react'
import getData from './getData'
import { Card } from 'antd'
import { Link } from 'react-router'
import marked from 'marked'
export default class Logs extends React.Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
  }
  //data fetching function

  componentWillMount() {
    getData(function (data) {
      this.setState({
        data: data
      })
    }.bind(this))
  }
  render() {
    //render markdown 
    function createMarkUp(data) {
      let rawMarked = marked(data.content, {
        sanitize: true
      });
      return { __html: rawMarked }
    }
    const data = this.state.data
    return (
      <div>
        {data.map((v, i) => {
          return (
            <Card title={<Link to={'logs/' + v.code}>{v.title}</Link>}
              extra={v.author}
              style={{
                width: 600,
                margin: '15px auto',
                height: '180'
              }}
              key={i}>
              <p dangerouslySetInnerHTML={createMarkUp(v)}></p>
            </Card>
          )
        })}
      </div>
    );
  }
}


