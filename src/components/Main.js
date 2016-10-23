import React from 'react';
import Navbar from './solid/navbar';


class AppComponent extends React.Component {
  render() {
    return (
      <div>
 		<Navbar location={this.props.location}/>
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

AppComponent.defaultProps = {
};

export default AppComponent;
