import React from 'react';
import articles from '../sources/articles';

export default class SingleArticle extends React.Component{
	render () {
		const a = articles.filter( a => a.code === this.props.params.params);
		
		return (
			<div className="col-md-6">
			<h2>{a[0].title}</h2>
			<p>{a[0].content}</p>
			</div>
			)
	}
}