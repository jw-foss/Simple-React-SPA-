import React from 'react';
import getData from './getData';
import { Link } from 'react-router';
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
		function createMarkUp() {
			return { __html: log.content }
		}
		if(data.toString() !== '') {

			for (let i = 0; i < len; i++) {
				if ((data[i].code).toString() === this.props.params.id) {
					curIndex = i;
					console.log('curIndex: ', curIndex)
				}
			}
			log = data[curIndex] || {};
			console.log('log: ', log)
			if (curIndex) {
				if (curIndex + 1 < len) {
					return (
						<div className="col-md-10">
							<h2 style={titleStyle}>{log.title}</h2>
							<span style={authorClass}>{log.author}</span>
							<span style={dateClass}>{log.date}</span>
							<p dangerouslySetInnerHTML={createMarkUp()}></p>
							<ul className="pager">
								<li className="previous">
									<Link to={'logs/' + data[curIndex - 1].code}>&larr; Newer</Link>
								</li>
								<li className="next">
									<Link to={'logs/' + data[curIndex + 1].code}>Older &rarr;</Link>
								</li>
							</ul>
						</div>
					)
				} else {
					return (
						<div className="col-md-10">
							<h2 style={titleStyle}>{log.title}</h2>
							<span style={authorClass}>{log.author}</span>
							<span style={dateClass}>{log.date}</span>
							<p dangerouslySetInnerHTML={createMarkUp()}></p>
							<ul className="pager">
								<li className="previous">
									<Link to={'logs/' + data[curIndex - 1].code}>&larr; Newer</Link>
								</li>
							</ul>
						</div>
					)
				}
			} else {
				return (
					<div className="col-md-10">
						<h2 style={titleStyle}>{log.title}</h2>
						<span style={authorClass}>{log.author}</span>
						<span style={dateClass}>{log.date}</span>
						<p dangerouslySetInnerHTML={createMarkUp()}></p>
						<ul className="pager">
							<li className="next">
								<Link to={'logs/' + data[curIndex + 1].code}>Older &rarr;</Link>
							</li>
						</ul>
					</div>
				)
			}
		} else {
			return (
				<div>
				  Data not catched
				</div>
			)
		}
	}
}

