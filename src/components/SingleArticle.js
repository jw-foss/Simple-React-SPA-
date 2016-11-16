import React from 'react';
//import JSON sources from articles
import articles from '../sources/articles'
import { Row, Col } from 'antd'
import { Link } from 'react-router'

export default class SingleArticle extends React.Component {
	render() {
		let curIndex;
				for (let i = 0; i < articles.length; i++) {
						if (articles[i].code == this.props.params.params) {
								curIndex = i;
						}
				}
				//blog object contains the infos
				const a = articles[curIndex];
		const dateClass = {
			float: 'right',
			color: 'lightblue'
		},
			authorClass = {
				color: 'red'
			},
			titleStyle = {
				margin: '10px',
				textAlign: 'center'
			}
		//inser raw html MarkUps
		function createMarkUp() {
			return { __html: a.content }
		}
		if (curIndex) {
			return (
				<Row>
					<Col span={14} offset={4}>
						<div className="article-wrapper">
							<h2 style={titleStyle}>{a.title}</h2>
							<p style={{ margin: '20px 0' }}>
								<span style={authorClass}>{a.author}</span>
								<span style={dateClass}>{a.date}</span>
							</p>
							<p dangerouslySetInnerHTML={createMarkUp()}></p>
							<ul className="pager">
								<li className="previous">
									<Link to={'archives/' + articles[curIndex - 1].code}> Older</Link>
								</li>
								<li className="next">
									<Link to={'archives/' + articles[curIndex + 1].code}> Newer</Link>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			)
		} else {
			return (
				<Row>
					<Col span={14} offset={4}>
						<div className="article-wrapper">
							<h2 style={titleStyle}>{a.title}</h2>
							<p style={{ margin: '20px 0' }}>
								<span style={authorClass}>{a.author}</span>
								<span style={dateClass}>{a.date}</span>
							</p>
							<p dangerouslySetInnerHTML={createMarkUp()}></p>
							<ul className="pager">
								<li className="next">
									<Link to={'archives/' + articles[curIndex + 1].code}> Newer</Link>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			)
		}
	}
}