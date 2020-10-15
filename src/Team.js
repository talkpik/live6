import React, {Component} from 'react';

class Team extends Component {
render(){
  return (
    <div id="about" className="basic-4">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="mustard">The Founding Team</h2>
	  				<p className="p-heading p-large">We look forward to your presence!</p>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">
                    
                    <div className="team-member">
                        <div className="image-wrapper">
                            <img className="img-fluid" src="images/afshan.jpg" alt="alternative"/>
                        </div> 
                        <p className="p-large"><strong>Afshan Khatoon</strong></p>
                        <p className="job-title"></p>
                        <span className="social-icons">
                            <span className="fa-stack">
                                <a href="https://www.linkedin.com/in/afshan-khatoon/">
                                    <i className="fas fa-circle fa-stack-2x facebook"></i>
                                    <i className="fab fa-linkedin-in fa-stack-1x"></i>
                                </a>
                            </span>
                        </span> 
                    </div> 
                    <div className="team-member">
                        <div className="image-wrapper">
                            <img className="img-fluid" src="images/abrar.jpeg" alt="alternative"/>
                        </div> 
                        <p className="p-large"><strong>Abrar Khan</strong></p>
                        <p className="job-title"></p>
                        <span className="social-icons">
                            <span className="fa-stack">
                                <a href="https://www.linkedin.com/in/abrarmkhan/">
                                    <i className="fas fa-circle fa-stack-2x facebook"></i>
                                    <i className="fab fa-linkedin-in fa-stack-1x"></i>
                                </a>
                            </span>
                        </span> 
                    </div> 
                    <div className="team-member">
                        <div className="image-wrapper">
                            <img className="img-fluid" src="images/shifa.png" alt="alternative"/>
                        </div> 
                        <p className="p-large"><strong>Shifa Lateef</strong></p>
                        <p className="job-title"></p>
                        <span className="social-icons">
                            <span className="fa-stack">
                                <a href="https://www.linkedin.com/in/shifa-lateef-72372319b/">
                                    <i className="fas fa-circle fa-stack-2x facebook"></i>
                                    <i className="fab fa-linkedin-in fa-stack-1x"></i>
                                </a>
                            </span>
                        </span> 
                    </div> 
                    
	  				
                </div> 
            </div> 
        </div> 
    </div> 
    
  );
}
}

export default Team;
