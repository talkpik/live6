import React, {Component} from 'react';
import Dialog from './Dialog';

class Contact extends Component {
state={isOpen:false}
render(){
  return (
    <div id="contact" className="form-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="mustard">Contact Information</h2>
                    <ul className="list-unstyled li-space-lg">
                        <li className="address">Don't hesitate to email or send us a contact form message</li>
                        <li><i className="fas fa-map-marker-alt"></i>Vancouver, BC, Canada</li>
                        <li><i className="fas fa-envelope"></i><a className="turquoise" href="mailto:talkpik2020@gmail.com">talkpik2020@gmail.com</a></li>
                    </ul>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-6">
                    <div className="map-responsive">
                        <iframe title="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166655.30827522842!2d-123.2639867747921!3d49.2576507715125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1597819772008!5m2!1sen!2sca" allowFullScreen></iframe>
	                </div>
                </div> 
                
	  
	  			<div className="col-lg-6">
	  				<button className="btn-solid-reg popup-with-move-anim" onClick={(e) => this.setState({isOpen:true})} >CONTACT US</button>
	  				<Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen:false})}>
	  					<iframe title="contactform" src="https://formfaca.de/sm/IkBKWBJTZ" width="640" height="600" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
	  				</Dialog>
					<br></br>
					<button className="btn-solid-reg popup-with-move-anim" onClick={(e) => this.setState({isOpen:true})} >FOR FUTURE EVENTS, SIGN UP</button>
	  				<Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen:false})}>
	  					<iframe title="contactform" src="https://formfaca.de/sm/amL5VB_O8" width="640" height="600" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
	  				</Dialog>
	  			</div> 

				
            </div> 
        </div> 
    </div> 
  );
}
}

export default Contact;
