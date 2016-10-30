import React from 'react';
import getData from './getData';
export default class SingleLog extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {

    getData(function (data) {

      this.setState({
        data: data
      })
    }.bind(this))
  }
  //data fetching function
  render() {

    const a = this.state.data.filter(val => val.code == this.props.params.id);
    console.log('a:', a);
    const log = a.pop() || {};
    console.log('log:', log, a);
    const dateClass = {
      float: 'right',
      color: 'lightblue'
    },
      authorClass = {
        color: 'red'
      },
      titleStyle = {
        textAlign: 'center'
      }
    //inser raw html MarkUps
    function createMarkUp() {
      return { __html: log.content }
    }
   
      return (
        <div className="col-md-10">
          <h2 style={titleStyle}>{log.title}</h2>
          <span style={authorClass}>{log.author}</span>  <span style={dateClass}>{log.date}</span>
          <p dangerouslySetInnerHTML={createMarkUp()}></p>
        </div>
      )
  }
}