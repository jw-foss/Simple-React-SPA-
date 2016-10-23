import React from 'react';

export default class Footbar extends React.Component {

	render() {
		const fatherContainer = {
			position: 'fixed',
			width: '100%',
			height: '50px',
			bottom: '0',
			textAlign: 'center',
			backgroundColor: 'black',
			borderRadius: '3px',
			boxSizing: 'border-box',
			border: '1px solid #1995dc',
			borderTop: 'none',
			color: 'white'
		};
		return (
			<div style={fatherContainer}>
				<hr />
				<div>
					<div>
						<span className="glyphicon glyphicon-copyright-mark">Copyright</span>&nbsp;&nbsp;
					   <span className="glyphicon glyphicon-envelope">Contact</span>&nbsp;&nbsp;
					   <span className="glyphicon glyphicon-info-sign">Infos</span>
					</div>
				</div>
			</div>
		)
	}
}