import React from 'react';
import Navbar from './solid/navbar';
import Footbar from './solid/footbar';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
 		<Navbar />
 		<div className="container-fluid">
 		  <div className="row">
 		  	<div className="col-lg-12">
 		  	{this.props.children}
 		  	</div>
 		  </div>
 		</div>
 		<Footbar />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
