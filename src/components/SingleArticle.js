import React from 'react';
import articles from '../sources/articles'

export default class SingleArticle extends React.Component {
	render() {
		const a = articles.filter(a => a.code === this.props.params.params)[0];
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
		
		return (
			<div className="col-md-10">
				<h2 style={titleStyle}>{a.title}</h2>
				<span style = {authorClass}>{a.author}</span>  <span style={dateClass}>{a.date}</span>
				<p>{a.content}</p>
			</div>
		)
	}
}