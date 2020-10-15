import React, {Component} from 'react';

class Footer extends Component {

render(){
	

  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer-col">
                        <h4 className="mustard">About TalkPik</h4>
                        <p>TalkPik aims to help knowledge and advice flow smoothly from speakers to seekers</p>
                    </div>
                </div> 
                <div className="col-md-4">
                    <div className="footer-col middle">
                    </div>
                </div> 
                <div className="col-md-4">
                    <div className="footer-col last">
                        <h4 className="mustard">Social Media</h4>
                        <span className="fa-stack">
                            <a target="_blank" href="https://facebook.com/talkpik2020">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a target="_blank" href="https://twitter.com/talkpik2020">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a target="_blank" href="https://instagram.com/talkpik2020">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a target="_blank" href="https://www.linkedin.com/company/talkpik/?viewAsMember=true">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                    </div> 
                </div> 
            </div> 
        </div>
	  
	</div> 
  );
}
}

export default Footer;
