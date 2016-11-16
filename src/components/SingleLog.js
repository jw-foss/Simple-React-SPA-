import React from 'react'
import getData from './getData'
import { Link } from 'react-router'
import marked from 'marked'
import { Row, Col } from 'antd'
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
		//catch data
		const { data } = this.state
		const len = data.length
		let curIndex, log;
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
		function createMarkUp(log) {
			let rawMarked = marked(log.content, {
				sanitize: true
			});
			return { __html: rawMarked }
		}
		//while data cathed
		if (data.toString() !== '') {
			for (let i = 0; i < len; i++) {
				if ((data[i].code).toString() === this.props.params.id) {
					curIndex = i;
				}
			}
			log = data[curIndex] || {};
			if (curIndex) {
				//case: not last page
				if (curIndex + 1 < len) {
					return (
						<Row>
							<Col span={14} offset={4}>
								<div className="article-wrapper">
									<h2 style={titleStyle}>{log.title}</h2>
									<p style={{ margin: '20px 0' }}>
										<span style={authorClass}>{log.author}</span>
										<span style={dateClass}>{log.date}</span>
									</p>
									<p dangerouslySetInnerHTML={createMarkUp(log)}></p>
									<ul className="pager">
										<li className="previous">
											<Link to={'logs/' + data[curIndex - 1].code}> Newer</Link>
										</li>
										<li className="next">
											<Link to={'logs/' + data[curIndex + 1].code}> Older</Link>
										</li>
									</ul>
								</div>
							</Col>
						</Row>
					)
				} else {
					//case: last page
					return (
						<Row>
							<Col span={14} offset={4}>
								<div className="article-wrapper">
									<h2 style={titleStyle}>{log.title}</h2>
									<p style={{ margin: '20px 0' }}>
										<span style={authorClass}>{log.author}</span>
										<span style={dateClass}>{log.date}</span>
									</p>
									<p dangerouslySetInnerHTML={createMarkUp(log)}></p>
									<ul className="pager">
										<li className="previous">
											<Link to={'logs/' + data[curIndex - 1].code}> Newer</Link>
										</li>
									</ul>
								</div>
							</Col>
						</Row>
					)
				}
			} else {
				//case: first page
				return (
					<Row>
						<Col span={14} offset={4}>
							<div className="article-wrapper">
								<h2 style={titleStyle}>{log.title}</h2>
								<p style={{ margin: '20px 0' }}>
									<span style={authorClass}>{log.author}</span>
									<span style={dateClass}>{log.date}</span>
								</p>
								<p dangerouslySetInnerHTML={createMarkUp(log)}></p>
								<ul className="pager">
									<li className="next">
										<Link to={'logs/' + data[curIndex + 1].code}> Older</Link>
									</li>
								</ul>
							</div>
						</Col>
					</Row>
				)
			}
		} else {
			//case: data not fetched
			return (
				<div>
					Data not catched
				</div>
			)
		}
	}
}

