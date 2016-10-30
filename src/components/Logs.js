import React from 'react';
import Log from './Log';
import getData from './getData';

export default class Logs extends React.Component {
  constructor() {
    super()

   this.state = {
     data: []
   }
  }
  //data fetching function
  
componentWillMount() {
  getData(function(data) {
    this.setState({
      data: data
    })
  }.bind(this))
}
  render() {
    const data = this.state.data
    return (
      <div>
        {data.map((v, i) => {
          return (
            <Log
              key={i}
              code={v.code}
              title={v.title}
              author={v.author}
              date={v.date}
              content={v.content} />
          )
        })}
      </div>
    );
  }
}


