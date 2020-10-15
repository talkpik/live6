import React, {Component} from 'react';


class Seeker extends Component {
state={isOpen:false}
render(){
  return (
	  	<div id="seeker" className="basic-2">
        	<div className="container">
            	<div className="row">
                	<div className="col-lg-6">
                    	<div className="text-container">
                        	<h2 className="mustard">Seeker</h2>
                        	<ul className="list-unstyled li-space-lg">
                            	<li className="media">
                                	<i className="fas fa-check"></i>
                                	<div className="media-body">Choose what you would like to hear about</div>
                            	</li>
                            	<li className="media">
                                	<i className="fas fa-check"></i>
                                	<div className="media-body">Listen to real people in real positions</div>
                            	</li>
                            	<li className="media">
                                	<i className="fas fa-check"></i>
                                	<div className="media-body">Live discussion allows you to ask questions</div>
                            	</li>
                        	</ul>
							<iframe title="requestform" src="https://formfaca.de/sm/gpfL0JPSh" width="400" height="1000" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
								
								

						</div> 
                	</div> 
                	<div className="col-lg-6">
                    	<div className="image-container">
                        	<img className="img-fluid" src="images/pic3.png" alt="alternative"/>
                    	</div> 
                	</div> 
            	</div> 
        	</div> 
    	</div> 

	  
  );
}
}

export default Seeker;
