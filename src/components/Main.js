import React from 'react'
import Navbar from './solid/navbar'
import Loading from './Loading'

class Main extends React.Component {
	constructor() {
		super()
		this.state = {
			Loading: true
		}
	}
	componentDidMount() {
		const { Loading } = this.state
		setTimeout(function () {
			this.setState({ Loading: !Loading })
		}.bind(this), 2000)
	}

	render() {
		if (this.state.Loading) {
			return <Loading />
		}
		else {
			return (
				<div>
					<Navbar location={this.props.location} />
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-12">
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

Main.defaultProps = {
};

export default Main;
