import React, {Component} from 'react';
import Dialog from './Dialog';

class Events extends Component {
state={isOpen:false}
render(){
  return (
    <div id="event" className="cards-2">
        <div className="event-container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="mustard">Events</h2>
	  				<p className="p-heading p-large">We look forward to your presence!</p>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Software Developer</div>
	  						<div className="card-subtitle">Just to see what can be achieved</div>
                            <hr className="cell-divide-hr"></hr>
                            <div className="price">
                                <span className="value">Sep 15, 2020</span>
                                <div className="frequency">3:00-4:00PM</div>
                            </div>
                            <hr className="cell-divide-hr"></hr>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">Ex-Amazon employee</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">Certified Java Developer</div>
                                </li>
                            </ul>
                            <button className="btn-solid-reg popup-with-move-anim" onClick={(e) => this.setState({isOpen:true})} >REGISTER</button>
	  							<Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen:false})}>
	  								<iframe title="event_091520" src="https://docs.google.com/forms/d/e/1FAIpQLScWVCPwEphQrscUthOoeyypX3rmv_lXyINmJLUtu8rC2jrWFQ/viewform?	embedded=true" width="640" height="400" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
	  							</Dialog>
							
                        </div>
                    </div> 
                	<div className="card">
                        <div className="card-body">
                            <div className="card-title">Software Developer</div>
	  						<div className="card-subtitle">Just to see what can be achieved</div>
                            <hr className="cell-divide-hr"></hr>
                            <div className="price">
                                <span className="value">Sep 15, 2020</span>
                                <div className="frequency">3:00-4:00PM</div>
                            </div>
                            <hr className="cell-divide-hr"></hr>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">Ex-Amazon employee</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">Certified Java Developer</div>
                                </li>
                            </ul>
                            <button className="btn-solid-reg popup-with-move-anim" onClick={(e) => this.setState({isOpen:true})} >REGISTER</button>
	  							<Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen:false})}>
	  								<iframe title="event_091520" src="https://docs.google.com/forms/d/e/1FAIpQLScWVCPwEphQrscUthOoeyypX3rmv_lXyINmJLUtu8rC2jrWFQ/viewform?	embedded=true" width="640" height="400" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
	  							</Dialog>
							
                        </div>
                    </div>
					<div className="card">
                        <div className="card-body">
                            <div className="card-title">Software Developer</div>
	  						<div className="card-subtitle">Just to see what can be achieved</div>
                            <hr className="cell-divide-hr"></hr>
                            <div className="price">
                                <span className="value">Sep 15, 2020</span>
                                <div className="frequency">3:00-4:00PM</div>
                            </div>
                            <hr className="cell-divide-hr"></hr>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">Ex-Amazon employee</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">Certified Java Developer</div>
                                </li>
                            </ul>
                            <button className="btn-solid-reg popup-with-move-anim" onClick={(e) => this.setState({isOpen:true})} >REGISTER</button>
	  							<Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen:false})}>
	  								<iframe title="event_091520" src="https://docs.google.com/forms/d/e/1FAIpQLScWVCPwEphQrscUthOoeyypX3rmv_lXyINmJLUtu8rC2jrWFQ/viewform?	embedded=true" width="640" height="400" frameborder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
	  							</Dialog>
							
                        </div>
                    </div>

                </div> 
            </div> 
        </div> 
    </div> 
    


  );
}
}

export default Events;
