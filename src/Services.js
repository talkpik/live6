import React, {Component} from 'react';

class Services extends Component {
render(){
  return (
	  <div>
      	<div id="services" className="cards-1">
        	<div className="container">
            	<div className="row">
                	<div className="col-lg-12">
                    	<h2 className="mustard">Webinar categories</h2>
                    	<p className="p-heading p-large">Our speakers touch on the following categories</p>
                	</div> 
            	</div> 
            	<div className="row">
                	<div className="col-lg-12">
                    	<div className="card">
                        	<img className="card-image" src="images/pic6.jpg" alt="alternative"/>
                        	<div className="card-body">
                            	<h4 className="card-title">Education</h4>
                            	<p>Listen & ask questions to current and past students who can give you the ins and outs about the college or university</p>
                        	</div>
                    	</div>
	                	<div className="card">
                        	<img className="card-image" src="images/pic9.jpg" alt="alternative"/>
                        	<div className="card-body">
                            	<h4 className="card-title">Profession</h4>
                            	<p>What does a day in the life of a certain profession look like? How do you get those jobs? And much more</p>
                        	</div>
                    	</div>
	                	<div className="card">
                        	<img className="card-image" src="images/pic7.jpg" alt="alternative"/>
                        	<div className="card-body">
                            	<h4 className="card-title">Industry</h4>
                            	<p>Find out everything you need to know about an industry </p>
	  							<br></br>
                        	</div>
                    	</div>
	  				</div>
            	</div> 
        	</div> 
    	</div> 
  </div>

	  
  );
}
}

export default Services;
