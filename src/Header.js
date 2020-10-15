import React, {Component} from 'react';
import Typical from 'react-typical';

class Header extends Component {
render(){
  return (
    <header id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h3><span>Want to know more about {' '}</span></h3>
	  						<h1><Typical className="mustard"
	  								loop={Infinity}
        							wrapper="b"	
	  								steps={[
	  									'an institution?',1500,
	  									'a profession?',1500,
	  									'an industry?',1500
	  								]}
	  							/></h1>
	  						<br></br>
	  						<p></p>
	  						<span className="mustard" style={{fontSize:"70px"}}>Talk</span>						
	  						<span className="turquoise" style={{fontSize:"70px"}}>Pik</span>
	  						<span style={{fontSize:"1.75rem", fontWeight:"700", color:"#393939"}}>{' '}can help!</span>
	  						<br></br>
	  						<p></p>
	                    </div> 
                    </div> 
	  				<div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="images/pic5.png" alt="alternative"/>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </header>
  );
}
}

export default Header;