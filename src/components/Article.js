import React from 'react';
import { Link } from 'react-router';

export default class Article extends React.Component{
   render () {
 
   	return (
   		<div>
   		  <section className="article">
            <h2> <Link to={'archives/' + this.props.code}> {this.props.title}</Link></h2>
            <p>{this.props.context}</p>
          </section>
   		</div>
   		)
   }
}